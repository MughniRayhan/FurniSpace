// app/dashboard/add-product/page.jsx
"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  if (status === "loading") return <p>Loading...</p>;
  if (!session) {
    router.push("/login");
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const productData = {
      title: form.title.value,
      price: form.price.value,
      category: form.category.value,
      image: form.image.value,
      description: form.description.value,
    };

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productData),
    });

    if (res.ok) {
      setMessage("Product added successfully!");
      form.reset();
      router.push("/products");
    } else {
      setMessage("Failed to add product.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-base-100 shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

      {message && <p className="mb-4 text-sm">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="title" type="text" placeholder="Product Title" className="input input-bordered w-full" required />
        <input name="price" type="number" placeholder="Price" className="input input-bordered w-full" required />
        <input name="category" type="text" placeholder="Category" className="input input-bordered w-full" required />
        <input name="image" type="text" placeholder="Image URL (/assets/img1.png)" className="input input-bordered w-full" />
        <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full"></textarea>
       

        <button type="submit" className="btn btn-primary w-full bg-[#6e0d25] text-white" disabled={loading}>
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
