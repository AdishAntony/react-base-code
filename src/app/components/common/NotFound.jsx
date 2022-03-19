
import { Nopage } from "../../utils/Svg";

const NotFound = () => {
	return (
		<section className="error_1">
			<div className="container">
				<div className="row ">
					<div className="col-12">
						<div className="error_2">
							<div className="error_3"><img src={Nopage} className="img-responisive" /> </div>
						</div>
					</div>
					<div className="col-12 error_5"> oops, something went wrong </div>
					<div className="col-12 error_6"> <a href="/"> BACK TO HOME  </a> </div>
				</div>
			</div>
		</section>
	)
}

export default NotFound;
