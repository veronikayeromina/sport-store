export function FilterBox() {
  return (
    <section className="filter">
      <div className="container filter__box">
        <h5 className="filter__header">Showing 1–16 of 32 results</h5>

        <div className="filter__block">
          <div className="filter__show">
            <h6 className="filter__title">Show</h6>
            <input type="number" placeholder="16" className="filter__input" />
          </div>

          <div className="filter__sort">
            <h6 className="filter__subtitle">Sort by</h6>
            <button className="filter__btn">shop now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
