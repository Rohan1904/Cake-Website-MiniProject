<?xml version="1.0" encoding="utf-8"?>

<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/"> 
 <html> 
 <body> 
  <h1 align="center">Basic Contact Details</h1> 
   <table border="3" align="center" > 
   <tr> 
    <th>Number</th> 
    <th>Email</th>
   </tr> 
    <xsl:for-each select="details/s"> 
   <tr> 
    <td><xsl:value-of select="no"/></td> 
    <td><xsl:value-of select="email"/></td> 
   </tr> 
    </xsl:for-each> 
    </table> 
</body> 
</html> 
</xsl:template> 
</xsl:stylesheet> 