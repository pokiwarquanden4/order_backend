import customerRoutes from "./customerRoutes";

const routes = (app) => {
    app.use("/users", customerRoutes);
};

export default routes;
