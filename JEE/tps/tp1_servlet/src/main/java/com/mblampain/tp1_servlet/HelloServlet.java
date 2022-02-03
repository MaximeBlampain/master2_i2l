package com.mblampain.tp1_servlet;

import com.mblampain.tp1_servlet.netflix_clone.NetflixSerieDO;

import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.http.*;
import javax.servlet.annotation.*;

@WebServlet(name = "HelloWorld", value = "/HelloWorld")
public class HelloServlet extends HttpServlet {

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        NetflixSerieDO serie = new NetflixSerieDO();

        serie.setNom("Test");
        serie.setProductionOriginale(true);

        response.setContentType("application/json");
        response.getWriter().append(new Gson().toJson(serie));
    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doGet(request, response);
    }

}