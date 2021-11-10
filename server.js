const stripe = require("stripe")(
  "sk_test_51JtYZ9L87H3qnVTAnM2zyIp9AlDvppEKWKN1FOh4AT5j73Y07JhB25phfmI8x8QF0kxpFcunNEqyMQ3K07wlInRz00sZjKN1dQ"
);
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(
  cors({
    origin: "https://sneaker-site-uk.herokuapp.com",
  })
);

const storeItems = new Map([
  [1, { priceInCents: 12500, name: "Fall Limited Edition Sneaker's" }],
]);

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map((item) => {
        const storeItem = storeItems.get(item.id);
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        };
      }),
      success_url: `https://sneaker-site-uk.herokuapp.com/success`,
      cancel_url: `https://sneaker-site-uk.herokuapp.com`,
    });
    res.json({ url: session.url });
    res.redirect(303, session.url);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build", "index.html"));
});

app.listen(process.env.PORT || 5000);
