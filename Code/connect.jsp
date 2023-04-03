<%@ page language="java" contentType="text/html"%>
<%@ page import="java.text.*,java.util.*" %>
<%@ page import = "java.sql.*"%>
<html>
    <head><title>jsp</title></head>
    <body>
<%
String username = request.getParameter("username");
String email = request.getParameter("email");
String password = request.getParameter("password");
String confirmpassword = request.getParameter("confirmpassword");
%>
<%
try{
    ClassforName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/newdb","root","");
    PreparedStatements ps = conn.prepareStatement("insert into registration(Username,Email,Password,ConfirmPassword) values(?,?,?,?)");
    ps.setString(1,Username);
    ps.setString(2,Email);
    ps.setString(3,Password);
    ps.setString(4,ConfirmPassword);
    int x = ps.executeUpdate();

}

catch(Exception e){
    out.println(e);
}
%>
</body>
</html>