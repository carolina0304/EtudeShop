import { useState, useEffect } from "react";
import Logo from "./images/Logo.png";

function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
      if (e.key === "ArrowLeft")
        setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.92)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          maxWidth: "90vw",
          maxHeight: "90vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-40px",
            right: 0,
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: "28px",
            cursor: "pointer",
          }}
        >
          ✕
        </button>
        {images.length > 1 && (
          <button
            onClick={() =>
              setCurrent(current === 0 ? images.length - 1 : current - 1)
            }
            style={{
              position: "absolute",
              left: "-50px",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "#fff",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "22px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ‹
          </button>
        )}
        <img
          src={images[current]}
          alt=""
          style={{
            maxWidth: "90vw",
            maxHeight: "85vh",
            objectFit: "contain",
            borderRadius: "12px",
          }}
        />
        {images.length > 1 && (
          <button
            onClick={() =>
              setCurrent(current === images.length - 1 ? 0 : current + 1)
            }
            style={{
              position: "absolute",
              right: "-50px",
              background: "rgba(255,255,255,0.15)",
              border: "none",
              color: "#fff",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              fontSize: "22px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            ›
          </button>
        )}
        {images.length > 1 && (
          <div
            style={{
              position: "absolute",
              bottom: "-70px",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: "8px",
            }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                onClick={() => setCurrent(i)}
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "6px",
                  cursor: "pointer",
                  opacity: i === current ? 1 : 0.5,
                  border:
                    i === current
                      ? "2px solid #C8921A"
                      : "2px solid transparent",
                  transition: "opacity .2s, border .2s",
                }}
              />
            ))}
          </div>
        )}
        <div
          style={{
            position: "absolute",
            top: "-40px",
            left: 0,
            color: "rgba(255,255,255,0.6)",
            fontSize: "13px",
            fontWeight: 600,
          }}
        >
          {current + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

function ImageCarousel({ images, bg, tag, onImageClick }) {
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
        onClick={() => onImageClick(current)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          cursor: "zoom-in",
        }}
      />
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(current === 0 ? images.length - 1 : current - 1);
            }}
            style={{
              position: "absolute",
              left: "8px",
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
            ‹
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(current === images.length - 1 ? 0 : current + 1);
            }}
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
      <span
        style={{
          position: "absolute",
          bottom: "10px",
          right: "10px",
          background: "rgba(0,0,0,0.45)",
          color: "#fff",
          fontSize: "11px",
          padding: "3px 8px",
          borderRadius: "20px",
        }}
      >
        🔍 Ver
      </span>
    </div>
  );
}

