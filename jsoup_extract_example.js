/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var extract = function (doc) {
    if (doc !== null && doc.getFirstFieldValue("body") !== null) {
        var File = java.io.File;
        var Iterator = java.util.Iterator;
        var Jsoup = org.jsoup.Jsoup;
        var Document = org.jsoup.nodes.Document;
        var Element = org.jsoup.nodes.Element;
        var Elements = org.jsoup.select.Elements;
        var content = doc.getFirstFieldValue("body");
        var doc = org.jsoup.nodes.Document;
        var e = java.lang.Exception;
        var div = org.jsoup.nodes.Element;
        var img = org.jsoup.nodes.Element;
        var iter = java.util.Iterator;
        var divs = org.jsoup.select.Elements;
        try {
            doc = Jsoup.parse(content);
            if (null !== doc) {
                divs = doc.select("div");
                if (divs !== null) {
                    iter = divs.iterator();
                    div = null; // initialize our value to null 
                    while (iter.hasNext()) {
                        div = iter.next();
                        // add div to text
                        doc.addField("div", div.ownText());
                    }
                }

            }

        } catch (e) {
            logger.error(e);
        }
    }
    return doc;
}
