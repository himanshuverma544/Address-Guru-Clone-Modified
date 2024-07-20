export default function Footer() {

  return (
    <footer className="flex px-20 py-10 border-t-2">
      <div className="left w-1/2 flex flex-col gap-5">
        <div>Header</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam vel fringilla nulla. Aliquam erat volutpat. Sed euismod, lorem in vestibulum volutpat, eros lacus facilisis velit, non vulputate sapien felis a magna.
        </div>
        <div className="social-icons flex gap-10">
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>

      <div className="right w-1/2 flex flex-col items-center gap-5">
        <div>Header Text</div>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
        <button>Button</button>
      </div>
    </footer>
  );
}