const products = [
  {
    id: 1,
    name: "Stanley Iceflow Toronja 887 ml",
    category: "Stanley",
    price: "$890",
    desc: "Mantiene frío 12 hrs • Incluye popote • Antiderrame",
    images: [
      "/images/stanleyamarillo1.webp",
      "/images/stanleyamarillo2.jpg",
      "/images/stanleyamarillo3.jpg",
    ],
    bg: "#fdf6ec",
    tag: "Más vendido",
    urgencia: "🔥 Últimas 3 unidades",
  },
  {
    id: 2,
    name: "Lonchera Titan Deep Freeze",
    category: "Loncheras",
    price: "$690",
    desc: "Alta capacidad • Mantiene temp. 8 hrs • Impermeable",
    images: [
      "/images/IMG_4510.JPG",
      "/images/IMG_4509.JPG",
      "/images/IMG_4508.JPG",
      "/images/IMG_4516.WEBP",
      "/images/IMG_4515.WEBP",
    ],
    bg: "#ecf7fd",
    tag: "Nuevo",
    urgencia: "⚡ Disponible ahora",
  },
  {
    id: 3,
    name: "Termo Reduce Halo 946ml",
    category: "Termos",
    price: "$350",
    desc: "Antiderrames • Asa plegable • Popote de silicona",
    images: [
      "/images/IIDB5768.JPG",
      "/images/BQXV1234.JPG",
      "/images/FGJP1970.JPG",
      "/images/GFBJ1848.JPG",
    ],
    bg: "#edfaf3",
    tag: "Tendencia",
    urgencia: "⚡ Disponible ahora",
  },
  {
    id: 4,
    name: "Set de Vasos King Cristal",
    category: "Hogar",
    price: "$550",
    desc: "Capacidad de 480 ml • Alta Resistencia • Tapa y popote",
    images: [
      "/images/IDVK8013.JPG",
      "/images/IFHO1279.JPG",
      "/images/QUZZ1337.JPG",
      "/images/TCVL4606.JPG",
    ],
    bg: "#f0ecfd",
    tag: "Ideal de Regalo",
    urgencia: "🔥 Últimas unidades",
  },
  {
    id: 5,
    name: "Thermoflask 740ml",
    category: "Termos",
    price: "$350",
    desc: "Antiderrames • Acero inoxidable • Asa Plegable",
    images: [
      "/images/IMG_4037.JPG",
      "/images/IMG_4035.JPG",
      "/images/IMG_4034.JPG",
      "/images/IMG_4032.JPG",
      "/images/IMG_4029.JPG",
    ],
    bg: "#fdf2ec",
    tag: "Tendencia",
    urgencia: "⚡ Disponible ahora",
  },
  {
    id: 6,
    name: "Termo Reduce NIÑOS",
    category: "Termos",
    price: "$250",
    desc: "Antiderrames • 414 ml • Tapa 3 en 1",
    images: [
      "/images/NINAS.webp",
      "/images/NIÑOS.webp",
      "/images/IMG_4182.JPG",
      "/images/IMG_4183.JPG",
    ],
    bg: "#fcedf3",
    tag: "Tendencia",
    urgencia: "🔥 Pocas unidades",
  },
  {
    id: 7,
    name: "Picadora y Rebanadora MIU",
    category: "Hogar",
    price: "$490",
    desc: "9 cuchillas intercambiables • Base Antideslizante • Acero inoxidable",
    images: [
      "/images/IMG_4406.JPG",
      "/images/IMG_4404.JPG",
      "/images/AAIU6986.JPG",
      "/images/IMG_4405.JPG",
    ],
    bg: "#fcedf3",
    tag: "Tendencia",
    urgencia: "🔥 Pocas unidades",
  },
  {
    id: 8,
    name: "Platos Hondos Over & Back",
    category: "Hogar",
    price: "$450",
    desc: "6 platos • Cerámica resistente • Acabado moderno",
    images: [
      "/images/JXXT8619.JPG",
      "/images/JYOT8637.jpg",
      "/images/NTLA1938.jpg",
    ],
    bg: "#fcedf3",
    tag: "Ideal de regalo",
    urgencia: "🔥 Pocas unidades",
  },
  {
    id: 9,
    name: "Thermoflask 1.2 lts.",
    category: "Termos",
    price: "$350",
    desc: "Frío hasta 24 hrs • Tapa a prueba de fugas • Mango ergonómico",
    images: ["/images/HDAN0365.JPG", "/images/KOYQ5716.JPG"],
    bg: "#fdf2ec",
    tag: "Tendencia",
    urgencia: "🔥 Pocas unidades",
  },
  {
    id: 10,
    name: "Termo Reduce 1.48 lts.",
    category: "Termos",
    price: "$460",
    desc: "48 horas frío • Tapa 3 en 1 • Acero inoxidable",
    images: [
      "/images/IMG_8883.JPG",
      "/images/IMG_8885.JPG",
      "/images/IMG_8886.JPG",
      "/images/IMG_8887.JPG",
    ],
    bg: "#edfaf3",
    tag: "Tendencia",
    urgencia: "🔥 Pocas unidades",
  },
  {
    id: 11,
    name: "Stanley Iceflow Verde 887 ml",
    category: "Stanley",
    price: "$890",
    desc: "Mantiene frío 12 hrs • Incluye popote • Antiderrame",
    images: [
      "/images/IMG_4633.jpg",
      "/images/IMG_4634.jpg",
      "/images/IMG_4635.jpg",
      "/images/IMG_4636.jpg",
    ],
    bg: "#fdf6ec",
    tag: "Más vendido",
    urgencia: "🔥 Última unidad",
  },
  {
    id: 12,
    name: "Stanley Iceflow Morado 887 ml",
    category: "Stanley",
    price: "$890",
    desc: "Mantiene frío 12 hrs • Incluye popote • Antiderrame",
    images: [
      "/images/IMG_4637.jpg",
      "/images/IMG_4638.jpg",
      "/images/IMG_4639.jpg",
    ],
    bg: "#fdf6ec",
    tag: "Más vendido",
    urgencia: "🔥 Últimas unidades",
  },
  {
    id: 13,
    name: "Botella Tritan Zulu",
    category: "Botellas",
    price: "$200",
    desc: "474 ml • Sin BPA • Funda Silicona",
    images: [
      "/images/IMG_6744.jpg",
      "/images/IMG_6745.jpg",
      "/images/IMG_6746.jpg",
    ],
    bg: "#fdf6ec",
    tag: "Más vendido",
    urgencia: "🔥 Últimas unidades",
  },
  {
    id: 14,
    name: "Jarra Reduce",
    category: "Botellas",
    price: "$200",
    desc: "1 lt • Tapa a prueba de fugas • Acero inoxidable al vacío",
    images: [
      "/images/KFMX7178.JPG",
      "/images/INVS3307.JPG",
      "/images/IMG_6819.jpg",
      "/images/IMG_6822.jpg",
    ],
    bg: "#fdf6ec",
    tag: "Más vendido",
    urgencia: "🔥 Últimas unidades",
  },
  {
    id: 15,
    name: "Alexa Amazon Pop",
    category: "Alexas",
    price: "$890",
    desc: "Bocina Inteligente • Barra de luz • Fácil de configurar",
    images: [
      "/images/61V5FRUgX8L._AC_SY450_.jpg",
      "/images/71W6FYxvXcL._AC_SY450_.jpg",
      "/images/51OfjpTM9aL._AC_SL1000_.jpg",
    ],
    bg: "#fdf6ec",
    tag: "Más vendido",
    urgencia: "🔥 Últimas unidades",
  },
  /*{
    id: 16,
    name: "Alexa Amazon Echo Show 5",
    category: "Alexas",
    price: "$1800",
    desc: "Pantalla Inteligente • Procesador más rápido • Audio mejorado",
    images: [
      "/images/71O2onzeWAL._AC_SY450_.jpg",
      "/images/61ilFJDdDGL._AC_SY450_.jpg",
      "/images/719TUOVlhYL._AC_SY450_.jpg",
      "/images/61yxVwnH-sL._AC_SY450_.jpg",
    ],
    bg: "#fdf6ec",
    tag: "Más vendido",
    urgencia: "🔥 Últimas unidades",
  },*/

  {
    id: 17,
    name: "Cesto de ropa Seville Classics",
    category: "Hogar",
    price: "$550",
    desc: "Diseño Elegante • Bolsa interior extraíble • Resistente y duradero",
    images: [
      "/images/431354951729182.webp",
      "/images/431354952384542.webp",
      "/images/431354955333662.webp",
    ],
    bg: "#fdf6ec",
    tag: "Nuevo",
    urgencia: "🔥 Últimas unidades",
  },
  {
    id: 18,
    name: "Taza o Vaso Thermoflask",
    category: "Termos",
    price: "$250",
    desc: "Termico • Bebida fria o caliente hasta 6horas • Resistente y duradero",
    images: [
      "/images/vasorosa.jpeg",
      "/images/vasoamarillo.jpeg",
      "/images/vasoazul.jpeg",
      "/images/pa.jpeg",
    ],
    bg: "#fdf6ec",
    tag: "Tendencia",
    urgencia: "🔥 Últimas unidades",
  },
];

