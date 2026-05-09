import mongoose from "mongoose";

const MONGODB_URL = "mongodb://localhost:27017/velour";

const categorySchema = new mongoose.Schema({ name: String });
const Category = mongoose.models.Category || mongoose.model("Category", categorySchema);

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "" },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    stock: { type: Number, default: 0 },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  },
  { timestamps: true }
);
const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

async function seed() {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("✅ Connected to MongoDB");

    await Product.deleteMany({});
    await Category.deleteMany({});
    console.log("🗑️  Cleared existing data");

    const dresses = await Category.create({ name: "Dresses" });
    const heels = await Category.create({ name: "Heels" });
    const bags = await Category.create({ name: "Bags" });
    console.log("✅ Categories created");

    await Product.insertMany([
      { name: "Midnight Velvet Gown", description: "Stunning deep black velvet evening gown with gold zipper detail and elegant silhouette.", price: 1850, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800", stock: 8, category: dresses._id },
      { name: "Golden Hour Midi Dress", description: "Flowing gold satin midi dress perfect for evening events and special occasions.", price: 1200, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800", stock: 10, category: dresses._id },
      { name: "Ivory Lace Maxi Dress", description: "Delicate ivory lace maxi dress with intricate floral embroidery and sheer overlay.", price: 2100, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800", stock: 6, category: dresses._id },
      { name: "Noir Wrap Dress", description: "Sophisticated black wrap dress with draped neckline and cinched waist.", price: 950, image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=800", stock: 12, category: dresses._id },
      { name: "Blush Slip Dress", description: "Minimalist blush satin slip dress with thin straps and bias cut.", price: 780, image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800", stock: 15, category: dresses._id },
      { name: "Gold Strappy Heels", description: "Elegant gold strappy sandal heels with 10cm stiletto and ankle strap.", price: 650, image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800", stock: 10, category: heels._id },
      { name: "Black Pointed Pumps", description: "Classic black leather pointed-toe pumps with 9cm heel. A wardrobe essential.", price: 720, image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=800", stock: 14, category: heels._id },
      { name: "Crystal Embellished Mules", description: "Luxurious crystal-embellished mule heels perfect for evening occasions.", price: 890, image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?w=800", stock: 7, category: heels._id },
      { name: "Nude Block Heels", description: "Comfortable nude block heels with square toe and cushioned insole.", price: 520, image: "https://images.unsplash.com/photo-1596703263926-eb0762ee17e4?w=800", stock: 18, category: heels._id },
      { name: "Velour Mini Bag", description: "Compact evening mini bag in genuine leather with gold chain strap and logo clasp.", price: 980, image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800", stock: 9, category: bags._id },
      { name: "Black Quilted Shoulder Bag", description: "Timeless quilted leather shoulder bag with gold chain and magnetic closure.", price: 1450, image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800", stock: 6, category: bags._id },
      { name: "Gold Clutch Bag", description: "Glamorous gold metallic clutch with detachable chain strap and magnetic snap.", price: 750, image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=800", stock: 11, category: bags._id },
      { name: "Ivory Structured Tote", description: "Sophisticated ivory structured tote bag in vegan leather with gold hardware.", price: 1100, image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800", stock: 8, category: bags._id },
    ]);

    console.log("🌱 Inserted 13 products");
    await mongoose.disconnect();
    console.log("✅ Done! Go to http://localhost:3000");
  } catch (err) {
    console.error("❌ Error:", err);
    process.exit(1);
  }
}

seed();
