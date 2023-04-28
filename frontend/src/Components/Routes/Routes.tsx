import "./Routes.css";

function Routes(): JSX.Element {
    return (
        <div className="Routes">
			<Routes>
                <Route path="/" element={<Vacay/>} />
            </Routes>
        </div>
    );
}

export default Routes;