const categories = [
  "Todos",
  "Stanley",
  "Termos",
  "Botellas",
  "Loncheras",
  "Alexas",
  "Hogar",
];
const brands = [
  "Stanley",
  "Thermoflask",
  "Reduce",
  "King Crystal",
  "Alexas",
  "Titan",
];
const garantias = [
  {
    icon: "✅",
    titulo: "100% Originales",
    desc: "Productos verificados y de tendencia garantizados",
  },
  {
    icon: "🚚",
    titulo: "Envío Seguro",
    desc: "Seguimiento en todo momento a tu pedido",
  },
  {
    icon: "💬",
    titulo: "Atención Personalizada",
    desc: "Compra directa y rápida por WhatsApp",
  },
];

// ── COLORES DE LA MARCA ───────────────────────────────────
const C = {
  negro: "#1a1a1a",
  dorado: "#C8921A", // dorado oscuro premium
  doradoSuave: "#F5E6C8", // fondo dorado claro
  doradoMid: "#E8C870", // badges y acentos
  verde: "#25D366", // SOLO para WhatsApp
  fondo: "#fafaf8",
  borde: "#f0ede6",
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    activeCategory === "Todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div
      style={{
        fontFamily: "'Poppins', 'Nunito', sans-serif",
        background: C.fondo,
        minHeight: "100vh",
        overflowX: "hidden",
        maxWidth: "100vw",
      }}
    >
      {/* ── FUENTES: Poppins para títulos, Nunito para cuerpo ── */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;900&family=Nunito:wght@400;600;700&display=swap"
        rel="stylesheet"
      />

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}

      {/* ── NAV ── */}
      <nav
        style={{
          background: "#fff",
          borderBottom: `1.5px solid ${C.borde}`,
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
          {[{ label: "Catálogo", href: "#productos" }].map((l) => (
            <a
              key={l.label}
              href={l.href}
              style={{
                color: "#555",
                textDecoration: "none",
                display: window.innerWidth < 640 ? "none" : "block",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="https://wa.me/524921071124?text=Hola%2C%20quiero%20pedir%20un%20producto%20de%20ETUDE%20🏡"
          target="_blank"
          rel="noreferrer"
          style={{
            background: C.verde,
            color: "#fff",
            padding: "10px 18px",
            borderRadius: "50px",
            fontWeight: 700,
            fontSize: "13px",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          💬 Pedir Aquí
        </a>
      </nav>

      {/* ── HERO ── */}
      <section
        style={{
          background: `linear-gradient(135deg, #fffdf7 0%, ${C.doradoSuave} 50%, #fffdf7 100%)`,
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
            background: "rgba(200,146,26,0.07)",
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
            background: "rgba(200,146,26,0.04)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: "700px", position: "relative" }}>
          {/* Badge — dorado, minúsculas, cercano */}
          <div
            style={{
              display: "inline-block",
              background: C.doradoSuave,
              color: C.dorado,
              fontSize: "13px",
              fontWeight: 700,
              padding: "7px 18px",
              borderRadius: "50px",
              marginBottom: "1.5rem",
              border: `1.5px solid ${C.doradoMid}`,
            }}
          >
            ✨ Los productos más virales de TikTok
          </div>

          {/* H1 — Poppins, copy directo */}
          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(1.9rem, 6vw, 3.4rem)",
              fontWeight: 900,
              color: C.negro,
              lineHeight: 1.15,
              margin: "0 0 1rem",
            }}
          >
            Consigue los termos y accesorios{" "}
            <span
              style={{
                background: C.dorado,
                color: "#fff",
                padding: "2px 12px",
                borderRadius: "8px",
                display: "inline-block",
              }}
            >
              en tendencia.
            </span>
          </h1>

          {/* Subtítulo — resuelve 3 objeciones en 1 línea */}

          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "15px",
              color: "#888",
              maxWidth: "480px",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            También loncheras Titan, gadgets del hogar y todo lo que está en
            tendencia. 🎁
          </p>

          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "16px",
              color: "#666",
              maxWidth: "480px",
              margin: "0 auto 0.6rem",
              lineHeight: 1.7,
            }}
          >
            Originales, con envío seguro y a buen precio.
          </p>
          <p
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: "16px",
              color: "#666",
              maxWidth: "480px",
              margin: "0 auto 0.6rem",
              lineHeight: 1.7,
            }}
          >
            📍 Querétaro
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
                background: C.negro,
                color: "#fff",
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "15px",
                textDecoration: "none",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              Ver productos disponibles →
            </a>
            <a
              href="https://wa.me/524921071124"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#fff",
                color: C.negro,
                padding: "14px 32px",
                borderRadius: "50px",
                fontWeight: 700,
                fontSize: "15px",
                border: `1.5px solid ${C.borde}`,
                textDecoration: "none",
                fontFamily: "'Nunito', sans-serif",
              }}
            >
              📩 Preguntar sin compromiso
            </a>
          </div>
        </div>
      </section>

      {/* ── BRANDS ── */}
      <div
        style={{
          background: "#ebeae3",
          padding: "14px 2rem",
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {[
          { nombre: "Stanley", archivo: "/images/stanley-ogo.png" },
          { nombre: "Thermoflask", archivo: "/images/thermoflask.jpg" },
          { nombre: "Reduce", archivo: "/images/reduce.png" },
          { nombre: "King Crystal", archivo: "/images/kingcristal.png" },
          { nombre: "Alexas", archivo: "/images/Alexa.png" },
          { nombre: "Titan", archivo: "/images/logo_titan.png" },
        ].map((b) => (
          <img
            key={b.nombre}
            src={b.archivo}
            alt={b.nombre}
            style={{
              height: "28px",
              objectFit: "contain",
              /*filter: "brightness(0) invert(1)", */
              opacity: 0.9,
            }}
          />
        ))}
      </div>
      {/* ── GARANTÍAS ── */}
      <div
        style={{
          background: "#fff",
          padding: "2.5rem 2rem",
          borderBottom: `1.5px solid ${C.borde}`,
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {garantias.map((g) => (
            <div
              key={g.titulo}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "14px",
                padding: "1rem",
                borderRadius: "12px",
                background: C.fondo,
                border: `1.5px solid ${C.borde}`,
              }}
            >
              <span style={{ fontSize: "28px", lineHeight: 1 }}>{g.icon}</span>
              <div>
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: C.negro,
                    margin: "0 0 4px",
                  }}
                >
                  {g.titulo}
                </p>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "13px",
                    color: "#777",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  {g.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── PRODUCTOS ── */}
      <section
        id="productos"
        style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "2rem",
              fontWeight: 900,
              color: C.negro,
              margin: "0 0 6px",
            }}
          >
            Productos disponibles
          </h2>
          <div
            style={{
              width: "60px",
              height: "4px",
              background: C.dorado,
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
                border: `1.5px solid ${activeCategory === cat ? C.dorado : C.borde}`,
                background: activeCategory === cat ? C.dorado : "#fff",
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
                border: `1.5px solid ${C.borde}`,
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
              <ImageCarousel
                images={p.images}
                bg={p.bg}
                tag={p.tag}
                onImageClick={(idx) =>
                  setLightbox({ images: p.images, index: idx })
                }
              />
              <div style={{ padding: "1rem 1.2rem" }}>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "11px",
                    color: C.dorado,
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
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: C.negro,
                    margin: "0 0 4px",
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "12px",
                    color: "#888",
                    margin: "0 0 8px",
                    lineHeight: 1.5,
                  }}
                >
                  {p.desc}
                </p>
                {/* Urgencia — dorado oscuro en vez de naranja */}
                <p
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontSize: "11px",
                    color: C.dorado,
                    fontWeight: 700,
                    margin: "0 0 10px",
                  }}
                >
                  {p.urgencia}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "20px",
                      fontWeight: 900,
                      color: C.negro,
                    }}
                  >
                    {p.price}
                  </span>
                  <a
                    href={`https://wa.me/524921071124?text=Hola%2C%20quiero%20pedir%20el%20${encodeURIComponent(p.name)}%20de%20ETUDE%20🏡`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: C.verde,
                      color: "#fff",
                      padding: "8px 14px",
                      borderRadius: "50px",
                      fontSize: "12px",
                      fontWeight: 700,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      whiteSpace: "nowrap",
                      fontFamily: "'Nunito', sans-serif",
                    }}
                  >
                    Lo quiero ⚡
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        style={{
          background: C.negro,
          color: "#fff",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 900,
            margin: "0 0 1rem",
          }}
        >
          ¿Ya viste algo que te gustó? 👀
        </h2>
        <p
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: "#aaa",
            fontSize: "16px",
            maxWidth: "500px",
            margin: "0 auto 2rem",
            lineHeight: 1.7,
          }}
        >
          No esperes a que se agote. Escríbenos y lo apartamos para ti ahora
          mismo. 📍 Entregas en Querétaro.
        </p>
        <a
          href="https://wa.me/524921071124?text=Hola%2C%20quiero%20encontrar%20un%20regalo%20en%20ETUDE%20✨"
          target="_blank"
          rel="noreferrer"
          style={{
            background: C.verde,
            color: "#fff",
            padding: "14px 36px",
            borderRadius: "50px",
            fontWeight: 700,
            fontSize: "16px",
            textDecoration: "none",
            display: "inline-block",
            fontFamily: "'Nunito', sans-serif",
          }}
        >
          Quiero apartar el mío ⚡
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: "#111",
          color: "#777",
          padding: "2rem",
          textAlign: "center",
          fontSize: "13px",
          fontFamily: "'Nunito', sans-serif",
        }}
      >
        <p style={{ margin: "0 0 4px" }}>
          <span
            style={{
              fontFamily: "'Poppins', sans-serif",
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
        <p style={{ margin: "0 0 8px" }}>
          100% originales • Envío seguro • Atención por WhatsApp
        </p>
        <p style={{ margin: 0 }}>
          <a
            href="https://wa.me/524921071124"
            style={{ color: C.dorado, textDecoration: "none", fontWeight: 700 }}
          >
            💬 WhatsApp
          </a>
        </p>
        <p style={{ margin: "50px 0 8px" }}>Carolina Gómez Copyright © 2026</p>
      </footer>
    </div>
  );
}
