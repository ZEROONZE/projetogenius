import React from "react";
import { Routes, Route, BrowserRouter} from 'react-router-dom'
import Layout from "../components/Layout";
import Dashboard from "../components/pages/Dashboard";
import Api from "../components/pages/Dashboard/Home";
import List from "../components/pages/List";


const AppRoutes: React.FC = () => {  

return ( 
    <Layout>
      <Routes>
        <Route path="/dashboard"  element={<Dashboard />} />
        <Route path="/list" element={<List />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Layout>
);

}
export default AppRoutes;