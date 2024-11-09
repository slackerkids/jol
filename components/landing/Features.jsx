export default function Features() {
    return (
      <section className="py-24 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Feature 1</h3>
                <p>Description of feature 1 goes here.</p>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Feature 2</h3>
                <p>Description of feature 2 goes here.</p>
              </div>
            </div>
            <div className="card bg-base-200">
              <div className="card-body">
                <h3 className="card-title">Feature 3</h3>
                <p>Description of feature 3 goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }