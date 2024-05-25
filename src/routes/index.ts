import customerRoutes from "./customerRoutes";
import loginRoutes from "./login/login";

const routes = (app) => {
    app.use("/users", customerRoutes);
    app.use('/auth', loginRoutes)
};

export default routes;
