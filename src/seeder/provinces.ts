const provinces = [
  { id: "0101", name: "CHACHAPOYAS", region: "01" },
  { id: "0102", name: "BAGUA", region: "01" },
  { id: "0103", name: "BONGARA", region: "01" },
  { id: "0104", name: "LUYA", region: "01" },
  { id: "0105", name: "RODRIGUEZ DE MENDOZA", region: "01" },
  { id: "0106", name: "CONDORCANQUI", region: "01" },
  { id: "0107", name: "UTCUBAMBA", region: "01" },
  { id: "0201", name: "HUARAZ", region: "02" },
  { id: "0202", name: "AIJA", region: "02" },
  { id: "0203", name: "BOLOGNESI", region: "02" },
  { id: "0204", name: "CARHUAZ", region: "02" },
  { id: "0205", name: "CASMA", region: "02" },
  { id: "0206", name: "CORONGO", region: "02" },
  { id: "0207", name: "HUAYLAS", region: "02" },
  { id: "0208", name: "HUARI", region: "02" },
  { id: "0209", name: "MARISCAL LUZURIAGA", region: "02" },
  { id: "0210", name: "PALLASCA", region: "02" },
  { id: "0211", name: "POMABAMBA", region: "02" },
  { id: "0212", name: "RECUAY", region: "02" },
  { id: "0213", name: "SANTA", region: "02" },
  { id: "0214", name: "SIHUAS", region: "02" },
  { id: "0215", name: "YUNGAY", region: "02" },
  { id: "0216", name: "ANTONIO RAIMONDI", region: "02" },
  { id: "0217", name: "CARLOS FERMIN FITZCARRALD", region: "02" },
  { id: "0218", name: "ASUNCION", region: "02" },
  { id: "0219", name: "HUARMEY", region: "02" },
  { id: "0220", name: "OCROS", region: "02" },
  { id: "0301", name: "ABANCAY", region: "03" },
  { id: "0302", name: "AYMARAES", region: "03" },
  { id: "0303", name: "ANDAHUAYLAS", region: "03" },
  { id: "0304", name: "ANTABAMBA", region: "03" },
  { id: "0305", name: "COTABAMBAS", region: "03" },
  { id: "0306", name: "GRAU", region: "03" },
  { id: "0307", name: "CHINCHEROS", region: "03" },
  { id: "0401", name: "AREQUIPA", region: "04" },
  { id: "0402", name: "CAYLLOMA", region: "04" },
  { id: "0403", name: "CAMANA", region: "04" },
  { id: "0404", name: "CARAVELI", region: "04" },
  { id: "0405", name: "CASTILLA", region: "04" },
  { id: "0406", name: "CONDESUYOS", region: "04" },
  { id: "0407", name: "ISLAY", region: "04" },
  { id: "0408", name: "LA UNION", region: "04" },
  { id: "0501", name: "HUAMANGA", region: "05" },
  { id: "0502", name: "CANGALLO", region: "05" },
  { id: "0503", name: "HUANTA", region: "05" },
  { id: "0504", name: "LA MAR", region: "05" },
  { id: "0505", name: "LUCANAS", region: "05" },
  { id: "0506", name: "PARINACOCHAS", region: "05" },
  { id: "0507", name: "VICTOR FAJARDO", region: "05" },
  { id: "0508", name: "HUANCA SANCOS", region: "05" },
  { id: "0509", name: "VILCAS HUAMAN", region: "05" },
  { id: "0510", name: "PAUCAR DEL SARA SARA", region: "05" },
  { id: "0511", name: "SUCRE", region: "05" },
  { id: "0601", name: "CAJAMARCA", region: "06" },
  { id: "0602", name: "CAJABAMBA", region: "06" },
  { id: "0603", name: "CELENDIN", region: "06" },
  { id: "0604", name: "CONTUMAZA", region: "06" },
  { id: "0605", name: "CUTERVO", region: "06" },
  { id: "0606", name: "CHOTA", region: "06" },
  { id: "0607", name: "HUALGAYOC", region: "06" },
  { id: "0608", name: "JAEN", region: "06" },
  { id: "0609", name: "SANTA CRUZ", region: "06" },
  { id: "0610", name: "SAN MIGUEL", region: "06" },
  { id: "0611", name: "SAN IGNACIO", region: "06" },
  { id: "0612", name: "SAN MARCOS", region: "06" },
  { id: "0613", name: "SAN PABLO", region: "06" },
  { id: "0701", name: "CUSCO", region: "07" },
  { id: "0702", name: "ACOMAYO", region: "07" },
  { id: "0703", name: "ANTA", region: "07" },
  { id: "0704", name: "CALCA", region: "07" },
  { id: "0705", name: "CANAS", region: "07" },
  { id: "0706", name: "CANCHIS", region: "07" },
  { id: "0707", name: "CHUMBIVILCAS", region: "07" },
  { id: "0708", name: "ESPINAR", region: "07" },
  { id: "0709", name: "LA CONVENCION", region: "07" },
  { id: "0710", name: "PARURO", region: "07" },
  { id: "0711", name: "PAUCARTAMBO", region: "07" },
  { id: "0712", name: "QUISPICANCHI", region: "07" },
  { id: "0713", name: "URUBAMBA", region: "07" },
  { id: "0801", name: "HUANCAVELICA", region: "08" },
  { id: "0802", name: "ACOBAMBA", region: "08" },
  { id: "0803", name: "ANGARAES", region: "08" },
  { id: "0804", name: "CASTROVIRREYNA", region: "08" },
  { id: "0805", name: "TAYACAJA", region: "08" },
  { id: "0806", name: "HUAYTARA", region: "08" },
  { id: "0807", name: "CHURCAMPA", region: "08" },
  { id: "0901", name: "HUANUCO", region: "09" },
  { id: "0902", name: "AMBO", region: "09" },
  { id: "0903", name: "DOS DE MAYO", region: "09" },
  { id: "0904", name: "HUAMALIES", region: "09" },
  { id: "0905", name: "MARAÑON", region: "09" },
  { id: "0906", name: "LEONCIO PRADO", region: "09" },
  { id: "0907", name: "PACHITEA", region: "09" },
  { id: "0908", name: "PUERTO INCA", region: "09" },
  { id: "0909", name: "HUACAYBAMBA", region: "09" },
  { id: "0910", name: "LAURICOCHA", region: "09" },
  { id: "0911", name: "YAROWILCA", region: "09" },
  { id: "1001", name: "ICA", region: "10" },
  { id: "1002", name: "CHINCHA", region: "10" },
  { id: "1003", name: "NAZCA", region: "10" },
  { id: "1004", name: "PISCO", region: "10" },
  { id: "1005", name: "PALPA", region: "10" },
  { id: "1101", name: "HUANCAYO", region: "11" },
  { id: "1102", name: "CONCEPCION", region: "11" },
  { id: "1103", name: "JAUJA", region: "11" },
  { id: "1104", name: "JUNIN", region: "11" },
  { id: "1105", name: "TARMA", region: "11" },
  { id: "1106", name: "YAULI", region: "11" },
  { id: "1107", name: "SATIPO", region: "11" },
  { id: "1108", name: "CHANCHAMAYO", region: "11" },
  { id: "1109", name: "CHUPACA", region: "11" },
  { id: "1201", name: "TRUJILLO", region: "12" },
  { id: "1202", name: "BOLIVAR", region: "12" },
  { id: "1203", name: "SANCHEZ CARRION", region: "12" },
  { id: "1204", name: "OTUZCO", region: "12" },
  { id: "1205", name: "PACASMAYO", region: "12" },
  { id: "1206", name: "PATAZ", region: "12" },
  { id: "1207", name: "SANTIAGO DE CHUCO", region: "12" },
  { id: "1208", name: "ASCOPE", region: "12" },
  { id: "1209", name: "CHEPEN", region: "12" },
  { id: "1210", name: "JULCAN", region: "12" },
  { id: "1211", name: "GRAN CHIMU", region: "12" },
  { id: "1212", name: "VIRU", region: "12" },
  { id: "1301", name: "CHICLAYO", region: "13" },
  { id: "1302", name: "FERREÑAFE", region: "13" },
  { id: "1303", name: "LAMBAYEQUE", region: "13" },
  { id: "1401", name: "LIMA", region: "14" },
  { id: "1402", name: "CAJATAMBO", region: "14" },
  { id: "1403", name: "CANTA", region: "14" },
  { id: "1404", name: "CAÑETE", region: "14" },
  { id: "1405", name: "HUAURA", region: "14" },
  { id: "1406", name: "HUAROCHIRI", region: "14" },
  { id: "1407", name: "YAUYOS", region: "14" },
  { id: "1408", name: "HUARAL", region: "14" },
  { id: "1409", name: "BARRANCA", region: "14" },
  { id: "1410", name: "OYON", region: "14" },
  { id: "1501", name: "MAYNAS", region: "15" },
  { id: "1502", name: "ALTO AMAZONAS", region: "15" },
  { id: "1503", name: "LORETO", region: "15" },
  { id: "1509", name: "PUTUMAYO", region: "15" },
  { id: "1504", name: "REQUENA", region: "15" },
  { id: "1505", name: "UCAYALI", region: "15" },
  { id: "1506", name: "MARISCAL RAMON CASTILLA", region: "15" },
  { id: "1507", name: "DATEM DEL MARAÑON", region: "15" },
  { id: "1601", name: "TAMBOPATA", region: "16" },
  { id: "1602", name: "MANU", region: "16" },
  { id: "1603", name: "TAHUAMANU", region: "16" },
  { id: "1701", name: "MARISCAL NIETO", region: "17" },
  { id: "1702", name: "GENERAL SANCHEZ CERRO", region: "17" },
  { id: "1703", name: "ILO", region: "17" },
  { id: "1801", name: "PASCO", region: "18" },
  { id: "1802", name: "DANIEL ALCIDES CARRION", region: "18" },
  { id: "1803", name: "OXAPAMPA", region: "18" },
  { id: "1901", name: "PIURA", region: "19" },
  { id: "1902", name: "AYABACA", region: "19" },
  { id: "1903", name: "HUANCABAMBA", region: "19" },
  { id: "1904", name: "MORROPON", region: "19" },
  { id: "1905", name: "PAITA", region: "19" },
  { id: "1906", name: "SULLANA", region: "19" },
  { id: "1907", name: "TALARA", region: "19" },
  { id: "1908", name: "SECHURA", region: "19" },
  { id: "2001", name: "PUNO", region: "20" },
  { id: "2002", name: "AZANGARO", region: "20" },
  { id: "2003", name: "CARABAYA", region: "20" },
  { id: "2004", name: "CHUCUITO", region: "20" },
  { id: "2005", name: "HUANCANE", region: "20" },
  { id: "2006", name: "LAMPA", region: "20" },
  { id: "2007", name: "MELGAR", region: "20" },
  { id: "2008", name: "SANDIA", region: "20" },
  { id: "2009", name: "SAN ROMAN", region: "20" },
  { id: "2010", name: "YUNGUYO", region: "20" },
  { id: "2011", name: "SAN ANTONIO DE PUTINA", region: "20" },
  { id: "2012", name: "EL COLLAO", region: "20" },
  { id: "2013", name: "MOHO", region: "20" },
  { id: "2101", name: "MOYOBAMBA", region: "21" },
  { id: "2102", name: "HUALLAGA", region: "21" },
  { id: "2103", name: "LAMAS", region: "21" },
  { id: "2104", name: "MARISCAL CACERES", region: "21" },
  { id: "2105", name: "RIOJA", region: "21" },
  { id: "2106", name: "SAN MARTIN", region: "21" },
  { id: "2107", name: "BELLAVISTA", region: "21" },
  { id: "2108", name: "TOCACHE", region: "21" },
  { id: "2109", name: "PICOTA", region: "21" },
  { id: "2110", name: "EL DORADO", region: "21" },
  { id: "2201", name: "TACNA", region: "22" },
  { id: "2202", name: "TARATA", region: "22" },
  { id: "2203", name: "JORGE BASADRE", region: "22" },
  { id: "2204", name: "CANDARAVE", region: "22" },
  { id: "2301", name: "TUMBES", region: "23" },
  { id: "2302", name: "CONTRALMIRANTE VILLAR", region: "23" },
  { id: "2303", name: "ZARUMILLA", region: "23" },
  { id: "2401", name: "CALLAO", region: "24" },
  { id: "2501", name: "CORONEL PORTILLO", region: "25" },
  { id: "2502", name: "PADRE ABAD", region: "25" },
  { id: "2503", name: "ATALAYA", region: "25" },
  { id: "2504", name: "PURUS", region: "25" }]

  export { provinces }