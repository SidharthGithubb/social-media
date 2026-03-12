const Spinner = () => {
  return (
    <div
      class="d-flex justify-content-center"
      style={{ margin: "20px 0 0 20px" }}
    >
      <div
        class="spinner-border"
        style={{ width: "5rem", height: "5rem" }}
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
export default Spinner;
