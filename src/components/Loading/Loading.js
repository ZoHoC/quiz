import "./Loading.scss";

export default function Loading() {
  return (
    <div className="loading">
      <div className="loading__spinner"></div>
      <div className="loading__text">Loading...</div>
    </div>
  );
}

// React-loader-spinner library kao bolje rjesenje!
