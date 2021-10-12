import 'bootstrap/dist/css/bootstrap.css';
import "mdbreact/dist/css/mdb.css";

export default function Card({title,textAnnonce,salaire,ville}) {
  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h6>{ville}</h6>
          <p className="card-text overflow-auto" style={{height: "80px"}}>
            {textAnnonce}
          </p>
          <p>
              <strong>
                  {salaire}
              </strong>
          </p>
          <button type="button" className="btn btn-primary">
            Voir l'annonce
          </button>
        </div>
      </div>
    </>
  );
}
