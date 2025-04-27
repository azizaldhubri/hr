 
 
import React from "react";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

 

Font.register({
    family: "Cairo",
    fonts: [
      {
        src:`data:font/ttf;base64,AAEAAAALAIAAAwAwT1MvMg8SFiIAAAE4AAAAVmNtYXAAAAAQAAAAVmN2dCAAAABQAAAAFGdhc3AAABUAAAAAhnbHlmP+9vkwAABhAAAAA4aGVhZAWBC4sAAAGQAAAANmhoZWEDQgFoAAABvAAAACRobXR4APQAAAAAAcAAAAAgbG9jYQAABAQAAAH8AAAACG1heHAAeABYAAACFAAAACBuYW1lMdIzLQAAAagAAAEVcG9zdAAAAAAAAAAYAAAABAAAAAQAAAAMAAAAcAAEAAAAAANB8vwAAAADQfL8AAAAA0Hy/AFUAAAAAAAAAAAAAAAAAAAABAAADVP8PPPUACwPoAAAAAMVbYgAAAACz3tGJAAAAAMqMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAEAAgAAAAAAAAAAAAAAAgAAAAAAAAACAAAAAAACAAAAAAAAAAEAAAAAAAEAAAAAAAIABAAAAAEAAQAAAEAAAMgAAAACAAAAAgAAACAAAABQAAwABAAAAAAADAAEAAAAAAAIAAgABAAAAAAAEAAEAAAAAAAMAAQABAAAAAAAFABAAJQAAABAAAwABAAAAAAAGAAEABAAAAAAAAgABAAIAAAACAAUAAgAAAAAAAgABAAAAAAACAAIAAgAAAAAAAwABAAAAAAADAAIAAgAAAAAABAAEAAIAAAAEAAIAAgAAAAAABQAEAAIAAAAFACMAAgAAAAAABgABAAIAAAA=
          `
      },
    ],
  });
// إنشاء التنسيقات مع الخط العربي
const styles = StyleSheet.create({
  page: {
    fontFamily: "Cairo",  
    padding: 30,
    fontSize: 14,
    direction: "rtl", // دعم من اليمين لليسار
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  content: {
    marginBottom: 10,
  },
});

// محتوى ملف الـ PDF
const MyDocument = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>  ok</Text>
        {/* <Text style={styles.content}>الاسم: محمد أحمد</Text>
        <Text style={styles.content}>البريد الإلكتروني: mohamed@example.com</Text>
        <Text style={styles.content}>
          تاريخ الإنشاء: {new Date().toLocaleDateString("ar-EG")}
        </Text> */}
      </Page>
    </Document>
  );
  
  // المكون الرئيسي
  const Newpdf = () => {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        <h1>تحميل ملف PDF</h1>
        <PDFDownloadLink
          document={<MyDocument />}
          fileName="user-report.pdf"
          style={{
            textDecoration: "none",
            padding: "10px 20px",
            color: "#fff",
            backgroundColor: "#007bff",
            borderRadius: 4,
          }}
        >
          {({ loading }) => (loading ? "جاري تحميل الملف..." : "تحميل ملف PDF")}
        </PDFDownloadLink>
      </div>
    );
};

export default Newpdf;
