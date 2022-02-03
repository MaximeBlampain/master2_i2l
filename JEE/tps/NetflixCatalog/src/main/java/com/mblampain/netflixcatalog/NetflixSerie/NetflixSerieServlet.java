package com.mblampain.netflixcatalog.NetflixSerie;

import com.google.gson.Gson;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

@WebServlet(name = "Netflix", value = "/netflix")
public class NetflixSerieServlet extends HttpServlet {

    private NetflixSerieBO netflixSerieBO;

    public NetflixSerieServlet() {
        this.netflixSerieBO = new NetflixSerieBO();
    }

    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        List<NetflixSerieDTO> listSeries = netflixSerieBO.findAll();
        // Hello
        response.setContentType("application/json");
        response.getWriter().append(new Gson().toJson(listSeries));
    }
}
