function handeFormSubmit(event) {
  event.preventDefault();
  console.log("Form submitted!");
}

export default function Form() {
  return (
    <form onSubmit={handeFormSubmit}>
      <input placeholder="write something" />
      <button >Submit</button>
    </form>
  );
}
