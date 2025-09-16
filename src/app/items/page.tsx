// src/app/items/page.tsx
"use client";

import Link from "next/link";

export default async function ItemsPage() {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "no-store",
  });
  const items = await res.json();

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>Produtos cadastrados</h1>
      <Link
        href="/items/new"
        style={{
          display: "inline-block",
          marginBottom: "16px",
          padding: "8px 14px",
          backgroundColor: "#5F9070",
          color: "white",
          borderRadius: "6px",
          textDecoration: "none",
        }}
      >
        + Novo Produto
      </Link>

      {items.length === 0 ? (
        <p>Nenhum Produto encontrado.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {items.map((item: any) => (
            <li
              key={item.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "12px",
                marginBottom: "12px",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                <Link
                  href={`/items/${item.id}/edit`}
                  style={{
                    padding: "6px 12px",
                    backgroundColor: "#2082DE",
                    color: "white",
                    borderRadius: "6px",
                    textDecoration: "none",
                  }}
                >
                  Editar
                </Link>
                <form
                  action={`/api/items/${item.id}`}
                  method="POST"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const res = await fetch(`/api/items/${item.id}`, {
                      method: "DELETE",
                    });
                    if (res.ok) {
                      window.location.reload();
                    } else {
                      alert("Erro ao excluir item");
                    }
                  }}
                >
                  <button
                    type="submit"
                    style={{
                      padding: "6px 12px",
                      backgroundColor: "#E23636",
                      color: "white",
                      borderRadius: "6px",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Excluir
                  </button>
                </form>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
