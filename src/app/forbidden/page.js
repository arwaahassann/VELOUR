export default function ForbiddenPage() {
  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "16px",
      background: "#0e0c0a",
      color: "#f0ebe3",
      fontFamily: "'DM Sans', sans-serif",
      textAlign: "center"
    }}>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "48px", fontWeight: 300, fontStyle: "italic" }}>
        Access Denied
      </h1>
      <p style={{ color: "#4a4035", fontSize: "13px", letterSpacing: "1px" }}>
        You don't have permission to access this page.
      </p>
      <a href="/" style={{
        marginTop: "16px",
        padding: "13px 36px",
        background: "#c9a96e",
        color: "#0e0c0a",
        fontSize: "10px",
        letterSpacing: "4px",
        textTransform: "uppercase",
        textDecoration: "none"
      }}>
        Return Home
      </a>
    </div>
  );
}
