export const MsKodeMandoran = [
  {
    IDMsKodeMandoran: Math.floor(Math.random() * 9999),
    KelompokMandor: "01-Supervisi Kebun",
    KodeKelompokMandor: "01100101",
    Desc: "01100101-Mandoran Supervisi",
    KodeAfdeling: "E001AFDI01",
  },
  {
    IDMsKodeMandoran: Math.floor(Math.random() * 9999),
    KelompokMandor: "02-Panen",
    KodeKelompokMandor: "01100201",
    Desc: "01100201-Mandoran Panen-A",
    KodeAfdeling: "E001AFDI01",
  },
  {
    IDMsKodeMandoran: Math.floor(Math.random() * 9999),
    KelompokMandor: "02-Panen",
    KodeKelompokMandor: "01100202",
    Desc: "01100202-Mandoran Panen-B",
    KodeAfdeling: "E001AFDI01",
  },
];

/*
select
	kelman.Keterangan
	,kman.KodeKelompokMandor
	,man.Keterangan
	,afd.KodeAfdeling
from MsKodeMandoran as kman
left join MsMandoran as man on
	man.IDMsMandoran = kman.IDMsMandoran
left join MsAfdeling as afd on
	afd.IDMsAfdeling = kman.IDMsAfdeling
left join MsKelompokMandor as kelman on
	kelman.IDMsKelompokMandor = man.IDMsKelompokMandor
*/
