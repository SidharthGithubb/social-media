const Spinner = () => {
  return (
    <div
      className="d-flex justify-content-center"
      style={{ margin: "20px 0 0 20px" }}
    >
      <div
        className="spinner-border"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default Spinner;
