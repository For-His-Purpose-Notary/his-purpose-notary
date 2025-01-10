export default function Button({ btnTxt, className }) {
  return (
    <>
      <button className={`${className} `}>{btnTxt}</button>
    </>
  );
}
