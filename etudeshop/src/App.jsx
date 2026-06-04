import { useState } from "react";
import Logo from "./images/Logo.png";

// Componente carrusel
function ImageCarousel({ images, bg, tag }) {
  const [current, setCurrent] = useState(0);

  return (
    <div
      style={{
        position: "relative",
        height: "260px",
        background: bg,
        overflow: "hidden",
      }}
    >
      <img
        src={images[current]}
        alt=""
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
        }}
      />

      {/* Flechas — solo si hay más de 1 imagen */}
      {images.length > 1 && (
        <>
          <button
            onClick={() =>
              setCurrent(current === 0 ? images.length - 1 : current - 1)
            }
            style={{
              position: "absolute",
              left: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.55)",
              color: "#fff",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ‹
          </button>
          <button
            onClick={() =>
              setCurrent(current === images.length - 1 ? 0 : current + 1)
            }
            style={{
              position: "absolute",
              right: "8px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "rgba(0,0,0,0.55)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ›
          </button>

          {/* Puntitos */}
          <div
            style={{
              position: "absolute",
              bottom: "8px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            {images.map((_, i) => (
              <div
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background:
                    i === current ? "#1a1a1a" : "rgba(255,255,255,0.8)",
                  cursor: "pointer",
                  transition: "background .2s",
                }}
              />
            ))}
          </div>
        </>
      )}

      {/* Etiqueta */}
      <span
        style={{
          position: "absolute",
          top: "12px",
          left: "12px",
          background: "#1a1a1a",
          color: "#fff",
          fontSize: "11px",
          fontWeight: 700,
          padding: "4px 10px",
          borderRadius: "50px",
          letterSpacing: "0.5px",
        }}
      >
        {tag}
      </span>
    </div>
  );
}

const products = [
  {
    id: 1,
    name: "Stanley Iceflow 887 ml",
    category: "Stanley",
    price: "$890",
    images: [
      "/images/stanleyamarillo1.webp",
      "/images/stanleyamarillo2.jpg",
      "/images/stanleyamarillo3.jpg",
    ],
    bg: "#fdf6ec",
    tag: "Más vendido",
  },
  {
    id: 2,
    name: "Lonchera Titan Deep Freeze ",
    category: "Loncheras",
    price: "$690",
    images: [
      "/images/IMG_4510.JPG",
      "/images/IMG_4509.JPG",
      "/images/IMG_4508.JPG",
      "/images/IMG_4516.WEBP",
      "/images/IMG_4515.WEBP",
    ],
    bg: "#ecf7fd",
    tag: "Nuevo",
  },
  {
    id: 3,
    name: "Botella Acero 1L",
    category: "Botellas",
    price: "$249",
    images: ["/fotos/botella1-a.webp"],
    bg: "#edfaf3",
    tag: "Tendencia",
  },
  {
    id: 4,
    name: "Hielera Portátil",
    category: "Hieleras",
    price: "$459",
    images: ["/fotos/hielera1-a.webp"],
    bg: "#f0ecfd",
    tag: "Nuevo",
  },
  {
    id: 5,
    name: "Set Utensilios Bambú",
    category: "Cocina",
    price: "$189",
    images: ["/fotos/utensilios1-a.webp"],
    bg: "#fdf2ec",
    tag: "Ideal regalo",
  },
  {
    id: 6,
    name: "Termo Café Premium",
    category: "Termos",
    price: "$329",
    images: ["/fotos/termo1-a.webp", "/fotos/termo1-b.webp"],
    bg: "#fcedf3",
    tag: "Ideal regalo",
  },
];

const categories = [
  "Todos",
  "Stanley",
  "Termos",
  "Botellas",
  "Loncheras",
  "Alexas",
  "Cocina",
];

