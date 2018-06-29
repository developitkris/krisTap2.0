function MyStyledComponent(props) {
  return (
   <div>
      <p className="brown-text">only this paragraph will get the style :)</p>
      <style jsx>{`
        .black-text {
          color: blue;
        }
    `}</style>
  </div>
  );
}

export default MyStyledComponent;
