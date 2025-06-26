function printHello() {
  console.log("Hello, World!");
}

function exitApp() {
  console.log("Bye!");
}
export default function Button() {
  return (
    <div>
      <button onClick={printHello}>Click me</button>
      <p onMouseOver={exitApp}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus aut
        accusantium delectus aliquid hic dignissimos placeat non aperiam
        maiores, odit perferendis nostrum sit numquam, architecto pariatur
        officiis! Quia, officia numquam.
      </p>
    </div>
  );
}