const brands = [
  "Stanley",
  "Thermoflask",
  "Reduce",
  "King Crystal",
  "Alexas",
  "Titan",
];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div
      style={{
        fontFamily: "'Nunito', sans-serif",
        background: "#fafaf8",
        minHeight: "100vh",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;900&family=Playfair+Display:wght@700;900&display=swap"
        rel="stylesheet"
      />

      {/* NAV */}
      <nav
        style={{
          background: "#fff",
          borderBottom: "1.5px solid #f0ede6",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <img
          src={Logo}
          alt="ETUDE"
          style={{ height: "40px", objectFit: "contain" }}
        />

        <div
          style={{
            display: "flex",
            gap: "2rem",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          {["Catálogo", "Termos", "Cocina", "Regalos"].map((l) => (
            <a
              key={l}
              href="#"
              style={{
                color: "#555",
                textDecoration: "none",
                display: window.innerWidth < 640 ? "none" : "block",
              }}
            >
              {l}
            </a>
          ))}
        </div>

        <a
          href="https://wa.me/524921071124?text=Hola%2C%20me%20interesa%20un%20producto%20de%20ETUDE%20🏡"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#1a1a1a",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "50px",
            fontWeight: 700,
            fontSize: "13px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          💬 Preguntar
        </a>
      </nav>

      {/* HERO */}
      <section
        style={{
          background:
            "linear-gradient(135deg, #fdf8f0 0%, #fef3e2 50%, #fff9f2 100%)",
          padding: "5rem 2rem 4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-60px",
            right: "-60px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(212,168,67,0.08)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(212,168,67,0.05)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "700px", position: "relative" }}>
          <div
            style={{
              display: "inline-block",
              background: "#fff3d0",
              color: "#a07a1e",
              fontSize: "12px",
              fontWeight: 700,
              padding: "6px 16px",
              borderRadius: "50px",
              marginBottom: "1.5rem",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            ✨ Artículos prácticos y de tendencia
          </div>

          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              fontWeight: 900,
              color: "#1a1a1a",
              lineHeight: 1.1,
              margin: "0 0 1rem",
            }}
          >
            Vive tu día a día{" "}
            <span
              style={{
                background: "#d4a843",
                color: "#fff",
                padding: "0 10px",
                borderRadius: "8px",
                display: "inline-block",
              }}
            >
              con estilo.
            </span>
          </h1>

          <p
            style={{
              fontSize: "16px",
              color: "#666",
              maxWidth: "520px",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            Termos, botellas, loncheras, alexas y utensilios de cocina.
            Funcionales, de calidad y perfectos para regalo 🎁
          </p>

          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#productos"
              style={{
                background: "#1a1a1a",
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
              }}
            >
              Ver catálogo →
            </a>
            <a
              href="https://wa.me/524921071124"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#fff",
                color: "#1a1a1a",
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "15px",
                border: "1.5px solid #e0d9cd",
                textDecoration: "none",
              }}
            >
              📩 Preguntar sin compromiso
            </a>
          </div>
        </div>
      </section>

      {/* BRANDS STRIP */}
      <div
        style={{
          background: "#d4a843",
          padding: "16px 2rem",
          display: "flex",
          gap: "2.5rem",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {brands.map((b) => (
          <span
            key={b}
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "14px",
              letterSpacing: "1px",
              opacity: 0.9,
            }}
          >
            {b}
          </span>
        ))}
      </div>

      {/* PRODUCTS SECTION */}
      <section
        id="productos"
        style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "2rem",
              fontWeight: 900,
              color: "#1a1a1a",
              margin: "0 0 4px",
            }}
          >
            Nuevos Productos
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              background: "#d4a843",
              borderRadius: "2px",
            }}
          />
        </div>

        {/* Filtros */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: "50px",
                border: "1.5px solid",
                borderColor: activeCategory === cat ? "#d4a843" : "#e0d9cd",
                background: activeCategory === cat ? "#d4a843" : "#fff",
                color: activeCategory === cat ? "#fff" : "#555",
                fontWeight: 700,
                fontSize: "13px",
                cursor: "pointer",
                transition: "all .2s",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((p) => (
            <div
              key={p.id}
              style={{
                background: "#fff",
                borderRadius: "16px",
                border: "1.5px solid #f0ede6",
                overflow: "hidden",
                transition: "transform .2s, box-shadow .2s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 32px rgba(0,0,0,0.08)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* CARRUSEL */}
              <ImageCarousel images={p.images} bg={p.bg} tag={p.tag} />

              {/* Info */}
              <div style={{ padding: "1rem 1.2rem" }}>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#d4a843",
                    fontWeight: 700,
                    margin: "0 0 4px",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  }}
                >
                  {p.category}
                </p>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "17px",
                    fontWeight: 700,
                    color: "#1a1a1a",
                    margin: "0 0 8px",
                  }}
                >
                  {p.name}
                </h3>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontSize: "20px",
                      fontWeight: 900,
                      color: "#1a1a1a",
                    }}
                  >
                    {p.price}
                  </span>
                  <a
                    href={`https://wa.me/524921071124?text=Hola%2C%20me%20interesa%20el%20${encodeURIComponent(p.name)}%20de%20ETUDE%20🏡`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: "#1a1a1a",
                      color: "#fff",
                      padding: "8px 16px",
                      borderRadius: "50px",
                      fontSize: "12px",
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Explorar →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section
        style={{
          background: "#1a1a1a",
          color: "#fff",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 900,
            margin: "0 0 1rem",
          }}
        >
          ¿Buscas el regalo perfecto? 🎁
        </h2>
        <p
          style={{
            color: "#aaa",
            fontSize: "16px",
            maxWidth: "500px",
            margin: "0 auto 2rem",
            lineHeight: 1.7,
          }}
        >
          Escríbenos y te ayudamos a encontrar el producto ideal. ¡Sin
          compromiso!
        </p>
        <a
          href="https://wa.me/524921071124?text=Hola%2C%20quiero%20encontrar%20un%20regalo%20en%20ETUDE%20✨"
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#d4a843",
            color: "#fff",
            padding: "14px 36px",
            borderRadius: "50px",
            fontWeight: 700,
            fontSize: "16px",
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          📩 Preguntar por WhatsApp
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          background: "#111",
          color: "#777",
          padding: "2rem",
          textAlign: "center",
          fontSize: "13px",
        }}
      >
        <p style={{ margin: "0 0 4px" }}>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#fff",
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "2px",
            }}
          >
            ETUDE
          </span>{" "}
          🏡
        </p>
        <p style={{ margin: 0 }}>
          ✨ Venta de artículos prácticos y de tendencia para tu día a día ✨
        </p>
      </footer>
    </div>
  );
}
