import statBg from "@/assets/images/stat-background-2x.png";

export function Statistics() {
    return (
        <section className="flex flex-col justify-around items-center statistics">
            <div
                className="flex statistics-background"
                style={{backgroundImage: `url(${statBg.src})`}}
            >
                <div className="statistics-container">
                    <h2 className="stat-count">10</h2>
                    <p className="stat-title">oddanych worków</p>
                    <p className="stat-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="statistics-container">
                    <h2 className="stat-count">5</h2>
                    <p className="stat-title">wspartych organizacji</p>
                    <p className="stat-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="statistics-container">
                    <h2 className="stat-count">7</h2>
                    <p className="stat-title">zorganizowanych zbiórek</p>
                    <p className="stat-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </section>
    );
}