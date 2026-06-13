"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [result, setResult] = useState<"mutlu" | "ufuk" | null>(null);

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center",
      fontFamily: "system-ui",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "40px" }}>
        Kim Milyoner Olmak İster?
      </h1>

      <div style={{ display: "flex", gap: "60px", alignItems: "center" }}>
        <button
          onClick={() => setResult("mutlu")}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            transition: "transform 0.2s"
          }}
        >
          <Image 
            src="/mutlu.jpeg" 
            alt="Mutlu" 
            width={200} 
            height={200}
            style={{ borderRadius: "10px" }}
          />
          <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>Mutlu</p>
        </button>

        <button
          onClick={() => setResult("ufuk")}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            transition: "transform 0.2s"
          }}
        >
          <Image 
            src="/ufuk.jpeg" 
            alt="Ufuk" 
            width={200} 
            height={200}
            style={{ borderRadius: "10px" }}
          />
          <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>Ufuk</p>
        </button>
      </div>

      {result === "mutlu" && (
        <div style={{ 
          marginTop: "40px", 
          padding: "20px 40px", 
          backgroundColor: "#4CAF50",
          color: "white",
          borderRadius: "10px",
          fontSize: "1.5rem"
        }}>
          🎉 Tebrikler! Kazandınız!
        </div>
      )}

      {result === "ufuk" && (
        <div style={{ 
          marginTop: "40px", 
          padding: "20px 40px", 
          backgroundColor: "#f44336",
          color: "white",
          borderRadius: "10px",
          fontSize: "1.5rem"
        }}>
          ❌ Kaybettiniz!
        </div>
      )}

      {result && (
        <button
          onClick={() => setResult(null)}
          style={{
            marginTop: "20px",
            padding: "10px 30px",
            fontSize: "1rem",
            cursor: "pointer"
          }}
        >
          Tekrar Dene
        </button>
      )}
    </div>
  );
}