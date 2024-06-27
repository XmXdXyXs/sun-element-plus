import { defineComponent as xe, ref as se, watch as Pe, resolveComponent as ie, openBlock as w, createElementBlock as _, createVNode as oe, unref as z, isRef as Me, withCtx as ne, Fragment as ue, renderList as Ae, createBlock as ce, useSlots as Gt, computed as on, createElementVNode as ve, normalizeStyle as un, renderSlot as De, toDisplayString as ye, resolveDynamicComponent as Oe, createCommentVNode as pe, createTextVNode as In, normalizeClass as $n, mergeProps as Ie, onMounted as hn, nextTick as Kt, resolveDirective as Jt, withDirectives as Wt, withModifiers as Tn } from "vue";
const Wn = [
  {
    code: "11",
    name: "北京市",
    children: [
      {
        code: "1101",
        name: "市辖区",
        children: [
          {
            code: "110101",
            name: "东城区"
          },
          {
            code: "110102",
            name: "西城区"
          },
          {
            code: "110105",
            name: "朝阳区"
          },
          {
            code: "110106",
            name: "丰台区"
          },
          {
            code: "110107",
            name: "石景山区"
          },
          {
            code: "110108",
            name: "海淀区"
          },
          {
            code: "110109",
            name: "门头沟区"
          },
          {
            code: "110111",
            name: "房山区"
          },
          {
            code: "110112",
            name: "通州区"
          },
          {
            code: "110113",
            name: "顺义区"
          },
          {
            code: "110114",
            name: "昌平区"
          },
          {
            code: "110115",
            name: "大兴区"
          },
          {
            code: "110116",
            name: "怀柔区"
          },
          {
            code: "110117",
            name: "平谷区"
          },
          {
            code: "110118",
            name: "密云区"
          },
          {
            code: "110119",
            name: "延庆区"
          }
        ]
      }
    ]
  },
  {
    code: "12",
    name: "天津市",
    children: [
      {
        code: "1201",
        name: "市辖区",
        children: [
          {
            code: "120101",
            name: "和平区"
          },
          {
            code: "120102",
            name: "河东区"
          },
          {
            code: "120103",
            name: "河西区"
          },
          {
            code: "120104",
            name: "南开区"
          },
          {
            code: "120105",
            name: "河北区"
          },
          {
            code: "120106",
            name: "红桥区"
          },
          {
            code: "120110",
            name: "东丽区"
          },
          {
            code: "120111",
            name: "西青区"
          },
          {
            code: "120112",
            name: "津南区"
          },
          {
            code: "120113",
            name: "北辰区"
          },
          {
            code: "120114",
            name: "武清区"
          },
          {
            code: "120115",
            name: "宝坻区"
          },
          {
            code: "120116",
            name: "滨海新区"
          },
          {
            code: "120117",
            name: "宁河区"
          },
          {
            code: "120118",
            name: "静海区"
          },
          {
            code: "120119",
            name: "蓟州区"
          }
        ]
      }
    ]
  },
  {
    code: "13",
    name: "河北省",
    children: [
      {
        code: "1301",
        name: "石家庄市",
        children: [
          {
            code: "130102",
            name: "长安区"
          },
          {
            code: "130104",
            name: "桥西区"
          },
          {
            code: "130105",
            name: "新华区"
          },
          {
            code: "130107",
            name: "井陉矿区"
          },
          {
            code: "130108",
            name: "裕华区"
          },
          {
            code: "130109",
            name: "藁城区"
          },
          {
            code: "130110",
            name: "鹿泉区"
          },
          {
            code: "130111",
            name: "栾城区"
          },
          {
            code: "130121",
            name: "井陉县"
          },
          {
            code: "130123",
            name: "正定县"
          },
          {
            code: "130125",
            name: "行唐县"
          },
          {
            code: "130126",
            name: "灵寿县"
          },
          {
            code: "130127",
            name: "高邑县"
          },
          {
            code: "130128",
            name: "深泽县"
          },
          {
            code: "130129",
            name: "赞皇县"
          },
          {
            code: "130130",
            name: "无极县"
          },
          {
            code: "130131",
            name: "平山县"
          },
          {
            code: "130132",
            name: "元氏县"
          },
          {
            code: "130133",
            name: "赵县"
          },
          {
            code: "130171",
            name: "石家庄高新技术产业开发区"
          },
          {
            code: "130172",
            name: "石家庄循环化工园区"
          },
          {
            code: "130181",
            name: "辛集市"
          },
          {
            code: "130183",
            name: "晋州市"
          },
          {
            code: "130184",
            name: "新乐市"
          }
        ]
      },
      {
        code: "1302",
        name: "唐山市",
        children: [
          {
            code: "130202",
            name: "路南区"
          },
          {
            code: "130203",
            name: "路北区"
          },
          {
            code: "130204",
            name: "古冶区"
          },
          {
            code: "130205",
            name: "开平区"
          },
          {
            code: "130207",
            name: "丰南区"
          },
          {
            code: "130208",
            name: "丰润区"
          },
          {
            code: "130209",
            name: "曹妃甸区"
          },
          {
            code: "130224",
            name: "滦南县"
          },
          {
            code: "130225",
            name: "乐亭县"
          },
          {
            code: "130227",
            name: "迁西县"
          },
          {
            code: "130229",
            name: "玉田县"
          },
          {
            code: "130271",
            name: "河北唐山芦台经济开发区"
          },
          {
            code: "130272",
            name: "唐山市汉沽管理区"
          },
          {
            code: "130273",
            name: "唐山高新技术产业开发区"
          },
          {
            code: "130274",
            name: "河北唐山海港经济开发区"
          },
          {
            code: "130281",
            name: "遵化市"
          },
          {
            code: "130283",
            name: "迁安市"
          },
          {
            code: "130284",
            name: "滦州市"
          }
        ]
      },
      {
        code: "1303",
        name: "秦皇岛市",
        children: [
          {
            code: "130302",
            name: "海港区"
          },
          {
            code: "130303",
            name: "山海关区"
          },
          {
            code: "130304",
            name: "北戴河区"
          },
          {
            code: "130306",
            name: "抚宁区"
          },
          {
            code: "130321",
            name: "青龙满族自治县"
          },
          {
            code: "130322",
            name: "昌黎县"
          },
          {
            code: "130324",
            name: "卢龙县"
          },
          {
            code: "130371",
            name: "秦皇岛市经济技术开发区"
          },
          {
            code: "130372",
            name: "北戴河新区"
          }
        ]
      },
      {
        code: "1304",
        name: "邯郸市",
        children: [
          {
            code: "130402",
            name: "邯山区"
          },
          {
            code: "130403",
            name: "丛台区"
          },
          {
            code: "130404",
            name: "复兴区"
          },
          {
            code: "130406",
            name: "峰峰矿区"
          },
          {
            code: "130407",
            name: "肥乡区"
          },
          {
            code: "130408",
            name: "永年区"
          },
          {
            code: "130423",
            name: "临漳县"
          },
          {
            code: "130424",
            name: "成安县"
          },
          {
            code: "130425",
            name: "大名县"
          },
          {
            code: "130426",
            name: "涉县"
          },
          {
            code: "130427",
            name: "磁县"
          },
          {
            code: "130430",
            name: "邱县"
          },
          {
            code: "130431",
            name: "鸡泽县"
          },
          {
            code: "130432",
            name: "广平县"
          },
          {
            code: "130433",
            name: "馆陶县"
          },
          {
            code: "130434",
            name: "魏县"
          },
          {
            code: "130435",
            name: "曲周县"
          },
          {
            code: "130471",
            name: "邯郸经济技术开发区"
          },
          {
            code: "130473",
            name: "邯郸冀南新区"
          },
          {
            code: "130481",
            name: "武安市"
          }
        ]
      },
      {
        code: "1305",
        name: "邢台市",
        children: [
          {
            code: "130502",
            name: "襄都区"
          },
          {
            code: "130503",
            name: "信都区"
          },
          {
            code: "130505",
            name: "任泽区"
          },
          {
            code: "130506",
            name: "南和区"
          },
          {
            code: "130522",
            name: "临城县"
          },
          {
            code: "130523",
            name: "内丘县"
          },
          {
            code: "130524",
            name: "柏乡县"
          },
          {
            code: "130525",
            name: "隆尧县"
          },
          {
            code: "130528",
            name: "宁晋县"
          },
          {
            code: "130529",
            name: "巨鹿县"
          },
          {
            code: "130530",
            name: "新河县"
          },
          {
            code: "130531",
            name: "广宗县"
          },
          {
            code: "130532",
            name: "平乡县"
          },
          {
            code: "130533",
            name: "威县"
          },
          {
            code: "130534",
            name: "清河县"
          },
          {
            code: "130535",
            name: "临西县"
          },
          {
            code: "130571",
            name: "河北邢台经济开发区"
          },
          {
            code: "130581",
            name: "南宫市"
          },
          {
            code: "130582",
            name: "沙河市"
          }
        ]
      },
      {
        code: "1306",
        name: "保定市",
        children: [
          {
            code: "130602",
            name: "竞秀区"
          },
          {
            code: "130606",
            name: "莲池区"
          },
          {
            code: "130607",
            name: "满城区"
          },
          {
            code: "130608",
            name: "清苑区"
          },
          {
            code: "130609",
            name: "徐水区"
          },
          {
            code: "130623",
            name: "涞水县"
          },
          {
            code: "130624",
            name: "阜平县"
          },
          {
            code: "130626",
            name: "定兴县"
          },
          {
            code: "130627",
            name: "唐县"
          },
          {
            code: "130628",
            name: "高阳县"
          },
          {
            code: "130629",
            name: "容城县"
          },
          {
            code: "130630",
            name: "涞源县"
          },
          {
            code: "130631",
            name: "望都县"
          },
          {
            code: "130632",
            name: "安新县"
          },
          {
            code: "130633",
            name: "易县"
          },
          {
            code: "130634",
            name: "曲阳县"
          },
          {
            code: "130635",
            name: "蠡县"
          },
          {
            code: "130636",
            name: "顺平县"
          },
          {
            code: "130637",
            name: "博野县"
          },
          {
            code: "130638",
            name: "雄县"
          },
          {
            code: "130671",
            name: "保定高新技术产业开发区"
          },
          {
            code: "130672",
            name: "保定白沟新城"
          },
          {
            code: "130681",
            name: "涿州市"
          },
          {
            code: "130682",
            name: "定州市"
          },
          {
            code: "130683",
            name: "安国市"
          },
          {
            code: "130684",
            name: "高碑店市"
          }
        ]
      },
      {
        code: "1307",
        name: "张家口市",
        children: [
          {
            code: "130702",
            name: "桥东区"
          },
          {
            code: "130703",
            name: "桥西区"
          },
          {
            code: "130705",
            name: "宣化区"
          },
          {
            code: "130706",
            name: "下花园区"
          },
          {
            code: "130708",
            name: "万全区"
          },
          {
            code: "130709",
            name: "崇礼区"
          },
          {
            code: "130722",
            name: "张北县"
          },
          {
            code: "130723",
            name: "康保县"
          },
          {
            code: "130724",
            name: "沽源县"
          },
          {
            code: "130725",
            name: "尚义县"
          },
          {
            code: "130726",
            name: "蔚县"
          },
          {
            code: "130727",
            name: "阳原县"
          },
          {
            code: "130728",
            name: "怀安县"
          },
          {
            code: "130730",
            name: "怀来县"
          },
          {
            code: "130731",
            name: "涿鹿县"
          },
          {
            code: "130732",
            name: "赤城县"
          },
          {
            code: "130771",
            name: "张家口经济开发区"
          },
          {
            code: "130772",
            name: "张家口市察北管理区"
          },
          {
            code: "130773",
            name: "张家口市塞北管理区"
          }
        ]
      },
      {
        code: "1308",
        name: "承德市",
        children: [
          {
            code: "130802",
            name: "双桥区"
          },
          {
            code: "130803",
            name: "双滦区"
          },
          {
            code: "130804",
            name: "鹰手营子矿区"
          },
          {
            code: "130821",
            name: "承德县"
          },
          {
            code: "130822",
            name: "兴隆县"
          },
          {
            code: "130824",
            name: "滦平县"
          },
          {
            code: "130825",
            name: "隆化县"
          },
          {
            code: "130826",
            name: "丰宁满族自治县"
          },
          {
            code: "130827",
            name: "宽城满族自治县"
          },
          {
            code: "130828",
            name: "围场满族蒙古族自治县"
          },
          {
            code: "130871",
            name: "承德高新技术产业开发区"
          },
          {
            code: "130881",
            name: "平泉市"
          }
        ]
      },
      {
        code: "1309",
        name: "沧州市",
        children: [
          {
            code: "130902",
            name: "新华区"
          },
          {
            code: "130903",
            name: "运河区"
          },
          {
            code: "130921",
            name: "沧县"
          },
          {
            code: "130922",
            name: "青县"
          },
          {
            code: "130923",
            name: "东光县"
          },
          {
            code: "130924",
            name: "海兴县"
          },
          {
            code: "130925",
            name: "盐山县"
          },
          {
            code: "130926",
            name: "肃宁县"
          },
          {
            code: "130927",
            name: "南皮县"
          },
          {
            code: "130928",
            name: "吴桥县"
          },
          {
            code: "130929",
            name: "献县"
          },
          {
            code: "130930",
            name: "孟村回族自治县"
          },
          {
            code: "130971",
            name: "河北沧州经济开发区"
          },
          {
            code: "130972",
            name: "沧州高新技术产业开发区"
          },
          {
            code: "130973",
            name: "沧州渤海新区"
          },
          {
            code: "130981",
            name: "泊头市"
          },
          {
            code: "130982",
            name: "任丘市"
          },
          {
            code: "130983",
            name: "黄骅市"
          },
          {
            code: "130984",
            name: "河间市"
          }
        ]
      },
      {
        code: "1310",
        name: "廊坊市",
        children: [
          {
            code: "131002",
            name: "安次区"
          },
          {
            code: "131003",
            name: "广阳区"
          },
          {
            code: "131022",
            name: "固安县"
          },
          {
            code: "131023",
            name: "永清县"
          },
          {
            code: "131024",
            name: "香河县"
          },
          {
            code: "131025",
            name: "大城县"
          },
          {
            code: "131026",
            name: "文安县"
          },
          {
            code: "131028",
            name: "大厂回族自治县"
          },
          {
            code: "131071",
            name: "廊坊经济技术开发区"
          },
          {
            code: "131081",
            name: "霸州市"
          },
          {
            code: "131082",
            name: "三河市"
          }
        ]
      },
      {
        code: "1311",
        name: "衡水市",
        children: [
          {
            code: "131102",
            name: "桃城区"
          },
          {
            code: "131103",
            name: "冀州区"
          },
          {
            code: "131121",
            name: "枣强县"
          },
          {
            code: "131122",
            name: "武邑县"
          },
          {
            code: "131123",
            name: "武强县"
          },
          {
            code: "131124",
            name: "饶阳县"
          },
          {
            code: "131125",
            name: "安平县"
          },
          {
            code: "131126",
            name: "故城县"
          },
          {
            code: "131127",
            name: "景县"
          },
          {
            code: "131128",
            name: "阜城县"
          },
          {
            code: "131171",
            name: "河北衡水高新技术产业开发区"
          },
          {
            code: "131172",
            name: "衡水滨湖新区"
          },
          {
            code: "131182",
            name: "深州市"
          }
        ]
      }
    ]
  },
  {
    code: "14",
    name: "山西省",
    children: [
      {
        code: "1401",
        name: "太原市",
        children: [
          {
            code: "140105",
            name: "小店区"
          },
          {
            code: "140106",
            name: "迎泽区"
          },
          {
            code: "140107",
            name: "杏花岭区"
          },
          {
            code: "140108",
            name: "尖草坪区"
          },
          {
            code: "140109",
            name: "万柏林区"
          },
          {
            code: "140110",
            name: "晋源区"
          },
          {
            code: "140121",
            name: "清徐县"
          },
          {
            code: "140122",
            name: "阳曲县"
          },
          {
            code: "140123",
            name: "娄烦县"
          },
          {
            code: "140171",
            name: "山西转型综合改革示范区"
          },
          {
            code: "140181",
            name: "古交市"
          }
        ]
      },
      {
        code: "1402",
        name: "大同市",
        children: [
          {
            code: "140212",
            name: "新荣区"
          },
          {
            code: "140213",
            name: "平城区"
          },
          {
            code: "140214",
            name: "云冈区"
          },
          {
            code: "140215",
            name: "云州区"
          },
          {
            code: "140221",
            name: "阳高县"
          },
          {
            code: "140222",
            name: "天镇县"
          },
          {
            code: "140223",
            name: "广灵县"
          },
          {
            code: "140224",
            name: "灵丘县"
          },
          {
            code: "140225",
            name: "浑源县"
          },
          {
            code: "140226",
            name: "左云县"
          },
          {
            code: "140271",
            name: "山西大同经济开发区"
          }
        ]
      },
      {
        code: "1403",
        name: "阳泉市",
        children: [
          {
            code: "140302",
            name: "城区"
          },
          {
            code: "140303",
            name: "矿区"
          },
          {
            code: "140311",
            name: "郊区"
          },
          {
            code: "140321",
            name: "平定县"
          },
          {
            code: "140322",
            name: "盂县"
          }
        ]
      },
      {
        code: "1404",
        name: "长治市",
        children: [
          {
            code: "140403",
            name: "潞州区"
          },
          {
            code: "140404",
            name: "上党区"
          },
          {
            code: "140405",
            name: "屯留区"
          },
          {
            code: "140406",
            name: "潞城区"
          },
          {
            code: "140423",
            name: "襄垣县"
          },
          {
            code: "140425",
            name: "平顺县"
          },
          {
            code: "140426",
            name: "黎城县"
          },
          {
            code: "140427",
            name: "壶关县"
          },
          {
            code: "140428",
            name: "长子县"
          },
          {
            code: "140429",
            name: "武乡县"
          },
          {
            code: "140430",
            name: "沁县"
          },
          {
            code: "140431",
            name: "沁源县"
          },
          {
            code: "140471",
            name: "山西长治高新技术产业园区"
          }
        ]
      },
      {
        code: "1405",
        name: "晋城市",
        children: [
          {
            code: "140502",
            name: "城区"
          },
          {
            code: "140521",
            name: "沁水县"
          },
          {
            code: "140522",
            name: "阳城县"
          },
          {
            code: "140524",
            name: "陵川县"
          },
          {
            code: "140525",
            name: "泽州县"
          },
          {
            code: "140581",
            name: "高平市"
          }
        ]
      },
      {
        code: "1406",
        name: "朔州市",
        children: [
          {
            code: "140602",
            name: "朔城区"
          },
          {
            code: "140603",
            name: "平鲁区"
          },
          {
            code: "140621",
            name: "山阴县"
          },
          {
            code: "140622",
            name: "应县"
          },
          {
            code: "140623",
            name: "右玉县"
          },
          {
            code: "140671",
            name: "山西朔州经济开发区"
          },
          {
            code: "140681",
            name: "怀仁市"
          }
        ]
      },
      {
        code: "1407",
        name: "晋中市",
        children: [
          {
            code: "140702",
            name: "榆次区"
          },
          {
            code: "140703",
            name: "太谷区"
          },
          {
            code: "140721",
            name: "榆社县"
          },
          {
            code: "140722",
            name: "左权县"
          },
          {
            code: "140723",
            name: "和顺县"
          },
          {
            code: "140724",
            name: "昔阳县"
          },
          {
            code: "140725",
            name: "寿阳县"
          },
          {
            code: "140727",
            name: "祁县"
          },
          {
            code: "140728",
            name: "平遥县"
          },
          {
            code: "140729",
            name: "灵石县"
          },
          {
            code: "140781",
            name: "介休市"
          }
        ]
      },
      {
        code: "1408",
        name: "运城市",
        children: [
          {
            code: "140802",
            name: "盐湖区"
          },
          {
            code: "140821",
            name: "临猗县"
          },
          {
            code: "140822",
            name: "万荣县"
          },
          {
            code: "140823",
            name: "闻喜县"
          },
          {
            code: "140824",
            name: "稷山县"
          },
          {
            code: "140825",
            name: "新绛县"
          },
          {
            code: "140826",
            name: "绛县"
          },
          {
            code: "140827",
            name: "垣曲县"
          },
          {
            code: "140828",
            name: "夏县"
          },
          {
            code: "140829",
            name: "平陆县"
          },
          {
            code: "140830",
            name: "芮城县"
          },
          {
            code: "140881",
            name: "永济市"
          },
          {
            code: "140882",
            name: "河津市"
          }
        ]
      },
      {
        code: "1409",
        name: "忻州市",
        children: [
          {
            code: "140902",
            name: "忻府区"
          },
          {
            code: "140921",
            name: "定襄县"
          },
          {
            code: "140922",
            name: "五台县"
          },
          {
            code: "140923",
            name: "代县"
          },
          {
            code: "140924",
            name: "繁峙县"
          },
          {
            code: "140925",
            name: "宁武县"
          },
          {
            code: "140926",
            name: "静乐县"
          },
          {
            code: "140927",
            name: "神池县"
          },
          {
            code: "140928",
            name: "五寨县"
          },
          {
            code: "140929",
            name: "岢岚县"
          },
          {
            code: "140930",
            name: "河曲县"
          },
          {
            code: "140931",
            name: "保德县"
          },
          {
            code: "140932",
            name: "偏关县"
          },
          {
            code: "140971",
            name: "五台山风景名胜区"
          },
          {
            code: "140981",
            name: "原平市"
          }
        ]
      },
      {
        code: "1410",
        name: "临汾市",
        children: [
          {
            code: "141002",
            name: "尧都区"
          },
          {
            code: "141021",
            name: "曲沃县"
          },
          {
            code: "141022",
            name: "翼城县"
          },
          {
            code: "141023",
            name: "襄汾县"
          },
          {
            code: "141024",
            name: "洪洞县"
          },
          {
            code: "141025",
            name: "古县"
          },
          {
            code: "141026",
            name: "安泽县"
          },
          {
            code: "141027",
            name: "浮山县"
          },
          {
            code: "141028",
            name: "吉县"
          },
          {
            code: "141029",
            name: "乡宁县"
          },
          {
            code: "141030",
            name: "大宁县"
          },
          {
            code: "141031",
            name: "隰县"
          },
          {
            code: "141032",
            name: "永和县"
          },
          {
            code: "141033",
            name: "蒲县"
          },
          {
            code: "141034",
            name: "汾西县"
          },
          {
            code: "141081",
            name: "侯马市"
          },
          {
            code: "141082",
            name: "霍州市"
          }
        ]
      },
      {
        code: "1411",
        name: "吕梁市",
        children: [
          {
            code: "141102",
            name: "离石区"
          },
          {
            code: "141121",
            name: "文水县"
          },
          {
            code: "141122",
            name: "交城县"
          },
          {
            code: "141123",
            name: "兴县"
          },
          {
            code: "141124",
            name: "临县"
          },
          {
            code: "141125",
            name: "柳林县"
          },
          {
            code: "141126",
            name: "石楼县"
          },
          {
            code: "141127",
            name: "岚县"
          },
          {
            code: "141128",
            name: "方山县"
          },
          {
            code: "141129",
            name: "中阳县"
          },
          {
            code: "141130",
            name: "交口县"
          },
          {
            code: "141181",
            name: "孝义市"
          },
          {
            code: "141182",
            name: "汾阳市"
          }
        ]
      }
    ]
  },
  {
    code: "15",
    name: "内蒙古自治区",
    children: [
      {
        code: "1501",
        name: "呼和浩特市",
        children: [
          {
            code: "150102",
            name: "新城区"
          },
          {
            code: "150103",
            name: "回民区"
          },
          {
            code: "150104",
            name: "玉泉区"
          },
          {
            code: "150105",
            name: "赛罕区"
          },
          {
            code: "150121",
            name: "土默特左旗"
          },
          {
            code: "150122",
            name: "托克托县"
          },
          {
            code: "150123",
            name: "和林格尔县"
          },
          {
            code: "150124",
            name: "清水河县"
          },
          {
            code: "150125",
            name: "武川县"
          },
          {
            code: "150172",
            name: "呼和浩特经济技术开发区"
          }
        ]
      },
      {
        code: "1502",
        name: "包头市",
        children: [
          {
            code: "150202",
            name: "东河区"
          },
          {
            code: "150203",
            name: "昆都仑区"
          },
          {
            code: "150204",
            name: "青山区"
          },
          {
            code: "150205",
            name: "石拐区"
          },
          {
            code: "150206",
            name: "白云鄂博矿区"
          },
          {
            code: "150207",
            name: "九原区"
          },
          {
            code: "150221",
            name: "土默特右旗"
          },
          {
            code: "150222",
            name: "固阳县"
          },
          {
            code: "150223",
            name: "达尔罕茂明安联合旗"
          },
          {
            code: "150271",
            name: "包头稀土高新技术产业开发区"
          }
        ]
      },
      {
        code: "1503",
        name: "乌海市",
        children: [
          {
            code: "150302",
            name: "海勃湾区"
          },
          {
            code: "150303",
            name: "海南区"
          },
          {
            code: "150304",
            name: "乌达区"
          }
        ]
      },
      {
        code: "1504",
        name: "赤峰市",
        children: [
          {
            code: "150402",
            name: "红山区"
          },
          {
            code: "150403",
            name: "元宝山区"
          },
          {
            code: "150404",
            name: "松山区"
          },
          {
            code: "150421",
            name: "阿鲁科尔沁旗"
          },
          {
            code: "150422",
            name: "巴林左旗"
          },
          {
            code: "150423",
            name: "巴林右旗"
          },
          {
            code: "150424",
            name: "林西县"
          },
          {
            code: "150425",
            name: "克什克腾旗"
          },
          {
            code: "150426",
            name: "翁牛特旗"
          },
          {
            code: "150428",
            name: "喀喇沁旗"
          },
          {
            code: "150429",
            name: "宁城县"
          },
          {
            code: "150430",
            name: "敖汉旗"
          }
        ]
      },
      {
        code: "1505",
        name: "通辽市",
        children: [
          {
            code: "150502",
            name: "科尔沁区"
          },
          {
            code: "150521",
            name: "科尔沁左翼中旗"
          },
          {
            code: "150522",
            name: "科尔沁左翼后旗"
          },
          {
            code: "150523",
            name: "开鲁县"
          },
          {
            code: "150524",
            name: "库伦旗"
          },
          {
            code: "150525",
            name: "奈曼旗"
          },
          {
            code: "150526",
            name: "扎鲁特旗"
          },
          {
            code: "150571",
            name: "通辽经济技术开发区"
          },
          {
            code: "150581",
            name: "霍林郭勒市"
          }
        ]
      },
      {
        code: "1506",
        name: "鄂尔多斯市",
        children: [
          {
            code: "150602",
            name: "东胜区"
          },
          {
            code: "150603",
            name: "康巴什区"
          },
          {
            code: "150621",
            name: "达拉特旗"
          },
          {
            code: "150622",
            name: "准格尔旗"
          },
          {
            code: "150623",
            name: "鄂托克前旗"
          },
          {
            code: "150624",
            name: "鄂托克旗"
          },
          {
            code: "150625",
            name: "杭锦旗"
          },
          {
            code: "150626",
            name: "乌审旗"
          },
          {
            code: "150627",
            name: "伊金霍洛旗"
          }
        ]
      },
      {
        code: "1507",
        name: "呼伦贝尔市",
        children: [
          {
            code: "150702",
            name: "海拉尔区"
          },
          {
            code: "150703",
            name: "扎赉诺尔区"
          },
          {
            code: "150721",
            name: "阿荣旗"
          },
          {
            code: "150722",
            name: "莫力达瓦达斡尔族自治旗"
          },
          {
            code: "150723",
            name: "鄂伦春自治旗"
          },
          {
            code: "150724",
            name: "鄂温克族自治旗"
          },
          {
            code: "150725",
            name: "陈巴尔虎旗"
          },
          {
            code: "150726",
            name: "新巴尔虎左旗"
          },
          {
            code: "150727",
            name: "新巴尔虎右旗"
          },
          {
            code: "150781",
            name: "满洲里市"
          },
          {
            code: "150782",
            name: "牙克石市"
          },
          {
            code: "150783",
            name: "扎兰屯市"
          },
          {
            code: "150784",
            name: "额尔古纳市"
          },
          {
            code: "150785",
            name: "根河市"
          }
        ]
      },
      {
        code: "1508",
        name: "巴彦淖尔市",
        children: [
          {
            code: "150802",
            name: "临河区"
          },
          {
            code: "150821",
            name: "五原县"
          },
          {
            code: "150822",
            name: "磴口县"
          },
          {
            code: "150823",
            name: "乌拉特前旗"
          },
          {
            code: "150824",
            name: "乌拉特中旗"
          },
          {
            code: "150825",
            name: "乌拉特后旗"
          },
          {
            code: "150826",
            name: "杭锦后旗"
          }
        ]
      },
      {
        code: "1509",
        name: "乌兰察布市",
        children: [
          {
            code: "150902",
            name: "集宁区"
          },
          {
            code: "150921",
            name: "卓资县"
          },
          {
            code: "150922",
            name: "化德县"
          },
          {
            code: "150923",
            name: "商都县"
          },
          {
            code: "150924",
            name: "兴和县"
          },
          {
            code: "150925",
            name: "凉城县"
          },
          {
            code: "150926",
            name: "察哈尔右翼前旗"
          },
          {
            code: "150927",
            name: "察哈尔右翼中旗"
          },
          {
            code: "150928",
            name: "察哈尔右翼后旗"
          },
          {
            code: "150929",
            name: "四子王旗"
          },
          {
            code: "150981",
            name: "丰镇市"
          }
        ]
      },
      {
        code: "1522",
        name: "兴安盟",
        children: [
          {
            code: "152201",
            name: "乌兰浩特市"
          },
          {
            code: "152202",
            name: "阿尔山市"
          },
          {
            code: "152221",
            name: "科尔沁右翼前旗"
          },
          {
            code: "152222",
            name: "科尔沁右翼中旗"
          },
          {
            code: "152223",
            name: "扎赉特旗"
          },
          {
            code: "152224",
            name: "突泉县"
          }
        ]
      },
      {
        code: "1525",
        name: "锡林郭勒盟",
        children: [
          {
            code: "152501",
            name: "二连浩特市"
          },
          {
            code: "152502",
            name: "锡林浩特市"
          },
          {
            code: "152522",
            name: "阿巴嘎旗"
          },
          {
            code: "152523",
            name: "苏尼特左旗"
          },
          {
            code: "152524",
            name: "苏尼特右旗"
          },
          {
            code: "152525",
            name: "东乌珠穆沁旗"
          },
          {
            code: "152526",
            name: "西乌珠穆沁旗"
          },
          {
            code: "152527",
            name: "太仆寺旗"
          },
          {
            code: "152528",
            name: "镶黄旗"
          },
          {
            code: "152529",
            name: "正镶白旗"
          },
          {
            code: "152530",
            name: "正蓝旗"
          },
          {
            code: "152531",
            name: "多伦县"
          },
          {
            code: "152571",
            name: "乌拉盖管委会"
          }
        ]
      },
      {
        code: "1529",
        name: "阿拉善盟",
        children: [
          {
            code: "152921",
            name: "阿拉善左旗"
          },
          {
            code: "152922",
            name: "阿拉善右旗"
          },
          {
            code: "152923",
            name: "额济纳旗"
          },
          {
            code: "152971",
            name: "内蒙古阿拉善经济开发区"
          }
        ]
      }
    ]
  },
  {
    code: "21",
    name: "辽宁省",
    children: [
      {
        code: "2101",
        name: "沈阳市",
        children: [
          {
            code: "210102",
            name: "和平区"
          },
          {
            code: "210103",
            name: "沈河区"
          },
          {
            code: "210104",
            name: "大东区"
          },
          {
            code: "210105",
            name: "皇姑区"
          },
          {
            code: "210106",
            name: "铁西区"
          },
          {
            code: "210111",
            name: "苏家屯区"
          },
          {
            code: "210112",
            name: "浑南区"
          },
          {
            code: "210113",
            name: "沈北新区"
          },
          {
            code: "210114",
            name: "于洪区"
          },
          {
            code: "210115",
            name: "辽中区"
          },
          {
            code: "210123",
            name: "康平县"
          },
          {
            code: "210124",
            name: "法库县"
          },
          {
            code: "210181",
            name: "新民市"
          }
        ]
      },
      {
        code: "2102",
        name: "大连市",
        children: [
          {
            code: "210202",
            name: "中山区"
          },
          {
            code: "210203",
            name: "西岗区"
          },
          {
            code: "210204",
            name: "沙河口区"
          },
          {
            code: "210211",
            name: "甘井子区"
          },
          {
            code: "210212",
            name: "旅顺口区"
          },
          {
            code: "210213",
            name: "金州区"
          },
          {
            code: "210214",
            name: "普兰店区"
          },
          {
            code: "210224",
            name: "长海县"
          },
          {
            code: "210281",
            name: "瓦房店市"
          },
          {
            code: "210283",
            name: "庄河市"
          }
        ]
      },
      {
        code: "2103",
        name: "鞍山市",
        children: [
          {
            code: "210302",
            name: "铁东区"
          },
          {
            code: "210303",
            name: "铁西区"
          },
          {
            code: "210304",
            name: "立山区"
          },
          {
            code: "210311",
            name: "千山区"
          },
          {
            code: "210321",
            name: "台安县"
          },
          {
            code: "210323",
            name: "岫岩满族自治县"
          },
          {
            code: "210381",
            name: "海城市"
          }
        ]
      },
      {
        code: "2104",
        name: "抚顺市",
        children: [
          {
            code: "210402",
            name: "新抚区"
          },
          {
            code: "210403",
            name: "东洲区"
          },
          {
            code: "210404",
            name: "望花区"
          },
          {
            code: "210411",
            name: "顺城区"
          },
          {
            code: "210421",
            name: "抚顺县"
          },
          {
            code: "210422",
            name: "新宾满族自治县"
          },
          {
            code: "210423",
            name: "清原满族自治县"
          }
        ]
      },
      {
        code: "2105",
        name: "本溪市",
        children: [
          {
            code: "210502",
            name: "平山区"
          },
          {
            code: "210503",
            name: "溪湖区"
          },
          {
            code: "210504",
            name: "明山区"
          },
          {
            code: "210505",
            name: "南芬区"
          },
          {
            code: "210521",
            name: "本溪满族自治县"
          },
          {
            code: "210522",
            name: "桓仁满族自治县"
          }
        ]
      },
      {
        code: "2106",
        name: "丹东市",
        children: [
          {
            code: "210602",
            name: "元宝区"
          },
          {
            code: "210603",
            name: "振兴区"
          },
          {
            code: "210604",
            name: "振安区"
          },
          {
            code: "210624",
            name: "宽甸满族自治县"
          },
          {
            code: "210681",
            name: "东港市"
          },
          {
            code: "210682",
            name: "凤城市"
          }
        ]
      },
      {
        code: "2107",
        name: "锦州市",
        children: [
          {
            code: "210702",
            name: "古塔区"
          },
          {
            code: "210703",
            name: "凌河区"
          },
          {
            code: "210711",
            name: "太和区"
          },
          {
            code: "210726",
            name: "黑山县"
          },
          {
            code: "210727",
            name: "义县"
          },
          {
            code: "210781",
            name: "凌海市"
          },
          {
            code: "210782",
            name: "北镇市"
          }
        ]
      },
      {
        code: "2108",
        name: "营口市",
        children: [
          {
            code: "210802",
            name: "站前区"
          },
          {
            code: "210803",
            name: "西市区"
          },
          {
            code: "210804",
            name: "鲅鱼圈区"
          },
          {
            code: "210811",
            name: "老边区"
          },
          {
            code: "210881",
            name: "盖州市"
          },
          {
            code: "210882",
            name: "大石桥市"
          }
        ]
      },
      {
        code: "2109",
        name: "阜新市",
        children: [
          {
            code: "210902",
            name: "海州区"
          },
          {
            code: "210903",
            name: "新邱区"
          },
          {
            code: "210904",
            name: "太平区"
          },
          {
            code: "210905",
            name: "清河门区"
          },
          {
            code: "210911",
            name: "细河区"
          },
          {
            code: "210921",
            name: "阜新蒙古族自治县"
          },
          {
            code: "210922",
            name: "彰武县"
          }
        ]
      },
      {
        code: "2110",
        name: "辽阳市",
        children: [
          {
            code: "211002",
            name: "白塔区"
          },
          {
            code: "211003",
            name: "文圣区"
          },
          {
            code: "211004",
            name: "宏伟区"
          },
          {
            code: "211005",
            name: "弓长岭区"
          },
          {
            code: "211011",
            name: "太子河区"
          },
          {
            code: "211021",
            name: "辽阳县"
          },
          {
            code: "211081",
            name: "灯塔市"
          }
        ]
      },
      {
        code: "2111",
        name: "盘锦市",
        children: [
          {
            code: "211102",
            name: "双台子区"
          },
          {
            code: "211103",
            name: "兴隆台区"
          },
          {
            code: "211104",
            name: "大洼区"
          },
          {
            code: "211122",
            name: "盘山县"
          }
        ]
      },
      {
        code: "2112",
        name: "铁岭市",
        children: [
          {
            code: "211202",
            name: "银州区"
          },
          {
            code: "211204",
            name: "清河区"
          },
          {
            code: "211221",
            name: "铁岭县"
          },
          {
            code: "211223",
            name: "西丰县"
          },
          {
            code: "211224",
            name: "昌图县"
          },
          {
            code: "211281",
            name: "调兵山市"
          },
          {
            code: "211282",
            name: "开原市"
          }
        ]
      },
      {
        code: "2113",
        name: "朝阳市",
        children: [
          {
            code: "211302",
            name: "双塔区"
          },
          {
            code: "211303",
            name: "龙城区"
          },
          {
            code: "211321",
            name: "朝阳县"
          },
          {
            code: "211322",
            name: "建平县"
          },
          {
            code: "211324",
            name: "喀喇沁左翼蒙古族自治县"
          },
          {
            code: "211381",
            name: "北票市"
          },
          {
            code: "211382",
            name: "凌源市"
          }
        ]
      },
      {
        code: "2114",
        name: "葫芦岛市",
        children: [
          {
            code: "211402",
            name: "连山区"
          },
          {
            code: "211403",
            name: "龙港区"
          },
          {
            code: "211404",
            name: "南票区"
          },
          {
            code: "211421",
            name: "绥中县"
          },
          {
            code: "211422",
            name: "建昌县"
          },
          {
            code: "211481",
            name: "兴城市"
          }
        ]
      }
    ]
  },
  {
    code: "22",
    name: "吉林省",
    children: [
      {
        code: "2201",
        name: "长春市",
        children: [
          {
            code: "220102",
            name: "南关区"
          },
          {
            code: "220103",
            name: "宽城区"
          },
          {
            code: "220104",
            name: "朝阳区"
          },
          {
            code: "220105",
            name: "二道区"
          },
          {
            code: "220106",
            name: "绿园区"
          },
          {
            code: "220112",
            name: "双阳区"
          },
          {
            code: "220113",
            name: "九台区"
          },
          {
            code: "220122",
            name: "农安县"
          },
          {
            code: "220171",
            name: "长春经济技术开发区"
          },
          {
            code: "220172",
            name: "长春净月高新技术产业开发区"
          },
          {
            code: "220173",
            name: "长春高新技术产业开发区"
          },
          {
            code: "220174",
            name: "长春汽车经济技术开发区"
          },
          {
            code: "220182",
            name: "榆树市"
          },
          {
            code: "220183",
            name: "德惠市"
          },
          {
            code: "220184",
            name: "公主岭市"
          }
        ]
      },
      {
        code: "2202",
        name: "吉林市",
        children: [
          {
            code: "220202",
            name: "昌邑区"
          },
          {
            code: "220203",
            name: "龙潭区"
          },
          {
            code: "220204",
            name: "船营区"
          },
          {
            code: "220211",
            name: "丰满区"
          },
          {
            code: "220221",
            name: "永吉县"
          },
          {
            code: "220271",
            name: "吉林经济开发区"
          },
          {
            code: "220272",
            name: "吉林高新技术产业开发区"
          },
          {
            code: "220273",
            name: "吉林中国新加坡食品区"
          },
          {
            code: "220281",
            name: "蛟河市"
          },
          {
            code: "220282",
            name: "桦甸市"
          },
          {
            code: "220283",
            name: "舒兰市"
          },
          {
            code: "220284",
            name: "磐石市"
          }
        ]
      },
      {
        code: "2203",
        name: "四平市",
        children: [
          {
            code: "220302",
            name: "铁西区"
          },
          {
            code: "220303",
            name: "铁东区"
          },
          {
            code: "220322",
            name: "梨树县"
          },
          {
            code: "220323",
            name: "伊通满族自治县"
          },
          {
            code: "220382",
            name: "双辽市"
          }
        ]
      },
      {
        code: "2204",
        name: "辽源市",
        children: [
          {
            code: "220402",
            name: "龙山区"
          },
          {
            code: "220403",
            name: "西安区"
          },
          {
            code: "220421",
            name: "东丰县"
          },
          {
            code: "220422",
            name: "东辽县"
          }
        ]
      },
      {
        code: "2205",
        name: "通化市",
        children: [
          {
            code: "220502",
            name: "东昌区"
          },
          {
            code: "220503",
            name: "二道江区"
          },
          {
            code: "220521",
            name: "通化县"
          },
          {
            code: "220523",
            name: "辉南县"
          },
          {
            code: "220524",
            name: "柳河县"
          },
          {
            code: "220581",
            name: "梅河口市"
          },
          {
            code: "220582",
            name: "集安市"
          }
        ]
      },
      {
        code: "2206",
        name: "白山市",
        children: [
          {
            code: "220602",
            name: "浑江区"
          },
          {
            code: "220605",
            name: "江源区"
          },
          {
            code: "220621",
            name: "抚松县"
          },
          {
            code: "220622",
            name: "靖宇县"
          },
          {
            code: "220623",
            name: "长白朝鲜族自治县"
          },
          {
            code: "220681",
            name: "临江市"
          }
        ]
      },
      {
        code: "2207",
        name: "松原市",
        children: [
          {
            code: "220702",
            name: "宁江区"
          },
          {
            code: "220721",
            name: "前郭尔罗斯蒙古族自治县"
          },
          {
            code: "220722",
            name: "长岭县"
          },
          {
            code: "220723",
            name: "乾安县"
          },
          {
            code: "220771",
            name: "吉林松原经济开发区"
          },
          {
            code: "220781",
            name: "扶余市"
          }
        ]
      },
      {
        code: "2208",
        name: "白城市",
        children: [
          {
            code: "220802",
            name: "洮北区"
          },
          {
            code: "220821",
            name: "镇赉县"
          },
          {
            code: "220822",
            name: "通榆县"
          },
          {
            code: "220871",
            name: "吉林白城经济开发区"
          },
          {
            code: "220881",
            name: "洮南市"
          },
          {
            code: "220882",
            name: "大安市"
          }
        ]
      },
      {
        code: "2224",
        name: "延边朝鲜族自治州",
        children: [
          {
            code: "222401",
            name: "延吉市"
          },
          {
            code: "222402",
            name: "图们市"
          },
          {
            code: "222403",
            name: "敦化市"
          },
          {
            code: "222404",
            name: "珲春市"
          },
          {
            code: "222405",
            name: "龙井市"
          },
          {
            code: "222406",
            name: "和龙市"
          },
          {
            code: "222424",
            name: "汪清县"
          },
          {
            code: "222426",
            name: "安图县"
          }
        ]
      }
    ]
  },
  {
    code: "23",
    name: "黑龙江省",
    children: [
      {
        code: "2301",
        name: "哈尔滨市",
        children: [
          {
            code: "230102",
            name: "道里区"
          },
          {
            code: "230103",
            name: "南岗区"
          },
          {
            code: "230104",
            name: "道外区"
          },
          {
            code: "230108",
            name: "平房区"
          },
          {
            code: "230109",
            name: "松北区"
          },
          {
            code: "230110",
            name: "香坊区"
          },
          {
            code: "230111",
            name: "呼兰区"
          },
          {
            code: "230112",
            name: "阿城区"
          },
          {
            code: "230113",
            name: "双城区"
          },
          {
            code: "230123",
            name: "依兰县"
          },
          {
            code: "230124",
            name: "方正县"
          },
          {
            code: "230125",
            name: "宾县"
          },
          {
            code: "230126",
            name: "巴彦县"
          },
          {
            code: "230127",
            name: "木兰县"
          },
          {
            code: "230128",
            name: "通河县"
          },
          {
            code: "230129",
            name: "延寿县"
          },
          {
            code: "230183",
            name: "尚志市"
          },
          {
            code: "230184",
            name: "五常市"
          }
        ]
      },
      {
        code: "2302",
        name: "齐齐哈尔市",
        children: [
          {
            code: "230202",
            name: "龙沙区"
          },
          {
            code: "230203",
            name: "建华区"
          },
          {
            code: "230204",
            name: "铁锋区"
          },
          {
            code: "230205",
            name: "昂昂溪区"
          },
          {
            code: "230206",
            name: "富拉尔基区"
          },
          {
            code: "230207",
            name: "碾子山区"
          },
          {
            code: "230208",
            name: "梅里斯达斡尔族区"
          },
          {
            code: "230221",
            name: "龙江县"
          },
          {
            code: "230223",
            name: "依安县"
          },
          {
            code: "230224",
            name: "泰来县"
          },
          {
            code: "230225",
            name: "甘南县"
          },
          {
            code: "230227",
            name: "富裕县"
          },
          {
            code: "230229",
            name: "克山县"
          },
          {
            code: "230230",
            name: "克东县"
          },
          {
            code: "230231",
            name: "拜泉县"
          },
          {
            code: "230281",
            name: "讷河市"
          }
        ]
      },
      {
        code: "2303",
        name: "鸡西市",
        children: [
          {
            code: "230302",
            name: "鸡冠区"
          },
          {
            code: "230303",
            name: "恒山区"
          },
          {
            code: "230304",
            name: "滴道区"
          },
          {
            code: "230305",
            name: "梨树区"
          },
          {
            code: "230306",
            name: "城子河区"
          },
          {
            code: "230307",
            name: "麻山区"
          },
          {
            code: "230321",
            name: "鸡东县"
          },
          {
            code: "230381",
            name: "虎林市"
          },
          {
            code: "230382",
            name: "密山市"
          }
        ]
      },
      {
        code: "2304",
        name: "鹤岗市",
        children: [
          {
            code: "230402",
            name: "向阳区"
          },
          {
            code: "230403",
            name: "工农区"
          },
          {
            code: "230404",
            name: "南山区"
          },
          {
            code: "230405",
            name: "兴安区"
          },
          {
            code: "230406",
            name: "东山区"
          },
          {
            code: "230407",
            name: "兴山区"
          },
          {
            code: "230421",
            name: "萝北县"
          },
          {
            code: "230422",
            name: "绥滨县"
          }
        ]
      },
      {
        code: "2305",
        name: "双鸭山市",
        children: [
          {
            code: "230502",
            name: "尖山区"
          },
          {
            code: "230503",
            name: "岭东区"
          },
          {
            code: "230505",
            name: "四方台区"
          },
          {
            code: "230506",
            name: "宝山区"
          },
          {
            code: "230521",
            name: "集贤县"
          },
          {
            code: "230522",
            name: "友谊县"
          },
          {
            code: "230523",
            name: "宝清县"
          },
          {
            code: "230524",
            name: "饶河县"
          }
        ]
      },
      {
        code: "2306",
        name: "大庆市",
        children: [
          {
            code: "230602",
            name: "萨尔图区"
          },
          {
            code: "230603",
            name: "龙凤区"
          },
          {
            code: "230604",
            name: "让胡路区"
          },
          {
            code: "230605",
            name: "红岗区"
          },
          {
            code: "230606",
            name: "大同区"
          },
          {
            code: "230621",
            name: "肇州县"
          },
          {
            code: "230622",
            name: "肇源县"
          },
          {
            code: "230623",
            name: "林甸县"
          },
          {
            code: "230624",
            name: "杜尔伯特蒙古族自治县"
          },
          {
            code: "230671",
            name: "大庆高新技术产业开发区"
          }
        ]
      },
      {
        code: "2307",
        name: "伊春市",
        children: [
          {
            code: "230717",
            name: "伊美区"
          },
          {
            code: "230718",
            name: "乌翠区"
          },
          {
            code: "230719",
            name: "友好区"
          },
          {
            code: "230722",
            name: "嘉荫县"
          },
          {
            code: "230723",
            name: "汤旺县"
          },
          {
            code: "230724",
            name: "丰林县"
          },
          {
            code: "230725",
            name: "大箐山县"
          },
          {
            code: "230726",
            name: "南岔县"
          },
          {
            code: "230751",
            name: "金林区"
          },
          {
            code: "230781",
            name: "铁力市"
          }
        ]
      },
      {
        code: "2308",
        name: "佳木斯市",
        children: [
          {
            code: "230803",
            name: "向阳区"
          },
          {
            code: "230804",
            name: "前进区"
          },
          {
            code: "230805",
            name: "东风区"
          },
          {
            code: "230811",
            name: "郊区"
          },
          {
            code: "230822",
            name: "桦南县"
          },
          {
            code: "230826",
            name: "桦川县"
          },
          {
            code: "230828",
            name: "汤原县"
          },
          {
            code: "230881",
            name: "同江市"
          },
          {
            code: "230882",
            name: "富锦市"
          },
          {
            code: "230883",
            name: "抚远市"
          }
        ]
      },
      {
        code: "2309",
        name: "七台河市",
        children: [
          {
            code: "230902",
            name: "新兴区"
          },
          {
            code: "230903",
            name: "桃山区"
          },
          {
            code: "230904",
            name: "茄子河区"
          },
          {
            code: "230921",
            name: "勃利县"
          }
        ]
      },
      {
        code: "2310",
        name: "牡丹江市",
        children: [
          {
            code: "231002",
            name: "东安区"
          },
          {
            code: "231003",
            name: "阳明区"
          },
          {
            code: "231004",
            name: "爱民区"
          },
          {
            code: "231005",
            name: "西安区"
          },
          {
            code: "231025",
            name: "林口县"
          },
          {
            code: "231071",
            name: "牡丹江经济技术开发区"
          },
          {
            code: "231081",
            name: "绥芬河市"
          },
          {
            code: "231083",
            name: "海林市"
          },
          {
            code: "231084",
            name: "宁安市"
          },
          {
            code: "231085",
            name: "穆棱市"
          },
          {
            code: "231086",
            name: "东宁市"
          }
        ]
      },
      {
        code: "2311",
        name: "黑河市",
        children: [
          {
            code: "231102",
            name: "爱辉区"
          },
          {
            code: "231123",
            name: "逊克县"
          },
          {
            code: "231124",
            name: "孙吴县"
          },
          {
            code: "231181",
            name: "北安市"
          },
          {
            code: "231182",
            name: "五大连池市"
          },
          {
            code: "231183",
            name: "嫩江市"
          }
        ]
      },
      {
        code: "2312",
        name: "绥化市",
        children: [
          {
            code: "231202",
            name: "北林区"
          },
          {
            code: "231221",
            name: "望奎县"
          },
          {
            code: "231222",
            name: "兰西县"
          },
          {
            code: "231223",
            name: "青冈县"
          },
          {
            code: "231224",
            name: "庆安县"
          },
          {
            code: "231225",
            name: "明水县"
          },
          {
            code: "231226",
            name: "绥棱县"
          },
          {
            code: "231281",
            name: "安达市"
          },
          {
            code: "231282",
            name: "肇东市"
          },
          {
            code: "231283",
            name: "海伦市"
          }
        ]
      },
      {
        code: "2327",
        name: "大兴安岭地区",
        children: [
          {
            code: "232701",
            name: "漠河市"
          },
          {
            code: "232721",
            name: "呼玛县"
          },
          {
            code: "232722",
            name: "塔河县"
          },
          {
            code: "232761",
            name: "加格达奇区"
          },
          {
            code: "232762",
            name: "松岭区"
          },
          {
            code: "232763",
            name: "新林区"
          },
          {
            code: "232764",
            name: "呼中区"
          }
        ]
      }
    ]
  },
  {
    code: "31",
    name: "上海市",
    children: [
      {
        code: "3101",
        name: "市辖区",
        children: [
          {
            code: "310101",
            name: "黄浦区"
          },
          {
            code: "310104",
            name: "徐汇区"
          },
          {
            code: "310105",
            name: "长宁区"
          },
          {
            code: "310106",
            name: "静安区"
          },
          {
            code: "310107",
            name: "普陀区"
          },
          {
            code: "310109",
            name: "虹口区"
          },
          {
            code: "310110",
            name: "杨浦区"
          },
          {
            code: "310112",
            name: "闵行区"
          },
          {
            code: "310113",
            name: "宝山区"
          },
          {
            code: "310114",
            name: "嘉定区"
          },
          {
            code: "310115",
            name: "浦东新区"
          },
          {
            code: "310116",
            name: "金山区"
          },
          {
            code: "310117",
            name: "松江区"
          },
          {
            code: "310118",
            name: "青浦区"
          },
          {
            code: "310120",
            name: "奉贤区"
          },
          {
            code: "310151",
            name: "崇明区"
          }
        ]
      }
    ]
  },
  {
    code: "32",
    name: "江苏省",
    children: [
      {
        code: "3201",
        name: "南京市",
        children: [
          {
            code: "320102",
            name: "玄武区"
          },
          {
            code: "320104",
            name: "秦淮区"
          },
          {
            code: "320105",
            name: "建邺区"
          },
          {
            code: "320106",
            name: "鼓楼区"
          },
          {
            code: "320111",
            name: "浦口区"
          },
          {
            code: "320113",
            name: "栖霞区"
          },
          {
            code: "320114",
            name: "雨花台区"
          },
          {
            code: "320115",
            name: "江宁区"
          },
          {
            code: "320116",
            name: "六合区"
          },
          {
            code: "320117",
            name: "溧水区"
          },
          {
            code: "320118",
            name: "高淳区"
          }
        ]
      },
      {
        code: "3202",
        name: "无锡市",
        children: [
          {
            code: "320205",
            name: "锡山区"
          },
          {
            code: "320206",
            name: "惠山区"
          },
          {
            code: "320211",
            name: "滨湖区"
          },
          {
            code: "320213",
            name: "梁溪区"
          },
          {
            code: "320214",
            name: "新吴区"
          },
          {
            code: "320281",
            name: "江阴市"
          },
          {
            code: "320282",
            name: "宜兴市"
          }
        ]
      },
      {
        code: "3203",
        name: "徐州市",
        children: [
          {
            code: "320302",
            name: "鼓楼区"
          },
          {
            code: "320303",
            name: "云龙区"
          },
          {
            code: "320305",
            name: "贾汪区"
          },
          {
            code: "320311",
            name: "泉山区"
          },
          {
            code: "320312",
            name: "铜山区"
          },
          {
            code: "320321",
            name: "丰县"
          },
          {
            code: "320322",
            name: "沛县"
          },
          {
            code: "320324",
            name: "睢宁县"
          },
          {
            code: "320371",
            name: "徐州经济技术开发区"
          },
          {
            code: "320381",
            name: "新沂市"
          },
          {
            code: "320382",
            name: "邳州市"
          }
        ]
      },
      {
        code: "3204",
        name: "常州市",
        children: [
          {
            code: "320402",
            name: "天宁区"
          },
          {
            code: "320404",
            name: "钟楼区"
          },
          {
            code: "320411",
            name: "新北区"
          },
          {
            code: "320412",
            name: "武进区"
          },
          {
            code: "320413",
            name: "金坛区"
          },
          {
            code: "320481",
            name: "溧阳市"
          }
        ]
      },
      {
        code: "3205",
        name: "苏州市",
        children: [
          {
            code: "320505",
            name: "虎丘区"
          },
          {
            code: "320506",
            name: "吴中区"
          },
          {
            code: "320507",
            name: "相城区"
          },
          {
            code: "320508",
            name: "姑苏区"
          },
          {
            code: "320509",
            name: "吴江区"
          },
          {
            code: "320571",
            name: "苏州工业园区"
          },
          {
            code: "320581",
            name: "常熟市"
          },
          {
            code: "320582",
            name: "张家港市"
          },
          {
            code: "320583",
            name: "昆山市"
          },
          {
            code: "320585",
            name: "太仓市"
          }
        ]
      },
      {
        code: "3206",
        name: "南通市",
        children: [
          {
            code: "320602",
            name: "崇川区"
          },
          {
            code: "320611",
            name: "港闸区"
          },
          {
            code: "320612",
            name: "通州区"
          },
          {
            code: "320623",
            name: "如东县"
          },
          {
            code: "320671",
            name: "南通经济技术开发区"
          },
          {
            code: "320681",
            name: "启东市"
          },
          {
            code: "320682",
            name: "如皋市"
          },
          {
            code: "320684",
            name: "海门市"
          },
          {
            code: "320685",
            name: "海安市"
          }
        ]
      },
      {
        code: "3207",
        name: "连云港市",
        children: [
          {
            code: "320703",
            name: "连云区"
          },
          {
            code: "320706",
            name: "海州区"
          },
          {
            code: "320707",
            name: "赣榆区"
          },
          {
            code: "320722",
            name: "东海县"
          },
          {
            code: "320723",
            name: "灌云县"
          },
          {
            code: "320724",
            name: "灌南县"
          },
          {
            code: "320771",
            name: "连云港经济技术开发区"
          },
          {
            code: "320772",
            name: "连云港高新技术产业开发区"
          }
        ]
      },
      {
        code: "3208",
        name: "淮安市",
        children: [
          {
            code: "320803",
            name: "淮安区"
          },
          {
            code: "320804",
            name: "淮阴区"
          },
          {
            code: "320812",
            name: "清江浦区"
          },
          {
            code: "320813",
            name: "洪泽区"
          },
          {
            code: "320826",
            name: "涟水县"
          },
          {
            code: "320830",
            name: "盱眙县"
          },
          {
            code: "320831",
            name: "金湖县"
          },
          {
            code: "320871",
            name: "淮安经济技术开发区"
          }
        ]
      },
      {
        code: "3209",
        name: "盐城市",
        children: [
          {
            code: "320902",
            name: "亭湖区"
          },
          {
            code: "320903",
            name: "盐都区"
          },
          {
            code: "320904",
            name: "大丰区"
          },
          {
            code: "320921",
            name: "响水县"
          },
          {
            code: "320922",
            name: "滨海县"
          },
          {
            code: "320923",
            name: "阜宁县"
          },
          {
            code: "320924",
            name: "射阳县"
          },
          {
            code: "320925",
            name: "建湖县"
          },
          {
            code: "320971",
            name: "盐城经济技术开发区"
          },
          {
            code: "320981",
            name: "东台市"
          }
        ]
      },
      {
        code: "3210",
        name: "扬州市",
        children: [
          {
            code: "321002",
            name: "广陵区"
          },
          {
            code: "321003",
            name: "邗江区"
          },
          {
            code: "321012",
            name: "江都区"
          },
          {
            code: "321023",
            name: "宝应县"
          },
          {
            code: "321071",
            name: "扬州经济技术开发区"
          },
          {
            code: "321081",
            name: "仪征市"
          },
          {
            code: "321084",
            name: "高邮市"
          }
        ]
      },
      {
        code: "3211",
        name: "镇江市",
        children: [
          {
            code: "321102",
            name: "京口区"
          },
          {
            code: "321111",
            name: "润州区"
          },
          {
            code: "321112",
            name: "丹徒区"
          },
          {
            code: "321171",
            name: "镇江新区"
          },
          {
            code: "321181",
            name: "丹阳市"
          },
          {
            code: "321182",
            name: "扬中市"
          },
          {
            code: "321183",
            name: "句容市"
          }
        ]
      },
      {
        code: "3212",
        name: "泰州市",
        children: [
          {
            code: "321202",
            name: "海陵区"
          },
          {
            code: "321203",
            name: "高港区"
          },
          {
            code: "321204",
            name: "姜堰区"
          },
          {
            code: "321271",
            name: "泰州医药高新技术产业开发区"
          },
          {
            code: "321281",
            name: "兴化市"
          },
          {
            code: "321282",
            name: "靖江市"
          },
          {
            code: "321283",
            name: "泰兴市"
          }
        ]
      },
      {
        code: "3213",
        name: "宿迁市",
        children: [
          {
            code: "321302",
            name: "宿城区"
          },
          {
            code: "321311",
            name: "宿豫区"
          },
          {
            code: "321322",
            name: "沭阳县"
          },
          {
            code: "321323",
            name: "泗阳县"
          },
          {
            code: "321324",
            name: "泗洪县"
          },
          {
            code: "321371",
            name: "宿迁经济技术开发区"
          }
        ]
      }
    ]
  },
  {
    code: "33",
    name: "浙江省",
    children: [
      {
        code: "3301",
        name: "杭州市",
        children: [
          {
            code: "330102",
            name: "上城区"
          },
          {
            code: "330103",
            name: "下城区"
          },
          {
            code: "330104",
            name: "江干区"
          },
          {
            code: "330105",
            name: "拱墅区"
          },
          {
            code: "330106",
            name: "西湖区"
          },
          {
            code: "330108",
            name: "滨江区"
          },
          {
            code: "330109",
            name: "萧山区"
          },
          {
            code: "330110",
            name: "余杭区"
          },
          {
            code: "330111",
            name: "富阳区"
          },
          {
            code: "330112",
            name: "临安区"
          },
          {
            code: "330122",
            name: "桐庐县"
          },
          {
            code: "330127",
            name: "淳安县"
          },
          {
            code: "330182",
            name: "建德市"
          }
        ]
      },
      {
        code: "3302",
        name: "宁波市",
        children: [
          {
            code: "330203",
            name: "海曙区"
          },
          {
            code: "330205",
            name: "江北区"
          },
          {
            code: "330206",
            name: "北仑区"
          },
          {
            code: "330211",
            name: "镇海区"
          },
          {
            code: "330212",
            name: "鄞州区"
          },
          {
            code: "330213",
            name: "奉化区"
          },
          {
            code: "330225",
            name: "象山县"
          },
          {
            code: "330226",
            name: "宁海县"
          },
          {
            code: "330281",
            name: "余姚市"
          },
          {
            code: "330282",
            name: "慈溪市"
          }
        ]
      },
      {
        code: "3303",
        name: "温州市",
        children: [
          {
            code: "330302",
            name: "鹿城区"
          },
          {
            code: "330303",
            name: "龙湾区"
          },
          {
            code: "330304",
            name: "瓯海区"
          },
          {
            code: "330305",
            name: "洞头区"
          },
          {
            code: "330324",
            name: "永嘉县"
          },
          {
            code: "330326",
            name: "平阳县"
          },
          {
            code: "330327",
            name: "苍南县"
          },
          {
            code: "330328",
            name: "文成县"
          },
          {
            code: "330329",
            name: "泰顺县"
          },
          {
            code: "330371",
            name: "温州经济技术开发区"
          },
          {
            code: "330381",
            name: "瑞安市"
          },
          {
            code: "330382",
            name: "乐清市"
          },
          {
            code: "330383",
            name: "龙港市"
          }
        ]
      },
      {
        code: "3304",
        name: "嘉兴市",
        children: [
          {
            code: "330402",
            name: "南湖区"
          },
          {
            code: "330411",
            name: "秀洲区"
          },
          {
            code: "330421",
            name: "嘉善县"
          },
          {
            code: "330424",
            name: "海盐县"
          },
          {
            code: "330481",
            name: "海宁市"
          },
          {
            code: "330482",
            name: "平湖市"
          },
          {
            code: "330483",
            name: "桐乡市"
          }
        ]
      },
      {
        code: "3305",
        name: "湖州市",
        children: [
          {
            code: "330502",
            name: "吴兴区"
          },
          {
            code: "330503",
            name: "南浔区"
          },
          {
            code: "330521",
            name: "德清县"
          },
          {
            code: "330522",
            name: "长兴县"
          },
          {
            code: "330523",
            name: "安吉县"
          }
        ]
      },
      {
        code: "3306",
        name: "绍兴市",
        children: [
          {
            code: "330602",
            name: "越城区"
          },
          {
            code: "330603",
            name: "柯桥区"
          },
          {
            code: "330604",
            name: "上虞区"
          },
          {
            code: "330624",
            name: "新昌县"
          },
          {
            code: "330681",
            name: "诸暨市"
          },
          {
            code: "330683",
            name: "嵊州市"
          }
        ]
      },
      {
        code: "3307",
        name: "金华市",
        children: [
          {
            code: "330702",
            name: "婺城区"
          },
          {
            code: "330703",
            name: "金东区"
          },
          {
            code: "330723",
            name: "武义县"
          },
          {
            code: "330726",
            name: "浦江县"
          },
          {
            code: "330727",
            name: "磐安县"
          },
          {
            code: "330781",
            name: "兰溪市"
          },
          {
            code: "330782",
            name: "义乌市"
          },
          {
            code: "330783",
            name: "东阳市"
          },
          {
            code: "330784",
            name: "永康市"
          }
        ]
      },
      {
        code: "3308",
        name: "衢州市",
        children: [
          {
            code: "330802",
            name: "柯城区"
          },
          {
            code: "330803",
            name: "衢江区"
          },
          {
            code: "330822",
            name: "常山县"
          },
          {
            code: "330824",
            name: "开化县"
          },
          {
            code: "330825",
            name: "龙游县"
          },
          {
            code: "330881",
            name: "江山市"
          }
        ]
      },
      {
        code: "3309",
        name: "舟山市",
        children: [
          {
            code: "330902",
            name: "定海区"
          },
          {
            code: "330903",
            name: "普陀区"
          },
          {
            code: "330921",
            name: "岱山县"
          },
          {
            code: "330922",
            name: "嵊泗县"
          }
        ]
      },
      {
        code: "3310",
        name: "台州市",
        children: [
          {
            code: "331002",
            name: "椒江区"
          },
          {
            code: "331003",
            name: "黄岩区"
          },
          {
            code: "331004",
            name: "路桥区"
          },
          {
            code: "331022",
            name: "三门县"
          },
          {
            code: "331023",
            name: "天台县"
          },
          {
            code: "331024",
            name: "仙居县"
          },
          {
            code: "331081",
            name: "温岭市"
          },
          {
            code: "331082",
            name: "临海市"
          },
          {
            code: "331083",
            name: "玉环市"
          }
        ]
      },
      {
        code: "3311",
        name: "丽水市",
        children: [
          {
            code: "331102",
            name: "莲都区"
          },
          {
            code: "331121",
            name: "青田县"
          },
          {
            code: "331122",
            name: "缙云县"
          },
          {
            code: "331123",
            name: "遂昌县"
          },
          {
            code: "331124",
            name: "松阳县"
          },
          {
            code: "331125",
            name: "云和县"
          },
          {
            code: "331126",
            name: "庆元县"
          },
          {
            code: "331127",
            name: "景宁畲族自治县"
          },
          {
            code: "331181",
            name: "龙泉市"
          }
        ]
      }
    ]
  },
  {
    code: "34",
    name: "安徽省",
    children: [
      {
        code: "3401",
        name: "合肥市",
        children: [
          {
            code: "340102",
            name: "瑶海区"
          },
          {
            code: "340103",
            name: "庐阳区"
          },
          {
            code: "340104",
            name: "蜀山区"
          },
          {
            code: "340111",
            name: "包河区"
          },
          {
            code: "340121",
            name: "长丰县"
          },
          {
            code: "340122",
            name: "肥东县"
          },
          {
            code: "340123",
            name: "肥西县"
          },
          {
            code: "340124",
            name: "庐江县"
          },
          {
            code: "340171",
            name: "合肥高新技术产业开发区"
          },
          {
            code: "340172",
            name: "合肥经济技术开发区"
          },
          {
            code: "340173",
            name: "合肥新站高新技术产业开发区"
          },
          {
            code: "340181",
            name: "巢湖市"
          }
        ]
      },
      {
        code: "3402",
        name: "芜湖市",
        children: [
          {
            code: "340202",
            name: "镜湖区"
          },
          {
            code: "340203",
            name: "弋江区"
          },
          {
            code: "340207",
            name: "鸠江区"
          },
          {
            code: "340208",
            name: "三山区"
          },
          {
            code: "340221",
            name: "芜湖县"
          },
          {
            code: "340222",
            name: "繁昌县"
          },
          {
            code: "340223",
            name: "南陵县"
          },
          {
            code: "340271",
            name: "芜湖经济技术开发区"
          },
          {
            code: "340272",
            name: "安徽芜湖长江大桥经济开发区"
          },
          {
            code: "340281",
            name: "无为市"
          }
        ]
      },
      {
        code: "3403",
        name: "蚌埠市",
        children: [
          {
            code: "340302",
            name: "龙子湖区"
          },
          {
            code: "340303",
            name: "蚌山区"
          },
          {
            code: "340304",
            name: "禹会区"
          },
          {
            code: "340311",
            name: "淮上区"
          },
          {
            code: "340321",
            name: "怀远县"
          },
          {
            code: "340322",
            name: "五河县"
          },
          {
            code: "340323",
            name: "固镇县"
          },
          {
            code: "340371",
            name: "蚌埠市高新技术开发区"
          },
          {
            code: "340372",
            name: "蚌埠市经济开发区"
          }
        ]
      },
      {
        code: "3404",
        name: "淮南市",
        children: [
          {
            code: "340402",
            name: "大通区"
          },
          {
            code: "340403",
            name: "田家庵区"
          },
          {
            code: "340404",
            name: "谢家集区"
          },
          {
            code: "340405",
            name: "八公山区"
          },
          {
            code: "340406",
            name: "潘集区"
          },
          {
            code: "340421",
            name: "凤台县"
          },
          {
            code: "340422",
            name: "寿县"
          }
        ]
      },
      {
        code: "3405",
        name: "马鞍山市",
        children: [
          {
            code: "340503",
            name: "花山区"
          },
          {
            code: "340504",
            name: "雨山区"
          },
          {
            code: "340506",
            name: "博望区"
          },
          {
            code: "340521",
            name: "当涂县"
          },
          {
            code: "340522",
            name: "含山县"
          },
          {
            code: "340523",
            name: "和县"
          }
        ]
      },
      {
        code: "3406",
        name: "淮北市",
        children: [
          {
            code: "340602",
            name: "杜集区"
          },
          {
            code: "340603",
            name: "相山区"
          },
          {
            code: "340604",
            name: "烈山区"
          },
          {
            code: "340621",
            name: "濉溪县"
          }
        ]
      },
      {
        code: "3407",
        name: "铜陵市",
        children: [
          {
            code: "340705",
            name: "铜官区"
          },
          {
            code: "340706",
            name: "义安区"
          },
          {
            code: "340711",
            name: "郊区"
          },
          {
            code: "340722",
            name: "枞阳县"
          }
        ]
      },
      {
        code: "3408",
        name: "安庆市",
        children: [
          {
            code: "340802",
            name: "迎江区"
          },
          {
            code: "340803",
            name: "大观区"
          },
          {
            code: "340811",
            name: "宜秀区"
          },
          {
            code: "340822",
            name: "怀宁县"
          },
          {
            code: "340825",
            name: "太湖县"
          },
          {
            code: "340826",
            name: "宿松县"
          },
          {
            code: "340827",
            name: "望江县"
          },
          {
            code: "340828",
            name: "岳西县"
          },
          {
            code: "340871",
            name: "安徽安庆经济开发区"
          },
          {
            code: "340881",
            name: "桐城市"
          },
          {
            code: "340882",
            name: "潜山市"
          }
        ]
      },
      {
        code: "3410",
        name: "黄山市",
        children: [
          {
            code: "341002",
            name: "屯溪区"
          },
          {
            code: "341003",
            name: "黄山区"
          },
          {
            code: "341004",
            name: "徽州区"
          },
          {
            code: "341021",
            name: "歙县"
          },
          {
            code: "341022",
            name: "休宁县"
          },
          {
            code: "341023",
            name: "黟县"
          },
          {
            code: "341024",
            name: "祁门县"
          }
        ]
      },
      {
        code: "3411",
        name: "滁州市",
        children: [
          {
            code: "341102",
            name: "琅琊区"
          },
          {
            code: "341103",
            name: "南谯区"
          },
          {
            code: "341122",
            name: "来安县"
          },
          {
            code: "341124",
            name: "全椒县"
          },
          {
            code: "341125",
            name: "定远县"
          },
          {
            code: "341126",
            name: "凤阳县"
          },
          {
            code: "341171",
            name: "苏滁现代产业园"
          },
          {
            code: "341172",
            name: "滁州经济技术开发区"
          },
          {
            code: "341181",
            name: "天长市"
          },
          {
            code: "341182",
            name: "明光市"
          }
        ]
      },
      {
        code: "3412",
        name: "阜阳市",
        children: [
          {
            code: "341202",
            name: "颍州区"
          },
          {
            code: "341203",
            name: "颍东区"
          },
          {
            code: "341204",
            name: "颍泉区"
          },
          {
            code: "341221",
            name: "临泉县"
          },
          {
            code: "341222",
            name: "太和县"
          },
          {
            code: "341225",
            name: "阜南县"
          },
          {
            code: "341226",
            name: "颍上县"
          },
          {
            code: "341271",
            name: "阜阳合肥现代产业园区"
          },
          {
            code: "341272",
            name: "阜阳经济技术开发区"
          },
          {
            code: "341282",
            name: "界首市"
          }
        ]
      },
      {
        code: "3413",
        name: "宿州市",
        children: [
          {
            code: "341302",
            name: "埇桥区"
          },
          {
            code: "341321",
            name: "砀山县"
          },
          {
            code: "341322",
            name: "萧县"
          },
          {
            code: "341323",
            name: "灵璧县"
          },
          {
            code: "341324",
            name: "泗县"
          },
          {
            code: "341371",
            name: "宿州马鞍山现代产业园区"
          },
          {
            code: "341372",
            name: "宿州经济技术开发区"
          }
        ]
      },
      {
        code: "3415",
        name: "六安市",
        children: [
          {
            code: "341502",
            name: "金安区"
          },
          {
            code: "341503",
            name: "裕安区"
          },
          {
            code: "341504",
            name: "叶集区"
          },
          {
            code: "341522",
            name: "霍邱县"
          },
          {
            code: "341523",
            name: "舒城县"
          },
          {
            code: "341524",
            name: "金寨县"
          },
          {
            code: "341525",
            name: "霍山县"
          }
        ]
      },
      {
        code: "3416",
        name: "亳州市",
        children: [
          {
            code: "341602",
            name: "谯城区"
          },
          {
            code: "341621",
            name: "涡阳县"
          },
          {
            code: "341622",
            name: "蒙城县"
          },
          {
            code: "341623",
            name: "利辛县"
          }
        ]
      },
      {
        code: "3417",
        name: "池州市",
        children: [
          {
            code: "341702",
            name: "贵池区"
          },
          {
            code: "341721",
            name: "东至县"
          },
          {
            code: "341722",
            name: "石台县"
          },
          {
            code: "341723",
            name: "青阳县"
          }
        ]
      },
      {
        code: "3418",
        name: "宣城市",
        children: [
          {
            code: "341802",
            name: "宣州区"
          },
          {
            code: "341821",
            name: "郎溪县"
          },
          {
            code: "341823",
            name: "泾县"
          },
          {
            code: "341824",
            name: "绩溪县"
          },
          {
            code: "341825",
            name: "旌德县"
          },
          {
            code: "341871",
            name: "宣城市经济开发区"
          },
          {
            code: "341881",
            name: "宁国市"
          },
          {
            code: "341882",
            name: "广德市"
          }
        ]
      }
    ]
  },
  {
    code: "35",
    name: "福建省",
    children: [
      {
        code: "3501",
        name: "福州市",
        children: [
          {
            code: "350102",
            name: "鼓楼区"
          },
          {
            code: "350103",
            name: "台江区"
          },
          {
            code: "350104",
            name: "仓山区"
          },
          {
            code: "350105",
            name: "马尾区"
          },
          {
            code: "350111",
            name: "晋安区"
          },
          {
            code: "350112",
            name: "长乐区"
          },
          {
            code: "350121",
            name: "闽侯县"
          },
          {
            code: "350122",
            name: "连江县"
          },
          {
            code: "350123",
            name: "罗源县"
          },
          {
            code: "350124",
            name: "闽清县"
          },
          {
            code: "350125",
            name: "永泰县"
          },
          {
            code: "350128",
            name: "平潭县"
          },
          {
            code: "350181",
            name: "福清市"
          }
        ]
      },
      {
        code: "3502",
        name: "厦门市",
        children: [
          {
            code: "350203",
            name: "思明区"
          },
          {
            code: "350205",
            name: "海沧区"
          },
          {
            code: "350206",
            name: "湖里区"
          },
          {
            code: "350211",
            name: "集美区"
          },
          {
            code: "350212",
            name: "同安区"
          },
          {
            code: "350213",
            name: "翔安区"
          }
        ]
      },
      {
        code: "3503",
        name: "莆田市",
        children: [
          {
            code: "350302",
            name: "城厢区"
          },
          {
            code: "350303",
            name: "涵江区"
          },
          {
            code: "350304",
            name: "荔城区"
          },
          {
            code: "350305",
            name: "秀屿区"
          },
          {
            code: "350322",
            name: "仙游县"
          }
        ]
      },
      {
        code: "3504",
        name: "三明市",
        children: [
          {
            code: "350402",
            name: "梅列区"
          },
          {
            code: "350403",
            name: "三元区"
          },
          {
            code: "350421",
            name: "明溪县"
          },
          {
            code: "350423",
            name: "清流县"
          },
          {
            code: "350424",
            name: "宁化县"
          },
          {
            code: "350425",
            name: "大田县"
          },
          {
            code: "350426",
            name: "尤溪县"
          },
          {
            code: "350427",
            name: "沙县"
          },
          {
            code: "350428",
            name: "将乐县"
          },
          {
            code: "350429",
            name: "泰宁县"
          },
          {
            code: "350430",
            name: "建宁县"
          },
          {
            code: "350481",
            name: "永安市"
          }
        ]
      },
      {
        code: "3505",
        name: "泉州市",
        children: [
          {
            code: "350502",
            name: "鲤城区"
          },
          {
            code: "350503",
            name: "丰泽区"
          },
          {
            code: "350504",
            name: "洛江区"
          },
          {
            code: "350505",
            name: "泉港区"
          },
          {
            code: "350521",
            name: "惠安县"
          },
          {
            code: "350524",
            name: "安溪县"
          },
          {
            code: "350525",
            name: "永春县"
          },
          {
            code: "350526",
            name: "德化县"
          },
          {
            code: "350527",
            name: "金门县"
          },
          {
            code: "350581",
            name: "石狮市"
          },
          {
            code: "350582",
            name: "晋江市"
          },
          {
            code: "350583",
            name: "南安市"
          }
        ]
      },
      {
        code: "3506",
        name: "漳州市",
        children: [
          {
            code: "350602",
            name: "芗城区"
          },
          {
            code: "350603",
            name: "龙文区"
          },
          {
            code: "350622",
            name: "云霄县"
          },
          {
            code: "350623",
            name: "漳浦县"
          },
          {
            code: "350624",
            name: "诏安县"
          },
          {
            code: "350625",
            name: "长泰县"
          },
          {
            code: "350626",
            name: "东山县"
          },
          {
            code: "350627",
            name: "南靖县"
          },
          {
            code: "350628",
            name: "平和县"
          },
          {
            code: "350629",
            name: "华安县"
          },
          {
            code: "350681",
            name: "龙海市"
          }
        ]
      },
      {
        code: "3507",
        name: "南平市",
        children: [
          {
            code: "350702",
            name: "延平区"
          },
          {
            code: "350703",
            name: "建阳区"
          },
          {
            code: "350721",
            name: "顺昌县"
          },
          {
            code: "350722",
            name: "浦城县"
          },
          {
            code: "350723",
            name: "光泽县"
          },
          {
            code: "350724",
            name: "松溪县"
          },
          {
            code: "350725",
            name: "政和县"
          },
          {
            code: "350781",
            name: "邵武市"
          },
          {
            code: "350782",
            name: "武夷山市"
          },
          {
            code: "350783",
            name: "建瓯市"
          }
        ]
      },
      {
        code: "3508",
        name: "龙岩市",
        children: [
          {
            code: "350802",
            name: "新罗区"
          },
          {
            code: "350803",
            name: "永定区"
          },
          {
            code: "350821",
            name: "长汀县"
          },
          {
            code: "350823",
            name: "上杭县"
          },
          {
            code: "350824",
            name: "武平县"
          },
          {
            code: "350825",
            name: "连城县"
          },
          {
            code: "350881",
            name: "漳平市"
          }
        ]
      },
      {
        code: "3509",
        name: "宁德市",
        children: [
          {
            code: "350902",
            name: "蕉城区"
          },
          {
            code: "350921",
            name: "霞浦县"
          },
          {
            code: "350922",
            name: "古田县"
          },
          {
            code: "350923",
            name: "屏南县"
          },
          {
            code: "350924",
            name: "寿宁县"
          },
          {
            code: "350925",
            name: "周宁县"
          },
          {
            code: "350926",
            name: "柘荣县"
          },
          {
            code: "350981",
            name: "福安市"
          },
          {
            code: "350982",
            name: "福鼎市"
          }
        ]
      }
    ]
  },
  {
    code: "36",
    name: "江西省",
    children: [
      {
        code: "3601",
        name: "南昌市",
        children: [
          {
            code: "360102",
            name: "东湖区"
          },
          {
            code: "360103",
            name: "西湖区"
          },
          {
            code: "360104",
            name: "青云谱区"
          },
          {
            code: "360111",
            name: "青山湖区"
          },
          {
            code: "360112",
            name: "新建区"
          },
          {
            code: "360113",
            name: "红谷滩区"
          },
          {
            code: "360121",
            name: "南昌县"
          },
          {
            code: "360123",
            name: "安义县"
          },
          {
            code: "360124",
            name: "进贤县"
          }
        ]
      },
      {
        code: "3602",
        name: "景德镇市",
        children: [
          {
            code: "360202",
            name: "昌江区"
          },
          {
            code: "360203",
            name: "珠山区"
          },
          {
            code: "360222",
            name: "浮梁县"
          },
          {
            code: "360281",
            name: "乐平市"
          }
        ]
      },
      {
        code: "3603",
        name: "萍乡市",
        children: [
          {
            code: "360302",
            name: "安源区"
          },
          {
            code: "360313",
            name: "湘东区"
          },
          {
            code: "360321",
            name: "莲花县"
          },
          {
            code: "360322",
            name: "上栗县"
          },
          {
            code: "360323",
            name: "芦溪县"
          }
        ]
      },
      {
        code: "3604",
        name: "九江市",
        children: [
          {
            code: "360402",
            name: "濂溪区"
          },
          {
            code: "360403",
            name: "浔阳区"
          },
          {
            code: "360404",
            name: "柴桑区"
          },
          {
            code: "360423",
            name: "武宁县"
          },
          {
            code: "360424",
            name: "修水县"
          },
          {
            code: "360425",
            name: "永修县"
          },
          {
            code: "360426",
            name: "德安县"
          },
          {
            code: "360428",
            name: "都昌县"
          },
          {
            code: "360429",
            name: "湖口县"
          },
          {
            code: "360430",
            name: "彭泽县"
          },
          {
            code: "360481",
            name: "瑞昌市"
          },
          {
            code: "360482",
            name: "共青城市"
          },
          {
            code: "360483",
            name: "庐山市"
          }
        ]
      },
      {
        code: "3605",
        name: "新余市",
        children: [
          {
            code: "360502",
            name: "渝水区"
          },
          {
            code: "360521",
            name: "分宜县"
          }
        ]
      },
      {
        code: "3606",
        name: "鹰潭市",
        children: [
          {
            code: "360602",
            name: "月湖区"
          },
          {
            code: "360603",
            name: "余江区"
          },
          {
            code: "360681",
            name: "贵溪市"
          }
        ]
      },
      {
        code: "3607",
        name: "赣州市",
        children: [
          {
            code: "360702",
            name: "章贡区"
          },
          {
            code: "360703",
            name: "南康区"
          },
          {
            code: "360704",
            name: "赣县区"
          },
          {
            code: "360722",
            name: "信丰县"
          },
          {
            code: "360723",
            name: "大余县"
          },
          {
            code: "360724",
            name: "上犹县"
          },
          {
            code: "360725",
            name: "崇义县"
          },
          {
            code: "360726",
            name: "安远县"
          },
          {
            code: "360728",
            name: "定南县"
          },
          {
            code: "360729",
            name: "全南县"
          },
          {
            code: "360730",
            name: "宁都县"
          },
          {
            code: "360731",
            name: "于都县"
          },
          {
            code: "360732",
            name: "兴国县"
          },
          {
            code: "360733",
            name: "会昌县"
          },
          {
            code: "360734",
            name: "寻乌县"
          },
          {
            code: "360735",
            name: "石城县"
          },
          {
            code: "360781",
            name: "瑞金市"
          },
          {
            code: "360783",
            name: "龙南市"
          }
        ]
      },
      {
        code: "3608",
        name: "吉安市",
        children: [
          {
            code: "360802",
            name: "吉州区"
          },
          {
            code: "360803",
            name: "青原区"
          },
          {
            code: "360821",
            name: "吉安县"
          },
          {
            code: "360822",
            name: "吉水县"
          },
          {
            code: "360823",
            name: "峡江县"
          },
          {
            code: "360824",
            name: "新干县"
          },
          {
            code: "360825",
            name: "永丰县"
          },
          {
            code: "360826",
            name: "泰和县"
          },
          {
            code: "360827",
            name: "遂川县"
          },
          {
            code: "360828",
            name: "万安县"
          },
          {
            code: "360829",
            name: "安福县"
          },
          {
            code: "360830",
            name: "永新县"
          },
          {
            code: "360881",
            name: "井冈山市"
          }
        ]
      },
      {
        code: "3609",
        name: "宜春市",
        children: [
          {
            code: "360902",
            name: "袁州区"
          },
          {
            code: "360921",
            name: "奉新县"
          },
          {
            code: "360922",
            name: "万载县"
          },
          {
            code: "360923",
            name: "上高县"
          },
          {
            code: "360924",
            name: "宜丰县"
          },
          {
            code: "360925",
            name: "靖安县"
          },
          {
            code: "360926",
            name: "铜鼓县"
          },
          {
            code: "360981",
            name: "丰城市"
          },
          {
            code: "360982",
            name: "樟树市"
          },
          {
            code: "360983",
            name: "高安市"
          }
        ]
      },
      {
        code: "3610",
        name: "抚州市",
        children: [
          {
            code: "361002",
            name: "临川区"
          },
          {
            code: "361003",
            name: "东乡区"
          },
          {
            code: "361021",
            name: "南城县"
          },
          {
            code: "361022",
            name: "黎川县"
          },
          {
            code: "361023",
            name: "南丰县"
          },
          {
            code: "361024",
            name: "崇仁县"
          },
          {
            code: "361025",
            name: "乐安县"
          },
          {
            code: "361026",
            name: "宜黄县"
          },
          {
            code: "361027",
            name: "金溪县"
          },
          {
            code: "361028",
            name: "资溪县"
          },
          {
            code: "361030",
            name: "广昌县"
          }
        ]
      },
      {
        code: "3611",
        name: "上饶市",
        children: [
          {
            code: "361102",
            name: "信州区"
          },
          {
            code: "361103",
            name: "广丰区"
          },
          {
            code: "361104",
            name: "广信区"
          },
          {
            code: "361123",
            name: "玉山县"
          },
          {
            code: "361124",
            name: "铅山县"
          },
          {
            code: "361125",
            name: "横峰县"
          },
          {
            code: "361126",
            name: "弋阳县"
          },
          {
            code: "361127",
            name: "余干县"
          },
          {
            code: "361128",
            name: "鄱阳县"
          },
          {
            code: "361129",
            name: "万年县"
          },
          {
            code: "361130",
            name: "婺源县"
          },
          {
            code: "361181",
            name: "德兴市"
          }
        ]
      }
    ]
  },
  {
    code: "37",
    name: "山东省",
    children: [
      {
        code: "3701",
        name: "济南市",
        children: [
          {
            code: "370102",
            name: "历下区"
          },
          {
            code: "370103",
            name: "市中区"
          },
          {
            code: "370104",
            name: "槐荫区"
          },
          {
            code: "370105",
            name: "天桥区"
          },
          {
            code: "370112",
            name: "历城区"
          },
          {
            code: "370113",
            name: "长清区"
          },
          {
            code: "370114",
            name: "章丘区"
          },
          {
            code: "370115",
            name: "济阳区"
          },
          {
            code: "370116",
            name: "莱芜区"
          },
          {
            code: "370117",
            name: "钢城区"
          },
          {
            code: "370124",
            name: "平阴县"
          },
          {
            code: "370126",
            name: "商河县"
          },
          {
            code: "370171",
            name: "济南高新技术产业开发区"
          }
        ]
      },
      {
        code: "3702",
        name: "青岛市",
        children: [
          {
            code: "370202",
            name: "市南区"
          },
          {
            code: "370203",
            name: "市北区"
          },
          {
            code: "370211",
            name: "黄岛区"
          },
          {
            code: "370212",
            name: "崂山区"
          },
          {
            code: "370213",
            name: "李沧区"
          },
          {
            code: "370214",
            name: "城阳区"
          },
          {
            code: "370215",
            name: "即墨区"
          },
          {
            code: "370271",
            name: "青岛高新技术产业开发区"
          },
          {
            code: "370281",
            name: "胶州市"
          },
          {
            code: "370283",
            name: "平度市"
          },
          {
            code: "370285",
            name: "莱西市"
          }
        ]
      },
      {
        code: "3703",
        name: "淄博市",
        children: [
          {
            code: "370302",
            name: "淄川区"
          },
          {
            code: "370303",
            name: "张店区"
          },
          {
            code: "370304",
            name: "博山区"
          },
          {
            code: "370305",
            name: "临淄区"
          },
          {
            code: "370306",
            name: "周村区"
          },
          {
            code: "370321",
            name: "桓台县"
          },
          {
            code: "370322",
            name: "高青县"
          },
          {
            code: "370323",
            name: "沂源县"
          }
        ]
      },
      {
        code: "3704",
        name: "枣庄市",
        children: [
          {
            code: "370402",
            name: "市中区"
          },
          {
            code: "370403",
            name: "薛城区"
          },
          {
            code: "370404",
            name: "峄城区"
          },
          {
            code: "370405",
            name: "台儿庄区"
          },
          {
            code: "370406",
            name: "山亭区"
          },
          {
            code: "370481",
            name: "滕州市"
          }
        ]
      },
      {
        code: "3705",
        name: "东营市",
        children: [
          {
            code: "370502",
            name: "东营区"
          },
          {
            code: "370503",
            name: "河口区"
          },
          {
            code: "370505",
            name: "垦利区"
          },
          {
            code: "370522",
            name: "利津县"
          },
          {
            code: "370523",
            name: "广饶县"
          },
          {
            code: "370571",
            name: "东营经济技术开发区"
          },
          {
            code: "370572",
            name: "东营港经济开发区"
          }
        ]
      },
      {
        code: "3706",
        name: "烟台市",
        children: [
          {
            code: "370602",
            name: "芝罘区"
          },
          {
            code: "370611",
            name: "福山区"
          },
          {
            code: "370612",
            name: "牟平区"
          },
          {
            code: "370613",
            name: "莱山区"
          },
          {
            code: "370614",
            name: "蓬莱区"
          },
          {
            code: "370671",
            name: "烟台高新技术产业开发区"
          },
          {
            code: "370672",
            name: "烟台经济技术开发区"
          },
          {
            code: "370681",
            name: "龙口市"
          },
          {
            code: "370682",
            name: "莱阳市"
          },
          {
            code: "370683",
            name: "莱州市"
          },
          {
            code: "370685",
            name: "招远市"
          },
          {
            code: "370686",
            name: "栖霞市"
          },
          {
            code: "370687",
            name: "海阳市"
          }
        ]
      },
      {
        code: "3707",
        name: "潍坊市",
        children: [
          {
            code: "370702",
            name: "潍城区"
          },
          {
            code: "370703",
            name: "寒亭区"
          },
          {
            code: "370704",
            name: "坊子区"
          },
          {
            code: "370705",
            name: "奎文区"
          },
          {
            code: "370724",
            name: "临朐县"
          },
          {
            code: "370725",
            name: "昌乐县"
          },
          {
            code: "370772",
            name: "潍坊滨海经济技术开发区"
          },
          {
            code: "370781",
            name: "青州市"
          },
          {
            code: "370782",
            name: "诸城市"
          },
          {
            code: "370783",
            name: "寿光市"
          },
          {
            code: "370784",
            name: "安丘市"
          },
          {
            code: "370785",
            name: "高密市"
          },
          {
            code: "370786",
            name: "昌邑市"
          }
        ]
      },
      {
        code: "3708",
        name: "济宁市",
        children: [
          {
            code: "370811",
            name: "任城区"
          },
          {
            code: "370812",
            name: "兖州区"
          },
          {
            code: "370826",
            name: "微山县"
          },
          {
            code: "370827",
            name: "鱼台县"
          },
          {
            code: "370828",
            name: "金乡县"
          },
          {
            code: "370829",
            name: "嘉祥县"
          },
          {
            code: "370830",
            name: "汶上县"
          },
          {
            code: "370831",
            name: "泗水县"
          },
          {
            code: "370832",
            name: "梁山县"
          },
          {
            code: "370871",
            name: "济宁高新技术产业开发区"
          },
          {
            code: "370881",
            name: "曲阜市"
          },
          {
            code: "370883",
            name: "邹城市"
          }
        ]
      },
      {
        code: "3709",
        name: "泰安市",
        children: [
          {
            code: "370902",
            name: "泰山区"
          },
          {
            code: "370911",
            name: "岱岳区"
          },
          {
            code: "370921",
            name: "宁阳县"
          },
          {
            code: "370923",
            name: "东平县"
          },
          {
            code: "370982",
            name: "新泰市"
          },
          {
            code: "370983",
            name: "肥城市"
          }
        ]
      },
      {
        code: "3710",
        name: "威海市",
        children: [
          {
            code: "371002",
            name: "环翠区"
          },
          {
            code: "371003",
            name: "文登区"
          },
          {
            code: "371071",
            name: "威海火炬高技术产业开发区"
          },
          {
            code: "371072",
            name: "威海经济技术开发区"
          },
          {
            code: "371073",
            name: "威海临港经济技术开发区"
          },
          {
            code: "371082",
            name: "荣成市"
          },
          {
            code: "371083",
            name: "乳山市"
          }
        ]
      },
      {
        code: "3711",
        name: "日照市",
        children: [
          {
            code: "371102",
            name: "东港区"
          },
          {
            code: "371103",
            name: "岚山区"
          },
          {
            code: "371121",
            name: "五莲县"
          },
          {
            code: "371122",
            name: "莒县"
          },
          {
            code: "371171",
            name: "日照经济技术开发区"
          }
        ]
      },
      {
        code: "3713",
        name: "临沂市",
        children: [
          {
            code: "371302",
            name: "兰山区"
          },
          {
            code: "371311",
            name: "罗庄区"
          },
          {
            code: "371312",
            name: "河东区"
          },
          {
            code: "371321",
            name: "沂南县"
          },
          {
            code: "371322",
            name: "郯城县"
          },
          {
            code: "371323",
            name: "沂水县"
          },
          {
            code: "371324",
            name: "兰陵县"
          },
          {
            code: "371325",
            name: "费县"
          },
          {
            code: "371326",
            name: "平邑县"
          },
          {
            code: "371327",
            name: "莒南县"
          },
          {
            code: "371328",
            name: "蒙阴县"
          },
          {
            code: "371329",
            name: "临沭县"
          },
          {
            code: "371371",
            name: "临沂高新技术产业开发区"
          }
        ]
      },
      {
        code: "3714",
        name: "德州市",
        children: [
          {
            code: "371402",
            name: "德城区"
          },
          {
            code: "371403",
            name: "陵城区"
          },
          {
            code: "371422",
            name: "宁津县"
          },
          {
            code: "371423",
            name: "庆云县"
          },
          {
            code: "371424",
            name: "临邑县"
          },
          {
            code: "371425",
            name: "齐河县"
          },
          {
            code: "371426",
            name: "平原县"
          },
          {
            code: "371427",
            name: "夏津县"
          },
          {
            code: "371428",
            name: "武城县"
          },
          {
            code: "371471",
            name: "德州经济技术开发区"
          },
          {
            code: "371472",
            name: "德州运河经济开发区"
          },
          {
            code: "371481",
            name: "乐陵市"
          },
          {
            code: "371482",
            name: "禹城市"
          }
        ]
      },
      {
        code: "3715",
        name: "聊城市",
        children: [
          {
            code: "371502",
            name: "东昌府区"
          },
          {
            code: "371503",
            name: "茌平区"
          },
          {
            code: "371521",
            name: "阳谷县"
          },
          {
            code: "371522",
            name: "莘县"
          },
          {
            code: "371524",
            name: "东阿县"
          },
          {
            code: "371525",
            name: "冠县"
          },
          {
            code: "371526",
            name: "高唐县"
          },
          {
            code: "371581",
            name: "临清市"
          }
        ]
      },
      {
        code: "3716",
        name: "滨州市",
        children: [
          {
            code: "371602",
            name: "滨城区"
          },
          {
            code: "371603",
            name: "沾化区"
          },
          {
            code: "371621",
            name: "惠民县"
          },
          {
            code: "371622",
            name: "阳信县"
          },
          {
            code: "371623",
            name: "无棣县"
          },
          {
            code: "371625",
            name: "博兴县"
          },
          {
            code: "371681",
            name: "邹平市"
          }
        ]
      },
      {
        code: "3717",
        name: "菏泽市",
        children: [
          {
            code: "371702",
            name: "牡丹区"
          },
          {
            code: "371703",
            name: "定陶区"
          },
          {
            code: "371721",
            name: "曹县"
          },
          {
            code: "371722",
            name: "单县"
          },
          {
            code: "371723",
            name: "成武县"
          },
          {
            code: "371724",
            name: "巨野县"
          },
          {
            code: "371725",
            name: "郓城县"
          },
          {
            code: "371726",
            name: "鄄城县"
          },
          {
            code: "371728",
            name: "东明县"
          },
          {
            code: "371771",
            name: "菏泽经济技术开发区"
          },
          {
            code: "371772",
            name: "菏泽高新技术开发区"
          }
        ]
      }
    ]
  },
  {
    code: "41",
    name: "河南省",
    children: [
      {
        code: "4101",
        name: "郑州市",
        children: [
          {
            code: "410102",
            name: "中原区"
          },
          {
            code: "410103",
            name: "二七区"
          },
          {
            code: "410104",
            name: "管城回族区"
          },
          {
            code: "410105",
            name: "金水区"
          },
          {
            code: "410106",
            name: "上街区"
          },
          {
            code: "410108",
            name: "惠济区"
          },
          {
            code: "410122",
            name: "中牟县"
          },
          {
            code: "410171",
            name: "郑州经济技术开发区"
          },
          {
            code: "410172",
            name: "郑州高新技术产业开发区"
          },
          {
            code: "410173",
            name: "郑州航空港经济综合实验区"
          },
          {
            code: "410181",
            name: "巩义市"
          },
          {
            code: "410182",
            name: "荥阳市"
          },
          {
            code: "410183",
            name: "新密市"
          },
          {
            code: "410184",
            name: "新郑市"
          },
          {
            code: "410185",
            name: "登封市"
          }
        ]
      },
      {
        code: "4102",
        name: "开封市",
        children: [
          {
            code: "410202",
            name: "龙亭区"
          },
          {
            code: "410203",
            name: "顺河回族区"
          },
          {
            code: "410204",
            name: "鼓楼区"
          },
          {
            code: "410205",
            name: "禹王台区"
          },
          {
            code: "410212",
            name: "祥符区"
          },
          {
            code: "410221",
            name: "杞县"
          },
          {
            code: "410222",
            name: "通许县"
          },
          {
            code: "410223",
            name: "尉氏县"
          },
          {
            code: "410225",
            name: "兰考县"
          }
        ]
      },
      {
        code: "4103",
        name: "洛阳市",
        children: [
          {
            code: "410302",
            name: "老城区"
          },
          {
            code: "410303",
            name: "西工区"
          },
          {
            code: "410304",
            name: "瀍河回族区"
          },
          {
            code: "410305",
            name: "涧西区"
          },
          {
            code: "410306",
            name: "吉利区"
          },
          {
            code: "410311",
            name: "洛龙区"
          },
          {
            code: "410322",
            name: "孟津县"
          },
          {
            code: "410323",
            name: "新安县"
          },
          {
            code: "410324",
            name: "栾川县"
          },
          {
            code: "410325",
            name: "嵩县"
          },
          {
            code: "410326",
            name: "汝阳县"
          },
          {
            code: "410327",
            name: "宜阳县"
          },
          {
            code: "410328",
            name: "洛宁县"
          },
          {
            code: "410329",
            name: "伊川县"
          },
          {
            code: "410371",
            name: "洛阳高新技术产业开发区"
          },
          {
            code: "410381",
            name: "偃师市"
          }
        ]
      },
      {
        code: "4104",
        name: "平顶山市",
        children: [
          {
            code: "410402",
            name: "新华区"
          },
          {
            code: "410403",
            name: "卫东区"
          },
          {
            code: "410404",
            name: "石龙区"
          },
          {
            code: "410411",
            name: "湛河区"
          },
          {
            code: "410421",
            name: "宝丰县"
          },
          {
            code: "410422",
            name: "叶县"
          },
          {
            code: "410423",
            name: "鲁山县"
          },
          {
            code: "410425",
            name: "郏县"
          },
          {
            code: "410471",
            name: "平顶山高新技术产业开发区"
          },
          {
            code: "410472",
            name: "平顶山市城乡一体化示范区"
          },
          {
            code: "410481",
            name: "舞钢市"
          },
          {
            code: "410482",
            name: "汝州市"
          }
        ]
      },
      {
        code: "4105",
        name: "安阳市",
        children: [
          {
            code: "410502",
            name: "文峰区"
          },
          {
            code: "410503",
            name: "北关区"
          },
          {
            code: "410505",
            name: "殷都区"
          },
          {
            code: "410506",
            name: "龙安区"
          },
          {
            code: "410522",
            name: "安阳县"
          },
          {
            code: "410523",
            name: "汤阴县"
          },
          {
            code: "410526",
            name: "滑县"
          },
          {
            code: "410527",
            name: "内黄县"
          },
          {
            code: "410571",
            name: "安阳高新技术产业开发区"
          },
          {
            code: "410581",
            name: "林州市"
          }
        ]
      },
      {
        code: "4106",
        name: "鹤壁市",
        children: [
          {
            code: "410602",
            name: "鹤山区"
          },
          {
            code: "410603",
            name: "山城区"
          },
          {
            code: "410611",
            name: "淇滨区"
          },
          {
            code: "410621",
            name: "浚县"
          },
          {
            code: "410622",
            name: "淇县"
          },
          {
            code: "410671",
            name: "鹤壁经济技术开发区"
          }
        ]
      },
      {
        code: "4107",
        name: "新乡市",
        children: [
          {
            code: "410702",
            name: "红旗区"
          },
          {
            code: "410703",
            name: "卫滨区"
          },
          {
            code: "410704",
            name: "凤泉区"
          },
          {
            code: "410711",
            name: "牧野区"
          },
          {
            code: "410721",
            name: "新乡县"
          },
          {
            code: "410724",
            name: "获嘉县"
          },
          {
            code: "410725",
            name: "原阳县"
          },
          {
            code: "410726",
            name: "延津县"
          },
          {
            code: "410727",
            name: "封丘县"
          },
          {
            code: "410771",
            name: "新乡高新技术产业开发区"
          },
          {
            code: "410772",
            name: "新乡经济技术开发区"
          },
          {
            code: "410773",
            name: "新乡市平原城乡一体化示范区"
          },
          {
            code: "410781",
            name: "卫辉市"
          },
          {
            code: "410782",
            name: "辉县市"
          },
          {
            code: "410783",
            name: "长垣市"
          }
        ]
      },
      {
        code: "4108",
        name: "焦作市",
        children: [
          {
            code: "410802",
            name: "解放区"
          },
          {
            code: "410803",
            name: "中站区"
          },
          {
            code: "410804",
            name: "马村区"
          },
          {
            code: "410811",
            name: "山阳区"
          },
          {
            code: "410821",
            name: "修武县"
          },
          {
            code: "410822",
            name: "博爱县"
          },
          {
            code: "410823",
            name: "武陟县"
          },
          {
            code: "410825",
            name: "温县"
          },
          {
            code: "410871",
            name: "焦作城乡一体化示范区"
          },
          {
            code: "410882",
            name: "沁阳市"
          },
          {
            code: "410883",
            name: "孟州市"
          }
        ]
      },
      {
        code: "4109",
        name: "濮阳市",
        children: [
          {
            code: "410902",
            name: "华龙区"
          },
          {
            code: "410922",
            name: "清丰县"
          },
          {
            code: "410923",
            name: "南乐县"
          },
          {
            code: "410926",
            name: "范县"
          },
          {
            code: "410927",
            name: "台前县"
          },
          {
            code: "410928",
            name: "濮阳县"
          },
          {
            code: "410971",
            name: "河南濮阳工业园区"
          },
          {
            code: "410972",
            name: "濮阳经济技术开发区"
          }
        ]
      },
      {
        code: "4110",
        name: "许昌市",
        children: [
          {
            code: "411002",
            name: "魏都区"
          },
          {
            code: "411003",
            name: "建安区"
          },
          {
            code: "411024",
            name: "鄢陵县"
          },
          {
            code: "411025",
            name: "襄城县"
          },
          {
            code: "411071",
            name: "许昌经济技术开发区"
          },
          {
            code: "411081",
            name: "禹州市"
          },
          {
            code: "411082",
            name: "长葛市"
          }
        ]
      },
      {
        code: "4111",
        name: "漯河市",
        children: [
          {
            code: "411102",
            name: "源汇区"
          },
          {
            code: "411103",
            name: "郾城区"
          },
          {
            code: "411104",
            name: "召陵区"
          },
          {
            code: "411121",
            name: "舞阳县"
          },
          {
            code: "411122",
            name: "临颍县"
          },
          {
            code: "411171",
            name: "漯河经济技术开发区"
          }
        ]
      },
      {
        code: "4112",
        name: "三门峡市",
        children: [
          {
            code: "411202",
            name: "湖滨区"
          },
          {
            code: "411203",
            name: "陕州区"
          },
          {
            code: "411221",
            name: "渑池县"
          },
          {
            code: "411224",
            name: "卢氏县"
          },
          {
            code: "411271",
            name: "河南三门峡经济开发区"
          },
          {
            code: "411281",
            name: "义马市"
          },
          {
            code: "411282",
            name: "灵宝市"
          }
        ]
      },
      {
        code: "4113",
        name: "南阳市",
        children: [
          {
            code: "411302",
            name: "宛城区"
          },
          {
            code: "411303",
            name: "卧龙区"
          },
          {
            code: "411321",
            name: "南召县"
          },
          {
            code: "411322",
            name: "方城县"
          },
          {
            code: "411323",
            name: "西峡县"
          },
          {
            code: "411324",
            name: "镇平县"
          },
          {
            code: "411325",
            name: "内乡县"
          },
          {
            code: "411326",
            name: "淅川县"
          },
          {
            code: "411327",
            name: "社旗县"
          },
          {
            code: "411328",
            name: "唐河县"
          },
          {
            code: "411329",
            name: "新野县"
          },
          {
            code: "411330",
            name: "桐柏县"
          },
          {
            code: "411371",
            name: "南阳高新技术产业开发区"
          },
          {
            code: "411372",
            name: "南阳市城乡一体化示范区"
          },
          {
            code: "411381",
            name: "邓州市"
          }
        ]
      },
      {
        code: "4114",
        name: "商丘市",
        children: [
          {
            code: "411402",
            name: "梁园区"
          },
          {
            code: "411403",
            name: "睢阳区"
          },
          {
            code: "411421",
            name: "民权县"
          },
          {
            code: "411422",
            name: "睢县"
          },
          {
            code: "411423",
            name: "宁陵县"
          },
          {
            code: "411424",
            name: "柘城县"
          },
          {
            code: "411425",
            name: "虞城县"
          },
          {
            code: "411426",
            name: "夏邑县"
          },
          {
            code: "411471",
            name: "豫东综合物流产业聚集区"
          },
          {
            code: "411472",
            name: "河南商丘经济开发区"
          },
          {
            code: "411481",
            name: "永城市"
          }
        ]
      },
      {
        code: "4115",
        name: "信阳市",
        children: [
          {
            code: "411502",
            name: "浉河区"
          },
          {
            code: "411503",
            name: "平桥区"
          },
          {
            code: "411521",
            name: "罗山县"
          },
          {
            code: "411522",
            name: "光山县"
          },
          {
            code: "411523",
            name: "新县"
          },
          {
            code: "411524",
            name: "商城县"
          },
          {
            code: "411525",
            name: "固始县"
          },
          {
            code: "411526",
            name: "潢川县"
          },
          {
            code: "411527",
            name: "淮滨县"
          },
          {
            code: "411528",
            name: "息县"
          },
          {
            code: "411571",
            name: "信阳高新技术产业开发区"
          }
        ]
      },
      {
        code: "4116",
        name: "周口市",
        children: [
          {
            code: "411602",
            name: "川汇区"
          },
          {
            code: "411603",
            name: "淮阳区"
          },
          {
            code: "411621",
            name: "扶沟县"
          },
          {
            code: "411622",
            name: "西华县"
          },
          {
            code: "411623",
            name: "商水县"
          },
          {
            code: "411624",
            name: "沈丘县"
          },
          {
            code: "411625",
            name: "郸城县"
          },
          {
            code: "411627",
            name: "太康县"
          },
          {
            code: "411628",
            name: "鹿邑县"
          },
          {
            code: "411671",
            name: "河南周口经济开发区"
          },
          {
            code: "411681",
            name: "项城市"
          }
        ]
      },
      {
        code: "4117",
        name: "驻马店市",
        children: [
          {
            code: "411702",
            name: "驿城区"
          },
          {
            code: "411721",
            name: "西平县"
          },
          {
            code: "411722",
            name: "上蔡县"
          },
          {
            code: "411723",
            name: "平舆县"
          },
          {
            code: "411724",
            name: "正阳县"
          },
          {
            code: "411725",
            name: "确山县"
          },
          {
            code: "411726",
            name: "泌阳县"
          },
          {
            code: "411727",
            name: "汝南县"
          },
          {
            code: "411728",
            name: "遂平县"
          },
          {
            code: "411729",
            name: "新蔡县"
          },
          {
            code: "411771",
            name: "河南驻马店经济开发区"
          }
        ]
      },
      {
        code: "4190",
        name: "省直辖县级行政区划",
        children: [
          {
            code: "419001",
            name: "济源市"
          }
        ]
      }
    ]
  },
  {
    code: "42",
    name: "湖北省",
    children: [
      {
        code: "4201",
        name: "武汉市",
        children: [
          {
            code: "420102",
            name: "江岸区"
          },
          {
            code: "420103",
            name: "江汉区"
          },
          {
            code: "420104",
            name: "硚口区"
          },
          {
            code: "420105",
            name: "汉阳区"
          },
          {
            code: "420106",
            name: "武昌区"
          },
          {
            code: "420107",
            name: "青山区"
          },
          {
            code: "420111",
            name: "洪山区"
          },
          {
            code: "420112",
            name: "东西湖区"
          },
          {
            code: "420113",
            name: "汉南区"
          },
          {
            code: "420114",
            name: "蔡甸区"
          },
          {
            code: "420115",
            name: "江夏区"
          },
          {
            code: "420116",
            name: "黄陂区"
          },
          {
            code: "420117",
            name: "新洲区"
          }
        ]
      },
      {
        code: "4202",
        name: "黄石市",
        children: [
          {
            code: "420202",
            name: "黄石港区"
          },
          {
            code: "420203",
            name: "西塞山区"
          },
          {
            code: "420204",
            name: "下陆区"
          },
          {
            code: "420205",
            name: "铁山区"
          },
          {
            code: "420222",
            name: "阳新县"
          },
          {
            code: "420281",
            name: "大冶市"
          }
        ]
      },
      {
        code: "4203",
        name: "十堰市",
        children: [
          {
            code: "420302",
            name: "茅箭区"
          },
          {
            code: "420303",
            name: "张湾区"
          },
          {
            code: "420304",
            name: "郧阳区"
          },
          {
            code: "420322",
            name: "郧西县"
          },
          {
            code: "420323",
            name: "竹山县"
          },
          {
            code: "420324",
            name: "竹溪县"
          },
          {
            code: "420325",
            name: "房县"
          },
          {
            code: "420381",
            name: "丹江口市"
          }
        ]
      },
      {
        code: "4205",
        name: "宜昌市",
        children: [
          {
            code: "420502",
            name: "西陵区"
          },
          {
            code: "420503",
            name: "伍家岗区"
          },
          {
            code: "420504",
            name: "点军区"
          },
          {
            code: "420505",
            name: "猇亭区"
          },
          {
            code: "420506",
            name: "夷陵区"
          },
          {
            code: "420525",
            name: "远安县"
          },
          {
            code: "420526",
            name: "兴山县"
          },
          {
            code: "420527",
            name: "秭归县"
          },
          {
            code: "420528",
            name: "长阳土家族自治县"
          },
          {
            code: "420529",
            name: "五峰土家族自治县"
          },
          {
            code: "420581",
            name: "宜都市"
          },
          {
            code: "420582",
            name: "当阳市"
          },
          {
            code: "420583",
            name: "枝江市"
          }
        ]
      },
      {
        code: "4206",
        name: "襄阳市",
        children: [
          {
            code: "420602",
            name: "襄城区"
          },
          {
            code: "420606",
            name: "樊城区"
          },
          {
            code: "420607",
            name: "襄州区"
          },
          {
            code: "420624",
            name: "南漳县"
          },
          {
            code: "420625",
            name: "谷城县"
          },
          {
            code: "420626",
            name: "保康县"
          },
          {
            code: "420682",
            name: "老河口市"
          },
          {
            code: "420683",
            name: "枣阳市"
          },
          {
            code: "420684",
            name: "宜城市"
          }
        ]
      },
      {
        code: "4207",
        name: "鄂州市",
        children: [
          {
            code: "420702",
            name: "梁子湖区"
          },
          {
            code: "420703",
            name: "华容区"
          },
          {
            code: "420704",
            name: "鄂城区"
          }
        ]
      },
      {
        code: "4208",
        name: "荆门市",
        children: [
          {
            code: "420802",
            name: "东宝区"
          },
          {
            code: "420804",
            name: "掇刀区"
          },
          {
            code: "420822",
            name: "沙洋县"
          },
          {
            code: "420881",
            name: "钟祥市"
          },
          {
            code: "420882",
            name: "京山市"
          }
        ]
      },
      {
        code: "4209",
        name: "孝感市",
        children: [
          {
            code: "420902",
            name: "孝南区"
          },
          {
            code: "420921",
            name: "孝昌县"
          },
          {
            code: "420922",
            name: "大悟县"
          },
          {
            code: "420923",
            name: "云梦县"
          },
          {
            code: "420981",
            name: "应城市"
          },
          {
            code: "420982",
            name: "安陆市"
          },
          {
            code: "420984",
            name: "汉川市"
          }
        ]
      },
      {
        code: "4210",
        name: "荆州市",
        children: [
          {
            code: "421002",
            name: "沙市区"
          },
          {
            code: "421003",
            name: "荆州区"
          },
          {
            code: "421022",
            name: "公安县"
          },
          {
            code: "421023",
            name: "监利县"
          },
          {
            code: "421024",
            name: "江陵县"
          },
          {
            code: "421071",
            name: "荆州经济技术开发区"
          },
          {
            code: "421081",
            name: "石首市"
          },
          {
            code: "421083",
            name: "洪湖市"
          },
          {
            code: "421087",
            name: "松滋市"
          }
        ]
      },
      {
        code: "4211",
        name: "黄冈市",
        children: [
          {
            code: "421102",
            name: "黄州区"
          },
          {
            code: "421121",
            name: "团风县"
          },
          {
            code: "421122",
            name: "红安县"
          },
          {
            code: "421123",
            name: "罗田县"
          },
          {
            code: "421124",
            name: "英山县"
          },
          {
            code: "421125",
            name: "浠水县"
          },
          {
            code: "421126",
            name: "蕲春县"
          },
          {
            code: "421127",
            name: "黄梅县"
          },
          {
            code: "421171",
            name: "龙感湖管理区"
          },
          {
            code: "421181",
            name: "麻城市"
          },
          {
            code: "421182",
            name: "武穴市"
          }
        ]
      },
      {
        code: "4212",
        name: "咸宁市",
        children: [
          {
            code: "421202",
            name: "咸安区"
          },
          {
            code: "421221",
            name: "嘉鱼县"
          },
          {
            code: "421222",
            name: "通城县"
          },
          {
            code: "421223",
            name: "崇阳县"
          },
          {
            code: "421224",
            name: "通山县"
          },
          {
            code: "421281",
            name: "赤壁市"
          }
        ]
      },
      {
        code: "4213",
        name: "随州市",
        children: [
          {
            code: "421303",
            name: "曾都区"
          },
          {
            code: "421321",
            name: "随县"
          },
          {
            code: "421381",
            name: "广水市"
          }
        ]
      },
      {
        code: "4228",
        name: "恩施土家族苗族自治州",
        children: [
          {
            code: "422801",
            name: "恩施市"
          },
          {
            code: "422802",
            name: "利川市"
          },
          {
            code: "422822",
            name: "建始县"
          },
          {
            code: "422823",
            name: "巴东县"
          },
          {
            code: "422825",
            name: "宣恩县"
          },
          {
            code: "422826",
            name: "咸丰县"
          },
          {
            code: "422827",
            name: "来凤县"
          },
          {
            code: "422828",
            name: "鹤峰县"
          }
        ]
      },
      {
        code: "4290",
        name: "省直辖县级行政区划",
        children: [
          {
            code: "429004",
            name: "仙桃市"
          },
          {
            code: "429005",
            name: "潜江市"
          },
          {
            code: "429006",
            name: "天门市"
          },
          {
            code: "429021",
            name: "神农架林区"
          }
        ]
      }
    ]
  },
  {
    code: "43",
    name: "湖南省",
    children: [
      {
        code: "4301",
        name: "长沙市",
        children: [
          {
            code: "430102",
            name: "芙蓉区"
          },
          {
            code: "430103",
            name: "天心区"
          },
          {
            code: "430104",
            name: "岳麓区"
          },
          {
            code: "430105",
            name: "开福区"
          },
          {
            code: "430111",
            name: "雨花区"
          },
          {
            code: "430112",
            name: "望城区"
          },
          {
            code: "430121",
            name: "长沙县"
          },
          {
            code: "430181",
            name: "浏阳市"
          },
          {
            code: "430182",
            name: "宁乡市"
          }
        ]
      },
      {
        code: "4302",
        name: "株洲市",
        children: [
          {
            code: "430202",
            name: "荷塘区"
          },
          {
            code: "430203",
            name: "芦淞区"
          },
          {
            code: "430204",
            name: "石峰区"
          },
          {
            code: "430211",
            name: "天元区"
          },
          {
            code: "430212",
            name: "渌口区"
          },
          {
            code: "430223",
            name: "攸县"
          },
          {
            code: "430224",
            name: "茶陵县"
          },
          {
            code: "430225",
            name: "炎陵县"
          },
          {
            code: "430271",
            name: "云龙示范区"
          },
          {
            code: "430281",
            name: "醴陵市"
          }
        ]
      },
      {
        code: "4303",
        name: "湘潭市",
        children: [
          {
            code: "430302",
            name: "雨湖区"
          },
          {
            code: "430304",
            name: "岳塘区"
          },
          {
            code: "430321",
            name: "湘潭县"
          },
          {
            code: "430371",
            name: "湖南湘潭高新技术产业园区"
          },
          {
            code: "430372",
            name: "湘潭昭山示范区"
          },
          {
            code: "430373",
            name: "湘潭九华示范区"
          },
          {
            code: "430381",
            name: "湘乡市"
          },
          {
            code: "430382",
            name: "韶山市"
          }
        ]
      },
      {
        code: "4304",
        name: "衡阳市",
        children: [
          {
            code: "430405",
            name: "珠晖区"
          },
          {
            code: "430406",
            name: "雁峰区"
          },
          {
            code: "430407",
            name: "石鼓区"
          },
          {
            code: "430408",
            name: "蒸湘区"
          },
          {
            code: "430412",
            name: "南岳区"
          },
          {
            code: "430421",
            name: "衡阳县"
          },
          {
            code: "430422",
            name: "衡南县"
          },
          {
            code: "430423",
            name: "衡山县"
          },
          {
            code: "430424",
            name: "衡东县"
          },
          {
            code: "430426",
            name: "祁东县"
          },
          {
            code: "430471",
            name: "衡阳综合保税区"
          },
          {
            code: "430472",
            name: "湖南衡阳高新技术产业园区"
          },
          {
            code: "430473",
            name: "湖南衡阳松木经济开发区"
          },
          {
            code: "430481",
            name: "耒阳市"
          },
          {
            code: "430482",
            name: "常宁市"
          }
        ]
      },
      {
        code: "4305",
        name: "邵阳市",
        children: [
          {
            code: "430502",
            name: "双清区"
          },
          {
            code: "430503",
            name: "大祥区"
          },
          {
            code: "430511",
            name: "北塔区"
          },
          {
            code: "430522",
            name: "新邵县"
          },
          {
            code: "430523",
            name: "邵阳县"
          },
          {
            code: "430524",
            name: "隆回县"
          },
          {
            code: "430525",
            name: "洞口县"
          },
          {
            code: "430527",
            name: "绥宁县"
          },
          {
            code: "430528",
            name: "新宁县"
          },
          {
            code: "430529",
            name: "城步苗族自治县"
          },
          {
            code: "430581",
            name: "武冈市"
          },
          {
            code: "430582",
            name: "邵东市"
          }
        ]
      },
      {
        code: "4306",
        name: "岳阳市",
        children: [
          {
            code: "430602",
            name: "岳阳楼区"
          },
          {
            code: "430603",
            name: "云溪区"
          },
          {
            code: "430611",
            name: "君山区"
          },
          {
            code: "430621",
            name: "岳阳县"
          },
          {
            code: "430623",
            name: "华容县"
          },
          {
            code: "430624",
            name: "湘阴县"
          },
          {
            code: "430626",
            name: "平江县"
          },
          {
            code: "430671",
            name: "岳阳市屈原管理区"
          },
          {
            code: "430681",
            name: "汨罗市"
          },
          {
            code: "430682",
            name: "临湘市"
          }
        ]
      },
      {
        code: "4307",
        name: "常德市",
        children: [
          {
            code: "430702",
            name: "武陵区"
          },
          {
            code: "430703",
            name: "鼎城区"
          },
          {
            code: "430721",
            name: "安乡县"
          },
          {
            code: "430722",
            name: "汉寿县"
          },
          {
            code: "430723",
            name: "澧县"
          },
          {
            code: "430724",
            name: "临澧县"
          },
          {
            code: "430725",
            name: "桃源县"
          },
          {
            code: "430726",
            name: "石门县"
          },
          {
            code: "430771",
            name: "常德市西洞庭管理区"
          },
          {
            code: "430781",
            name: "津市市"
          }
        ]
      },
      {
        code: "4308",
        name: "张家界市",
        children: [
          {
            code: "430802",
            name: "永定区"
          },
          {
            code: "430811",
            name: "武陵源区"
          },
          {
            code: "430821",
            name: "慈利县"
          },
          {
            code: "430822",
            name: "桑植县"
          }
        ]
      },
      {
        code: "4309",
        name: "益阳市",
        children: [
          {
            code: "430902",
            name: "资阳区"
          },
          {
            code: "430903",
            name: "赫山区"
          },
          {
            code: "430921",
            name: "南县"
          },
          {
            code: "430922",
            name: "桃江县"
          },
          {
            code: "430923",
            name: "安化县"
          },
          {
            code: "430971",
            name: "益阳市大通湖管理区"
          },
          {
            code: "430972",
            name: "湖南益阳高新技术产业园区"
          },
          {
            code: "430981",
            name: "沅江市"
          }
        ]
      },
      {
        code: "4310",
        name: "郴州市",
        children: [
          {
            code: "431002",
            name: "北湖区"
          },
          {
            code: "431003",
            name: "苏仙区"
          },
          {
            code: "431021",
            name: "桂阳县"
          },
          {
            code: "431022",
            name: "宜章县"
          },
          {
            code: "431023",
            name: "永兴县"
          },
          {
            code: "431024",
            name: "嘉禾县"
          },
          {
            code: "431025",
            name: "临武县"
          },
          {
            code: "431026",
            name: "汝城县"
          },
          {
            code: "431027",
            name: "桂东县"
          },
          {
            code: "431028",
            name: "安仁县"
          },
          {
            code: "431081",
            name: "资兴市"
          }
        ]
      },
      {
        code: "4311",
        name: "永州市",
        children: [
          {
            code: "431102",
            name: "零陵区"
          },
          {
            code: "431103",
            name: "冷水滩区"
          },
          {
            code: "431121",
            name: "祁阳县"
          },
          {
            code: "431122",
            name: "东安县"
          },
          {
            code: "431123",
            name: "双牌县"
          },
          {
            code: "431124",
            name: "道县"
          },
          {
            code: "431125",
            name: "江永县"
          },
          {
            code: "431126",
            name: "宁远县"
          },
          {
            code: "431127",
            name: "蓝山县"
          },
          {
            code: "431128",
            name: "新田县"
          },
          {
            code: "431129",
            name: "江华瑶族自治县"
          },
          {
            code: "431171",
            name: "永州经济技术开发区"
          },
          {
            code: "431172",
            name: "永州市金洞管理区"
          },
          {
            code: "431173",
            name: "永州市回龙圩管理区"
          }
        ]
      },
      {
        code: "4312",
        name: "怀化市",
        children: [
          {
            code: "431202",
            name: "鹤城区"
          },
          {
            code: "431221",
            name: "中方县"
          },
          {
            code: "431222",
            name: "沅陵县"
          },
          {
            code: "431223",
            name: "辰溪县"
          },
          {
            code: "431224",
            name: "溆浦县"
          },
          {
            code: "431225",
            name: "会同县"
          },
          {
            code: "431226",
            name: "麻阳苗族自治县"
          },
          {
            code: "431227",
            name: "新晃侗族自治县"
          },
          {
            code: "431228",
            name: "芷江侗族自治县"
          },
          {
            code: "431229",
            name: "靖州苗族侗族自治县"
          },
          {
            code: "431230",
            name: "通道侗族自治县"
          },
          {
            code: "431271",
            name: "怀化市洪江管理区"
          },
          {
            code: "431281",
            name: "洪江市"
          }
        ]
      },
      {
        code: "4313",
        name: "娄底市",
        children: [
          {
            code: "431302",
            name: "娄星区"
          },
          {
            code: "431321",
            name: "双峰县"
          },
          {
            code: "431322",
            name: "新化县"
          },
          {
            code: "431381",
            name: "冷水江市"
          },
          {
            code: "431382",
            name: "涟源市"
          }
        ]
      },
      {
        code: "4331",
        name: "湘西土家族苗族自治州",
        children: [
          {
            code: "433101",
            name: "吉首市"
          },
          {
            code: "433122",
            name: "泸溪县"
          },
          {
            code: "433123",
            name: "凤凰县"
          },
          {
            code: "433124",
            name: "花垣县"
          },
          {
            code: "433125",
            name: "保靖县"
          },
          {
            code: "433126",
            name: "古丈县"
          },
          {
            code: "433127",
            name: "永顺县"
          },
          {
            code: "433130",
            name: "龙山县"
          }
        ]
      }
    ]
  },
  {
    code: "44",
    name: "广东省",
    children: [
      {
        code: "4401",
        name: "广州市",
        children: [
          {
            code: "440103",
            name: "荔湾区"
          },
          {
            code: "440104",
            name: "越秀区"
          },
          {
            code: "440105",
            name: "海珠区"
          },
          {
            code: "440106",
            name: "天河区"
          },
          {
            code: "440111",
            name: "白云区"
          },
          {
            code: "440112",
            name: "黄埔区"
          },
          {
            code: "440113",
            name: "番禺区"
          },
          {
            code: "440114",
            name: "花都区"
          },
          {
            code: "440115",
            name: "南沙区"
          },
          {
            code: "440117",
            name: "从化区"
          },
          {
            code: "440118",
            name: "增城区"
          }
        ]
      },
      {
        code: "4402",
        name: "韶关市",
        children: [
          {
            code: "440203",
            name: "武江区"
          },
          {
            code: "440204",
            name: "浈江区"
          },
          {
            code: "440205",
            name: "曲江区"
          },
          {
            code: "440222",
            name: "始兴县"
          },
          {
            code: "440224",
            name: "仁化县"
          },
          {
            code: "440229",
            name: "翁源县"
          },
          {
            code: "440232",
            name: "乳源瑶族自治县"
          },
          {
            code: "440233",
            name: "新丰县"
          },
          {
            code: "440281",
            name: "乐昌市"
          },
          {
            code: "440282",
            name: "南雄市"
          }
        ]
      },
      {
        code: "4403",
        name: "深圳市",
        children: [
          {
            code: "440303",
            name: "罗湖区"
          },
          {
            code: "440304",
            name: "福田区"
          },
          {
            code: "440305",
            name: "南山区"
          },
          {
            code: "440306",
            name: "宝安区"
          },
          {
            code: "440307",
            name: "龙岗区"
          },
          {
            code: "440308",
            name: "盐田区"
          },
          {
            code: "440309",
            name: "龙华区"
          },
          {
            code: "440310",
            name: "坪山区"
          },
          {
            code: "440311",
            name: "光明区"
          }
        ]
      },
      {
        code: "4404",
        name: "珠海市",
        children: [
          {
            code: "440402",
            name: "香洲区"
          },
          {
            code: "440403",
            name: "斗门区"
          },
          {
            code: "440404",
            name: "金湾区"
          }
        ]
      },
      {
        code: "4405",
        name: "汕头市",
        children: [
          {
            code: "440507",
            name: "龙湖区"
          },
          {
            code: "440511",
            name: "金平区"
          },
          {
            code: "440512",
            name: "濠江区"
          },
          {
            code: "440513",
            name: "潮阳区"
          },
          {
            code: "440514",
            name: "潮南区"
          },
          {
            code: "440515",
            name: "澄海区"
          },
          {
            code: "440523",
            name: "南澳县"
          }
        ]
      },
      {
        code: "4406",
        name: "佛山市",
        children: [
          {
            code: "440604",
            name: "禅城区"
          },
          {
            code: "440605",
            name: "南海区"
          },
          {
            code: "440606",
            name: "顺德区"
          },
          {
            code: "440607",
            name: "三水区"
          },
          {
            code: "440608",
            name: "高明区"
          }
        ]
      },
      {
        code: "4407",
        name: "江门市",
        children: [
          {
            code: "440703",
            name: "蓬江区"
          },
          {
            code: "440704",
            name: "江海区"
          },
          {
            code: "440705",
            name: "新会区"
          },
          {
            code: "440781",
            name: "台山市"
          },
          {
            code: "440783",
            name: "开平市"
          },
          {
            code: "440784",
            name: "鹤山市"
          },
          {
            code: "440785",
            name: "恩平市"
          }
        ]
      },
      {
        code: "4408",
        name: "湛江市",
        children: [
          {
            code: "440802",
            name: "赤坎区"
          },
          {
            code: "440803",
            name: "霞山区"
          },
          {
            code: "440804",
            name: "坡头区"
          },
          {
            code: "440811",
            name: "麻章区"
          },
          {
            code: "440823",
            name: "遂溪县"
          },
          {
            code: "440825",
            name: "徐闻县"
          },
          {
            code: "440881",
            name: "廉江市"
          },
          {
            code: "440882",
            name: "雷州市"
          },
          {
            code: "440883",
            name: "吴川市"
          }
        ]
      },
      {
        code: "4409",
        name: "茂名市",
        children: [
          {
            code: "440902",
            name: "茂南区"
          },
          {
            code: "440904",
            name: "电白区"
          },
          {
            code: "440981",
            name: "高州市"
          },
          {
            code: "440982",
            name: "化州市"
          },
          {
            code: "440983",
            name: "信宜市"
          }
        ]
      },
      {
        code: "4412",
        name: "肇庆市",
        children: [
          {
            code: "441202",
            name: "端州区"
          },
          {
            code: "441203",
            name: "鼎湖区"
          },
          {
            code: "441204",
            name: "高要区"
          },
          {
            code: "441223",
            name: "广宁县"
          },
          {
            code: "441224",
            name: "怀集县"
          },
          {
            code: "441225",
            name: "封开县"
          },
          {
            code: "441226",
            name: "德庆县"
          },
          {
            code: "441284",
            name: "四会市"
          }
        ]
      },
      {
        code: "4413",
        name: "惠州市",
        children: [
          {
            code: "441302",
            name: "惠城区"
          },
          {
            code: "441303",
            name: "惠阳区"
          },
          {
            code: "441322",
            name: "博罗县"
          },
          {
            code: "441323",
            name: "惠东县"
          },
          {
            code: "441324",
            name: "龙门县"
          }
        ]
      },
      {
        code: "4414",
        name: "梅州市",
        children: [
          {
            code: "441402",
            name: "梅江区"
          },
          {
            code: "441403",
            name: "梅县区"
          },
          {
            code: "441422",
            name: "大埔县"
          },
          {
            code: "441423",
            name: "丰顺县"
          },
          {
            code: "441424",
            name: "五华县"
          },
          {
            code: "441426",
            name: "平远县"
          },
          {
            code: "441427",
            name: "蕉岭县"
          },
          {
            code: "441481",
            name: "兴宁市"
          }
        ]
      },
      {
        code: "4415",
        name: "汕尾市",
        children: [
          {
            code: "441502",
            name: "城区"
          },
          {
            code: "441521",
            name: "海丰县"
          },
          {
            code: "441523",
            name: "陆河县"
          },
          {
            code: "441581",
            name: "陆丰市"
          }
        ]
      },
      {
        code: "4416",
        name: "河源市",
        children: [
          {
            code: "441602",
            name: "源城区"
          },
          {
            code: "441621",
            name: "紫金县"
          },
          {
            code: "441622",
            name: "龙川县"
          },
          {
            code: "441623",
            name: "连平县"
          },
          {
            code: "441624",
            name: "和平县"
          },
          {
            code: "441625",
            name: "东源县"
          }
        ]
      },
      {
        code: "4417",
        name: "阳江市",
        children: [
          {
            code: "441702",
            name: "江城区"
          },
          {
            code: "441704",
            name: "阳东区"
          },
          {
            code: "441721",
            name: "阳西县"
          },
          {
            code: "441781",
            name: "阳春市"
          }
        ]
      },
      {
        code: "4418",
        name: "清远市",
        children: [
          {
            code: "441802",
            name: "清城区"
          },
          {
            code: "441803",
            name: "清新区"
          },
          {
            code: "441821",
            name: "佛冈县"
          },
          {
            code: "441823",
            name: "阳山县"
          },
          {
            code: "441825",
            name: "连山壮族瑶族自治县"
          },
          {
            code: "441826",
            name: "连南瑶族自治县"
          },
          {
            code: "441881",
            name: "英德市"
          },
          {
            code: "441882",
            name: "连州市"
          }
        ]
      },
      {
        code: "4419",
        name: "东莞市",
        children: [
          {
            code: "441900003",
            name: "东城街道"
          },
          {
            code: "441900004",
            name: "南城街道"
          },
          {
            code: "441900005",
            name: "万江街道"
          },
          {
            code: "441900006",
            name: "莞城街道"
          },
          {
            code: "441900101",
            name: "石碣镇"
          },
          {
            code: "441900102",
            name: "石龙镇"
          },
          {
            code: "441900103",
            name: "茶山镇"
          },
          {
            code: "441900104",
            name: "石排镇"
          },
          {
            code: "441900105",
            name: "企石镇"
          },
          {
            code: "441900106",
            name: "横沥镇"
          },
          {
            code: "441900107",
            name: "桥头镇"
          },
          {
            code: "441900108",
            name: "谢岗镇"
          },
          {
            code: "441900109",
            name: "东坑镇"
          },
          {
            code: "441900110",
            name: "常平镇"
          },
          {
            code: "441900111",
            name: "寮步镇"
          },
          {
            code: "441900112",
            name: "樟木头镇"
          },
          {
            code: "441900113",
            name: "大朗镇"
          },
          {
            code: "441900114",
            name: "黄江镇"
          },
          {
            code: "441900115",
            name: "清溪镇"
          },
          {
            code: "441900116",
            name: "塘厦镇"
          },
          {
            code: "441900117",
            name: "凤岗镇"
          },
          {
            code: "441900118",
            name: "大岭山镇"
          },
          {
            code: "441900119",
            name: "长安镇"
          },
          {
            code: "441900121",
            name: "虎门镇"
          },
          {
            code: "441900122",
            name: "厚街镇"
          },
          {
            code: "441900123",
            name: "沙田镇"
          },
          {
            code: "441900124",
            name: "道滘镇"
          },
          {
            code: "441900125",
            name: "洪梅镇"
          },
          {
            code: "441900126",
            name: "麻涌镇"
          },
          {
            code: "441900127",
            name: "望牛墩镇"
          },
          {
            code: "441900128",
            name: "中堂镇"
          },
          {
            code: "441900129",
            name: "高埗镇"
          },
          {
            code: "441900401",
            name: "松山湖"
          },
          {
            code: "441900402",
            name: "东莞港"
          },
          {
            code: "441900403",
            name: "东莞生态园"
          }
        ]
      },
      {
        code: "4420",
        name: "中山市",
        children: [
          {
            code: "442000001",
            name: "石岐街道"
          },
          {
            code: "442000002",
            name: "东区街道"
          },
          {
            code: "442000003",
            name: "中山港街道"
          },
          {
            code: "442000004",
            name: "西区街道"
          },
          {
            code: "442000005",
            name: "南区街道"
          },
          {
            code: "442000006",
            name: "五桂山街道"
          },
          {
            code: "442000100",
            name: "小榄镇"
          },
          {
            code: "442000101",
            name: "黄圃镇"
          },
          {
            code: "442000102",
            name: "民众镇"
          },
          {
            code: "442000103",
            name: "东凤镇"
          },
          {
            code: "442000104",
            name: "东升镇"
          },
          {
            code: "442000105",
            name: "古镇镇"
          },
          {
            code: "442000106",
            name: "沙溪镇"
          },
          {
            code: "442000107",
            name: "坦洲镇"
          },
          {
            code: "442000108",
            name: "港口镇"
          },
          {
            code: "442000109",
            name: "三角镇"
          },
          {
            code: "442000110",
            name: "横栏镇"
          },
          {
            code: "442000111",
            name: "南头镇"
          },
          {
            code: "442000112",
            name: "阜沙镇"
          },
          {
            code: "442000113",
            name: "南朗镇"
          },
          {
            code: "442000114",
            name: "三乡镇"
          },
          {
            code: "442000115",
            name: "板芙镇"
          },
          {
            code: "442000116",
            name: "大涌镇"
          },
          {
            code: "442000117",
            name: "神湾镇"
          }
        ]
      },
      {
        code: "4451",
        name: "潮州市",
        children: [
          {
            code: "445102",
            name: "湘桥区"
          },
          {
            code: "445103",
            name: "潮安区"
          },
          {
            code: "445122",
            name: "饶平县"
          }
        ]
      },
      {
        code: "4452",
        name: "揭阳市",
        children: [
          {
            code: "445202",
            name: "榕城区"
          },
          {
            code: "445203",
            name: "揭东区"
          },
          {
            code: "445222",
            name: "揭西县"
          },
          {
            code: "445224",
            name: "惠来县"
          },
          {
            code: "445281",
            name: "普宁市"
          }
        ]
      },
      {
        code: "4453",
        name: "云浮市",
        children: [
          {
            code: "445302",
            name: "云城区"
          },
          {
            code: "445303",
            name: "云安区"
          },
          {
            code: "445321",
            name: "新兴县"
          },
          {
            code: "445322",
            name: "郁南县"
          },
          {
            code: "445381",
            name: "罗定市"
          }
        ]
      }
    ]
  },
  {
    code: "45",
    name: "广西壮族自治区",
    children: [
      {
        code: "4501",
        name: "南宁市",
        children: [
          {
            code: "450102",
            name: "兴宁区"
          },
          {
            code: "450103",
            name: "青秀区"
          },
          {
            code: "450105",
            name: "江南区"
          },
          {
            code: "450107",
            name: "西乡塘区"
          },
          {
            code: "450108",
            name: "良庆区"
          },
          {
            code: "450109",
            name: "邕宁区"
          },
          {
            code: "450110",
            name: "武鸣区"
          },
          {
            code: "450123",
            name: "隆安县"
          },
          {
            code: "450124",
            name: "马山县"
          },
          {
            code: "450125",
            name: "上林县"
          },
          {
            code: "450126",
            name: "宾阳县"
          },
          {
            code: "450127",
            name: "横县"
          }
        ]
      },
      {
        code: "4502",
        name: "柳州市",
        children: [
          {
            code: "450202",
            name: "城中区"
          },
          {
            code: "450203",
            name: "鱼峰区"
          },
          {
            code: "450204",
            name: "柳南区"
          },
          {
            code: "450205",
            name: "柳北区"
          },
          {
            code: "450206",
            name: "柳江区"
          },
          {
            code: "450222",
            name: "柳城县"
          },
          {
            code: "450223",
            name: "鹿寨县"
          },
          {
            code: "450224",
            name: "融安县"
          },
          {
            code: "450225",
            name: "融水苗族自治县"
          },
          {
            code: "450226",
            name: "三江侗族自治县"
          }
        ]
      },
      {
        code: "4503",
        name: "桂林市",
        children: [
          {
            code: "450302",
            name: "秀峰区"
          },
          {
            code: "450303",
            name: "叠彩区"
          },
          {
            code: "450304",
            name: "象山区"
          },
          {
            code: "450305",
            name: "七星区"
          },
          {
            code: "450311",
            name: "雁山区"
          },
          {
            code: "450312",
            name: "临桂区"
          },
          {
            code: "450321",
            name: "阳朔县"
          },
          {
            code: "450323",
            name: "灵川县"
          },
          {
            code: "450324",
            name: "全州县"
          },
          {
            code: "450325",
            name: "兴安县"
          },
          {
            code: "450326",
            name: "永福县"
          },
          {
            code: "450327",
            name: "灌阳县"
          },
          {
            code: "450328",
            name: "龙胜各族自治县"
          },
          {
            code: "450329",
            name: "资源县"
          },
          {
            code: "450330",
            name: "平乐县"
          },
          {
            code: "450332",
            name: "恭城瑶族自治县"
          },
          {
            code: "450381",
            name: "荔浦市"
          }
        ]
      },
      {
        code: "4504",
        name: "梧州市",
        children: [
          {
            code: "450403",
            name: "万秀区"
          },
          {
            code: "450405",
            name: "长洲区"
          },
          {
            code: "450406",
            name: "龙圩区"
          },
          {
            code: "450421",
            name: "苍梧县"
          },
          {
            code: "450422",
            name: "藤县"
          },
          {
            code: "450423",
            name: "蒙山县"
          },
          {
            code: "450481",
            name: "岑溪市"
          }
        ]
      },
      {
        code: "4505",
        name: "北海市",
        children: [
          {
            code: "450502",
            name: "海城区"
          },
          {
            code: "450503",
            name: "银海区"
          },
          {
            code: "450512",
            name: "铁山港区"
          },
          {
            code: "450521",
            name: "合浦县"
          }
        ]
      },
      {
        code: "4506",
        name: "防城港市",
        children: [
          {
            code: "450602",
            name: "港口区"
          },
          {
            code: "450603",
            name: "防城区"
          },
          {
            code: "450621",
            name: "上思县"
          },
          {
            code: "450681",
            name: "东兴市"
          }
        ]
      },
      {
        code: "4507",
        name: "钦州市",
        children: [
          {
            code: "450702",
            name: "钦南区"
          },
          {
            code: "450703",
            name: "钦北区"
          },
          {
            code: "450721",
            name: "灵山县"
          },
          {
            code: "450722",
            name: "浦北县"
          }
        ]
      },
      {
        code: "4508",
        name: "贵港市",
        children: [
          {
            code: "450802",
            name: "港北区"
          },
          {
            code: "450803",
            name: "港南区"
          },
          {
            code: "450804",
            name: "覃塘区"
          },
          {
            code: "450821",
            name: "平南县"
          },
          {
            code: "450881",
            name: "桂平市"
          }
        ]
      },
      {
        code: "4509",
        name: "玉林市",
        children: [
          {
            code: "450902",
            name: "玉州区"
          },
          {
            code: "450903",
            name: "福绵区"
          },
          {
            code: "450921",
            name: "容县"
          },
          {
            code: "450922",
            name: "陆川县"
          },
          {
            code: "450923",
            name: "博白县"
          },
          {
            code: "450924",
            name: "兴业县"
          },
          {
            code: "450981",
            name: "北流市"
          }
        ]
      },
      {
        code: "4510",
        name: "百色市",
        children: [
          {
            code: "451002",
            name: "右江区"
          },
          {
            code: "451003",
            name: "田阳区"
          },
          {
            code: "451022",
            name: "田东县"
          },
          {
            code: "451024",
            name: "德保县"
          },
          {
            code: "451026",
            name: "那坡县"
          },
          {
            code: "451027",
            name: "凌云县"
          },
          {
            code: "451028",
            name: "乐业县"
          },
          {
            code: "451029",
            name: "田林县"
          },
          {
            code: "451030",
            name: "西林县"
          },
          {
            code: "451031",
            name: "隆林各族自治县"
          },
          {
            code: "451081",
            name: "靖西市"
          },
          {
            code: "451082",
            name: "平果市"
          }
        ]
      },
      {
        code: "4511",
        name: "贺州市",
        children: [
          {
            code: "451102",
            name: "八步区"
          },
          {
            code: "451103",
            name: "平桂区"
          },
          {
            code: "451121",
            name: "昭平县"
          },
          {
            code: "451122",
            name: "钟山县"
          },
          {
            code: "451123",
            name: "富川瑶族自治县"
          }
        ]
      },
      {
        code: "4512",
        name: "河池市",
        children: [
          {
            code: "451202",
            name: "金城江区"
          },
          {
            code: "451203",
            name: "宜州区"
          },
          {
            code: "451221",
            name: "南丹县"
          },
          {
            code: "451222",
            name: "天峨县"
          },
          {
            code: "451223",
            name: "凤山县"
          },
          {
            code: "451224",
            name: "东兰县"
          },
          {
            code: "451225",
            name: "罗城仫佬族自治县"
          },
          {
            code: "451226",
            name: "环江毛南族自治县"
          },
          {
            code: "451227",
            name: "巴马瑶族自治县"
          },
          {
            code: "451228",
            name: "都安瑶族自治县"
          },
          {
            code: "451229",
            name: "大化瑶族自治县"
          }
        ]
      },
      {
        code: "4513",
        name: "来宾市",
        children: [
          {
            code: "451302",
            name: "兴宾区"
          },
          {
            code: "451321",
            name: "忻城县"
          },
          {
            code: "451322",
            name: "象州县"
          },
          {
            code: "451323",
            name: "武宣县"
          },
          {
            code: "451324",
            name: "金秀瑶族自治县"
          },
          {
            code: "451381",
            name: "合山市"
          }
        ]
      },
      {
        code: "4514",
        name: "崇左市",
        children: [
          {
            code: "451402",
            name: "江州区"
          },
          {
            code: "451421",
            name: "扶绥县"
          },
          {
            code: "451422",
            name: "宁明县"
          },
          {
            code: "451423",
            name: "龙州县"
          },
          {
            code: "451424",
            name: "大新县"
          },
          {
            code: "451425",
            name: "天等县"
          },
          {
            code: "451481",
            name: "凭祥市"
          }
        ]
      }
    ]
  },
  {
    code: "46",
    name: "海南省",
    children: [
      {
        code: "4601",
        name: "海口市",
        children: [
          {
            code: "460105",
            name: "秀英区"
          },
          {
            code: "460106",
            name: "龙华区"
          },
          {
            code: "460107",
            name: "琼山区"
          },
          {
            code: "460108",
            name: "美兰区"
          }
        ]
      },
      {
        code: "4602",
        name: "三亚市",
        children: [
          {
            code: "460202",
            name: "海棠区"
          },
          {
            code: "460203",
            name: "吉阳区"
          },
          {
            code: "460204",
            name: "天涯区"
          },
          {
            code: "460205",
            name: "崖州区"
          }
        ]
      },
      {
        code: "4603",
        name: "三沙市",
        children: [
          {
            code: "460321",
            name: "西沙群岛"
          },
          {
            code: "460322",
            name: "南沙群岛"
          },
          {
            code: "460323",
            name: "中沙群岛的岛礁及其海域"
          }
        ]
      },
      {
        code: "4604",
        name: "儋州市",
        children: [
          {
            code: "460400100",
            name: "那大镇"
          },
          {
            code: "460400101",
            name: "和庆镇"
          },
          {
            code: "460400102",
            name: "南丰镇"
          },
          {
            code: "460400103",
            name: "大成镇"
          },
          {
            code: "460400104",
            name: "雅星镇"
          },
          {
            code: "460400105",
            name: "兰洋镇"
          },
          {
            code: "460400106",
            name: "光村镇"
          },
          {
            code: "460400107",
            name: "木棠镇"
          },
          {
            code: "460400108",
            name: "海头镇"
          },
          {
            code: "460400109",
            name: "峨蔓镇"
          },
          {
            code: "460400111",
            name: "王五镇"
          },
          {
            code: "460400112",
            name: "白马井镇"
          },
          {
            code: "460400113",
            name: "中和镇"
          },
          {
            code: "460400114",
            name: "排浦镇"
          },
          {
            code: "460400115",
            name: "东成镇"
          },
          {
            code: "460400116",
            name: "新州镇"
          },
          {
            code: "460400499",
            name: "洋浦经济开发区"
          },
          {
            code: "460400500",
            name: "华南热作学院"
          }
        ]
      },
      {
        code: "4690",
        name: "省直辖县级行政区划",
        children: [
          {
            code: "469001",
            name: "五指山市"
          },
          {
            code: "469002",
            name: "琼海市"
          },
          {
            code: "469005",
            name: "文昌市"
          },
          {
            code: "469006",
            name: "万宁市"
          },
          {
            code: "469007",
            name: "东方市"
          },
          {
            code: "469021",
            name: "定安县"
          },
          {
            code: "469022",
            name: "屯昌县"
          },
          {
            code: "469023",
            name: "澄迈县"
          },
          {
            code: "469024",
            name: "临高县"
          },
          {
            code: "469025",
            name: "白沙黎族自治县"
          },
          {
            code: "469026",
            name: "昌江黎族自治县"
          },
          {
            code: "469027",
            name: "乐东黎族自治县"
          },
          {
            code: "469028",
            name: "陵水黎族自治县"
          },
          {
            code: "469029",
            name: "保亭黎族苗族自治县"
          },
          {
            code: "469030",
            name: "琼中黎族苗族自治县"
          }
        ]
      }
    ]
  },
  {
    code: "50",
    name: "重庆市",
    children: [
      {
        code: "5001",
        name: "市辖区",
        children: [
          {
            code: "500101",
            name: "万州区"
          },
          {
            code: "500102",
            name: "涪陵区"
          },
          {
            code: "500103",
            name: "渝中区"
          },
          {
            code: "500104",
            name: "大渡口区"
          },
          {
            code: "500105",
            name: "江北区"
          },
          {
            code: "500106",
            name: "沙坪坝区"
          },
          {
            code: "500107",
            name: "九龙坡区"
          },
          {
            code: "500108",
            name: "南岸区"
          },
          {
            code: "500109",
            name: "北碚区"
          },
          {
            code: "500110",
            name: "綦江区"
          },
          {
            code: "500111",
            name: "大足区"
          },
          {
            code: "500112",
            name: "渝北区"
          },
          {
            code: "500113",
            name: "巴南区"
          },
          {
            code: "500114",
            name: "黔江区"
          },
          {
            code: "500115",
            name: "长寿区"
          },
          {
            code: "500116",
            name: "江津区"
          },
          {
            code: "500117",
            name: "合川区"
          },
          {
            code: "500118",
            name: "永川区"
          },
          {
            code: "500119",
            name: "南川区"
          },
          {
            code: "500120",
            name: "璧山区"
          },
          {
            code: "500151",
            name: "铜梁区"
          },
          {
            code: "500152",
            name: "潼南区"
          },
          {
            code: "500153",
            name: "荣昌区"
          },
          {
            code: "500154",
            name: "开州区"
          },
          {
            code: "500155",
            name: "梁平区"
          },
          {
            code: "500156",
            name: "武隆区"
          }
        ]
      },
      {
        code: "5002",
        name: "县",
        children: [
          {
            code: "500229",
            name: "城口县"
          },
          {
            code: "500230",
            name: "丰都县"
          },
          {
            code: "500231",
            name: "垫江县"
          },
          {
            code: "500233",
            name: "忠县"
          },
          {
            code: "500235",
            name: "云阳县"
          },
          {
            code: "500236",
            name: "奉节县"
          },
          {
            code: "500237",
            name: "巫山县"
          },
          {
            code: "500238",
            name: "巫溪县"
          },
          {
            code: "500240",
            name: "石柱土家族自治县"
          },
          {
            code: "500241",
            name: "秀山土家族苗族自治县"
          },
          {
            code: "500242",
            name: "酉阳土家族苗族自治县"
          },
          {
            code: "500243",
            name: "彭水苗族土家族自治县"
          }
        ]
      }
    ]
  },
  {
    code: "51",
    name: "四川省",
    children: [
      {
        code: "5101",
        name: "成都市",
        children: [
          {
            code: "510104",
            name: "锦江区"
          },
          {
            code: "510105",
            name: "青羊区"
          },
          {
            code: "510106",
            name: "金牛区"
          },
          {
            code: "510107",
            name: "武侯区"
          },
          {
            code: "510108",
            name: "成华区"
          },
          {
            code: "510112",
            name: "龙泉驿区"
          },
          {
            code: "510113",
            name: "青白江区"
          },
          {
            code: "510114",
            name: "新都区"
          },
          {
            code: "510115",
            name: "温江区"
          },
          {
            code: "510116",
            name: "双流区"
          },
          {
            code: "510117",
            name: "郫都区"
          },
          {
            code: "510118",
            name: "新津区"
          },
          {
            code: "510121",
            name: "金堂县"
          },
          {
            code: "510129",
            name: "大邑县"
          },
          {
            code: "510131",
            name: "蒲江县"
          },
          {
            code: "510181",
            name: "都江堰市"
          },
          {
            code: "510182",
            name: "彭州市"
          },
          {
            code: "510183",
            name: "邛崃市"
          },
          {
            code: "510184",
            name: "崇州市"
          },
          {
            code: "510185",
            name: "简阳市"
          }
        ]
      },
      {
        code: "5103",
        name: "自贡市",
        children: [
          {
            code: "510302",
            name: "自流井区"
          },
          {
            code: "510303",
            name: "贡井区"
          },
          {
            code: "510304",
            name: "大安区"
          },
          {
            code: "510311",
            name: "沿滩区"
          },
          {
            code: "510321",
            name: "荣县"
          },
          {
            code: "510322",
            name: "富顺县"
          }
        ]
      },
      {
        code: "5104",
        name: "攀枝花市",
        children: [
          {
            code: "510402",
            name: "东区"
          },
          {
            code: "510403",
            name: "西区"
          },
          {
            code: "510411",
            name: "仁和区"
          },
          {
            code: "510421",
            name: "米易县"
          },
          {
            code: "510422",
            name: "盐边县"
          }
        ]
      },
      {
        code: "5105",
        name: "泸州市",
        children: [
          {
            code: "510502",
            name: "江阳区"
          },
          {
            code: "510503",
            name: "纳溪区"
          },
          {
            code: "510504",
            name: "龙马潭区"
          },
          {
            code: "510521",
            name: "泸县"
          },
          {
            code: "510522",
            name: "合江县"
          },
          {
            code: "510524",
            name: "叙永县"
          },
          {
            code: "510525",
            name: "古蔺县"
          }
        ]
      },
      {
        code: "5106",
        name: "德阳市",
        children: [
          {
            code: "510603",
            name: "旌阳区"
          },
          {
            code: "510604",
            name: "罗江区"
          },
          {
            code: "510623",
            name: "中江县"
          },
          {
            code: "510681",
            name: "广汉市"
          },
          {
            code: "510682",
            name: "什邡市"
          },
          {
            code: "510683",
            name: "绵竹市"
          }
        ]
      },
      {
        code: "5107",
        name: "绵阳市",
        children: [
          {
            code: "510703",
            name: "涪城区"
          },
          {
            code: "510704",
            name: "游仙区"
          },
          {
            code: "510705",
            name: "安州区"
          },
          {
            code: "510722",
            name: "三台县"
          },
          {
            code: "510723",
            name: "盐亭县"
          },
          {
            code: "510725",
            name: "梓潼县"
          },
          {
            code: "510726",
            name: "北川羌族自治县"
          },
          {
            code: "510727",
            name: "平武县"
          },
          {
            code: "510781",
            name: "江油市"
          }
        ]
      },
      {
        code: "5108",
        name: "广元市",
        children: [
          {
            code: "510802",
            name: "利州区"
          },
          {
            code: "510811",
            name: "昭化区"
          },
          {
            code: "510812",
            name: "朝天区"
          },
          {
            code: "510821",
            name: "旺苍县"
          },
          {
            code: "510822",
            name: "青川县"
          },
          {
            code: "510823",
            name: "剑阁县"
          },
          {
            code: "510824",
            name: "苍溪县"
          }
        ]
      },
      {
        code: "5109",
        name: "遂宁市",
        children: [
          {
            code: "510903",
            name: "船山区"
          },
          {
            code: "510904",
            name: "安居区"
          },
          {
            code: "510921",
            name: "蓬溪县"
          },
          {
            code: "510923",
            name: "大英县"
          },
          {
            code: "510981",
            name: "射洪市"
          }
        ]
      },
      {
        code: "5110",
        name: "内江市",
        children: [
          {
            code: "511002",
            name: "市中区"
          },
          {
            code: "511011",
            name: "东兴区"
          },
          {
            code: "511024",
            name: "威远县"
          },
          {
            code: "511025",
            name: "资中县"
          },
          {
            code: "511071",
            name: "内江经济开发区"
          },
          {
            code: "511083",
            name: "隆昌市"
          }
        ]
      },
      {
        code: "5111",
        name: "乐山市",
        children: [
          {
            code: "511102",
            name: "市中区"
          },
          {
            code: "511111",
            name: "沙湾区"
          },
          {
            code: "511112",
            name: "五通桥区"
          },
          {
            code: "511113",
            name: "金口河区"
          },
          {
            code: "511123",
            name: "犍为县"
          },
          {
            code: "511124",
            name: "井研县"
          },
          {
            code: "511126",
            name: "夹江县"
          },
          {
            code: "511129",
            name: "沐川县"
          },
          {
            code: "511132",
            name: "峨边彝族自治县"
          },
          {
            code: "511133",
            name: "马边彝族自治县"
          },
          {
            code: "511181",
            name: "峨眉山市"
          }
        ]
      },
      {
        code: "5113",
        name: "南充市",
        children: [
          {
            code: "511302",
            name: "顺庆区"
          },
          {
            code: "511303",
            name: "高坪区"
          },
          {
            code: "511304",
            name: "嘉陵区"
          },
          {
            code: "511321",
            name: "南部县"
          },
          {
            code: "511322",
            name: "营山县"
          },
          {
            code: "511323",
            name: "蓬安县"
          },
          {
            code: "511324",
            name: "仪陇县"
          },
          {
            code: "511325",
            name: "西充县"
          },
          {
            code: "511381",
            name: "阆中市"
          }
        ]
      },
      {
        code: "5114",
        name: "眉山市",
        children: [
          {
            code: "511402",
            name: "东坡区"
          },
          {
            code: "511403",
            name: "彭山区"
          },
          {
            code: "511421",
            name: "仁寿县"
          },
          {
            code: "511423",
            name: "洪雅县"
          },
          {
            code: "511424",
            name: "丹棱县"
          },
          {
            code: "511425",
            name: "青神县"
          }
        ]
      },
      {
        code: "5115",
        name: "宜宾市",
        children: [
          {
            code: "511502",
            name: "翠屏区"
          },
          {
            code: "511503",
            name: "南溪区"
          },
          {
            code: "511504",
            name: "叙州区"
          },
          {
            code: "511523",
            name: "江安县"
          },
          {
            code: "511524",
            name: "长宁县"
          },
          {
            code: "511525",
            name: "高县"
          },
          {
            code: "511526",
            name: "珙县"
          },
          {
            code: "511527",
            name: "筠连县"
          },
          {
            code: "511528",
            name: "兴文县"
          },
          {
            code: "511529",
            name: "屏山县"
          }
        ]
      },
      {
        code: "5116",
        name: "广安市",
        children: [
          {
            code: "511602",
            name: "广安区"
          },
          {
            code: "511603",
            name: "前锋区"
          },
          {
            code: "511621",
            name: "岳池县"
          },
          {
            code: "511622",
            name: "武胜县"
          },
          {
            code: "511623",
            name: "邻水县"
          },
          {
            code: "511681",
            name: "华蓥市"
          }
        ]
      },
      {
        code: "5117",
        name: "达州市",
        children: [
          {
            code: "511702",
            name: "通川区"
          },
          {
            code: "511703",
            name: "达川区"
          },
          {
            code: "511722",
            name: "宣汉县"
          },
          {
            code: "511723",
            name: "开江县"
          },
          {
            code: "511724",
            name: "大竹县"
          },
          {
            code: "511725",
            name: "渠县"
          },
          {
            code: "511771",
            name: "达州经济开发区"
          },
          {
            code: "511781",
            name: "万源市"
          }
        ]
      },
      {
        code: "5118",
        name: "雅安市",
        children: [
          {
            code: "511802",
            name: "雨城区"
          },
          {
            code: "511803",
            name: "名山区"
          },
          {
            code: "511822",
            name: "荥经县"
          },
          {
            code: "511823",
            name: "汉源县"
          },
          {
            code: "511824",
            name: "石棉县"
          },
          {
            code: "511825",
            name: "天全县"
          },
          {
            code: "511826",
            name: "芦山县"
          },
          {
            code: "511827",
            name: "宝兴县"
          }
        ]
      },
      {
        code: "5119",
        name: "巴中市",
        children: [
          {
            code: "511902",
            name: "巴州区"
          },
          {
            code: "511903",
            name: "恩阳区"
          },
          {
            code: "511921",
            name: "通江县"
          },
          {
            code: "511922",
            name: "南江县"
          },
          {
            code: "511923",
            name: "平昌县"
          },
          {
            code: "511971",
            name: "巴中经济开发区"
          }
        ]
      },
      {
        code: "5120",
        name: "资阳市",
        children: [
          {
            code: "512002",
            name: "雁江区"
          },
          {
            code: "512021",
            name: "安岳县"
          },
          {
            code: "512022",
            name: "乐至县"
          }
        ]
      },
      {
        code: "5132",
        name: "阿坝藏族羌族自治州",
        children: [
          {
            code: "513201",
            name: "马尔康市"
          },
          {
            code: "513221",
            name: "汶川县"
          },
          {
            code: "513222",
            name: "理县"
          },
          {
            code: "513223",
            name: "茂县"
          },
          {
            code: "513224",
            name: "松潘县"
          },
          {
            code: "513225",
            name: "九寨沟县"
          },
          {
            code: "513226",
            name: "金川县"
          },
          {
            code: "513227",
            name: "小金县"
          },
          {
            code: "513228",
            name: "黑水县"
          },
          {
            code: "513230",
            name: "壤塘县"
          },
          {
            code: "513231",
            name: "阿坝县"
          },
          {
            code: "513232",
            name: "若尔盖县"
          },
          {
            code: "513233",
            name: "红原县"
          }
        ]
      },
      {
        code: "5133",
        name: "甘孜藏族自治州",
        children: [
          {
            code: "513301",
            name: "康定市"
          },
          {
            code: "513322",
            name: "泸定县"
          },
          {
            code: "513323",
            name: "丹巴县"
          },
          {
            code: "513324",
            name: "九龙县"
          },
          {
            code: "513325",
            name: "雅江县"
          },
          {
            code: "513326",
            name: "道孚县"
          },
          {
            code: "513327",
            name: "炉霍县"
          },
          {
            code: "513328",
            name: "甘孜县"
          },
          {
            code: "513329",
            name: "新龙县"
          },
          {
            code: "513330",
            name: "德格县"
          },
          {
            code: "513331",
            name: "白玉县"
          },
          {
            code: "513332",
            name: "石渠县"
          },
          {
            code: "513333",
            name: "色达县"
          },
          {
            code: "513334",
            name: "理塘县"
          },
          {
            code: "513335",
            name: "巴塘县"
          },
          {
            code: "513336",
            name: "乡城县"
          },
          {
            code: "513337",
            name: "稻城县"
          },
          {
            code: "513338",
            name: "得荣县"
          }
        ]
      },
      {
        code: "5134",
        name: "凉山彝族自治州",
        children: [
          {
            code: "513401",
            name: "西昌市"
          },
          {
            code: "513422",
            name: "木里藏族自治县"
          },
          {
            code: "513423",
            name: "盐源县"
          },
          {
            code: "513424",
            name: "德昌县"
          },
          {
            code: "513425",
            name: "会理县"
          },
          {
            code: "513426",
            name: "会东县"
          },
          {
            code: "513427",
            name: "宁南县"
          },
          {
            code: "513428",
            name: "普格县"
          },
          {
            code: "513429",
            name: "布拖县"
          },
          {
            code: "513430",
            name: "金阳县"
          },
          {
            code: "513431",
            name: "昭觉县"
          },
          {
            code: "513432",
            name: "喜德县"
          },
          {
            code: "513433",
            name: "冕宁县"
          },
          {
            code: "513434",
            name: "越西县"
          },
          {
            code: "513435",
            name: "甘洛县"
          },
          {
            code: "513436",
            name: "美姑县"
          },
          {
            code: "513437",
            name: "雷波县"
          }
        ]
      }
    ]
  },
  {
    code: "52",
    name: "贵州省",
    children: [
      {
        code: "5201",
        name: "贵阳市",
        children: [
          {
            code: "520102",
            name: "南明区"
          },
          {
            code: "520103",
            name: "云岩区"
          },
          {
            code: "520111",
            name: "花溪区"
          },
          {
            code: "520112",
            name: "乌当区"
          },
          {
            code: "520113",
            name: "白云区"
          },
          {
            code: "520115",
            name: "观山湖区"
          },
          {
            code: "520121",
            name: "开阳县"
          },
          {
            code: "520122",
            name: "息烽县"
          },
          {
            code: "520123",
            name: "修文县"
          },
          {
            code: "520181",
            name: "清镇市"
          }
        ]
      },
      {
        code: "5202",
        name: "六盘水市",
        children: [
          {
            code: "520201",
            name: "钟山区"
          },
          {
            code: "520203",
            name: "六枝特区"
          },
          {
            code: "520221",
            name: "水城县"
          },
          {
            code: "520281",
            name: "盘州市"
          }
        ]
      },
      {
        code: "5203",
        name: "遵义市",
        children: [
          {
            code: "520302",
            name: "红花岗区"
          },
          {
            code: "520303",
            name: "汇川区"
          },
          {
            code: "520304",
            name: "播州区"
          },
          {
            code: "520322",
            name: "桐梓县"
          },
          {
            code: "520323",
            name: "绥阳县"
          },
          {
            code: "520324",
            name: "正安县"
          },
          {
            code: "520325",
            name: "道真仡佬族苗族自治县"
          },
          {
            code: "520326",
            name: "务川仡佬族苗族自治县"
          },
          {
            code: "520327",
            name: "凤冈县"
          },
          {
            code: "520328",
            name: "湄潭县"
          },
          {
            code: "520329",
            name: "余庆县"
          },
          {
            code: "520330",
            name: "习水县"
          },
          {
            code: "520381",
            name: "赤水市"
          },
          {
            code: "520382",
            name: "仁怀市"
          }
        ]
      },
      {
        code: "5204",
        name: "安顺市",
        children: [
          {
            code: "520402",
            name: "西秀区"
          },
          {
            code: "520403",
            name: "平坝区"
          },
          {
            code: "520422",
            name: "普定县"
          },
          {
            code: "520423",
            name: "镇宁布依族苗族自治县"
          },
          {
            code: "520424",
            name: "关岭布依族苗族自治县"
          },
          {
            code: "520425",
            name: "紫云苗族布依族自治县"
          }
        ]
      },
      {
        code: "5205",
        name: "毕节市",
        children: [
          {
            code: "520502",
            name: "七星关区"
          },
          {
            code: "520521",
            name: "大方县"
          },
          {
            code: "520522",
            name: "黔西县"
          },
          {
            code: "520523",
            name: "金沙县"
          },
          {
            code: "520524",
            name: "织金县"
          },
          {
            code: "520525",
            name: "纳雍县"
          },
          {
            code: "520526",
            name: "威宁彝族回族苗族自治县"
          },
          {
            code: "520527",
            name: "赫章县"
          }
        ]
      },
      {
        code: "5206",
        name: "铜仁市",
        children: [
          {
            code: "520602",
            name: "碧江区"
          },
          {
            code: "520603",
            name: "万山区"
          },
          {
            code: "520621",
            name: "江口县"
          },
          {
            code: "520622",
            name: "玉屏侗族自治县"
          },
          {
            code: "520623",
            name: "石阡县"
          },
          {
            code: "520624",
            name: "思南县"
          },
          {
            code: "520625",
            name: "印江土家族苗族自治县"
          },
          {
            code: "520626",
            name: "德江县"
          },
          {
            code: "520627",
            name: "沿河土家族自治县"
          },
          {
            code: "520628",
            name: "松桃苗族自治县"
          }
        ]
      },
      {
        code: "5223",
        name: "黔西南布依族苗族自治州",
        children: [
          {
            code: "522301",
            name: "兴义市"
          },
          {
            code: "522302",
            name: "兴仁市"
          },
          {
            code: "522323",
            name: "普安县"
          },
          {
            code: "522324",
            name: "晴隆县"
          },
          {
            code: "522325",
            name: "贞丰县"
          },
          {
            code: "522326",
            name: "望谟县"
          },
          {
            code: "522327",
            name: "册亨县"
          },
          {
            code: "522328",
            name: "安龙县"
          }
        ]
      },
      {
        code: "5226",
        name: "黔东南苗族侗族自治州",
        children: [
          {
            code: "522601",
            name: "凯里市"
          },
          {
            code: "522622",
            name: "黄平县"
          },
          {
            code: "522623",
            name: "施秉县"
          },
          {
            code: "522624",
            name: "三穗县"
          },
          {
            code: "522625",
            name: "镇远县"
          },
          {
            code: "522626",
            name: "岑巩县"
          },
          {
            code: "522627",
            name: "天柱县"
          },
          {
            code: "522628",
            name: "锦屏县"
          },
          {
            code: "522629",
            name: "剑河县"
          },
          {
            code: "522630",
            name: "台江县"
          },
          {
            code: "522631",
            name: "黎平县"
          },
          {
            code: "522632",
            name: "榕江县"
          },
          {
            code: "522633",
            name: "从江县"
          },
          {
            code: "522634",
            name: "雷山县"
          },
          {
            code: "522635",
            name: "麻江县"
          },
          {
            code: "522636",
            name: "丹寨县"
          }
        ]
      },
      {
        code: "5227",
        name: "黔南布依族苗族自治州",
        children: [
          {
            code: "522701",
            name: "都匀市"
          },
          {
            code: "522702",
            name: "福泉市"
          },
          {
            code: "522722",
            name: "荔波县"
          },
          {
            code: "522723",
            name: "贵定县"
          },
          {
            code: "522725",
            name: "瓮安县"
          },
          {
            code: "522726",
            name: "独山县"
          },
          {
            code: "522727",
            name: "平塘县"
          },
          {
            code: "522728",
            name: "罗甸县"
          },
          {
            code: "522729",
            name: "长顺县"
          },
          {
            code: "522730",
            name: "龙里县"
          },
          {
            code: "522731",
            name: "惠水县"
          },
          {
            code: "522732",
            name: "三都水族自治县"
          }
        ]
      }
    ]
  },
  {
    code: "53",
    name: "云南省",
    children: [
      {
        code: "5301",
        name: "昆明市",
        children: [
          {
            code: "530102",
            name: "五华区"
          },
          {
            code: "530103",
            name: "盘龙区"
          },
          {
            code: "530111",
            name: "官渡区"
          },
          {
            code: "530112",
            name: "西山区"
          },
          {
            code: "530113",
            name: "东川区"
          },
          {
            code: "530114",
            name: "呈贡区"
          },
          {
            code: "530115",
            name: "晋宁区"
          },
          {
            code: "530124",
            name: "富民县"
          },
          {
            code: "530125",
            name: "宜良县"
          },
          {
            code: "530126",
            name: "石林彝族自治县"
          },
          {
            code: "530127",
            name: "嵩明县"
          },
          {
            code: "530128",
            name: "禄劝彝族苗族自治县"
          },
          {
            code: "530129",
            name: "寻甸回族彝族自治县"
          },
          {
            code: "530181",
            name: "安宁市"
          }
        ]
      },
      {
        code: "5303",
        name: "曲靖市",
        children: [
          {
            code: "530302",
            name: "麒麟区"
          },
          {
            code: "530303",
            name: "沾益区"
          },
          {
            code: "530304",
            name: "马龙区"
          },
          {
            code: "530322",
            name: "陆良县"
          },
          {
            code: "530323",
            name: "师宗县"
          },
          {
            code: "530324",
            name: "罗平县"
          },
          {
            code: "530325",
            name: "富源县"
          },
          {
            code: "530326",
            name: "会泽县"
          },
          {
            code: "530381",
            name: "宣威市"
          }
        ]
      },
      {
        code: "5304",
        name: "玉溪市",
        children: [
          {
            code: "530402",
            name: "红塔区"
          },
          {
            code: "530403",
            name: "江川区"
          },
          {
            code: "530423",
            name: "通海县"
          },
          {
            code: "530424",
            name: "华宁县"
          },
          {
            code: "530425",
            name: "易门县"
          },
          {
            code: "530426",
            name: "峨山彝族自治县"
          },
          {
            code: "530427",
            name: "新平彝族傣族自治县"
          },
          {
            code: "530428",
            name: "元江哈尼族彝族傣族自治县"
          },
          {
            code: "530481",
            name: "澄江市"
          }
        ]
      },
      {
        code: "5305",
        name: "保山市",
        children: [
          {
            code: "530502",
            name: "隆阳区"
          },
          {
            code: "530521",
            name: "施甸县"
          },
          {
            code: "530523",
            name: "龙陵县"
          },
          {
            code: "530524",
            name: "昌宁县"
          },
          {
            code: "530581",
            name: "腾冲市"
          }
        ]
      },
      {
        code: "5306",
        name: "昭通市",
        children: [
          {
            code: "530602",
            name: "昭阳区"
          },
          {
            code: "530621",
            name: "鲁甸县"
          },
          {
            code: "530622",
            name: "巧家县"
          },
          {
            code: "530623",
            name: "盐津县"
          },
          {
            code: "530624",
            name: "大关县"
          },
          {
            code: "530625",
            name: "永善县"
          },
          {
            code: "530626",
            name: "绥江县"
          },
          {
            code: "530627",
            name: "镇雄县"
          },
          {
            code: "530628",
            name: "彝良县"
          },
          {
            code: "530629",
            name: "威信县"
          },
          {
            code: "530681",
            name: "水富市"
          }
        ]
      },
      {
        code: "5307",
        name: "丽江市",
        children: [
          {
            code: "530702",
            name: "古城区"
          },
          {
            code: "530721",
            name: "玉龙纳西族自治县"
          },
          {
            code: "530722",
            name: "永胜县"
          },
          {
            code: "530723",
            name: "华坪县"
          },
          {
            code: "530724",
            name: "宁蒗彝族自治县"
          }
        ]
      },
      {
        code: "5308",
        name: "普洱市",
        children: [
          {
            code: "530802",
            name: "思茅区"
          },
          {
            code: "530821",
            name: "宁洱哈尼族彝族自治县"
          },
          {
            code: "530822",
            name: "墨江哈尼族自治县"
          },
          {
            code: "530823",
            name: "景东彝族自治县"
          },
          {
            code: "530824",
            name: "景谷傣族彝族自治县"
          },
          {
            code: "530825",
            name: "镇沅彝族哈尼族拉祜族自治县"
          },
          {
            code: "530826",
            name: "江城哈尼族彝族自治县"
          },
          {
            code: "530827",
            name: "孟连傣族拉祜族佤族自治县"
          },
          {
            code: "530828",
            name: "澜沧拉祜族自治县"
          },
          {
            code: "530829",
            name: "西盟佤族自治县"
          }
        ]
      },
      {
        code: "5309",
        name: "临沧市",
        children: [
          {
            code: "530902",
            name: "临翔区"
          },
          {
            code: "530921",
            name: "凤庆县"
          },
          {
            code: "530922",
            name: "云县"
          },
          {
            code: "530923",
            name: "永德县"
          },
          {
            code: "530924",
            name: "镇康县"
          },
          {
            code: "530925",
            name: "双江拉祜族佤族布朗族傣族自治县"
          },
          {
            code: "530926",
            name: "耿马傣族佤族自治县"
          },
          {
            code: "530927",
            name: "沧源佤族自治县"
          }
        ]
      },
      {
        code: "5323",
        name: "楚雄彝族自治州",
        children: [
          {
            code: "532301",
            name: "楚雄市"
          },
          {
            code: "532322",
            name: "双柏县"
          },
          {
            code: "532323",
            name: "牟定县"
          },
          {
            code: "532324",
            name: "南华县"
          },
          {
            code: "532325",
            name: "姚安县"
          },
          {
            code: "532326",
            name: "大姚县"
          },
          {
            code: "532327",
            name: "永仁县"
          },
          {
            code: "532328",
            name: "元谋县"
          },
          {
            code: "532329",
            name: "武定县"
          },
          {
            code: "532331",
            name: "禄丰县"
          }
        ]
      },
      {
        code: "5325",
        name: "红河哈尼族彝族自治州",
        children: [
          {
            code: "532501",
            name: "个旧市"
          },
          {
            code: "532502",
            name: "开远市"
          },
          {
            code: "532503",
            name: "蒙自市"
          },
          {
            code: "532504",
            name: "弥勒市"
          },
          {
            code: "532523",
            name: "屏边苗族自治县"
          },
          {
            code: "532524",
            name: "建水县"
          },
          {
            code: "532525",
            name: "石屏县"
          },
          {
            code: "532527",
            name: "泸西县"
          },
          {
            code: "532528",
            name: "元阳县"
          },
          {
            code: "532529",
            name: "红河县"
          },
          {
            code: "532530",
            name: "金平苗族瑶族傣族自治县"
          },
          {
            code: "532531",
            name: "绿春县"
          },
          {
            code: "532532",
            name: "河口瑶族自治县"
          }
        ]
      },
      {
        code: "5326",
        name: "文山壮族苗族自治州",
        children: [
          {
            code: "532601",
            name: "文山市"
          },
          {
            code: "532622",
            name: "砚山县"
          },
          {
            code: "532623",
            name: "西畴县"
          },
          {
            code: "532624",
            name: "麻栗坡县"
          },
          {
            code: "532625",
            name: "马关县"
          },
          {
            code: "532626",
            name: "丘北县"
          },
          {
            code: "532627",
            name: "广南县"
          },
          {
            code: "532628",
            name: "富宁县"
          }
        ]
      },
      {
        code: "5328",
        name: "西双版纳傣族自治州",
        children: [
          {
            code: "532801",
            name: "景洪市"
          },
          {
            code: "532822",
            name: "勐海县"
          },
          {
            code: "532823",
            name: "勐腊县"
          }
        ]
      },
      {
        code: "5329",
        name: "大理白族自治州",
        children: [
          {
            code: "532901",
            name: "大理市"
          },
          {
            code: "532922",
            name: "漾濞彝族自治县"
          },
          {
            code: "532923",
            name: "祥云县"
          },
          {
            code: "532924",
            name: "宾川县"
          },
          {
            code: "532925",
            name: "弥渡县"
          },
          {
            code: "532926",
            name: "南涧彝族自治县"
          },
          {
            code: "532927",
            name: "巍山彝族回族自治县"
          },
          {
            code: "532928",
            name: "永平县"
          },
          {
            code: "532929",
            name: "云龙县"
          },
          {
            code: "532930",
            name: "洱源县"
          },
          {
            code: "532931",
            name: "剑川县"
          },
          {
            code: "532932",
            name: "鹤庆县"
          }
        ]
      },
      {
        code: "5331",
        name: "德宏傣族景颇族自治州",
        children: [
          {
            code: "533102",
            name: "瑞丽市"
          },
          {
            code: "533103",
            name: "芒市"
          },
          {
            code: "533122",
            name: "梁河县"
          },
          {
            code: "533123",
            name: "盈江县"
          },
          {
            code: "533124",
            name: "陇川县"
          }
        ]
      },
      {
        code: "5333",
        name: "怒江傈僳族自治州",
        children: [
          {
            code: "533301",
            name: "泸水市"
          },
          {
            code: "533323",
            name: "福贡县"
          },
          {
            code: "533324",
            name: "贡山独龙族怒族自治县"
          },
          {
            code: "533325",
            name: "兰坪白族普米族自治县"
          }
        ]
      },
      {
        code: "5334",
        name: "迪庆藏族自治州",
        children: [
          {
            code: "533401",
            name: "香格里拉市"
          },
          {
            code: "533422",
            name: "德钦县"
          },
          {
            code: "533423",
            name: "维西傈僳族自治县"
          }
        ]
      }
    ]
  },
  {
    code: "54",
    name: "西藏自治区",
    children: [
      {
        code: "5401",
        name: "拉萨市",
        children: [
          {
            code: "540102",
            name: "城关区"
          },
          {
            code: "540103",
            name: "堆龙德庆区"
          },
          {
            code: "540104",
            name: "达孜区"
          },
          {
            code: "540121",
            name: "林周县"
          },
          {
            code: "540122",
            name: "当雄县"
          },
          {
            code: "540123",
            name: "尼木县"
          },
          {
            code: "540124",
            name: "曲水县"
          },
          {
            code: "540127",
            name: "墨竹工卡县"
          },
          {
            code: "540171",
            name: "格尔木藏青工业园区"
          },
          {
            code: "540172",
            name: "拉萨经济技术开发区"
          },
          {
            code: "540173",
            name: "西藏文化旅游创意园区"
          },
          {
            code: "540174",
            name: "达孜工业园区"
          }
        ]
      },
      {
        code: "5402",
        name: "日喀则市",
        children: [
          {
            code: "540202",
            name: "桑珠孜区"
          },
          {
            code: "540221",
            name: "南木林县"
          },
          {
            code: "540222",
            name: "江孜县"
          },
          {
            code: "540223",
            name: "定日县"
          },
          {
            code: "540224",
            name: "萨迦县"
          },
          {
            code: "540225",
            name: "拉孜县"
          },
          {
            code: "540226",
            name: "昂仁县"
          },
          {
            code: "540227",
            name: "谢通门县"
          },
          {
            code: "540228",
            name: "白朗县"
          },
          {
            code: "540229",
            name: "仁布县"
          },
          {
            code: "540230",
            name: "康马县"
          },
          {
            code: "540231",
            name: "定结县"
          },
          {
            code: "540232",
            name: "仲巴县"
          },
          {
            code: "540233",
            name: "亚东县"
          },
          {
            code: "540234",
            name: "吉隆县"
          },
          {
            code: "540235",
            name: "聂拉木县"
          },
          {
            code: "540236",
            name: "萨嘎县"
          },
          {
            code: "540237",
            name: "岗巴县"
          }
        ]
      },
      {
        code: "5403",
        name: "昌都市",
        children: [
          {
            code: "540302",
            name: "卡若区"
          },
          {
            code: "540321",
            name: "江达县"
          },
          {
            code: "540322",
            name: "贡觉县"
          },
          {
            code: "540323",
            name: "类乌齐县"
          },
          {
            code: "540324",
            name: "丁青县"
          },
          {
            code: "540325",
            name: "察雅县"
          },
          {
            code: "540326",
            name: "八宿县"
          },
          {
            code: "540327",
            name: "左贡县"
          },
          {
            code: "540328",
            name: "芒康县"
          },
          {
            code: "540329",
            name: "洛隆县"
          },
          {
            code: "540330",
            name: "边坝县"
          }
        ]
      },
      {
        code: "5404",
        name: "林芝市",
        children: [
          {
            code: "540402",
            name: "巴宜区"
          },
          {
            code: "540421",
            name: "工布江达县"
          },
          {
            code: "540422",
            name: "米林县"
          },
          {
            code: "540423",
            name: "墨脱县"
          },
          {
            code: "540424",
            name: "波密县"
          },
          {
            code: "540425",
            name: "察隅县"
          },
          {
            code: "540426",
            name: "朗县"
          }
        ]
      },
      {
        code: "5405",
        name: "山南市",
        children: [
          {
            code: "540502",
            name: "乃东区"
          },
          {
            code: "540521",
            name: "扎囊县"
          },
          {
            code: "540522",
            name: "贡嘎县"
          },
          {
            code: "540523",
            name: "桑日县"
          },
          {
            code: "540524",
            name: "琼结县"
          },
          {
            code: "540525",
            name: "曲松县"
          },
          {
            code: "540526",
            name: "措美县"
          },
          {
            code: "540527",
            name: "洛扎县"
          },
          {
            code: "540528",
            name: "加查县"
          },
          {
            code: "540529",
            name: "隆子县"
          },
          {
            code: "540530",
            name: "错那县"
          },
          {
            code: "540531",
            name: "浪卡子县"
          }
        ]
      },
      {
        code: "5406",
        name: "那曲市",
        children: [
          {
            code: "540602",
            name: "色尼区"
          },
          {
            code: "540621",
            name: "嘉黎县"
          },
          {
            code: "540622",
            name: "比如县"
          },
          {
            code: "540623",
            name: "聂荣县"
          },
          {
            code: "540624",
            name: "安多县"
          },
          {
            code: "540625",
            name: "申扎县"
          },
          {
            code: "540626",
            name: "索县"
          },
          {
            code: "540627",
            name: "班戈县"
          },
          {
            code: "540628",
            name: "巴青县"
          },
          {
            code: "540629",
            name: "尼玛县"
          },
          {
            code: "540630",
            name: "双湖县"
          }
        ]
      },
      {
        code: "5425",
        name: "阿里地区",
        children: [
          {
            code: "542521",
            name: "普兰县"
          },
          {
            code: "542522",
            name: "札达县"
          },
          {
            code: "542523",
            name: "噶尔县"
          },
          {
            code: "542524",
            name: "日土县"
          },
          {
            code: "542525",
            name: "革吉县"
          },
          {
            code: "542526",
            name: "改则县"
          },
          {
            code: "542527",
            name: "措勤县"
          }
        ]
      }
    ]
  },
  {
    code: "61",
    name: "陕西省",
    children: [
      {
        code: "6101",
        name: "西安市",
        children: [
          {
            code: "610102",
            name: "新城区"
          },
          {
            code: "610103",
            name: "碑林区"
          },
          {
            code: "610104",
            name: "莲湖区"
          },
          {
            code: "610111",
            name: "灞桥区"
          },
          {
            code: "610112",
            name: "未央区"
          },
          {
            code: "610113",
            name: "雁塔区"
          },
          {
            code: "610114",
            name: "阎良区"
          },
          {
            code: "610115",
            name: "临潼区"
          },
          {
            code: "610116",
            name: "长安区"
          },
          {
            code: "610117",
            name: "高陵区"
          },
          {
            code: "610118",
            name: "鄠邑区"
          },
          {
            code: "610122",
            name: "蓝田县"
          },
          {
            code: "610124",
            name: "周至县"
          }
        ]
      },
      {
        code: "6102",
        name: "铜川市",
        children: [
          {
            code: "610202",
            name: "王益区"
          },
          {
            code: "610203",
            name: "印台区"
          },
          {
            code: "610204",
            name: "耀州区"
          },
          {
            code: "610222",
            name: "宜君县"
          }
        ]
      },
      {
        code: "6103",
        name: "宝鸡市",
        children: [
          {
            code: "610302",
            name: "渭滨区"
          },
          {
            code: "610303",
            name: "金台区"
          },
          {
            code: "610304",
            name: "陈仓区"
          },
          {
            code: "610322",
            name: "凤翔县"
          },
          {
            code: "610323",
            name: "岐山县"
          },
          {
            code: "610324",
            name: "扶风县"
          },
          {
            code: "610326",
            name: "眉县"
          },
          {
            code: "610327",
            name: "陇县"
          },
          {
            code: "610328",
            name: "千阳县"
          },
          {
            code: "610329",
            name: "麟游县"
          },
          {
            code: "610330",
            name: "凤县"
          },
          {
            code: "610331",
            name: "太白县"
          }
        ]
      },
      {
        code: "6104",
        name: "咸阳市",
        children: [
          {
            code: "610402",
            name: "秦都区"
          },
          {
            code: "610403",
            name: "杨陵区"
          },
          {
            code: "610404",
            name: "渭城区"
          },
          {
            code: "610422",
            name: "三原县"
          },
          {
            code: "610423",
            name: "泾阳县"
          },
          {
            code: "610424",
            name: "乾县"
          },
          {
            code: "610425",
            name: "礼泉县"
          },
          {
            code: "610426",
            name: "永寿县"
          },
          {
            code: "610428",
            name: "长武县"
          },
          {
            code: "610429",
            name: "旬邑县"
          },
          {
            code: "610430",
            name: "淳化县"
          },
          {
            code: "610431",
            name: "武功县"
          },
          {
            code: "610481",
            name: "兴平市"
          },
          {
            code: "610482",
            name: "彬州市"
          }
        ]
      },
      {
        code: "6105",
        name: "渭南市",
        children: [
          {
            code: "610502",
            name: "临渭区"
          },
          {
            code: "610503",
            name: "华州区"
          },
          {
            code: "610522",
            name: "潼关县"
          },
          {
            code: "610523",
            name: "大荔县"
          },
          {
            code: "610524",
            name: "合阳县"
          },
          {
            code: "610525",
            name: "澄城县"
          },
          {
            code: "610526",
            name: "蒲城县"
          },
          {
            code: "610527",
            name: "白水县"
          },
          {
            code: "610528",
            name: "富平县"
          },
          {
            code: "610581",
            name: "韩城市"
          },
          {
            code: "610582",
            name: "华阴市"
          }
        ]
      },
      {
        code: "6106",
        name: "延安市",
        children: [
          {
            code: "610602",
            name: "宝塔区"
          },
          {
            code: "610603",
            name: "安塞区"
          },
          {
            code: "610621",
            name: "延长县"
          },
          {
            code: "610622",
            name: "延川县"
          },
          {
            code: "610625",
            name: "志丹县"
          },
          {
            code: "610626",
            name: "吴起县"
          },
          {
            code: "610627",
            name: "甘泉县"
          },
          {
            code: "610628",
            name: "富县"
          },
          {
            code: "610629",
            name: "洛川县"
          },
          {
            code: "610630",
            name: "宜川县"
          },
          {
            code: "610631",
            name: "黄龙县"
          },
          {
            code: "610632",
            name: "黄陵县"
          },
          {
            code: "610681",
            name: "子长市"
          }
        ]
      },
      {
        code: "6107",
        name: "汉中市",
        children: [
          {
            code: "610702",
            name: "汉台区"
          },
          {
            code: "610703",
            name: "南郑区"
          },
          {
            code: "610722",
            name: "城固县"
          },
          {
            code: "610723",
            name: "洋县"
          },
          {
            code: "610724",
            name: "西乡县"
          },
          {
            code: "610725",
            name: "勉县"
          },
          {
            code: "610726",
            name: "宁强县"
          },
          {
            code: "610727",
            name: "略阳县"
          },
          {
            code: "610728",
            name: "镇巴县"
          },
          {
            code: "610729",
            name: "留坝县"
          },
          {
            code: "610730",
            name: "佛坪县"
          }
        ]
      },
      {
        code: "6108",
        name: "榆林市",
        children: [
          {
            code: "610802",
            name: "榆阳区"
          },
          {
            code: "610803",
            name: "横山区"
          },
          {
            code: "610822",
            name: "府谷县"
          },
          {
            code: "610824",
            name: "靖边县"
          },
          {
            code: "610825",
            name: "定边县"
          },
          {
            code: "610826",
            name: "绥德县"
          },
          {
            code: "610827",
            name: "米脂县"
          },
          {
            code: "610828",
            name: "佳县"
          },
          {
            code: "610829",
            name: "吴堡县"
          },
          {
            code: "610830",
            name: "清涧县"
          },
          {
            code: "610831",
            name: "子洲县"
          },
          {
            code: "610881",
            name: "神木市"
          }
        ]
      },
      {
        code: "6109",
        name: "安康市",
        children: [
          {
            code: "610902",
            name: "汉滨区"
          },
          {
            code: "610921",
            name: "汉阴县"
          },
          {
            code: "610922",
            name: "石泉县"
          },
          {
            code: "610923",
            name: "宁陕县"
          },
          {
            code: "610924",
            name: "紫阳县"
          },
          {
            code: "610925",
            name: "岚皋县"
          },
          {
            code: "610926",
            name: "平利县"
          },
          {
            code: "610927",
            name: "镇坪县"
          },
          {
            code: "610928",
            name: "旬阳县"
          },
          {
            code: "610929",
            name: "白河县"
          }
        ]
      },
      {
        code: "6110",
        name: "商洛市",
        children: [
          {
            code: "611002",
            name: "商州区"
          },
          {
            code: "611021",
            name: "洛南县"
          },
          {
            code: "611022",
            name: "丹凤县"
          },
          {
            code: "611023",
            name: "商南县"
          },
          {
            code: "611024",
            name: "山阳县"
          },
          {
            code: "611025",
            name: "镇安县"
          },
          {
            code: "611026",
            name: "柞水县"
          }
        ]
      }
    ]
  },
  {
    code: "62",
    name: "甘肃省",
    children: [
      {
        code: "6201",
        name: "兰州市",
        children: [
          {
            code: "620102",
            name: "城关区"
          },
          {
            code: "620103",
            name: "七里河区"
          },
          {
            code: "620104",
            name: "西固区"
          },
          {
            code: "620105",
            name: "安宁区"
          },
          {
            code: "620111",
            name: "红古区"
          },
          {
            code: "620121",
            name: "永登县"
          },
          {
            code: "620122",
            name: "皋兰县"
          },
          {
            code: "620123",
            name: "榆中县"
          },
          {
            code: "620171",
            name: "兰州新区"
          }
        ]
      },
      {
        code: "6202",
        name: "嘉峪关市",
        children: [
          {
            code: "620201001",
            name: "雄关街道"
          },
          {
            code: "620201002",
            name: "钢城街道"
          },
          {
            code: "620201100",
            name: "新城镇"
          },
          {
            code: "620201101",
            name: "峪泉镇"
          },
          {
            code: "620201102",
            name: "文殊镇"
          }
        ]
      },
      {
        code: "6203",
        name: "金昌市",
        children: [
          {
            code: "620302",
            name: "金川区"
          },
          {
            code: "620321",
            name: "永昌县"
          }
        ]
      },
      {
        code: "6204",
        name: "白银市",
        children: [
          {
            code: "620402",
            name: "白银区"
          },
          {
            code: "620403",
            name: "平川区"
          },
          {
            code: "620421",
            name: "靖远县"
          },
          {
            code: "620422",
            name: "会宁县"
          },
          {
            code: "620423",
            name: "景泰县"
          }
        ]
      },
      {
        code: "6205",
        name: "天水市",
        children: [
          {
            code: "620502",
            name: "秦州区"
          },
          {
            code: "620503",
            name: "麦积区"
          },
          {
            code: "620521",
            name: "清水县"
          },
          {
            code: "620522",
            name: "秦安县"
          },
          {
            code: "620523",
            name: "甘谷县"
          },
          {
            code: "620524",
            name: "武山县"
          },
          {
            code: "620525",
            name: "张家川回族自治县"
          }
        ]
      },
      {
        code: "6206",
        name: "武威市",
        children: [
          {
            code: "620602",
            name: "凉州区"
          },
          {
            code: "620621",
            name: "民勤县"
          },
          {
            code: "620622",
            name: "古浪县"
          },
          {
            code: "620623",
            name: "天祝藏族自治县"
          }
        ]
      },
      {
        code: "6207",
        name: "张掖市",
        children: [
          {
            code: "620702",
            name: "甘州区"
          },
          {
            code: "620721",
            name: "肃南裕固族自治县"
          },
          {
            code: "620722",
            name: "民乐县"
          },
          {
            code: "620723",
            name: "临泽县"
          },
          {
            code: "620724",
            name: "高台县"
          },
          {
            code: "620725",
            name: "山丹县"
          }
        ]
      },
      {
        code: "6208",
        name: "平凉市",
        children: [
          {
            code: "620802",
            name: "崆峒区"
          },
          {
            code: "620821",
            name: "泾川县"
          },
          {
            code: "620822",
            name: "灵台县"
          },
          {
            code: "620823",
            name: "崇信县"
          },
          {
            code: "620825",
            name: "庄浪县"
          },
          {
            code: "620826",
            name: "静宁县"
          },
          {
            code: "620881",
            name: "华亭市"
          }
        ]
      },
      {
        code: "6209",
        name: "酒泉市",
        children: [
          {
            code: "620902",
            name: "肃州区"
          },
          {
            code: "620921",
            name: "金塔县"
          },
          {
            code: "620922",
            name: "瓜州县"
          },
          {
            code: "620923",
            name: "肃北蒙古族自治县"
          },
          {
            code: "620924",
            name: "阿克塞哈萨克族自治县"
          },
          {
            code: "620981",
            name: "玉门市"
          },
          {
            code: "620982",
            name: "敦煌市"
          }
        ]
      },
      {
        code: "6210",
        name: "庆阳市",
        children: [
          {
            code: "621002",
            name: "西峰区"
          },
          {
            code: "621021",
            name: "庆城县"
          },
          {
            code: "621022",
            name: "环县"
          },
          {
            code: "621023",
            name: "华池县"
          },
          {
            code: "621024",
            name: "合水县"
          },
          {
            code: "621025",
            name: "正宁县"
          },
          {
            code: "621026",
            name: "宁县"
          },
          {
            code: "621027",
            name: "镇原县"
          }
        ]
      },
      {
        code: "6211",
        name: "定西市",
        children: [
          {
            code: "621102",
            name: "安定区"
          },
          {
            code: "621121",
            name: "通渭县"
          },
          {
            code: "621122",
            name: "陇西县"
          },
          {
            code: "621123",
            name: "渭源县"
          },
          {
            code: "621124",
            name: "临洮县"
          },
          {
            code: "621125",
            name: "漳县"
          },
          {
            code: "621126",
            name: "岷县"
          }
        ]
      },
      {
        code: "6212",
        name: "陇南市",
        children: [
          {
            code: "621202",
            name: "武都区"
          },
          {
            code: "621221",
            name: "成县"
          },
          {
            code: "621222",
            name: "文县"
          },
          {
            code: "621223",
            name: "宕昌县"
          },
          {
            code: "621224",
            name: "康县"
          },
          {
            code: "621225",
            name: "西和县"
          },
          {
            code: "621226",
            name: "礼县"
          },
          {
            code: "621227",
            name: "徽县"
          },
          {
            code: "621228",
            name: "两当县"
          }
        ]
      },
      {
        code: "6229",
        name: "临夏回族自治州",
        children: [
          {
            code: "622901",
            name: "临夏市"
          },
          {
            code: "622921",
            name: "临夏县"
          },
          {
            code: "622922",
            name: "康乐县"
          },
          {
            code: "622923",
            name: "永靖县"
          },
          {
            code: "622924",
            name: "广河县"
          },
          {
            code: "622925",
            name: "和政县"
          },
          {
            code: "622926",
            name: "东乡族自治县"
          },
          {
            code: "622927",
            name: "积石山保安族东乡族撒拉族自治县"
          }
        ]
      },
      {
        code: "6230",
        name: "甘南藏族自治州",
        children: [
          {
            code: "623001",
            name: "合作市"
          },
          {
            code: "623021",
            name: "临潭县"
          },
          {
            code: "623022",
            name: "卓尼县"
          },
          {
            code: "623023",
            name: "舟曲县"
          },
          {
            code: "623024",
            name: "迭部县"
          },
          {
            code: "623025",
            name: "玛曲县"
          },
          {
            code: "623026",
            name: "碌曲县"
          },
          {
            code: "623027",
            name: "夏河县"
          }
        ]
      }
    ]
  },
  {
    code: "63",
    name: "青海省",
    children: [
      {
        code: "6301",
        name: "西宁市",
        children: [
          {
            code: "630102",
            name: "城东区"
          },
          {
            code: "630103",
            name: "城中区"
          },
          {
            code: "630104",
            name: "城西区"
          },
          {
            code: "630105",
            name: "城北区"
          },
          {
            code: "630106",
            name: "湟中区"
          },
          {
            code: "630121",
            name: "大通回族土族自治县"
          },
          {
            code: "630123",
            name: "湟源县"
          }
        ]
      },
      {
        code: "6302",
        name: "海东市",
        children: [
          {
            code: "630202",
            name: "乐都区"
          },
          {
            code: "630203",
            name: "平安区"
          },
          {
            code: "630222",
            name: "民和回族土族自治县"
          },
          {
            code: "630223",
            name: "互助土族自治县"
          },
          {
            code: "630224",
            name: "化隆回族自治县"
          },
          {
            code: "630225",
            name: "循化撒拉族自治县"
          }
        ]
      },
      {
        code: "6322",
        name: "海北藏族自治州",
        children: [
          {
            code: "632221",
            name: "门源回族自治县"
          },
          {
            code: "632222",
            name: "祁连县"
          },
          {
            code: "632223",
            name: "海晏县"
          },
          {
            code: "632224",
            name: "刚察县"
          }
        ]
      },
      {
        code: "6323",
        name: "黄南藏族自治州",
        children: [
          {
            code: "632321",
            name: "同仁县"
          },
          {
            code: "632322",
            name: "尖扎县"
          },
          {
            code: "632323",
            name: "泽库县"
          },
          {
            code: "632324",
            name: "河南蒙古族自治县"
          }
        ]
      },
      {
        code: "6325",
        name: "海南藏族自治州",
        children: [
          {
            code: "632521",
            name: "共和县"
          },
          {
            code: "632522",
            name: "同德县"
          },
          {
            code: "632523",
            name: "贵德县"
          },
          {
            code: "632524",
            name: "兴海县"
          },
          {
            code: "632525",
            name: "贵南县"
          }
        ]
      },
      {
        code: "6326",
        name: "果洛藏族自治州",
        children: [
          {
            code: "632621",
            name: "玛沁县"
          },
          {
            code: "632622",
            name: "班玛县"
          },
          {
            code: "632623",
            name: "甘德县"
          },
          {
            code: "632624",
            name: "达日县"
          },
          {
            code: "632625",
            name: "久治县"
          },
          {
            code: "632626",
            name: "玛多县"
          }
        ]
      },
      {
        code: "6327",
        name: "玉树藏族自治州",
        children: [
          {
            code: "632701",
            name: "玉树市"
          },
          {
            code: "632722",
            name: "杂多县"
          },
          {
            code: "632723",
            name: "称多县"
          },
          {
            code: "632724",
            name: "治多县"
          },
          {
            code: "632725",
            name: "囊谦县"
          },
          {
            code: "632726",
            name: "曲麻莱县"
          }
        ]
      },
      {
        code: "6328",
        name: "海西蒙古族藏族自治州",
        children: [
          {
            code: "632801",
            name: "格尔木市"
          },
          {
            code: "632802",
            name: "德令哈市"
          },
          {
            code: "632803",
            name: "茫崖市"
          },
          {
            code: "632821",
            name: "乌兰县"
          },
          {
            code: "632822",
            name: "都兰县"
          },
          {
            code: "632823",
            name: "天峻县"
          },
          {
            code: "632857",
            name: "大柴旦行政委员会"
          }
        ]
      }
    ]
  },
  {
    code: "64",
    name: "宁夏回族自治区",
    children: [
      {
        code: "6401",
        name: "银川市",
        children: [
          {
            code: "640104",
            name: "兴庆区"
          },
          {
            code: "640105",
            name: "西夏区"
          },
          {
            code: "640106",
            name: "金凤区"
          },
          {
            code: "640121",
            name: "永宁县"
          },
          {
            code: "640122",
            name: "贺兰县"
          },
          {
            code: "640181",
            name: "灵武市"
          }
        ]
      },
      {
        code: "6402",
        name: "石嘴山市",
        children: [
          {
            code: "640202",
            name: "大武口区"
          },
          {
            code: "640205",
            name: "惠农区"
          },
          {
            code: "640221",
            name: "平罗县"
          }
        ]
      },
      {
        code: "6403",
        name: "吴忠市",
        children: [
          {
            code: "640302",
            name: "利通区"
          },
          {
            code: "640303",
            name: "红寺堡区"
          },
          {
            code: "640323",
            name: "盐池县"
          },
          {
            code: "640324",
            name: "同心县"
          },
          {
            code: "640381",
            name: "青铜峡市"
          }
        ]
      },
      {
        code: "6404",
        name: "固原市",
        children: [
          {
            code: "640402",
            name: "原州区"
          },
          {
            code: "640422",
            name: "西吉县"
          },
          {
            code: "640423",
            name: "隆德县"
          },
          {
            code: "640424",
            name: "泾源县"
          },
          {
            code: "640425",
            name: "彭阳县"
          }
        ]
      },
      {
        code: "6405",
        name: "中卫市",
        children: [
          {
            code: "640502",
            name: "沙坡头区"
          },
          {
            code: "640521",
            name: "中宁县"
          },
          {
            code: "640522",
            name: "海原县"
          }
        ]
      }
    ]
  },
  {
    code: "65",
    name: "新疆维吾尔自治区",
    children: [
      {
        code: "6501",
        name: "乌鲁木齐市",
        children: [
          {
            code: "650102",
            name: "天山区"
          },
          {
            code: "650103",
            name: "沙依巴克区"
          },
          {
            code: "650104",
            name: "新市区"
          },
          {
            code: "650105",
            name: "水磨沟区"
          },
          {
            code: "650106",
            name: "头屯河区"
          },
          {
            code: "650107",
            name: "达坂城区"
          },
          {
            code: "650109",
            name: "米东区"
          },
          {
            code: "650121",
            name: "乌鲁木齐县"
          }
        ]
      },
      {
        code: "6502",
        name: "克拉玛依市",
        children: [
          {
            code: "650202",
            name: "独山子区"
          },
          {
            code: "650203",
            name: "克拉玛依区"
          },
          {
            code: "650204",
            name: "白碱滩区"
          },
          {
            code: "650205",
            name: "乌尔禾区"
          }
        ]
      },
      {
        code: "6504",
        name: "吐鲁番市",
        children: [
          {
            code: "650402",
            name: "高昌区"
          },
          {
            code: "650421",
            name: "鄯善县"
          },
          {
            code: "650422",
            name: "托克逊县"
          }
        ]
      },
      {
        code: "6505",
        name: "哈密市",
        children: [
          {
            code: "650502",
            name: "伊州区"
          },
          {
            code: "650521",
            name: "巴里坤哈萨克自治县"
          },
          {
            code: "650522",
            name: "伊吾县"
          }
        ]
      },
      {
        code: "6523",
        name: "昌吉回族自治州",
        children: [
          {
            code: "652301",
            name: "昌吉市"
          },
          {
            code: "652302",
            name: "阜康市"
          },
          {
            code: "652323",
            name: "呼图壁县"
          },
          {
            code: "652324",
            name: "玛纳斯县"
          },
          {
            code: "652325",
            name: "奇台县"
          },
          {
            code: "652327",
            name: "吉木萨尔县"
          },
          {
            code: "652328",
            name: "木垒哈萨克自治县"
          }
        ]
      },
      {
        code: "6527",
        name: "博尔塔拉蒙古自治州",
        children: [
          {
            code: "652701",
            name: "博乐市"
          },
          {
            code: "652702",
            name: "阿拉山口市"
          },
          {
            code: "652722",
            name: "精河县"
          },
          {
            code: "652723",
            name: "温泉县"
          }
        ]
      },
      {
        code: "6528",
        name: "巴音郭楞蒙古自治州",
        children: [
          {
            code: "652801",
            name: "库尔勒市"
          },
          {
            code: "652822",
            name: "轮台县"
          },
          {
            code: "652823",
            name: "尉犁县"
          },
          {
            code: "652824",
            name: "若羌县"
          },
          {
            code: "652825",
            name: "且末县"
          },
          {
            code: "652826",
            name: "焉耆回族自治县"
          },
          {
            code: "652827",
            name: "和静县"
          },
          {
            code: "652828",
            name: "和硕县"
          },
          {
            code: "652829",
            name: "博湖县"
          },
          {
            code: "652871",
            name: "库尔勒经济技术开发区"
          }
        ]
      },
      {
        code: "6529",
        name: "阿克苏地区",
        children: [
          {
            code: "652901",
            name: "阿克苏市"
          },
          {
            code: "652902",
            name: "库车市"
          },
          {
            code: "652922",
            name: "温宿县"
          },
          {
            code: "652924",
            name: "沙雅县"
          },
          {
            code: "652925",
            name: "新和县"
          },
          {
            code: "652926",
            name: "拜城县"
          },
          {
            code: "652927",
            name: "乌什县"
          },
          {
            code: "652928",
            name: "阿瓦提县"
          },
          {
            code: "652929",
            name: "柯坪县"
          }
        ]
      },
      {
        code: "6530",
        name: "克孜勒苏柯尔克孜自治州",
        children: [
          {
            code: "653001",
            name: "阿图什市"
          },
          {
            code: "653022",
            name: "阿克陶县"
          },
          {
            code: "653023",
            name: "阿合奇县"
          },
          {
            code: "653024",
            name: "乌恰县"
          }
        ]
      },
      {
        code: "6531",
        name: "喀什地区",
        children: [
          {
            code: "653101",
            name: "喀什市"
          },
          {
            code: "653121",
            name: "疏附县"
          },
          {
            code: "653122",
            name: "疏勒县"
          },
          {
            code: "653123",
            name: "英吉沙县"
          },
          {
            code: "653124",
            name: "泽普县"
          },
          {
            code: "653125",
            name: "莎车县"
          },
          {
            code: "653126",
            name: "叶城县"
          },
          {
            code: "653127",
            name: "麦盖提县"
          },
          {
            code: "653128",
            name: "岳普湖县"
          },
          {
            code: "653129",
            name: "伽师县"
          },
          {
            code: "653130",
            name: "巴楚县"
          },
          {
            code: "653131",
            name: "塔什库尔干塔吉克自治县"
          }
        ]
      },
      {
        code: "6532",
        name: "和田地区",
        children: [
          {
            code: "653201",
            name: "和田市"
          },
          {
            code: "653221",
            name: "和田县"
          },
          {
            code: "653222",
            name: "墨玉县"
          },
          {
            code: "653223",
            name: "皮山县"
          },
          {
            code: "653224",
            name: "洛浦县"
          },
          {
            code: "653225",
            name: "策勒县"
          },
          {
            code: "653226",
            name: "于田县"
          },
          {
            code: "653227",
            name: "民丰县"
          }
        ]
      },
      {
        code: "6540",
        name: "伊犁哈萨克自治州",
        children: [
          {
            code: "654002",
            name: "伊宁市"
          },
          {
            code: "654003",
            name: "奎屯市"
          },
          {
            code: "654004",
            name: "霍尔果斯市"
          },
          {
            code: "654021",
            name: "伊宁县"
          },
          {
            code: "654022",
            name: "察布查尔锡伯自治县"
          },
          {
            code: "654023",
            name: "霍城县"
          },
          {
            code: "654024",
            name: "巩留县"
          },
          {
            code: "654025",
            name: "新源县"
          },
          {
            code: "654026",
            name: "昭苏县"
          },
          {
            code: "654027",
            name: "特克斯县"
          },
          {
            code: "654028",
            name: "尼勒克县"
          }
        ]
      },
      {
        code: "6542",
        name: "塔城地区",
        children: [
          {
            code: "654201",
            name: "塔城市"
          },
          {
            code: "654202",
            name: "乌苏市"
          },
          {
            code: "654221",
            name: "额敏县"
          },
          {
            code: "654223",
            name: "沙湾县"
          },
          {
            code: "654224",
            name: "托里县"
          },
          {
            code: "654225",
            name: "裕民县"
          },
          {
            code: "654226",
            name: "和布克赛尔蒙古自治县"
          }
        ]
      },
      {
        code: "6543",
        name: "阿勒泰地区",
        children: [
          {
            code: "654301",
            name: "阿勒泰市"
          },
          {
            code: "654321",
            name: "布尔津县"
          },
          {
            code: "654322",
            name: "富蕴县"
          },
          {
            code: "654323",
            name: "福海县"
          },
          {
            code: "654324",
            name: "哈巴河县"
          },
          {
            code: "654325",
            name: "青河县"
          },
          {
            code: "654326",
            name: "吉木乃县"
          }
        ]
      },
      {
        code: "6590",
        name: "自治区直辖县级行政区划",
        children: [
          {
            code: "659001",
            name: "石河子市"
          },
          {
            code: "659002",
            name: "阿拉尔市"
          },
          {
            code: "659003",
            name: "图木舒克市"
          },
          {
            code: "659004",
            name: "五家渠市"
          },
          {
            code: "659005",
            name: "北屯市"
          },
          {
            code: "659006",
            name: "铁门关市"
          },
          {
            code: "659007",
            name: "双河市"
          },
          {
            code: "659008",
            name: "可克达拉市"
          },
          {
            code: "659009",
            name: "昆玉市"
          },
          {
            code: "659010",
            name: "胡杨河市"
          }
        ]
      }
    ]
  }
], Xt = /* @__PURE__ */ xe({
  __name: "index",
  emits: ["change"],
  setup(C, { emit: $ }) {
    let a = se(""), t = se(""), e = se(""), n = se(Wn), r = se([]), o = se([]), l = $;
    return Pe(() => a.value, (s) => {
      if (s) {
        let g = n.value.find((m) => m.code === a.value).children;
        r.value = g;
      }
      t.value = "", e.value = "";
    }), Pe(() => t.value, (s) => {
      if (s) {
        let g = r.value.find((m) => m.code === t.value).children;
        o.value = g;
      }
      e.value = "";
    }), Pe(() => e.value, (s) => {
      if (s) {
        let g = {
          code: a.value,
          name: a.value && Wn.find((c) => c.code === a.value).name
        }, m = {
          code: t.value,
          name: t.value && r.value.find((c) => c.code === t.value).name
        }, h = {
          code: s,
          name: s && o.value.find((c) => c.code === s).name
        };
        l("change", {
          province: g,
          city: m,
          area: h
        });
      }
    }), (s, g) => {
      const m = ie("el-option"), h = ie("el-select");
      return w(), _("div", null, [
        oe(h, {
          clearable: "",
          placeholder: "请选择省份",
          modelValue: z(a),
          "onUpdate:modelValue": g[0] || (g[0] = (c) => Me(a) ? a.value = c : a = c)
        }, {
          default: ne(() => [
            (w(!0), _(
              ue,
              null,
              Ae(z(n), (c) => (w(), ce(m, {
                key: c.code,
                value: c.code,
                label: c.name
              }, null, 8, ["value", "label"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["modelValue"]),
        oe(h, {
          clearable: "",
          disabled: !z(a),
          style: { margin: "0 10px" },
          placeholder: "请选择城市",
          modelValue: z(t),
          "onUpdate:modelValue": g[1] || (g[1] = (c) => Me(t) ? t.value = c : t = c)
        }, {
          default: ne(() => [
            (w(!0), _(
              ue,
              null,
              Ae(z(r), (c) => (w(), ce(m, {
                key: c.code,
                value: c.code,
                label: c.name
              }, null, 8, ["value", "label"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled", "modelValue"]),
        oe(h, {
          clearable: "",
          disabled: !z(a) || !z(t),
          placeholder: "请选择区域",
          modelValue: z(e),
          "onUpdate:modelValue": g[2] || (g[2] = (c) => Me(e) ? e.value = c : e = c)
        }, {
          default: ne(() => [
            (w(!0), _(
              ue,
              null,
              Ae(z(o), (c) => (w(), ce(m, {
                key: c.code,
                value: c.code,
                label: c.name
              }, null, 8, ["value", "label"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        }, 8, ["disabled", "modelValue"])
      ]);
    };
  }
}), Zt = {
  install(C) {
    C.component("sun-choose-area", Xt);
  }
}, Je = (C) => C.replace(/(A-Z)g/, "-$1").toLocaleLowerCase(), kt = { class: "trend" }, qt = { key: 1 }, _t = { class: "icon" }, ea = /* @__PURE__ */ xe({
  __name: "index",
  props: {
    // 标记当前趋势是上升(up)还是下降(down)
    type: {
      type: String,
      default: "up"
    },
    // 上升趋势显示的图标
    upIcon: {
      type: String,
      default: "ArrowUp"
    },
    // 下降趋势显示的图标
    downIcon: {
      type: String,
      default: "ArrowDown"
    },
    // 趋势显示的文字
    // 1. 父组件传递过来的数据
    // 2. 插槽
    text: {
      type: String,
      default: "文字"
    },
    // 颜色翻转只在默认的颜色下生效 如果使用了自定义颜色 这个属性就不生效了
    reverseColor: {
      type: Boolean,
      default: !1
    },
    // 上升趋势图标颜色
    upIconColor: {
      type: String,
      default: "#f5222d"
    },
    // 下降趋势的图标颜色
    downIconColor: {
      type: String,
      default: "#52c41a"
    },
    // 上升趋势文字颜色
    upTextColor: {
      type: String,
      default: "rgb(0,0,0)"
    },
    // 下降趋势的文字颜色
    downTextColor: {
      type: String,
      default: "rgb(0,0,0)"
    }
  },
  setup(C) {
    let $ = C, a = Gt(), t = on(() => $.type === "up" ? $.upTextColor : $.downTextColor);
    return (e, n) => (w(), _("div", kt, [
      ve(
        "div",
        {
          class: "text",
          style: un({ color: z(t) })
        },
        [
          z(a).default ? De(e.$slots, "default", { key: 0 }, void 0, !0) : (w(), _(
            "div",
            qt,
            ye(C.text),
            1
            /* TEXT */
          ))
        ],
        4
        /* STYLE */
      ),
      ve("div", _t, [
        C.type === "up" ? (w(), ce(Oe(`el-icon-${z(Je)(C.upIcon)}`), {
          key: 0,
          style: un({ color: C.reverseColor ? "#52c41a" : C.upIconColor })
        }, null, 8, ["style"])) : (w(), ce(Oe(`el-icon-${z(Je)(C.downIcon)}`), {
          key: 1,
          style: un({ color: C.reverseColor ? "#f5222d" : C.downIconColor })
        }, null, 8, ["style"]))
      ])
    ]));
  }
}), We = (C, $) => {
  const a = C.__vccOpts || C;
  for (const [t, e] of $)
    a[t] = e;
  return a;
}, na = /* @__PURE__ */ We(ea, [["__scopeId", "data-v-25d8d543"]]), ta = {
  install(C) {
    C.component("sun-trend", na);
  }
};
var Fn = xe({
  name: "Bell"
});
const aa = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, oa = /* @__PURE__ */ oe("path", {
  fill: "currentColor",
  d: "M512 64a64 64 0 0 1 64 64v64H448v-64a64 64 0 0 1 64-64z"
}, null, -1), ra = /* @__PURE__ */ oe("path", {
  fill: "currentColor",
  d: "M256 768h512V448a256 256 0 1 0-512 0v320zm256-640a320 320 0 0 1 320 320v384H192V448a320 320 0 0 1 320-320z"
}, null, -1), la = /* @__PURE__ */ oe("path", {
  fill: "currentColor",
  d: "M96 768h832q32 0 32 32t-32 32H96q-32 0-32-32t32-32zm352 128h128a64 64 0 0 1-128 0z"
}, null, -1);
function ia(C, $, a, t, e, n) {
  return w(), ce("svg", aa, [
    oa,
    ra,
    la
  ]);
}
Fn.render = ia;
Fn.__file = "packages/components/Bell.vue";
var On = xe({
  name: "Delete"
});
const da = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ca = /* @__PURE__ */ oe("path", {
  fill: "currentColor",
  d: "M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z"
}, null, -1);
function sa(C, $, a, t, e, n) {
  return w(), ce("svg", da, [
    ca
  ]);
}
On.render = sa;
On.__file = "packages/components/Delete.vue";
var Ln = xe({
  name: "Edit"
});
const ua = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 1024 1024"
}, ma = /* @__PURE__ */ oe("path", {
  fill: "currentColor",
  d: "M832 512a32 32 0 1 1 64 0v352a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h352a32 32 0 0 1 0 64H192v640h640V512z"
}, null, -1), fa = /* @__PURE__ */ oe("path", {
  fill: "currentColor",
  d: "m469.952 554.24 52.8-7.552L847.104 222.4a32 32 0 1 0-45.248-45.248L477.44 501.44l-7.552 52.8zm422.4-422.4a96 96 0 0 1 0 135.808l-331.84 331.84a32 32 0 0 1-18.112 9.088L436.8 623.68a32 32 0 0 1-36.224-36.224l15.104-105.6a32 32 0 0 1 9.024-18.112l331.904-331.84a96 96 0 0 1 135.744 0z"
}, null, -1);
function va(C, $, a, t, e, n) {
  return w(), ce("svg", ua, [
    ma,
    fa
  ]);
}
Ln.render = va;
Ln.__file = "packages/components/Edit.vue";
const pa = /* @__PURE__ */ xe({
  __name: "index",
  props: {
    // 显示的图标
    icon: {
      type: String,
      default: "Bell"
    },
    // 通知数量
    value: {
      type: [String, Number],
      default: ""
    },
    // 最大值
    max: {
      type: Number
    },
    // 是否显示小圆点
    isDot: {
      type: Boolean,
      default: !1
    }
  },
  setup(C) {
    return ($, a) => {
      const t = ie("el-icon"), e = ie("el-badge"), n = ie("el-popover");
      return w(), ce(n, {
        "popper-class": "notification-popper-class",
        placement: "bottom",
        width: 300,
        trigger: "click"
      }, {
        default: ne(() => [
          De($.$slots, "default", {}, void 0, !0)
        ]),
        reference: ne(() => [
          oe(e, {
            style: { cursor: "pointer" },
            value: C.value,
            max: C.max,
            "is-dot": C.isDot
          }, {
            default: ne(() => [
              oe(t, null, {
                default: ne(() => [
                  oe(z(Fn))
                ]),
                _: 1
                /* STABLE */
              })
            ]),
            _: 1
            /* STABLE */
          }, 8, ["value", "max", "is-dot"])
        ]),
        _: 3
        /* FORWARDED */
      });
    };
  }
}), ha = /* @__PURE__ */ We(pa, [["__scopeId", "data-v-719b5a4b"]]), ga = {
  install(C) {
    C.component("sun-notification", ha);
  }
}, Aa = { class: "list-tabs__item" }, ya = ["onClick"], xa = {
  key: 0,
  class: "avatar"
}, Ea = { class: "content" }, Sa = {
  key: 0,
  class: "title"
}, Ca = {
  key: 1,
  class: "time"
}, Ta = {
  key: 2,
  class: "time"
}, Da = { class: "actions" }, Ia = ["onClick"], Pa = {
  key: 0,
  class: "a-icon"
}, Ra = { key: 0 }, Ma = { key: 1 }, Na = { class: "a-text" }, ba = /* @__PURE__ */ xe({
  __name: "index",
  props: {
    // 列表的内容
    list: {
      type: Array,
      required: !0
    },
    // 操作的内容
    actions: {
      type: Array,
      default: () => []
    }
  },
  emits: ["clickItem", "clickAction"],
  setup(C, { emit: $ }) {
    let a = $, t = (n, r) => {
      a("clickItem", { item: n, index: r });
    }, e = (n, r) => {
      a("clickAction", { item: n, index: r });
    };
    return (n, r) => {
      const o = ie("el-avatar"), l = ie("el-tag"), s = ie("el-icon"), g = ie("el-scrollbar"), m = ie("el-tab-pane"), h = ie("el-tabs");
      return w(), _("div", Aa, [
        oe(h, null, {
          default: ne(() => [
            (w(!0), _(
              ue,
              null,
              Ae(C.list, (c, i) => (w(), ce(m, {
                key: i,
                label: c.title
              }, {
                default: ne(() => [
                  oe(
                    g,
                    { "max-height": "300px" },
                    {
                      default: ne(() => [
                        (w(!0), _(
                          ue,
                          null,
                          Ae(c.content, (u, d) => (w(), _("div", {
                            class: "container",
                            onClick: (v) => z(t)(u, d),
                            key: d
                          }, [
                            u.avatar ? (w(), _("div", xa, [
                              oe(o, {
                                size: "small",
                                src: u.avatar
                              }, null, 8, ["src"])
                            ])) : pe("v-if", !0),
                            ve("div", Ea, [
                              u.title ? (w(), _("div", Sa, [
                                ve(
                                  "div",
                                  null,
                                  ye(u.title),
                                  1
                                  /* TEXT */
                                ),
                                u.tag ? (w(), ce(l, {
                                  key: 0,
                                  size: "mini",
                                  type: u.tagType
                                }, {
                                  default: ne(() => [
                                    In(
                                      ye(u.tag),
                                      1
                                      /* TEXT */
                                    )
                                  ]),
                                  _: 2
                                  /* DYNAMIC */
                                }, 1032, ["type"])) : pe("v-if", !0)
                              ])) : pe("v-if", !0),
                              u.desc ? (w(), _(
                                "div",
                                Ca,
                                ye(u.desc),
                                1
                                /* TEXT */
                              )) : pe("v-if", !0),
                              u.time ? (w(), _(
                                "div",
                                Ta,
                                ye(u.time),
                                1
                                /* TEXT */
                              )) : pe("v-if", !0)
                            ])
                          ], 8, ya))),
                          128
                          /* KEYED_FRAGMENT */
                        )),
                        ve("div", Da, [
                          (w(!0), _(
                            ue,
                            null,
                            Ae(C.actions, (u, d) => (w(), _("div", {
                              class: $n(["a-item", { border: d !== C.actions.length }]),
                              key: d,
                              onClick: (v) => z(e)(u, d)
                            }, [
                              u.icon ? (w(), _("div", Pa, [
                                oe(
                                  s,
                                  null,
                                  {
                                    default: ne(() => [
                                      u.icon == "edit" ? (w(), _("div", Ra, [
                                        oe(z(Ln))
                                      ])) : (w(), _("div", Ma, [
                                        oe(z(On))
                                      ]))
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )
                              ])) : pe("v-if", !0),
                              ve(
                                "div",
                                Na,
                                ye(u.text),
                                1
                                /* TEXT */
                              )
                            ], 10, Ia))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ])
                      ]),
                      _: 2
                      /* DYNAMIC */
                    },
                    1024
                    /* DYNAMIC_SLOTS */
                  )
                ]),
                _: 2
                /* DYNAMIC */
              }, 1032, ["label"]))),
              128
              /* KEYED_FRAGMENT */
            ))
          ]),
          _: 1
          /* STABLE */
        })
      ]);
    };
  }
}), Ba = /* @__PURE__ */ We(ba, [["__scopeId", "data-v-c7dc41c7"]]), $a = {
  install(C) {
    C.component("sun-list", Ba);
  }
}, Fa = /* @__PURE__ */ xe({
  __name: "index",
  props: {
    // 导航菜单的数据
    data: {
      type: Array,
      required: !0
    },
    // 默认选中的菜单
    defaultActive: {
      type: String,
      default: ""
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: !1
    },
    // 键名
    // 菜单标题的键名
    name: {
      type: String,
      default: "name"
    },
    // 菜单标识的键名
    index: {
      type: String,
      default: "index"
    },
    // 菜单图标的键名
    icon: {
      type: String,
      default: "icon"
    },
    // 菜单子菜单的键名
    children: {
      type: String,
      default: "children"
    }
  },
  setup(C) {
    return ($, a) => {
      const t = ie("el-menu-item"), e = ie("el-sub-menu"), n = ie("el-menu");
      return w(), ce(n, Ie({
        class: "el-menu-vertical-demo",
        "default-active": C.defaultActive,
        router: C.router
      }, $.$attrs), {
        default: ne(() => [
          (w(!0), _(
            ue,
            null,
            Ae(C.data, (r, o) => (w(), _(
              ue,
              { key: o },
              [
                !r[C.children] || !r[C.children].length ? (w(), ce(t, {
                  key: 0,
                  index: r[C.index]
                }, {
                  default: ne(() => [
                    r[C.icon] ? (w(), ce(Oe(`el-icon-${z(Je)(r[C.icon])}`), { key: 0 })) : pe("v-if", !0),
                    ve(
                      "span",
                      null,
                      ye(r[C.name]),
                      1
                      /* TEXT */
                    )
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["index"])) : pe("v-if", !0),
                r[C.children] && r[C.children].length ? (w(), ce(e, {
                  key: 1,
                  index: r[C.index]
                }, {
                  title: ne(() => [
                    r[C.icon] ? (w(), ce(Oe(`el-icon-${z(Je)(r[C.icon])}`), { key: 0 })) : pe("v-if", !0),
                    ve(
                      "span",
                      null,
                      ye(r[C.name]),
                      1
                      /* TEXT */
                    )
                  ]),
                  default: ne(() => [
                    (w(!0), _(
                      ue,
                      null,
                      Ae(r[C.children], (l, s) => (w(), ce(t, {
                        key: s,
                        index: l.index
                      }, {
                        default: ne(() => [
                          l[C.icon] ? (w(), ce(Oe(`el-icon-${z(Je)(l[C.icon])}`), { key: 0 })) : pe("v-if", !0),
                          ve(
                            "span",
                            null,
                            ye(l[C.name]),
                            1
                            /* TEXT */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["index"]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["index"])) : pe("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        _: 1
        /* STABLE */
      }, 16, ["default-active", "router"]);
    };
  }
}), Oa = /* @__PURE__ */ We(Fa, [["__scopeId", "data-v-d0e2ba74"]]), La = {
  install(C) {
    C.component("sun-menu", Oa);
  }
}, ja = { style: { display: "flex" } }, Ha = { style: { "margin-right": "20px" } }, wa = /* @__PURE__ */ xe({
  __name: "index",
  props: {
    // 开始时间的占位符
    startPlaceholder: {
      type: String,
      default: "请选择开始时间"
    },
    // 结束时间的占位符
    endPlaceholder: {
      type: String,
      default: "请选择结束时间"
    },
    // 开始时间的开始选择
    startTimeStart: {
      type: String,
      default: "08:00"
    },
    // 开始时间的步进
    startStep: {
      type: String,
      default: "00:30"
    },
    // 开始时间的结束选择
    startTimeEnd: {
      type: String,
      default: "24:00"
    },
    // 结束时间的开始选择
    endTimeStart: {
      type: String,
      default: "08:00"
    },
    // 结束时间的步进
    endStep: {
      type: String,
      default: "00:30"
    },
    // 结束时间的结束选择
    endTimeEnd: {
      type: String,
      default: "24:00"
    }
  },
  emits: ["startChange", "endChange"],
  setup(C, { emit: $ }) {
    let a = $, t = se(""), e = se(""), n = se(!0);
    return Pe(() => t.value, (r) => {
      r === "" ? (e.value = "", n.value = !0) : (n.value = !1, a("startChange", r));
    }), Pe(() => e.value, (r) => {
      r !== "" && a("endChange", {
        startTime: t.value,
        endTime: r
      });
    }), (r, o) => {
      const l = ie("el-time-select");
      return w(), _("div", ja, [
        ve("div", Ha, [
          oe(l, Ie({
            modelValue: z(t),
            "onUpdate:modelValue": o[0] || (o[0] = (s) => Me(t) ? t.value = s : t = s),
            placeholder: C.startPlaceholder,
            start: C.startTimeStart,
            step: C.startStep,
            end: C.startTimeEnd
          }, r.$attrs.startOptions), null, 16, ["modelValue", "placeholder", "start", "step", "end"])
        ]),
        ve("div", null, [
          oe(l, Ie({
            modelValue: z(e),
            "onUpdate:modelValue": o[1] || (o[1] = (s) => Me(e) ? e.value = s : e = s),
            "min-time": z(t),
            placeholder: C.endPlaceholder,
            start: C.endTimeStart,
            step: C.endStep,
            end: C.endTimeEnd,
            disabled: z(n)
          }, r.$attrs.endOptions), null, 16, ["modelValue", "min-time", "placeholder", "start", "step", "end", "disabled"])
        ])
      ]);
    };
  }
}), za = {
  install(C) {
    C.component("sun-choose-time", wa);
  }
}, Ua = { style: { display: "flex" } }, Qa = { style: { "margin-right": "20px" } }, Va = /* @__PURE__ */ xe({
  __name: "index",
  props: {
    // 开始日期的占位符
    startPlaceholder: {
      type: String,
      default: "请选择开始日期"
    },
    // 结束日期的占位符
    endPlaceholder: {
      type: String,
      default: "请选择结束日期"
    },
    // 是否禁用选择今天之前的日期
    disableToday: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["startChange", "endChange"],
  setup(C, { emit: $ }) {
    let a = C, t = $, e = se(null), n = se(null), r = se(!0), o = (s) => {
      if (a.disableToday) return s.getTime() < Date.now() - 1e3 * 60 * 60 * 24;
    }, l = (s) => {
      if (e.value)
        return s.getTime() < e.value.getTime() + 1e3 * 60 * 60 * 24;
    };
    return Pe(() => e.value, (s) => {
      s ? (t("startChange", s), r.value = !1) : (r.value = !0, n.value = null);
    }), Pe(() => n.value, (s) => {
      s && t("endChange", {
        startDate: e.value,
        endDate: s
      });
    }), (s, g) => {
      const m = ie("el-date-picker");
      return w(), _("div", Ua, [
        ve("div", Qa, [
          oe(m, Ie({
            modelValue: z(e),
            "onUpdate:modelValue": g[0] || (g[0] = (h) => Me(e) ? e.value = h : e = h),
            type: "date",
            placeholder: C.startPlaceholder,
            disabledDate: z(o)
          }, s.$attrs.startOptions), null, 16, ["modelValue", "placeholder", "disabledDate"])
        ]),
        ve("div", null, [
          oe(m, Ie({
            modelValue: z(n),
            "onUpdate:modelValue": g[1] || (g[1] = (h) => Me(n) ? n.value = h : n = h),
            type: "date",
            placeholder: C.endPlaceholder,
            disabled: z(r),
            disabledDate: z(l)
          }, s.$attrs.endOptions), null, 16, ["modelValue", "placeholder", "disabled", "disabledDate"])
        ])
      ]);
    };
  }
}), Ya = {
  install(C) {
    C.component("sun-choose-date", Va);
  }
}, Ga = /* @__PURE__ */ xe({
  __name: "index",
  props: {
    // 进度条进度
    percentage: {
      type: Number,
      required: !0
    },
    // 是否有动画效果
    isAnimate: {
      type: Boolean,
      default: !1
    },
    // 动画时长(毫秒)
    time: {
      type: Number,
      default: 3e3
    }
  },
  setup(C) {
    se(0);
    let $ = C, a = se(0);
    return hn(() => {
      if ($.isAnimate) {
        let t = Math.ceil($.time / $.percentage), e = setInterval(() => {
          a.value += 1, a.value >= $.percentage && (a.value = $.percentage, clearInterval(e));
        }, t);
      }
    }), (t, e) => {
      const n = ie("el-progress");
      return w(), ce(n, Ie({ percentage: z(a) }, t.$attrs), null, 16, ["percentage"]);
    };
  }
}), Ka = {
  install(C) {
    C.component("sun-progress", Ga);
  }
}, Ja = {
  cities: {
    A: [{
      id: 56,
      spell: "aba",
      name: "阿坝"
    }, {
      id: 57,
      spell: "akesu",
      name: "阿克苏"
    }, {
      id: 58,
      spell: "alashanmeng",
      name: "阿拉善盟"
    }, {
      id: 59,
      spell: "aletai",
      name: "阿勒泰"
    }, {
      id: 60,
      spell: "ali",
      name: "阿里"
    }, {
      id: 61,
      spell: "ankang",
      name: "安康"
    }, {
      id: 62,
      spell: "anqing",
      name: "安庆"
    }, {
      id: 63,
      spell: "anshan",
      name: "鞍山"
    }, {
      id: 64,
      spell: "anshun",
      name: "安顺"
    }, {
      id: 65,
      spell: "anyang",
      name: "安阳"
    }, {
      id: 338,
      spell: "acheng",
      name: "阿城"
    }, {
      id: 339,
      spell: "anfu",
      name: "安福"
    }, {
      id: 340,
      spell: "anji",
      name: "安吉"
    }, {
      id: 341,
      spell: "anning",
      name: "安宁"
    }, {
      id: 342,
      spell: "anqiu",
      name: "安丘"
    }, {
      id: 343,
      spell: "anxi",
      name: "安溪"
    }, {
      id: 344,
      spell: "anyi",
      name: "安义"
    }, {
      id: 345,
      spell: "anyuan",
      name: "安远"
    }],
    B: [{
      id: 1,
      spell: "beijing",
      name: "北京"
    }, {
      id: 66,
      spell: "baicheng",
      name: "白城"
    }, {
      id: 67,
      spell: "baise",
      name: "百色"
    }, {
      id: 68,
      spell: "baishan",
      name: "白山"
    }, {
      id: 69,
      spell: "baiyin",
      name: "白银"
    }, {
      id: 70,
      spell: "bangbu",
      name: "蚌埠"
    }, {
      id: 71,
      spell: "baoding",
      name: "保定"
    }, {
      id: 72,
      spell: "baoji",
      name: "宝鸡"
    }, {
      id: 73,
      spell: "baoshan",
      name: "保山"
    }, {
      id: 74,
      spell: "baotou",
      name: "包头"
    }, {
      id: 75,
      spell: "bayannaoer",
      name: "巴彦淖尔"
    }, {
      id: 76,
      spell: "bayinguoleng",
      name: "巴音郭楞"
    }, {
      id: 77,
      spell: "bazhong",
      name: "巴中"
    }, {
      id: 78,
      spell: "beihai",
      name: "北海"
    }, {
      id: 79,
      spell: "benxi",
      name: "本溪"
    }, {
      id: 80,
      spell: "bijie",
      name: "毕节"
    }, {
      id: 81,
      spell: "binzhou",
      name: "滨州"
    }, {
      id: 82,
      spell: "boertala",
      name: "博尔塔拉"
    }, {
      id: 83,
      spell: "bozhou",
      name: "亳州"
    }, {
      id: 346,
      spell: "baoying",
      name: "宝应"
    }, {
      id: 347,
      spell: "bayan",
      name: "巴彦"
    }, {
      id: 348,
      spell: "binhai",
      name: "滨海"
    }, {
      id: 349,
      spell: "binxian",
      name: "宾县"
    }, {
      id: 350,
      spell: "binyang",
      name: "宾阳"
    }, {
      id: 351,
      spell: "bishan",
      name: "璧山"
    }, {
      id: 352,
      spell: "boai",
      name: "博爱"
    }, {
      id: 353,
      spell: "boluo",
      name: "博罗"
    }, {
      id: 354,
      spell: "boxing",
      name: "博兴"
    }],
    C: [{
      id: 2,
      spell: "chongqing",
      name: "重庆"
    }, {
      id: 5,
      spell: "changchun",
      name: "长春"
    }, {
      id: 6,
      spell: "changsha",
      name: "长沙"
    }, {
      id: 7,
      spell: "changzhou",
      name: "常州"
    }, {
      id: 8,
      spell: "chengdu",
      name: "成都"
    }, {
      id: 84,
      spell: "cangzhou",
      name: "沧州"
    }, {
      id: 85,
      spell: "changde",
      name: "常德"
    }, {
      id: 86,
      spell: "changdu",
      name: "昌都"
    }, {
      id: 87,
      spell: "changji",
      name: "昌吉"
    }, {
      id: 88,
      spell: "changzhi",
      name: "长治"
    }, {
      id: 89,
      spell: "chaohu",
      name: "巢湖"
    }, {
      id: 90,
      spell: "chaoyang",
      name: "朝阳"
    }, {
      id: 91,
      spell: "chaozhou",
      name: "潮州"
    }, {
      id: 92,
      spell: "chengde",
      name: "承德"
    }, {
      id: 93,
      spell: "chenzhou",
      name: "郴州"
    }, {
      id: 94,
      spell: "chifeng",
      name: "赤峰"
    }, {
      id: 95,
      spell: "chizhou",
      name: "池州"
    }, {
      id: 96,
      spell: "chongzuo",
      name: "崇左"
    }, {
      id: 97,
      spell: "chuxiong",
      name: "楚雄"
    }, {
      id: 98,
      spell: "chuzhou",
      name: "滁州"
    }, {
      id: 355,
      spell: "cangnan",
      name: "苍南"
    }, {
      id: 356,
      spell: "cangshan",
      name: "苍山"
    }, {
      id: 357,
      spell: "caoxian",
      name: "曹县"
    }, {
      id: 358,
      spell: "changdao",
      name: "长岛"
    }, {
      id: 359,
      spell: "changfeng",
      name: "长丰"
    }, {
      id: 360,
      spell: "changhai",
      name: "长海"
    }, {
      id: 361,
      spell: "changle",
      name: "长乐"
    }, {
      id: 362,
      spell: "changle",
      name: "昌乐"
    }, {
      id: 363,
      spell: "changshan",
      name: "常山"
    }, {
      id: 364,
      spell: "changshu",
      name: "常熟"
    }, {
      id: 365,
      spell: "changtai",
      name: "长泰"
    }, {
      id: 366,
      spell: "changting",
      name: "长汀"
    }, {
      id: 367,
      spell: "changxing",
      name: "长兴"
    }, {
      id: 368,
      spell: "changyi",
      name: "昌邑"
    }, {
      id: 369,
      spell: "chaoan",
      name: "潮安"
    }, {
      id: 370,
      spell: "chenggong",
      name: "呈贡"
    }, {
      id: 371,
      spell: "chengkou",
      name: "城口"
    }, {
      id: 372,
      spell: "chengwu",
      name: "成武"
    }, {
      id: 373,
      spell: "chiping",
      name: "茌平"
    }, {
      id: 374,
      spell: "chongren",
      name: "崇仁"
    }, {
      id: 375,
      spell: "chongyi",
      name: "崇义"
    }, {
      id: 376,
      spell: "chongzhou",
      name: "崇州"
    }, {
      id: 377,
      spell: "chunan",
      name: "淳安"
    }, {
      id: 378,
      spell: "cixi",
      name: "慈溪"
    }, {
      id: 379,
      spell: "conghua",
      name: "从化"
    }, {
      id: 380,
      spell: "congyang",
      name: "枞阳"
    }],
    D: [{
      id: 9,
      spell: "dalian",
      name: "大连"
    }, {
      id: 10,
      spell: "dongguan",
      name: "东莞"
    }, {
      id: 99,
      spell: "dali",
      name: "大理"
    }, {
      id: 100,
      spell: "dandong",
      name: "丹东"
    }, {
      id: 101,
      spell: "daqing",
      name: "大庆"
    }, {
      id: 102,
      spell: "datong",
      name: "大同"
    }, {
      id: 103,
      spell: "daxinganling",
      name: "大兴安岭"
    }, {
      id: 104,
      spell: "dazhou",
      name: "达州"
    }, {
      id: 105,
      spell: "dehong",
      name: "德宏"
    }, {
      id: 106,
      spell: "deyang",
      name: "德阳"
    }, {
      id: 107,
      spell: "dezhou",
      name: "德州"
    }, {
      id: 108,
      spell: "dingxi",
      name: "定西"
    }, {
      id: 109,
      spell: "diqing",
      name: "迪庆"
    }, {
      id: 110,
      spell: "dongying",
      name: "东营"
    }, {
      id: 381,
      spell: "dafeng",
      name: "大丰"
    }, {
      id: 382,
      spell: "daishan",
      name: "岱山"
    }, {
      id: 383,
      spell: "dangshan",
      name: "砀山"
    }, {
      id: 384,
      spell: "dangtu",
      name: "当涂"
    }, {
      id: 385,
      spell: "danxian",
      name: "单县"
    }, {
      id: 386,
      spell: "danyang",
      name: "丹阳"
    }, {
      id: 387,
      spell: "dapu",
      name: "大埔"
    }, {
      id: 388,
      spell: "datian",
      name: "大田"
    }, {
      id: 389,
      spell: "dayi",
      name: "大邑"
    }, {
      id: 390,
      spell: "dayu",
      name: "大余"
    }, {
      id: 391,
      spell: "dazu",
      name: "大足"
    }, {
      id: 392,
      spell: "dean",
      name: "德安"
    }, {
      id: 393,
      spell: "dehua",
      name: "德化"
    }, {
      id: 394,
      spell: "dehui",
      name: "德惠"
    }, {
      id: 395,
      spell: "dengfeng",
      name: "登封"
    }, {
      id: 396,
      spell: "deqing",
      name: "德清"
    }, {
      id: 397,
      spell: "deqing",
      name: "德庆"
    }, {
      id: 398,
      spell: "dexing",
      name: "德兴"
    }, {
      id: 399,
      spell: "dianbai",
      name: "电白"
    }, {
      id: 400,
      spell: "dianjiang",
      name: "垫江"
    }, {
      id: 401,
      spell: "dingnan",
      name: "定南"
    }, {
      id: 402,
      spell: "dingtao",
      name: "定陶"
    }, {
      id: 403,
      spell: "dingyuan",
      name: "定远"
    }, {
      id: 404,
      spell: "donga",
      name: "东阿"
    }, {
      id: 405,
      spell: "donghai",
      name: "东海"
    }, {
      id: 406,
      spell: "dongming",
      name: "东明"
    }, {
      id: 407,
      spell: "dongping",
      name: "东平"
    }, {
      id: 408,
      spell: "dongshan",
      name: "东山"
    }, {
      id: 409,
      spell: "dongtai",
      name: "东台"
    }, {
      id: 410,
      spell: "dongtou",
      name: "洞头"
    }, {
      id: 411,
      spell: "dongxiang",
      name: "东乡"
    }, {
      id: 412,
      spell: "dongyang",
      name: "东阳"
    }, {
      id: 413,
      spell: "dongyuan",
      name: "东源"
    }, {
      id: 414,
      spell: "dongzhi",
      name: "东至"
    }, {
      id: 415,
      spell: "duchang",
      name: "都昌"
    }, {
      id: 416,
      spell: "dujiangyan",
      name: "都江堰"
    }],
    E: [{
      id: 111,
      spell: "eerduosi",
      name: "鄂尔多斯"
    }, {
      id: 112,
      spell: "enshi",
      name: "恩施"
    }, {
      id: 113,
      spell: "ezhou",
      name: "鄂州"
    }, {
      id: 417,
      spell: "enping",
      name: "恩平"
    }],
    F: [{
      id: 11,
      spell: "foshan",
      name: "佛山"
    }, {
      id: 12,
      spell: "fuzhou",
      name: "福州"
    }, {
      id: 114,
      spell: "fangchenggang",
      name: "防城港"
    }, {
      id: 115,
      spell: "fushun",
      name: "抚顺"
    }, {
      id: 116,
      spell: "fuxin",
      name: "阜新"
    }, {
      id: 117,
      spell: "fuyang",
      name: "阜阳"
    }, {
      id: 118,
      spell: "fuzhou",
      name: "抚州"
    }, {
      id: 418,
      spell: "faku",
      name: "法库"
    }, {
      id: 419,
      spell: "fanchang",
      name: "繁昌"
    }, {
      id: 420,
      spell: "fangzheng",
      name: "方正"
    }, {
      id: 421,
      spell: "feicheng",
      name: "肥城"
    }, {
      id: 422,
      spell: "feidong",
      name: "肥东"
    }, {
      id: 423,
      spell: "feixi",
      name: "肥西"
    }, {
      id: 424,
      spell: "feixian",
      name: "费县"
    }, {
      id: 425,
      spell: "fengcheng",
      name: "丰城"
    }, {
      id: 426,
      spell: "fengdu",
      name: "丰都"
    }, {
      id: 427,
      spell: "fenghua",
      name: "奉化"
    }, {
      id: 428,
      spell: "fengjie",
      name: "奉节"
    }, {
      id: 429,
      spell: "fengkai",
      name: "封开"
    }, {
      id: 430,
      spell: "fengshun",
      name: "丰顺"
    }, {
      id: 431,
      spell: "fengtai",
      name: "凤台"
    }, {
      id: 432,
      spell: "fengxian",
      name: "丰县"
    }, {
      id: 433,
      spell: "fengxin",
      name: "奉新"
    }, {
      id: 434,
      spell: "fengyang",
      name: "凤阳"
    }, {
      id: 435,
      spell: "fenyi",
      name: "分宜"
    }, {
      id: 436,
      spell: "fogang",
      name: "佛冈"
    }, {
      id: 437,
      spell: "fuan",
      name: "福安"
    }, {
      id: 438,
      spell: "fuding",
      name: "福鼎"
    }, {
      id: 439,
      spell: "fuliang",
      name: "浮梁"
    }, {
      id: 440,
      spell: "fumin",
      name: "富民"
    }, {
      id: 441,
      spell: "funan",
      name: "阜南"
    }, {
      id: 442,
      spell: "funing",
      name: "阜宁"
    }, {
      id: 443,
      spell: "fuqing",
      name: "福清"
    }, {
      id: 444,
      spell: "fuyang",
      name: "富阳"
    }],
    G: [{
      id: 13,
      spell: "guangzhou",
      name: "广州"
    }, {
      id: 14,
      spell: "guiyang",
      name: "贵阳"
    }, {
      id: 119,
      spell: "gannan",
      name: "甘南"
    }, {
      id: 120,
      spell: "ganzhou",
      name: "赣州"
    }, {
      id: 121,
      spell: "ganzi",
      name: "甘孜"
    }, {
      id: 122,
      spell: "guangan",
      name: "广安"
    }, {
      id: 123,
      spell: "guangyuan",
      name: "广元"
    }, {
      id: 124,
      spell: "guigang",
      name: "贵港"
    }, {
      id: 125,
      spell: "guilin",
      name: "桂林"
    }, {
      id: 126,
      spell: "guoluo",
      name: "果洛"
    }, {
      id: 127,
      spell: "guyuan",
      name: "固原"
    }, {
      id: 445,
      spell: "ganxian",
      name: "赣县"
    }, {
      id: 446,
      spell: "ganyu",
      name: "赣榆"
    }, {
      id: 447,
      spell: "gaoan",
      name: "高安"
    }, {
      id: 448,
      spell: "gaocheng",
      name: "藁城"
    }, {
      id: 449,
      spell: "gaochun",
      name: "高淳"
    }, {
      id: 450,
      spell: "gaolan",
      name: "皋兰"
    }, {
      id: 451,
      spell: "gaoling",
      name: "高陵"
    }, {
      id: 452,
      spell: "gaomi",
      name: "高密"
    }, {
      id: 453,
      spell: "gaoqing",
      name: "高青"
    }, {
      id: 454,
      spell: "gaotang",
      name: "高唐"
    }, {
      id: 455,
      spell: "gaoyao",
      name: "高要"
    }, {
      id: 456,
      spell: "gaoyi",
      name: "高邑"
    }, {
      id: 457,
      spell: "gaoyou",
      name: "高邮"
    }, {
      id: 458,
      spell: "gaozhou",
      name: "高州"
    }, {
      id: 459,
      spell: "gongyi",
      name: "巩义"
    }, {
      id: 460,
      spell: "guangchang",
      name: "广昌"
    }, {
      id: 461,
      spell: "guangde",
      name: "广德"
    }, {
      id: 462,
      spell: "guangfeng",
      name: "广丰"
    }, {
      id: 463,
      spell: "guangning",
      name: "广宁"
    }, {
      id: 464,
      spell: "guangrao",
      name: "广饶"
    }, {
      id: 465,
      spell: "guangze",
      name: "光泽"
    }, {
      id: 466,
      spell: "guannan",
      name: "灌南"
    }, {
      id: 467,
      spell: "guanxian",
      name: "冠县"
    }, {
      id: 468,
      spell: "guanyun",
      name: "灌云"
    }, {
      id: 469,
      spell: "guixi",
      name: "贵溪"
    }, {
      id: 470,
      spell: "gutian",
      name: "古田"
    }, {
      id: 471,
      spell: "guzhen",
      name: "固镇"
    }],
    H: [{
      id: 15,
      spell: "haerbin",
      name: "哈尔滨"
    }, {
      id: 16,
      spell: "haikou",
      name: "海口"
    }, {
      id: 17,
      spell: "handan",
      name: "邯郸"
    }, {
      id: 18,
      spell: "hangzhou",
      name: "杭州"
    }, {
      id: 19,
      spell: "hefei",
      name: "合肥"
    }, {
      id: 20,
      spell: "huizhou",
      name: "惠州"
    }, {
      id: 128,
      spell: "haibei",
      name: "海北"
    }, {
      id: 129,
      spell: "haidong",
      name: "海东"
    }, {
      id: 130,
      spell: "hainan",
      name: "海南"
    }, {
      id: 131,
      spell: "haixi",
      name: "海西"
    }, {
      id: 132,
      spell: "hami",
      name: "哈密"
    }, {
      id: 133,
      spell: "hanzhong",
      name: "汉中"
    }, {
      id: 134,
      spell: "hebi",
      name: "鹤壁"
    }, {
      id: 135,
      spell: "hechi",
      name: "河池"
    }, {
      id: 136,
      spell: "hegang",
      name: "鹤岗"
    }, {
      id: 137,
      spell: "heihe",
      name: "黑河"
    }, {
      id: 138,
      spell: "hengshui",
      name: "衡水"
    }, {
      id: 139,
      spell: "hengyang",
      name: "衡阳"
    }, {
      id: 140,
      spell: "hetiandi",
      name: "和田地"
    }, {
      id: 141,
      spell: "heyuan",
      name: "河源"
    }, {
      id: 142,
      spell: "heze",
      name: "菏泽"
    }, {
      id: 143,
      spell: "hezhou",
      name: "贺州"
    }, {
      id: 144,
      spell: "honghe",
      name: "红河"
    }, {
      id: 145,
      spell: "huaian",
      name: "淮安"
    }, {
      id: 146,
      spell: "huaibei",
      name: "淮北"
    }, {
      id: 147,
      spell: "huaihua",
      name: "怀化"
    }, {
      id: 148,
      spell: "huainan",
      name: "淮南"
    }, {
      id: 149,
      spell: "huanggang",
      name: "黄冈"
    }, {
      id: 150,
      spell: "huangnan",
      name: "黄南"
    }, {
      id: 151,
      spell: "huangshan",
      name: "黄山"
    }, {
      id: 152,
      spell: "huangshi",
      name: "黄石"
    }, {
      id: 153,
      spell: "huhehaote",
      name: "呼和浩特"
    }, {
      id: 154,
      spell: "huludao",
      name: "葫芦岛"
    }, {
      id: 155,
      spell: "hulunbeier",
      name: "呼伦贝尔"
    }, {
      id: 156,
      spell: "huzhou",
      name: "湖州"
    }, {
      id: 472,
      spell: "haian",
      name: "海安"
    }, {
      id: 473,
      spell: "haifeng",
      name: "海丰"
    }, {
      id: 474,
      spell: "haimen",
      name: "海门"
    }, {
      id: 475,
      spell: "haining",
      name: "海宁"
    }, {
      id: 476,
      spell: "haiyan",
      name: "海盐"
    }, {
      id: 477,
      spell: "haiyang",
      name: "海阳"
    }, {
      id: 478,
      spell: "hanshan",
      name: "含山"
    }, {
      id: 479,
      spell: "hechuan",
      name: "合川"
    }, {
      id: 480,
      spell: "hengfeng",
      name: "横峰"
    }, {
      id: 481,
      spell: "hengxian",
      name: "横县"
    }, {
      id: 482,
      spell: "heping",
      name: "和平"
    }, {
      id: 483,
      spell: "heshan",
      name: "鹤山"
    }, {
      id: 484,
      spell: "hexian",
      name: "和县"
    }, {
      id: 485,
      spell: "hongze",
      name: "洪泽"
    }, {
      id: 486,
      spell: "huaan",
      name: "华安"
    }, {
      id: 487,
      spell: "huadian",
      name: "桦甸"
    }, {
      id: 488,
      spell: "huaiji",
      name: "怀集"
    }, {
      id: 489,
      spell: "huaining",
      name: "怀宁"
    }, {
      id: 490,
      spell: "huaiyuan",
      name: "怀远"
    }, {
      id: 491,
      spell: "huantai",
      name: "桓台"
    }, {
      id: 492,
      spell: "huazhou",
      name: "化州"
    }, {
      id: 493,
      spell: "huian",
      name: "惠安"
    }, {
      id: 494,
      spell: "huichang",
      name: "会昌"
    }, {
      id: 495,
      spell: "huidong",
      name: "惠东"
    }, {
      id: 496,
      spell: "huilai",
      name: "惠来"
    }, {
      id: 497,
      spell: "huimin",
      name: "惠民"
    }, {
      id: 498,
      spell: "hukou",
      name: "湖口"
    }, {
      id: 499,
      spell: "hulan",
      name: "呼兰"
    }, {
      id: 500,
      spell: "huoqiu",
      name: "霍邱"
    }, {
      id: 501,
      spell: "huoshan",
      name: "霍山"
    }, {
      id: 502,
      spell: "huxian",
      name: "户县"
    }],
    J: [{
      id: 21,
      spell: "jiaozuo",
      name: "焦作"
    }, {
      id: 22,
      spell: "jiaxing",
      name: "嘉兴"
    }, {
      id: 23,
      spell: "jilin",
      name: "吉林"
    }, {
      id: 24,
      spell: "jinan",
      name: "济南"
    }, {
      id: 157,
      spell: "jiamusi",
      name: "佳木斯"
    }, {
      id: 158,
      spell: "jiangmen",
      name: "江门"
    }, {
      id: 159,
      spell: "jian",
      name: "吉安"
    }, {
      id: 160,
      spell: "jiayuguan",
      name: "嘉峪关"
    }, {
      id: 161,
      spell: "jieyang",
      name: "揭阳"
    }, {
      id: 162,
      spell: "jinchang",
      name: "金昌"
    }, {
      id: 163,
      spell: "jincheng",
      name: "晋城"
    }, {
      id: 164,
      spell: "jingdezhen",
      name: "景德镇"
    }, {
      id: 165,
      spell: "jingmen",
      name: "荆门"
    }, {
      id: 166,
      spell: "jingzhou",
      name: "荆州"
    }, {
      id: 167,
      spell: "jinhua",
      name: "金华"
    }, {
      id: 168,
      spell: "jining",
      name: "济宁"
    }, {
      id: 169,
      spell: "jinzhong",
      name: "晋中"
    }, {
      id: 170,
      spell: "jinzhou",
      name: "锦州"
    }, {
      id: 171,
      spell: "jiujiang",
      name: "九江"
    }, {
      id: 172,
      spell: "jiuquan",
      name: "酒泉"
    }, {
      id: 173,
      spell: "jixi",
      name: "鸡西"
    }, {
      id: 503,
      spell: "jiande",
      name: "建德"
    }, {
      id: 504,
      spell: "jiangdu",
      name: "江都"
    }, {
      id: 505,
      spell: "jiangjin",
      name: "江津"
    }, {
      id: 506,
      spell: "jiangle",
      name: "将乐"
    }, {
      id: 507,
      spell: "jiangshan",
      name: "江山"
    }, {
      id: 508,
      spell: "jiangyan",
      name: "姜堰"
    }, {
      id: 509,
      spell: "jiangyin",
      name: "江阴"
    }, {
      id: 510,
      spell: "jianhu",
      name: "建湖"
    }, {
      id: 511,
      spell: "jianning",
      name: "建宁"
    }, {
      id: 512,
      spell: "jianou",
      name: "建瓯"
    }, {
      id: 513,
      spell: "jianyang",
      name: "建阳"
    }, {
      id: 514,
      spell: "jian",
      name: "吉安"
    }, {
      id: 515,
      spell: "jiaohe",
      name: "蛟河"
    }, {
      id: 516,
      spell: "jiaoling",
      name: "蕉岭"
    }, {
      id: 517,
      spell: "jiaonan",
      name: "胶南"
    }, {
      id: 518,
      spell: "jiaozhou",
      name: "胶州"
    }, {
      id: 519,
      spell: "jiashan",
      name: "嘉善"
    }, {
      id: 520,
      spell: "jiaxiang",
      name: "嘉祥"
    }, {
      id: 521,
      spell: "jiedong",
      name: "揭东"
    }, {
      id: 522,
      spell: "jieshou",
      name: "界首"
    }, {
      id: 523,
      spell: "jiexi",
      name: "揭西"
    }, {
      id: 524,
      spell: "jimo",
      name: "即墨"
    }, {
      id: 525,
      spell: "jingan",
      name: "靖安"
    }, {
      id: 526,
      spell: "jingde",
      name: "旌德"
    }, {
      id: 527,
      spell: "jinggangshan",
      name: "井冈山"
    }, {
      id: 528,
      spell: "jingjiang",
      name: "靖江"
    }, {
      id: 529,
      spell: "jingning",
      name: "景宁"
    }, {
      id: 530,
      spell: "jingxian",
      name: "泾县"
    }, {
      id: 531,
      spell: "jingxing",
      name: "井陉"
    }, {
      id: 532,
      spell: "jinhu",
      name: "金湖"
    }, {
      id: 533,
      spell: "jinjiang",
      name: "晋江"
    }, {
      id: 534,
      spell: "jinmen",
      name: "金门"
    }, {
      id: 535,
      spell: "jinning",
      name: "晋宁"
    }, {
      id: 536,
      spell: "jintan",
      name: "金坛"
    }, {
      id: 537,
      spell: "jintang",
      name: "金堂"
    }, {
      id: 538,
      spell: "jinxian",
      name: "进贤"
    }, {
      id: 539,
      spell: "jinxi",
      name: "金溪"
    }, {
      id: 540,
      spell: "jinxiang",
      name: "金乡"
    }, {
      id: 541,
      spell: "jinyun",
      name: "缙云"
    }, {
      id: 542,
      spell: "jinzhai",
      name: "金寨"
    }, {
      id: 543,
      spell: "jinzhou",
      name: "晋州"
    }, {
      id: 544,
      spell: "jishui",
      name: "吉水"
    }, {
      id: 545,
      spell: "jiujiang",
      name: "九江"
    }, {
      id: 546,
      spell: "jiutai",
      name: "九台"
    }, {
      id: 547,
      spell: "jixi",
      name: "绩溪"
    }, {
      id: 548,
      spell: "jiyang",
      name: "济阳"
    }, {
      id: 549,
      spell: "jiyuan",
      name: "济源"
    }, {
      id: 550,
      spell: "juancheng",
      name: "鄄城"
    }, {
      id: 551,
      spell: "junan",
      name: "莒南"
    }, {
      id: 552,
      spell: "jurong",
      name: "句容"
    }, {
      id: 553,
      spell: "juxian",
      name: "莒县"
    }, {
      id: 554,
      spell: "juye",
      name: "巨野"
    }],
    K: [{
      id: 25,
      spell: "kunming",
      name: "昆明"
    }, {
      id: 174,
      spell: "kaifeng",
      name: "开封"
    }, {
      id: 175,
      spell: "kashidi",
      name: "喀什地"
    }, {
      id: 176,
      spell: "kelamayi",
      name: "克拉玛依"
    }, {
      id: 177,
      spell: "kezile",
      name: "克孜勒"
    }, {
      id: 555,
      spell: "kaihua",
      name: "开化"
    }, {
      id: 556,
      spell: "kaiping",
      name: "开平"
    }, {
      id: 557,
      spell: "kaixian",
      name: "开县"
    }, {
      id: 558,
      spell: "kaiyang",
      name: "开阳"
    }, {
      id: 559,
      spell: "kangping",
      name: "康平"
    }, {
      id: 560,
      spell: "kenli",
      name: "垦利"
    }, {
      id: 561,
      spell: "kunshan",
      name: "昆山"
    }],
    L: [{
      id: 26,
      spell: "lanzhou",
      name: "兰州"
    }, {
      id: 27,
      spell: "liuzhou",
      name: "柳州"
    }, {
      id: 28,
      spell: "luoyang",
      name: "洛阳"
    }, {
      id: 178,
      spell: "laibin",
      name: "来宾"
    }, {
      id: 179,
      spell: "laiwu",
      name: "莱芜"
    }, {
      id: 180,
      spell: "langfang",
      name: "廊坊"
    }, {
      id: 181,
      spell: "lasa",
      name: "拉萨"
    }, {
      id: 182,
      spell: "leshan",
      name: "乐山"
    }, {
      id: 183,
      spell: "liangshan",
      name: "凉山"
    }, {
      id: 184,
      spell: "lianyungang",
      name: "连云港"
    }, {
      id: 185,
      spell: "liaocheng",
      name: "聊城"
    }, {
      id: 186,
      spell: "liaoyang",
      name: "辽阳"
    }, {
      id: 187,
      spell: "liaoyuan",
      name: "辽源"
    }, {
      id: 188,
      spell: "lijiang",
      name: "丽江"
    }, {
      id: 189,
      spell: "lincang",
      name: "临沧"
    }, {
      id: 190,
      spell: "linfen",
      name: "临汾"
    }, {
      id: 191,
      spell: "linxia",
      name: "临夏"
    }, {
      id: 192,
      spell: "linyi",
      name: "临沂"
    }, {
      id: 193,
      spell: "linzhi",
      name: "林芝"
    }, {
      id: 194,
      spell: "lishui",
      name: "丽水"
    }, {
      id: 195,
      spell: "liuan",
      name: "六安"
    }, {
      id: 196,
      spell: "liupanshui",
      name: "六盘水"
    }, {
      id: 197,
      spell: "longnan",
      name: "陇南"
    }, {
      id: 198,
      spell: "longyan",
      name: "龙岩"
    }, {
      id: 199,
      spell: "loudi",
      name: "娄底"
    }, {
      id: 200,
      spell: "luohe",
      name: "漯河"
    }, {
      id: 201,
      spell: "luzhou",
      name: "泸州"
    }, {
      id: 202,
      spell: "lvliang",
      name: "吕梁"
    }, {
      id: 562,
      spell: "laian",
      name: "来安"
    }, {
      id: 563,
      spell: "laixi",
      name: "莱西"
    }, {
      id: 564,
      spell: "laiyang",
      name: "莱阳"
    }, {
      id: 565,
      spell: "laizhou",
      name: "莱州"
    }, {
      id: 566,
      spell: "langxi",
      name: "郎溪"
    }, {
      id: 567,
      spell: "lantian",
      name: "蓝田"
    }, {
      id: 568,
      spell: "lanxi",
      name: "兰溪"
    }, {
      id: 569,
      spell: "lean",
      name: "乐安"
    }, {
      id: 570,
      spell: "lechang",
      name: "乐昌"
    }, {
      id: 571,
      spell: "leizhou",
      name: "雷州"
    }, {
      id: 572,
      spell: "leling",
      name: "乐陵"
    }, {
      id: 573,
      spell: "leping",
      name: "乐平"
    }, {
      id: 574,
      spell: "leqing",
      name: "乐清"
    }, {
      id: 575,
      spell: "leting",
      name: "乐亭"
    }, {
      id: 576,
      spell: "liancheng",
      name: "连城"
    }, {
      id: 577,
      spell: "liangping",
      name: "梁平"
    }, {
      id: 578,
      spell: "liangshan",
      name: "梁山"
    }, {
      id: 579,
      spell: "lianhua",
      name: "莲花"
    }, {
      id: 580,
      spell: "lianjiang",
      name: "连江"
    }, {
      id: 581,
      spell: "lianjiang",
      name: "廉江"
    }, {
      id: 582,
      spell: "liannan",
      name: "连南"
    }, {
      id: 583,
      spell: "lianping",
      name: "连平"
    }, {
      id: 584,
      spell: "lianshan",
      name: "连山"
    }, {
      id: 585,
      spell: "lianshui",
      name: "涟水"
    }, {
      id: 586,
      spell: "lianzhou",
      name: "连州"
    }, {
      id: 587,
      spell: "liaozhong",
      name: "辽中"
    }, {
      id: 588,
      spell: "lichuan",
      name: "黎川"
    }, {
      id: 589,
      spell: "lijin",
      name: "利津"
    }, {
      id: 590,
      spell: "linan",
      name: "临安"
    }, {
      id: 591,
      spell: "lingbi",
      name: "灵璧"
    }, {
      id: 592,
      spell: "lingshou",
      name: "灵寿"
    }, {
      id: 593,
      spell: "lingxian",
      name: "陵县"
    }, {
      id: 594,
      spell: "linhai",
      name: "临海"
    }, {
      id: 595,
      spell: "linqing",
      name: "临清"
    }, {
      id: 596,
      spell: "linquan",
      name: "临泉"
    }, {
      id: 597,
      spell: "linqu",
      name: "临朐"
    }, {
      id: 598,
      spell: "linshu",
      name: "临沭"
    }, {
      id: 599,
      spell: "linyi",
      name: "临邑"
    }, {
      id: 600,
      spell: "lishui",
      name: "溧水"
    }, {
      id: 601,
      spell: "liucheng",
      name: "柳城"
    }, {
      id: 602,
      spell: "liujiang",
      name: "柳江"
    }, {
      id: 603,
      spell: "liuyang",
      name: "浏阳"
    }, {
      id: 604,
      spell: "lixin",
      name: "利辛"
    }, {
      id: 605,
      spell: "liyang",
      name: "溧阳"
    }, {
      id: 606,
      spell: "longan",
      name: "隆安"
    }, {
      id: 607,
      spell: "longchuan",
      name: "龙川"
    }, {
      id: 608,
      spell: "longhai",
      name: "龙海"
    }, {
      id: 609,
      spell: "longkou",
      name: "龙口"
    }, {
      id: 610,
      spell: "longmen",
      name: "龙门"
    }, {
      id: 611,
      spell: "longnan",
      name: "龙南"
    }, {
      id: 612,
      spell: "longquan",
      name: "龙泉"
    }, {
      id: 613,
      spell: "longyou",
      name: "龙游"
    }, {
      id: 614,
      spell: "luancheng",
      name: "栾城"
    }, {
      id: 615,
      spell: "luanchuan",
      name: "栾川"
    }, {
      id: 616,
      spell: "luannan",
      name: "滦南"
    }, {
      id: 617,
      spell: "luanxian",
      name: "滦县"
    }, {
      id: 618,
      spell: "lufeng",
      name: "陆丰"
    }, {
      id: 619,
      spell: "luhe",
      name: "陆河"
    }, {
      id: 620,
      spell: "lujiang",
      name: "庐江"
    }, {
      id: 621,
      spell: "luoding",
      name: "罗定"
    }, {
      id: 622,
      spell: "luoning",
      name: "洛宁"
    }, {
      id: 623,
      spell: "luoyuan",
      name: "罗源"
    }, {
      id: 624,
      spell: "luquan",
      name: "鹿泉"
    }, {
      id: 625,
      spell: "luquan",
      name: "禄劝"
    }, {
      id: 626,
      spell: "luxi",
      name: "芦溪"
    }, {
      id: 627,
      spell: "luzhai",
      name: "鹿寨"
    }],
    M: [{
      id: 203,
      spell: "maanshan",
      name: "马鞍山"
    }, {
      id: 204,
      spell: "maoming",
      name: "茂名"
    }, {
      id: 205,
      spell: "meishan",
      name: "眉山"
    }, {
      id: 206,
      spell: "meizhou",
      name: "梅州"
    }, {
      id: 207,
      spell: "mianyang",
      name: "绵阳"
    }, {
      id: 208,
      spell: "mudanjiang",
      name: "牡丹江"
    }, {
      id: 628,
      spell: "mashan",
      name: "马山"
    }, {
      id: 629,
      spell: "meixian",
      name: "梅县"
    }, {
      id: 630,
      spell: "mengcheng",
      name: "蒙城"
    }, {
      id: 631,
      spell: "mengjin",
      name: "孟津"
    }, {
      id: 632,
      spell: "mengyin",
      name: "蒙阴"
    }, {
      id: 633,
      spell: "mengzhou",
      name: "孟州"
    }, {
      id: 634,
      spell: "mingguang",
      name: "明光"
    }, {
      id: 635,
      spell: "mingxi",
      name: "明溪"
    }, {
      id: 636,
      spell: "minhou",
      name: "闽侯"
    }, {
      id: 637,
      spell: "minqing",
      name: "闽清"
    }, {
      id: 638,
      spell: "mulan",
      name: "木兰"
    }],
    N: [{
      id: 29,
      spell: "nanchang",
      name: "南昌"
    }, {
      id: 30,
      spell: "nanjing",
      name: "南京"
    }, {
      id: 31,
      spell: "nanning",
      name: "南宁"
    }, {
      id: 32,
      spell: "nantong",
      name: "南通"
    }, {
      id: 33,
      spell: "ningbo",
      name: "宁波"
    }, {
      id: 209,
      spell: "nanchong",
      name: "南充"
    }, {
      id: 210,
      spell: "nanping",
      name: "南平"
    }, {
      id: 211,
      spell: "nanyang",
      name: "南阳"
    }, {
      id: 212,
      spell: "naqu",
      name: "那曲"
    }, {
      id: 213,
      spell: "neijiang",
      name: "内江"
    }, {
      id: 214,
      spell: "ningde",
      name: "宁德"
    }, {
      id: 215,
      spell: "nujiang",
      name: "怒江"
    }, {
      id: 639,
      spell: "nanan",
      name: "南安"
    }, {
      id: 640,
      spell: "nanao",
      name: "南澳"
    }, {
      id: 641,
      spell: "nancheng",
      name: "南城"
    }, {
      id: 642,
      spell: "nanchuan",
      name: "南川"
    }, {
      id: 643,
      spell: "nanfeng",
      name: "南丰"
    }, {
      id: 644,
      spell: "nanjing",
      name: "南靖"
    }, {
      id: 645,
      spell: "nankang",
      name: "南康"
    }, {
      id: 646,
      spell: "nanling",
      name: "南陵"
    }, {
      id: 647,
      spell: "nanxiong",
      name: "南雄"
    }, {
      id: 648,
      spell: "ningdu",
      name: "宁都"
    }, {
      id: 649,
      spell: "ningguo",
      name: "宁国"
    }, {
      id: 650,
      spell: "ninghai",
      name: "宁海"
    }, {
      id: 651,
      spell: "ninghua",
      name: "宁化"
    }, {
      id: 652,
      spell: "ningjin",
      name: "宁津"
    }, {
      id: 653,
      spell: "ningxiang",
      name: "宁乡"
    }, {
      id: 654,
      spell: "ningyang",
      name: "宁阳"
    }, {
      id: 655,
      spell: "nongan",
      name: "农安"
    }],
    P: [{
      id: 216,
      spell: "panjin",
      name: "盘锦"
    }, {
      id: 217,
      spell: "panzhihua",
      name: "攀枝花"
    }, {
      id: 218,
      spell: "pingdingshan",
      name: "平顶山"
    }, {
      id: 219,
      spell: "pingliang",
      name: "平凉"
    }, {
      id: 220,
      spell: "pingxiang",
      name: "萍乡"
    }, {
      id: 221,
      spell: "puer",
      name: "普洱"
    }, {
      id: 222,
      spell: "putian",
      name: "莆田"
    }, {
      id: 223,
      spell: "puyang",
      name: "濮阳"
    }, {
      id: 656,
      spell: "panan",
      name: "磐安"
    }, {
      id: 657,
      spell: "panshi",
      name: "磐石"
    }, {
      id: 658,
      spell: "peixian",
      name: "沛县"
    }, {
      id: 659,
      spell: "penglai",
      name: "蓬莱"
    }, {
      id: 660,
      spell: "pengshui",
      name: "彭水"
    }, {
      id: 661,
      spell: "pengze",
      name: "彭泽"
    }, {
      id: 662,
      spell: "pengzhou",
      name: "彭州"
    }, {
      id: 663,
      spell: "pingdu",
      name: "平度"
    }, {
      id: 664,
      spell: "pinghe",
      name: "平和"
    }, {
      id: 665,
      spell: "pinghu",
      name: "平湖"
    }, {
      id: 666,
      spell: "pingnan",
      name: "屏南"
    }, {
      id: 667,
      spell: "pingshan",
      name: "平山"
    }, {
      id: 668,
      spell: "pingtan",
      name: "平潭"
    }, {
      id: 669,
      spell: "pingyang",
      name: "平阳"
    }, {
      id: 670,
      spell: "pingyin",
      name: "平阴"
    }, {
      id: 671,
      spell: "pingyi",
      name: "平邑"
    }, {
      id: 672,
      spell: "pingyuan",
      name: "平原"
    }, {
      id: 673,
      spell: "pingyuan",
      name: "平远"
    }, {
      id: 674,
      spell: "pixian",
      name: "郫县"
    }, {
      id: 675,
      spell: "pizhou",
      name: "邳州"
    }, {
      id: 676,
      spell: "poyang",
      name: "鄱阳"
    }, {
      id: 677,
      spell: "pucheng",
      name: "浦城"
    }, {
      id: 678,
      spell: "pujiang",
      name: "浦江"
    }, {
      id: 679,
      spell: "pujiang",
      name: "蒲江"
    }, {
      id: 680,
      spell: "pulandian",
      name: "普兰店"
    }, {
      id: 681,
      spell: "puning",
      name: "普宁"
    }],
    Q: [{
      id: 34,
      spell: "qingdao",
      name: "青岛"
    }, {
      id: 35,
      spell: "quanzhou",
      name: "泉州"
    }, {
      id: 224,
      spell: "qiandong",
      name: "黔东"
    }, {
      id: 225,
      spell: "qiannan",
      name: "黔南"
    }, {
      id: 226,
      spell: "qianxinan",
      name: "黔西南"
    }, {
      id: 227,
      spell: "qingyang",
      name: "庆阳"
    }, {
      id: 228,
      spell: "qingyuan",
      name: "清远"
    }, {
      id: 229,
      spell: "qinhuangdao",
      name: "秦皇岛"
    }, {
      id: 230,
      spell: "qinzhou",
      name: "钦州"
    }, {
      id: 231,
      spell: "qiqihaer",
      name: "齐齐哈尔"
    }, {
      id: 232,
      spell: "qitaihe",
      name: "七台河"
    }, {
      id: 233,
      spell: "qujing",
      name: "曲靖"
    }, {
      id: 234,
      spell: "quzhou",
      name: "衢州"
    }, {
      id: 682,
      spell: "qianan",
      name: "迁安"
    }, {
      id: 683,
      spell: "qianshan",
      name: "潜山"
    }, {
      id: 684,
      spell: "qianshan",
      name: "铅山"
    }, {
      id: 685,
      spell: "qianxi",
      name: "迁西"
    }, {
      id: 686,
      spell: "qidong",
      name: "启东"
    }, {
      id: 687,
      spell: "qihe",
      name: "齐河"
    }, {
      id: 688,
      spell: "qijiang",
      name: "綦江"
    }, {
      id: 689,
      spell: "qimen",
      name: "祁门"
    }, {
      id: 690,
      spell: "qingliu",
      name: "清流"
    }, {
      id: 691,
      spell: "qingtian",
      name: "青田"
    }, {
      id: 692,
      spell: "qingxin",
      name: "清新"
    }, {
      id: 693,
      spell: "qingyang",
      name: "青阳"
    }, {
      id: 694,
      spell: "qingyuan",
      name: "庆元"
    }, {
      id: 695,
      spell: "qingyun",
      name: "庆云"
    }, {
      id: 696,
      spell: "qingzhen",
      name: "清镇"
    }, {
      id: 697,
      spell: "qingzhou",
      name: "青州"
    }, {
      id: 698,
      spell: "qinyang",
      name: "沁阳"
    }, {
      id: 699,
      spell: "qionglai",
      name: "邛崃"
    }, {
      id: 700,
      spell: "qixia",
      name: "栖霞"
    }, {
      id: 701,
      spell: "quanjiao",
      name: "全椒"
    }, {
      id: 702,
      spell: "quannan",
      name: "全南"
    }, {
      id: 703,
      spell: "qufu",
      name: "曲阜"
    }, {
      id: 704,
      spell: "qujiang",
      name: "曲江"
    }],
    R: [{
      id: 235,
      spell: "rikaze",
      name: "日喀则"
    }, {
      id: 236,
      spell: "rizhao",
      name: "日照"
    }, {
      id: 705,
      spell: "raoping",
      name: "饶平"
    }, {
      id: 706,
      spell: "renhua",
      name: "仁化"
    }, {
      id: 707,
      spell: "rongan",
      name: "融安"
    }, {
      id: 708,
      spell: "rongchang",
      name: "荣昌"
    }, {
      id: 709,
      spell: "rongcheng",
      name: "荣成"
    }, {
      id: 710,
      spell: "rongshui",
      name: "融水"
    }, {
      id: 711,
      spell: "rudong",
      name: "如东"
    }, {
      id: 712,
      spell: "rugao",
      name: "如皋"
    }, {
      id: 713,
      spell: "ruian",
      name: "瑞安"
    }, {
      id: 714,
      spell: "ruichang",
      name: "瑞昌"
    }, {
      id: 715,
      spell: "ruijin",
      name: "瑞金"
    }, {
      id: 716,
      spell: "rushan",
      name: "乳山"
    }, {
      id: 717,
      spell: "ruyang",
      name: "汝阳"
    }, {
      id: 718,
      spell: "ruyuan",
      name: "乳源"
    }],
    S: [{
      id: 3,
      spell: "shanghai",
      name: "上海"
    }, {
      id: 36,
      spell: "shenyang",
      name: "沈阳"
    }, {
      id: 37,
      spell: "shenzhen",
      name: "深圳"
    }, {
      id: 38,
      spell: "shijiazhuang",
      name: "石家庄"
    }, {
      id: 39,
      spell: "suzhou",
      name: "苏州"
    }, {
      id: 237,
      spell: "sanmenxia",
      name: "三门峡"
    }, {
      id: 238,
      spell: "sanming",
      name: "三明"
    }, {
      id: 239,
      spell: "sanya",
      name: "三亚"
    }, {
      id: 240,
      spell: "shangluo",
      name: "商洛"
    }, {
      id: 241,
      spell: "shangqiu",
      name: "商丘"
    }, {
      id: 242,
      spell: "shangrao",
      name: "上饶"
    }, {
      id: 243,
      spell: "shannan",
      name: "山南"
    }, {
      id: 244,
      spell: "shantou",
      name: "汕头"
    }, {
      id: 245,
      spell: "shanwei",
      name: "汕尾"
    }, {
      id: 246,
      spell: "shaoguan",
      name: "韶关"
    }, {
      id: 247,
      spell: "shaoxing",
      name: "绍兴"
    }, {
      id: 248,
      spell: "shaoyang",
      name: "邵阳"
    }, {
      id: 249,
      spell: "shiyan",
      name: "十堰"
    }, {
      id: 250,
      spell: "shizuishan",
      name: "石嘴山"
    }, {
      id: 251,
      spell: "shuangyashan",
      name: "双鸭山"
    }, {
      id: 252,
      spell: "shuozhou",
      name: "朔州"
    }, {
      id: 253,
      spell: "siping",
      name: "四平"
    }, {
      id: 254,
      spell: "songyuan",
      name: "松原"
    }, {
      id: 255,
      spell: "suihua",
      name: "绥化"
    }, {
      id: 256,
      spell: "suining",
      name: "遂宁"
    }, {
      id: 257,
      spell: "suizhou",
      name: "随州"
    }, {
      id: 258,
      spell: "suqian",
      name: "宿迁"
    }, {
      id: 259,
      spell: "suzhou",
      name: "宿州"
    }, {
      id: 719,
      spell: "sanjiang",
      name: "三江"
    }, {
      id: 720,
      spell: "sanmen",
      name: "三门"
    }, {
      id: 721,
      spell: "saoan",
      name: "诏安"
    }, {
      id: 722,
      spell: "shanggao",
      name: "上高"
    }, {
      id: 723,
      spell: "shanghang",
      name: "上杭"
    }, {
      id: 724,
      spell: "shanghe",
      name: "商河"
    }, {
      id: 725,
      spell: "shangli",
      name: "上栗"
    }, {
      id: 726,
      spell: "shanglin",
      name: "上林"
    }, {
      id: 727,
      spell: "shangrao",
      name: "上饶"
    }, {
      id: 728,
      spell: "shangyou",
      name: "上犹"
    }, {
      id: 729,
      spell: "shangyu",
      name: "上虞"
    }, {
      id: 730,
      spell: "shangzhi",
      name: "尚志"
    }, {
      id: 731,
      spell: "shaowu",
      name: "邵武"
    }, {
      id: 732,
      spell: "shaoxing",
      name: "绍兴"
    }, {
      id: 733,
      spell: "shaxian",
      name: "沙县"
    }, {
      id: 734,
      spell: "shengsi",
      name: "嵊泗"
    }, {
      id: 735,
      spell: "shengzhou",
      name: "嵊州"
    }, {
      id: 736,
      spell: "shenxian",
      name: "莘县"
    }, {
      id: 737,
      spell: "shenze",
      name: "深泽"
    }, {
      id: 738,
      spell: "shexian",
      name: "歙县"
    }, {
      id: 739,
      spell: "sheyang",
      name: "射阳"
    }, {
      id: 740,
      spell: "shicheng",
      name: "石城"
    }, {
      id: 741,
      spell: "shilin",
      name: "石林"
    }, {
      id: 742,
      spell: "shishi",
      name: "石狮"
    }, {
      id: 743,
      spell: "shitai",
      name: "石台"
    }, {
      id: 744,
      spell: "shixing",
      name: "始兴"
    }, {
      id: 745,
      spell: "shizhu",
      name: "石柱"
    }, {
      id: 746,
      spell: "shouguang",
      name: "寿光"
    }, {
      id: 747,
      spell: "shouning",
      name: "寿宁"
    }, {
      id: 748,
      spell: "shouxian",
      name: "寿县"
    }, {
      id: 749,
      spell: "shuangcheng",
      name: "双城"
    }, {
      id: 750,
      spell: "shuangliu",
      name: "双流"
    }, {
      id: 751,
      spell: "shucheng",
      name: "舒城"
    }, {
      id: 752,
      spell: "shulan",
      name: "舒兰"
    }, {
      id: 753,
      spell: "shunchang",
      name: "顺昌"
    }, {
      id: 754,
      spell: "shuyang",
      name: "沭阳"
    }, {
      id: 755,
      spell: "sihong",
      name: "泗洪"
    }, {
      id: 756,
      spell: "sihui",
      name: "四会"
    }, {
      id: 757,
      spell: "sishui",
      name: "泗水"
    }, {
      id: 758,
      spell: "sixian",
      name: "泗县"
    }, {
      id: 759,
      spell: "siyang",
      name: "泗阳"
    }, {
      id: 760,
      spell: "songming",
      name: "嵩明"
    }, {
      id: 761,
      spell: "songxi",
      name: "松溪"
    }, {
      id: 762,
      spell: "songxian",
      name: "嵩县"
    }, {
      id: 763,
      spell: "songyang",
      name: "松阳"
    }, {
      id: 764,
      spell: "suichang",
      name: "遂昌"
    }, {
      id: 765,
      spell: "suichuan",
      name: "遂川"
    }, {
      id: 766,
      spell: "suining",
      name: "睢宁"
    }, {
      id: 767,
      spell: "suixi",
      name: "濉溪"
    }, {
      id: 768,
      spell: "suixi",
      name: "遂溪"
    }, {
      id: 769,
      spell: "susong",
      name: "宿松"
    }, {
      id: 770,
      spell: "suyu",
      name: "宿豫"
    }],
    T: [{
      id: 4,
      spell: "tianjin",
      name: "天津"
    }, {
      id: 40,
      spell: "taizhou",
      name: "台州"
    }, {
      id: 41,
      spell: "tangshan",
      name: "唐山"
    }, {
      id: 260,
      spell: "tachengdi",
      name: "塔城地"
    }, {
      id: 261,
      spell: "taian",
      name: "泰安"
    }, {
      id: 262,
      spell: "taiyuan",
      name: "太原"
    }, {
      id: 263,
      spell: "taizhou",
      name: "泰州"
    }, {
      id: 264,
      spell: "tianshui",
      name: "天水"
    }, {
      id: 265,
      spell: "tieling",
      name: "铁岭"
    }, {
      id: 266,
      spell: "tongchuan",
      name: "铜川"
    }, {
      id: 267,
      spell: "tonghua",
      name: "通化"
    }, {
      id: 268,
      spell: "tongliao",
      name: "通辽"
    }, {
      id: 269,
      spell: "tongling",
      name: "铜陵"
    }, {
      id: 270,
      spell: "tongren",
      name: "铜仁"
    }, {
      id: 271,
      spell: "tulufan",
      name: "吐鲁番"
    }, {
      id: 771,
      spell: "taicang",
      name: "太仓"
    }, {
      id: 772,
      spell: "taihe",
      name: "太和"
    }, {
      id: 773,
      spell: "taihe",
      name: "泰和"
    }, {
      id: 774,
      spell: "taihu",
      name: "太湖"
    }, {
      id: 775,
      spell: "taining",
      name: "泰宁"
    }, {
      id: 776,
      spell: "taishan",
      name: "台山"
    }, {
      id: 777,
      spell: "taishun",
      name: "泰顺"
    }, {
      id: 778,
      spell: "taixing",
      name: "泰兴"
    }, {
      id: 779,
      spell: "tancheng",
      name: "郯城"
    }, {
      id: 780,
      spell: "tanghai",
      name: "唐海"
    }, {
      id: 781,
      spell: "tengzhou",
      name: "滕州"
    }, {
      id: 782,
      spell: "tianchang",
      name: "天长"
    }, {
      id: 783,
      spell: "tiantai",
      name: "天台"
    }, {
      id: 784,
      spell: "tongcheng",
      name: "桐城"
    }, {
      id: 785,
      spell: "tonggu",
      name: "铜鼓"
    }, {
      id: 786,
      spell: "tonghe",
      name: "通河"
    }, {
      id: 787,
      spell: "tongliang",
      name: "铜梁"
    }, {
      id: 788,
      spell: "tongling",
      name: "铜陵"
    }, {
      id: 789,
      spell: "tonglu",
      name: "桐庐"
    }, {
      id: 790,
      spell: "tongnan",
      name: "潼南"
    }, {
      id: 791,
      spell: "tongshan",
      name: "铜山"
    }, {
      id: 792,
      spell: "tongxiang",
      name: "桐乡"
    }, {
      id: 793,
      spell: "tongzhou",
      name: "通州"
    }],
    W: [{
      id: 42,
      spell: "weifang",
      name: "潍坊"
    }, {
      id: 43,
      spell: "weihai",
      name: "威海"
    }, {
      id: 44,
      spell: "wuhan",
      name: "武汉"
    }, {
      id: 45,
      spell: "wuxi",
      name: "无锡"
    }, {
      id: 272,
      spell: "weinan",
      name: "渭南"
    }, {
      id: 273,
      spell: "wenshan",
      name: "文山"
    }, {
      id: 274,
      spell: "wenzhou",
      name: "温州"
    }, {
      id: 275,
      spell: "wuhai",
      name: "乌海"
    }, {
      id: 276,
      spell: "wuhu",
      name: "芜湖"
    }, {
      id: 277,
      spell: "wulanchabu",
      name: "乌兰察布"
    }, {
      id: 278,
      spell: "wulumuqi",
      name: "乌鲁木齐"
    }, {
      id: 279,
      spell: "wuwei",
      name: "武威"
    }, {
      id: 280,
      spell: "wuzhong",
      name: "吴忠"
    }, {
      id: 281,
      spell: "wuzhou",
      name: "梧州"
    }, {
      id: 794,
      spell: "wafangdian",
      name: "瓦房店"
    }, {
      id: 795,
      spell: "wanan",
      name: "万安"
    }, {
      id: 796,
      spell: "wangcheng",
      name: "望城"
    }, {
      id: 797,
      spell: "wangjiang",
      name: "望江"
    }, {
      id: 798,
      spell: "wannian",
      name: "万年"
    }, {
      id: 799,
      spell: "wanzai",
      name: "万载"
    }, {
      id: 800,
      spell: "weishan",
      name: "微山"
    }, {
      id: 801,
      spell: "wencheng",
      name: "文成"
    }, {
      id: 802,
      spell: "wendeng",
      name: "文登"
    }, {
      id: 803,
      spell: "wengyuan",
      name: "翁源"
    }, {
      id: 804,
      spell: "wenling",
      name: "温岭"
    }, {
      id: 805,
      spell: "wenshang",
      name: "汶上"
    }, {
      id: 806,
      spell: "wenxian",
      name: "温县"
    }, {
      id: 807,
      spell: "woyang",
      name: "涡阳"
    }, {
      id: 808,
      spell: "wuchang",
      name: "五常"
    }, {
      id: 809,
      spell: "wucheng",
      name: "武城"
    }, {
      id: 810,
      spell: "wuchuan",
      name: "吴川"
    }, {
      id: 811,
      spell: "wudi",
      name: "无棣"
    }, {
      id: 812,
      spell: "wuhe",
      name: "五河"
    }, {
      id: 813,
      spell: "wuhu",
      name: "芜湖"
    }, {
      id: 814,
      spell: "wuhua",
      name: "五华"
    }, {
      id: 815,
      spell: "wuji",
      name: "无极"
    }, {
      id: 816,
      spell: "wujiang",
      name: "吴江"
    }, {
      id: 817,
      spell: "wulian",
      name: "五莲"
    }, {
      id: 818,
      spell: "wulong",
      name: "武隆"
    }, {
      id: 819,
      spell: "wuming",
      name: "武鸣"
    }, {
      id: 820,
      spell: "wuning",
      name: "武宁"
    }, {
      id: 821,
      spell: "wuping",
      name: "武平"
    }, {
      id: 822,
      spell: "wushan",
      name: "巫山"
    }, {
      id: 823,
      spell: "wuwei",
      name: "无为"
    }, {
      id: 824,
      spell: "wuxi",
      name: "巫溪"
    }, {
      id: 825,
      spell: "wuyi",
      name: "武义"
    }, {
      id: 826,
      spell: "wuyishan",
      name: "武夷山"
    }, {
      id: 827,
      spell: "wuyuan",
      name: "婺源"
    }, {
      id: 828,
      spell: "wuzhi",
      name: "武陟"
    }],
    X: [{
      id: 46,
      spell: "xiamen",
      name: "厦门"
    }, {
      id: 47,
      spell: "xian",
      name: "西安"
    }, {
      id: 48,
      spell: "xuchang",
      name: "许昌"
    }, {
      id: 49,
      spell: "xuzhou",
      name: "徐州"
    }, {
      id: 282,
      spell: "xiangfan",
      name: "襄樊"
    }, {
      id: 283,
      spell: "xiangtan",
      name: "湘潭"
    }, {
      id: 284,
      spell: "xiangxi",
      name: "湘西"
    }, {
      id: 285,
      spell: "xianning",
      name: "咸宁"
    }, {
      id: 286,
      spell: "xianyang",
      name: "咸阳"
    }, {
      id: 287,
      spell: "xiaogan",
      name: "孝感"
    }, {
      id: 288,
      spell: "xilinguolemeng",
      name: "锡林郭勒盟"
    }, {
      id: 289,
      spell: "xinganmeng",
      name: "兴安盟"
    }, {
      id: 290,
      spell: "xingtai",
      name: "邢台"
    }, {
      id: 291,
      spell: "xining",
      name: "西宁"
    }, {
      id: 292,
      spell: "xinxiang",
      name: "新乡"
    }, {
      id: 293,
      spell: "xinyang",
      name: "信阳"
    }, {
      id: 294,
      spell: "xinyu",
      name: "新余"
    }, {
      id: 295,
      spell: "xinzhou",
      name: "忻州"
    }, {
      id: 296,
      spell: "xishuangbanna",
      name: "西双版纳"
    }, {
      id: 297,
      spell: "xuancheng",
      name: "宣城"
    }, {
      id: 829,
      spell: "xiajiang",
      name: "峡江"
    }, {
      id: 830,
      spell: "xiajin",
      name: "夏津"
    }, {
      id: 831,
      spell: "xiangshan",
      name: "象山"
    }, {
      id: 832,
      spell: "xiangshui",
      name: "响水"
    }, {
      id: 833,
      spell: "xianju",
      name: "仙居"
    }, {
      id: 834,
      spell: "xianyou",
      name: "仙游"
    }, {
      id: 835,
      spell: "xiaoxian",
      name: "萧县"
    }, {
      id: 836,
      spell: "xiapu",
      name: "霞浦"
    }, {
      id: 837,
      spell: "xifeng",
      name: "息烽"
    }, {
      id: 838,
      spell: "xinan",
      name: "新安"
    }, {
      id: 839,
      spell: "xinchang",
      name: "新昌"
    }, {
      id: 840,
      spell: "xinfeng",
      name: "信丰"
    }, {
      id: 841,
      spell: "xinfeng",
      name: "新丰"
    }, {
      id: 842,
      spell: "xingan",
      name: "新干"
    }, {
      id: 843,
      spell: "xingguo",
      name: "兴国"
    }, {
      id: 844,
      spell: "xinghua",
      name: "兴化"
    }, {
      id: 845,
      spell: "xingning",
      name: "兴宁"
    }, {
      id: 846,
      spell: "xingtang",
      name: "行唐"
    }, {
      id: 847,
      spell: "xingyang",
      name: "荥阳"
    }, {
      id: 848,
      spell: "xingzi",
      name: "星子"
    }, {
      id: 849,
      spell: "xinji",
      name: "辛集"
    }, {
      id: 850,
      spell: "xinjian",
      name: "新建"
    }, {
      id: 851,
      spell: "xinjin",
      name: "新津"
    }, {
      id: 852,
      spell: "xinle",
      name: "新乐"
    }, {
      id: 853,
      spell: "xinmin",
      name: "新民"
    }, {
      id: 854,
      spell: "xinmi",
      name: "新密"
    }, {
      id: 855,
      spell: "xintai",
      name: "新泰"
    }, {
      id: 856,
      spell: "xinxing",
      name: "新兴"
    }, {
      id: 857,
      spell: "xinyi",
      name: "新沂"
    }, {
      id: 858,
      spell: "xinyi",
      name: "信宜"
    }, {
      id: 859,
      spell: "xinzheng",
      name: "新郑"
    }, {
      id: 860,
      spell: "xiuning",
      name: "休宁"
    }, {
      id: 861,
      spell: "xiushan",
      name: "秀山"
    }, {
      id: 862,
      spell: "xiushui",
      name: "修水"
    }, {
      id: 863,
      spell: "xiuwen",
      name: "修文"
    }, {
      id: 864,
      spell: "xiuwu",
      name: "修武"
    }, {
      id: 865,
      spell: "xundian",
      name: "寻甸"
    }, {
      id: 866,
      spell: "xunwu",
      name: "寻乌"
    }, {
      id: 867,
      spell: "xuwen",
      name: "徐闻"
    }, {
      id: 868,
      spell: "xuyi",
      name: "盱眙"
    }],
    Y: [{
      id: 50,
      spell: "yangzhou",
      name: "扬州"
    }, {
      id: 51,
      spell: "yantai",
      name: "烟台"
    }, {
      id: 298,
      spell: "yaan",
      name: "雅安"
    }, {
      id: 299,
      spell: "yanan",
      name: "延安"
    }, {
      id: 300,
      spell: "yanbian",
      name: "延边"
    }, {
      id: 301,
      spell: "yancheng",
      name: "盐城"
    }, {
      id: 302,
      spell: "yangjiang",
      name: "阳江"
    }, {
      id: 303,
      spell: "yangquan",
      name: "阳泉"
    }, {
      id: 304,
      spell: "yibin",
      name: "宜宾"
    }, {
      id: 305,
      spell: "yichang",
      name: "宜昌"
    }, {
      id: 306,
      spell: "yichun",
      name: "伊春"
    }, {
      id: 307,
      spell: "yichun",
      name: "宜春"
    }, {
      id: 308,
      spell: "yilihasake",
      name: "伊犁哈萨克"
    }, {
      id: 309,
      spell: "yinchuan",
      name: "银川"
    }, {
      id: 310,
      spell: "yingkou",
      name: "营口"
    }, {
      id: 311,
      spell: "yingtan",
      name: "鹰潭"
    }, {
      id: 312,
      spell: "yiyang",
      name: "益阳"
    }, {
      id: 313,
      spell: "yongzhou",
      name: "永州"
    }, {
      id: 314,
      spell: "yueyang",
      name: "岳阳"
    }, {
      id: 315,
      spell: "yulin",
      name: "玉林"
    }, {
      id: 316,
      spell: "yulin",
      name: "榆林"
    }, {
      id: 317,
      spell: "yuncheng",
      name: "运城"
    }, {
      id: 318,
      spell: "yunfu",
      name: "云浮"
    }, {
      id: 319,
      spell: "yushu",
      name: "玉树"
    }, {
      id: 320,
      spell: "yuxi",
      name: "玉溪"
    }, {
      id: 869,
      spell: "yangchun",
      name: "阳春"
    }, {
      id: 870,
      spell: "yangdong",
      name: "阳东"
    }, {
      id: 871,
      spell: "yanggu",
      name: "阳谷"
    }, {
      id: 872,
      spell: "yangshan",
      name: "阳山"
    }, {
      id: 873,
      spell: "yangxin",
      name: "阳信"
    }, {
      id: 874,
      spell: "yangxi",
      name: "阳西"
    }, {
      id: 875,
      spell: "yangzhong",
      name: "扬中"
    }, {
      id: 876,
      spell: "yanshi",
      name: "偃师"
    }, {
      id: 877,
      spell: "yanshou",
      name: "延寿"
    }, {
      id: 878,
      spell: "yanzhou",
      name: "兖州"
    }, {
      id: 879,
      spell: "yichuan",
      name: "伊川"
    }, {
      id: 880,
      spell: "yifeng",
      name: "宜丰"
    }, {
      id: 881,
      spell: "yihuang",
      name: "宜黄"
    }, {
      id: 882,
      spell: "yilan",
      name: "依兰"
    }, {
      id: 883,
      spell: "yiliang",
      name: "宜良"
    }, {
      id: 884,
      spell: "yinan",
      name: "沂南"
    }, {
      id: 885,
      spell: "yingde",
      name: "英德"
    }, {
      id: 886,
      spell: "yingshang",
      name: "颍上"
    }, {
      id: 887,
      spell: "yishui",
      name: "沂水"
    }, {
      id: 888,
      spell: "yiwu",
      name: "义乌"
    }, {
      id: 889,
      spell: "yixian",
      name: "黟县"
    }, {
      id: 890,
      spell: "yixing",
      name: "宜兴"
    }, {
      id: 891,
      spell: "yiyang",
      name: "弋阳"
    }, {
      id: 892,
      spell: "yiyang",
      name: "宜阳"
    }, {
      id: 893,
      spell: "yiyuan",
      name: "沂源"
    }, {
      id: 894,
      spell: "yizheng",
      name: "仪征"
    }, {
      id: 895,
      spell: "yongan",
      name: "永安"
    }, {
      id: 896,
      spell: "yongchuan",
      name: "永川"
    }, {
      id: 897,
      spell: "yongchun",
      name: "永春"
    }, {
      id: 898,
      spell: "yongdeng",
      name: "永登"
    }, {
      id: 899,
      spell: "yongding",
      name: "永定"
    }, {
      id: 900,
      spell: "yongfeng",
      name: "永丰"
    }, {
      id: 901,
      spell: "yongji",
      name: "永吉"
    }, {
      id: 902,
      spell: "yongjia",
      name: "永嘉"
    }, {
      id: 903,
      spell: "yongkang",
      name: "永康"
    }, {
      id: 904,
      spell: "yongning",
      name: "邕宁"
    }, {
      id: 905,
      spell: "yongtai",
      name: "永泰"
    }, {
      id: 906,
      spell: "yongxin",
      name: "永新"
    }, {
      id: 907,
      spell: "yongxiu",
      name: "永修"
    }, {
      id: 908,
      spell: "youxi",
      name: "尤溪"
    }, {
      id: 909,
      spell: "youyang",
      name: "酉阳"
    }, {
      id: 910,
      spell: "yuanshi",
      name: "元氏"
    }, {
      id: 911,
      spell: "yucheng",
      name: "禹城"
    }, {
      id: 912,
      spell: "yudu",
      name: "于都"
    }, {
      id: 913,
      spell: "yuexi",
      name: "岳西"
    }, {
      id: 914,
      spell: "yugan",
      name: "余干"
    }, {
      id: 915,
      spell: "yuhuan",
      name: "玉环"
    }, {
      id: 916,
      spell: "yujiang",
      name: "余江"
    }, {
      id: 917,
      spell: "yunan",
      name: "郁南"
    }, {
      id: 918,
      spell: "yunan",
      name: "云安"
    }, {
      id: 919,
      spell: "yuncheng",
      name: "郓城"
    }, {
      id: 920,
      spell: "yunhe",
      name: "云和"
    }, {
      id: 921,
      spell: "yunxiao",
      name: "云霄"
    }, {
      id: 922,
      spell: "yunyang",
      name: "云阳"
    }, {
      id: 923,
      spell: "yushan",
      name: "玉山"
    }, {
      id: 924,
      spell: "yushu",
      name: "榆树"
    }, {
      id: 925,
      spell: "yutai",
      name: "鱼台"
    }, {
      id: 926,
      spell: "yutian",
      name: "玉田"
    }, {
      id: 927,
      spell: "yuyao",
      name: "余姚"
    }, {
      id: 928,
      spell: "yuzhong",
      name: "榆中"
    }],
    Z: [{
      id: 52,
      spell: "zhangzhou",
      name: "漳州"
    }, {
      id: 53,
      spell: "zhengzhou",
      name: "郑州"
    }, {
      id: 54,
      spell: "zhongshan",
      name: "中山"
    }, {
      id: 55,
      spell: "zhuhai",
      name: "珠海"
    }, {
      id: 321,
      spell: "zaozhuang",
      name: "枣庄"
    }, {
      id: 322,
      spell: "zhangjiajie",
      name: "张家界"
    }, {
      id: 323,
      spell: "zhangjiakou",
      name: "张家口"
    }, {
      id: 324,
      spell: "zhangye",
      name: "张掖"
    }, {
      id: 325,
      spell: "zhanjiang",
      name: "湛江"
    }, {
      id: 326,
      spell: "zhaoqing",
      name: "肇庆"
    }, {
      id: 327,
      spell: "zhaotong",
      name: "昭通"
    }, {
      id: 328,
      spell: "zhenjiang",
      name: "镇江"
    }, {
      id: 329,
      spell: "zhongwei",
      name: "中卫"
    }, {
      id: 330,
      spell: "zhoukou",
      name: "周口"
    }, {
      id: 331,
      spell: "zhoushan",
      name: "舟山"
    }, {
      id: 332,
      spell: "zhumadian",
      name: "驻马店"
    }, {
      id: 333,
      spell: "zhuzhou",
      name: "株洲"
    }, {
      id: 334,
      spell: "zibo",
      name: "淄博"
    }, {
      id: 335,
      spell: "zigong",
      name: "自贡"
    }, {
      id: 336,
      spell: "ziyang",
      name: "资阳"
    }, {
      id: 337,
      spell: "zunyi",
      name: "遵义"
    }, {
      id: 929,
      spell: "zanhuang",
      name: "赞皇"
    }, {
      id: 930,
      spell: "zengcheng",
      name: "增城"
    }, {
      id: 931,
      spell: "zhangjiagang",
      name: "张家港"
    }, {
      id: 932,
      spell: "zhangping",
      name: "漳平"
    }, {
      id: 933,
      spell: "zhangpu",
      name: "漳浦"
    }, {
      id: 934,
      spell: "zhangqiu",
      name: "章丘"
    }, {
      id: 935,
      spell: "zhangshu",
      name: "樟树"
    }, {
      id: 936,
      spell: "zhanhua",
      name: "沾化"
    }, {
      id: 937,
      spell: "zhaoxian",
      name: "赵县"
    }, {
      id: 938,
      spell: "zhaoyuan",
      name: "招远"
    }, {
      id: 939,
      spell: "zhengding",
      name: "正定"
    }, {
      id: 940,
      spell: "zhenghe",
      name: "政和"
    }, {
      id: 941,
      spell: "zherong",
      name: "柘荣"
    }, {
      id: 942,
      spell: "zhongmou",
      name: "中牟"
    }, {
      id: 943,
      spell: "zhongxian",
      name: "忠县"
    }, {
      id: 944,
      spell: "zhouning",
      name: "周宁"
    }, {
      id: 945,
      spell: "zhouzhi",
      name: "周至"
    }, {
      id: 946,
      spell: "zhuanghe",
      name: "庄河"
    }, {
      id: 947,
      spell: "zhucheng",
      name: "诸城"
    }, {
      id: 948,
      spell: "zhuji",
      name: "诸暨"
    }, {
      id: 949,
      spell: "zijin",
      name: "紫金"
    }, {
      id: 950,
      spell: "zixi",
      name: "资溪"
    }, {
      id: 951,
      spell: "zoucheng",
      name: "邹城"
    }, {
      id: 952,
      spell: "zouping",
      name: "邹平"
    }, {
      id: 953,
      spell: "zunhua",
      name: "遵化"
    }]
  }
}, Wa = [
  {
    name: "安徽",
    id: "A",
    data: [
      "合肥",
      "芜湖",
      "蚌埠",
      "淮南",
      "马鞍山",
      "淮北",
      "铜陵",
      "安庆",
      "黄山",
      "滁州",
      "阜阳",
      "宿州",
      "六安",
      "亳州",
      "池州",
      "宣城"
    ]
  }
], Xa = [
  {
    name: "重庆",
    id: "C",
    data: [
      "万州",
      "涪陵",
      "渝中",
      "大渡口",
      "江北",
      "沙坪坝",
      "九龙坡",
      "南岸",
      "北碚",
      "綦江",
      "大足",
      "渝北",
      "巴南",
      "黔江",
      "长寿",
      "江津",
      "合川",
      "永川",
      "南川",
      "璧山",
      "铜梁",
      "潼南",
      "荣昌",
      "开州",
      "梁平",
      "武隆",
      "城口县",
      "丰都县",
      "垫江县",
      "忠县",
      "云阳县",
      "奉节县",
      "巫山县",
      "巫溪县",
      "石柱土家族自治县",
      "秀山土家族苗族自治县",
      "酉阳土家族苗族自治县",
      "彭水苗族土家族自治县"
    ]
  }
], Za = [
  {
    name: "福建",
    id: "F",
    data: [
      "福州",
      "厦门",
      "莆田",
      "三明",
      "泉州",
      "漳州",
      "南平",
      "龙岩",
      "宁德"
    ]
  }
], ka = [
  {
    name: "广东",
    id: "G",
    data: [
      "广州",
      "韶关",
      "深圳",
      "珠海",
      "汕头",
      "佛山",
      "江门",
      "湛江",
      "茂名",
      "肇庆",
      "惠州",
      "梅州",
      "汕尾",
      "河源",
      "阳江",
      "清远",
      "东莞",
      "中山",
      "潮州",
      "揭阳",
      "云浮"
    ]
  },
  {
    name: "广西",
    data: [
      "南宁",
      "柳州",
      "桂林",
      "梧州",
      "北海",
      "防城港",
      "钦州",
      "贵港",
      "玉林",
      "百色",
      "贺州",
      "河池",
      "来宾",
      "崇左"
    ]
  },
  {
    name: "贵州",
    data: [
      "贵阳",
      "六盘水",
      "遵义",
      "安顺",
      "毕节",
      "铜仁",
      "黔西南布依族苗族自治州",
      "黔东南苗族侗族自治州",
      "黔南布依族苗族自治州"
    ]
  },
  {
    name: "甘肃",
    data: [
      "兰州",
      "嘉峪关",
      "金昌",
      "白银",
      "天水",
      "武威",
      "张掖",
      "平凉",
      "酒泉",
      "庆阳",
      "定西",
      "陇南",
      "临夏回族自治州",
      "甘南藏族自治州"
    ]
  }
], qa = [
  {
    name: "河北",
    id: "H",
    data: [
      "石家庄",
      "唐山",
      "秦皇岛",
      "邯郸",
      "邢台",
      "保定",
      "张家口",
      "承德",
      "沧州",
      "廊坊",
      "衡水"
    ]
  },
  {
    name: "黑龙江",
    data: [
      "哈尔滨",
      "齐齐哈尔",
      "鸡西",
      "鹤岗",
      "双鸭山",
      "大庆",
      "伊春",
      "佳木斯",
      "七台河",
      "牡丹江",
      "黑河",
      "绥化",
      "大兴安岭地"
    ]
  },
  {
    name: "河南",
    data: [
      "郑州",
      "开封",
      "洛阳",
      "平顶山",
      "安阳",
      "鹤壁",
      "新乡",
      "焦作",
      "濮阳",
      "许昌",
      "漯河",
      "三门峡",
      "南阳",
      "商丘",
      "信阳",
      "周口",
      "驻马店",
      "济源"
    ]
  },
  {
    name: "湖北",
    data: [
      "武汉",
      "黄石",
      "十堰",
      "宜昌",
      "襄阳",
      "鄂州",
      "荆门",
      "孝感",
      "荆州",
      "黄冈",
      "咸宁",
      "随州",
      "恩施土家族苗族自治州",
      "仙桃",
      "潜江",
      "天门",
      "神农架林"
    ]
  },
  {
    name: "湖南",
    data: [
      "长沙",
      "株洲",
      "湘潭",
      "衡阳",
      "邵阳",
      "岳阳",
      "常德",
      "张家界",
      "益阳",
      "郴州",
      "永州",
      "怀化",
      "娄底",
      "湘西土家族苗族自治州"
    ]
  },
  {
    name: "海南",
    data: [
      "海口",
      "三亚",
      "三沙",
      "儋州",
      "五指山",
      "琼海",
      "文昌",
      "万宁",
      "东方",
      "定安县",
      "屯昌县",
      "澄迈县",
      "临高县",
      "白沙黎族自治县",
      "昌江黎族自治县",
      "乐东黎族自治县",
      "陵水黎族自治县",
      "保亭黎族苗族自治县",
      "琼中黎族苗族自治县"
    ]
  }
], _a = [
  {
    name: "吉林",
    id: "J",
    data: [
      "长春",
      "吉林",
      "四平",
      "辽源",
      "通化",
      "白山",
      "松原",
      "白城",
      "延边朝鲜族自治州"
    ]
  },
  {
    name: "江苏",
    data: [
      "南京",
      "无锡",
      "徐州",
      "常州",
      "苏州",
      "南通",
      "连云港",
      "淮安",
      "盐城",
      "扬州",
      "镇江",
      "泰州",
      "宿迁"
    ]
  },
  {
    name: "江西",
    data: [
      "南昌",
      "景德镇",
      "萍乡",
      "九江",
      "新余",
      "鹰潭",
      "赣州",
      "吉安",
      "宜春",
      "抚州",
      "上饶"
    ]
  }
], eo = [
  {
    name: "辽宁",
    id: "L",
    data: [
      "沈阳",
      "大连",
      "鞍山",
      "抚顺",
      "本溪",
      "丹东",
      "锦州",
      "营口",
      "阜新",
      "辽阳",
      "盘锦",
      "铁岭",
      "朝阳",
      "葫芦岛"
    ]
  }
], no = [
  {
    name: "内蒙古",
    id: "N",
    data: [
      "呼和浩特",
      "包头",
      "乌海",
      "赤峰",
      "通辽",
      "鄂尔多斯",
      "呼伦贝尔",
      "巴彦淖尔",
      "乌兰察布",
      "兴安盟",
      "锡林郭勒盟",
      "阿拉善盟"
    ]
  },
  {
    name: "宁夏",
    data: [
      "银川",
      "石嘴山",
      "吴忠",
      "固原",
      "中卫"
    ]
  }
], to = [
  {
    name: "青海",
    id: "Q",
    data: [
      "西宁",
      "海东",
      "海北藏族自治州",
      "黄南藏族自治州",
      "海南藏族自治州",
      "果洛藏族自治州",
      "玉树藏族自治州",
      "海西蒙古族藏族自治州"
    ]
  }
], ao = [
  {
    name: "山西",
    id: "S",
    data: [
      "太原",
      "大同",
      "阳泉",
      "长治",
      "晋城",
      "朔州",
      "晋中",
      "运城",
      "忻州",
      "临汾",
      "吕梁"
    ]
  },
  {
    name: "上海",
    data: [
      "黄浦",
      "徐汇",
      "长宁",
      "静安",
      "普陀",
      "虹口",
      "杨浦",
      "闵行",
      "宝山",
      "嘉定",
      "浦东新",
      "金山",
      "松江",
      "青浦",
      "奉贤",
      "崇明"
    ]
  },
  {
    name: "山东",
    data: [
      "济南",
      "青岛",
      "淄博",
      "枣庄",
      "东营",
      "烟台",
      "潍坊",
      "济宁",
      "泰安",
      "威海",
      "日照",
      "临沂",
      "德州",
      "聊城",
      "滨州",
      "菏泽"
    ]
  },
  {
    name: "四川",
    data: [
      "成都",
      "自贡",
      "攀枝花",
      "泸州",
      "德阳",
      "绵阳",
      "广元",
      "遂宁",
      "内江",
      "乐山",
      "南充",
      "眉山",
      "宜宾",
      "广安",
      "达州",
      "雅安",
      "巴中",
      "资阳",
      "阿坝藏族羌族自治州",
      "甘孜藏族自治州",
      "凉山彝族自治州"
    ]
  },
  {
    name: "陕西",
    data: [
      "西安",
      "铜川",
      "宝鸡",
      "咸阳",
      "渭南",
      "延安",
      "汉中",
      "榆林",
      "安康",
      "商洛"
    ]
  }
], oo = [
  {
    name: "天津",
    id: "T",
    data: [
      "和平",
      "河东",
      "河西",
      "南开",
      "河北",
      "红桥",
      "东丽",
      "西青",
      "津南",
      "北辰",
      "武清",
      "宝坻",
      "滨海新",
      "宁河",
      "静海",
      "蓟州"
    ]
  }
], ro = [
  {
    name: "西藏",
    id: "X",
    data: [
      "拉萨",
      "日喀则",
      "昌都",
      "林芝",
      "山南",
      "那曲",
      "阿里地"
    ]
  },
  {
    name: "新疆",
    data: [
      "乌鲁木齐",
      "克拉玛依",
      "吐鲁番",
      "哈密",
      "昌吉回族自治州",
      "博尔塔拉蒙古自治州",
      "巴音郭楞蒙古自治州",
      "阿克苏地",
      "克孜勒苏柯尔克孜自治州",
      "喀什地",
      "和田地",
      "伊犁哈萨克自治州",
      "塔城地",
      "阿勒泰地",
      "石河子",
      "阿拉尔",
      "图木舒克",
      "五家渠",
      "北屯",
      "铁门关",
      "双河",
      "可克达拉",
      "昆玉",
      "胡杨河"
    ]
  }
], lo = [
  {
    name: "云南",
    id: "Y",
    data: [
      "昆明",
      "曲靖",
      "玉溪",
      "保山",
      "昭通",
      "丽江",
      "普洱",
      "临沧",
      "楚雄彝族自治州",
      "红河哈尼族彝族自治州",
      "文山壮族苗族自治州",
      "西双版纳傣族自治州",
      "大理白族自治州",
      "德宏傣族景颇族自治州",
      "怒江傈僳族自治州",
      "迪庆藏族自治州"
    ]
  }
], io = [
  {
    name: "浙江",
    id: "Z",
    data: [
      "杭州",
      "宁波",
      "温州",
      "嘉兴",
      "湖州",
      "绍兴",
      "金华",
      "衢州",
      "舟山",
      "台州",
      "丽水"
    ]
  }
], co = {
  A: Wa,
  C: Xa,
  F: Za,
  G: ka,
  H: qa,
  J: _a,
  L: eo,
  N: no,
  Q: to,
  S: ao,
  T: oo,
  X: ro,
  Y: lo,
  Z: io,
  直辖市: [
    {
      name: "直辖市",
      id: "直辖市",
      data: [
        "北京",
        "天津",
        "上海",
        "重庆"
      ]
    }
  ],
  港澳: [
    {
      name: "港澳",
      id: "港澳",
      data: [
        "香港",
        "澳门"
      ]
    }
  ]
}, so = { class: "result" }, uo = { class: "container" }, mo = { class: "city" }, fo = ["onClick"], vo = ["onClick"], po = { class: "province" }, ho = ["onClick"], go = ["onClick"], Ao = /* @__PURE__ */ xe({
  __name: "index",
  emits: ["changeCity", "changeProvince"],
  setup(C, { emit: $ }) {
    let a = $, t = se("请选择"), e = se(!1), n = se("按城市"), r = se(""), o = se([]), l = se(Ja.cities), s = se(co), g = se([]), m = (d) => {
      t.value = d.name, e.value = !1, a("changeCity", d);
    }, h = (d) => {
      t.value = d, e.value = !1, a("changeProvince", d);
    }, c = (d) => {
      let v = document.getElementById(d);
      v && v.scrollIntoView();
    }, i = (d) => {
      let v = Object.values(l.value).flat(2);
      d === "" ? o.value = v : n.value === "按城市" ? o.value = v.filter((f) => f.name.includes(d) || f.spell.includes(d)) : o.value = v.filter((f) => f.name.includes(d));
    }, u = (d) => {
      let v = g.value.find((f) => f.id === d);
      t.value = v.name, n.value === "按城市" ? a("changeCity", v) : a("changeProvince", v.name);
    };
    return hn(() => {
      let d = Object.values(l.value).flat(2);
      g.value = d, o.value = d;
    }), (d, v) => {
      const f = ie("el-icon-edit"), p = ie("el-radio-button"), y = ie("el-radio-group"), x = ie("el-col"), E = ie("el-option"), S = ie("el-select"), I = ie("el-row"), P = ie("el-scrollbar"), T = ie("el-popover");
      return w(), ce(T, {
        visible: z(e),
        "onUpdate:visible": v[2] || (v[2] = (A) => Me(e) ? e.value = A : e = A),
        placement: "bottom-start",
        width: 430,
        trigger: "click"
      }, {
        reference: ne(() => [
          ve("div", so, [
            ve(
              "div",
              null,
              ye(z(t)),
              1
              /* TEXT */
            ),
            ve("div", null, [
              oe(f, {
                class: $n({ rotate: z(e) })
              }, null, 8, ["class"])
            ])
          ])
        ]),
        default: ne(() => [
          ve("div", uo, [
            oe(I, null, {
              default: ne(() => [
                oe(x, { span: 8 }, {
                  default: ne(() => [
                    oe(y, {
                      modelValue: z(n),
                      "onUpdate:modelValue": v[0] || (v[0] = (A) => Me(n) ? n.value = A : n = A),
                      size: "small"
                    }, {
                      default: ne(() => [
                        oe(p, { label: "按城市" }),
                        oe(p, { label: "按省份" })
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["modelValue"])
                  ]),
                  _: 1
                  /* STABLE */
                }),
                oe(x, {
                  offset: 1,
                  span: 15
                }, {
                  default: ne(() => [
                    oe(S, {
                      onChange: z(u),
                      placeholder: "请搜索城市",
                      size: "small",
                      modelValue: z(r),
                      "onUpdate:modelValue": v[1] || (v[1] = (A) => Me(r) ? r.value = A : r = A),
                      filterable: "",
                      "filter-method": z(i)
                    }, {
                      default: ne(() => [
                        (w(!0), _(
                          ue,
                          null,
                          Ae(z(o), (A) => (w(), ce(E, {
                            key: A.id,
                            label: A.name,
                            value: A.id
                          }, null, 8, ["label", "value"]))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 1
                      /* STABLE */
                    }, 8, ["onChange", "modelValue", "filter-method"])
                  ]),
                  _: 1
                  /* STABLE */
                })
              ]),
              _: 1
              /* STABLE */
            }),
            z(n) === "按城市" ? (w(), _(
              ue,
              { key: 0 },
              [
                ve("div", mo, [
                  pe('  <div v-for="(value, key) in cities">{{key}}</div> '),
                  pe(" 字母区域 "),
                  (w(!0), _(
                    ue,
                    null,
                    Ae(Object.keys(z(l)), (A, D) => (w(), _("div", {
                      class: "city-item",
                      onClick: (R) => z(c)(A)
                    }, ye(A), 9, fo))),
                    256
                    /* UNKEYED_FRAGMENT */
                  ))
                ]),
                oe(P, { "max-height": "300px" }, {
                  default: ne(() => [
                    (w(!0), _(
                      ue,
                      null,
                      Ae(z(l), (A, D) => (w(), ce(I, {
                        key: D,
                        style: { "margin-bottom": "10px" },
                        id: D
                      }, {
                        default: ne(() => [
                          oe(
                            x,
                            { span: 2 },
                            {
                              default: ne(() => [
                                In(
                                  ye(D) + ":",
                                  1
                                  /* TEXT */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          ),
                          oe(
                            x,
                            {
                              span: 22,
                              class: "city-name"
                            },
                            {
                              default: ne(() => [
                                (w(!0), _(
                                  ue,
                                  null,
                                  Ae(A, (R, N) => (w(), _("div", {
                                    onClick: (M) => z(m)(R),
                                    class: "city-name-item",
                                    key: R.id
                                  }, [
                                    ve(
                                      "div",
                                      null,
                                      ye(R.name),
                                      1
                                      /* TEXT */
                                    )
                                  ], 8, vo))),
                                  128
                                  /* KEYED_FRAGMENT */
                                ))
                              ]),
                              _: 2
                              /* DYNAMIC */
                            },
                            1024
                            /* DYNAMIC_SLOTS */
                          )
                        ]),
                        _: 2
                        /* DYNAMIC */
                      }, 1032, ["id"]))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (w(), _(
              ue,
              { key: 1 },
              [
                ve("div", po, [
                  (w(!0), _(
                    ue,
                    null,
                    Ae(Object.keys(z(s)), (A, D) => (w(), _("div", {
                      class: "province-item",
                      key: D,
                      onClick: (R) => z(c)(A)
                    }, ye(A), 9, ho))),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ]),
                oe(P, { "max-height": "300px" }, {
                  default: ne(() => [
                    (w(!0), _(
                      ue,
                      null,
                      Ae(Object.values(z(s)), (A, D) => (w(), _(
                        ue,
                        { key: D },
                        [
                          (w(!0), _(
                            ue,
                            null,
                            Ae(A, (R, N) => (w(), ce(I, {
                              key: N,
                              style: { "margin-bottom": "10px" },
                              id: R.id
                            }, {
                              default: ne(() => [
                                oe(
                                  x,
                                  { span: 3 },
                                  {
                                    default: ne(() => [
                                      In(
                                        ye(R.name) + ":",
                                        1
                                        /* TEXT */
                                      )
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                ),
                                oe(
                                  x,
                                  {
                                    span: 21,
                                    class: "province-name"
                                  },
                                  {
                                    default: ne(() => [
                                      (w(!0), _(
                                        ue,
                                        null,
                                        Ae(R.data, (M, b) => (w(), _("div", {
                                          class: "province-name-item",
                                          key: b
                                        }, [
                                          ve("div", {
                                            onClick: (B) => z(h)(M)
                                          }, ye(M), 9, go)
                                        ]))),
                                        128
                                        /* KEYED_FRAGMENT */
                                      ))
                                    ]),
                                    _: 2
                                    /* DYNAMIC */
                                  },
                                  1024
                                  /* DYNAMIC_SLOTS */
                                )
                              ]),
                              _: 2
                              /* DYNAMIC */
                            }, 1032, ["id"]))),
                            128
                            /* KEYED_FRAGMENT */
                          ))
                        ],
                        64
                        /* STABLE_FRAGMENT */
                      ))),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ]),
                  _: 1
                  /* STABLE */
                })
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]),
        _: 1
        /* STABLE */
      }, 8, ["visible"]);
    };
  }
}), yo = /* @__PURE__ */ We(Ao, [["__scopeId", "data-v-6520c1be"]]), xo = {
  install(C) {
    C.component("sun-choose-city", yo);
  }
};
var sn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xt(C) {
  return C && C.__esModule && Object.prototype.hasOwnProperty.call(C, "default") ? C.default : C;
}
function Eo() {
  this.__data__ = [], this.size = 0;
}
var So = Eo;
function Co(C, $) {
  return C === $ || C !== C && $ !== $;
}
var Et = Co, To = Et;
function Do(C, $) {
  for (var a = C.length; a--; )
    if (To(C[a][0], $))
      return a;
  return -1;
}
var gn = Do, Io = gn, Po = Array.prototype, Ro = Po.splice;
function Mo(C) {
  var $ = this.__data__, a = Io($, C);
  if (a < 0)
    return !1;
  var t = $.length - 1;
  return a == t ? $.pop() : Ro.call($, a, 1), --this.size, !0;
}
var No = Mo, bo = gn;
function Bo(C) {
  var $ = this.__data__, a = bo($, C);
  return a < 0 ? void 0 : $[a][1];
}
var $o = Bo, Fo = gn;
function Oo(C) {
  return Fo(this.__data__, C) > -1;
}
var Lo = Oo, jo = gn;
function Ho(C, $) {
  var a = this.__data__, t = jo(a, C);
  return t < 0 ? (++this.size, a.push([C, $])) : a[t][1] = $, this;
}
var wo = Ho, zo = So, Uo = No, Qo = $o, Vo = Lo, Yo = wo;
function Xe(C) {
  var $ = -1, a = C == null ? 0 : C.length;
  for (this.clear(); ++$ < a; ) {
    var t = C[$];
    this.set(t[0], t[1]);
  }
}
Xe.prototype.clear = zo;
Xe.prototype.delete = Uo;
Xe.prototype.get = Qo;
Xe.prototype.has = Vo;
Xe.prototype.set = Yo;
var An = Xe, Go = An;
function Ko() {
  this.__data__ = new Go(), this.size = 0;
}
var Jo = Ko;
function Wo(C) {
  var $ = this.__data__, a = $.delete(C);
  return this.size = $.size, a;
}
var Xo = Wo;
function Zo(C) {
  return this.__data__.get(C);
}
var ko = Zo;
function qo(C) {
  return this.__data__.has(C);
}
var _o = qo, er = typeof sn == "object" && sn && sn.Object === Object && sn, St = er, nr = St, tr = typeof self == "object" && self && self.Object === Object && self, ar = nr || tr || Function("return this")(), be = ar, or = be, rr = or.Symbol, jn = rr, Xn = jn, Ct = Object.prototype, lr = Ct.hasOwnProperty, ir = Ct.toString, an = Xn ? Xn.toStringTag : void 0;
function dr(C) {
  var $ = lr.call(C, an), a = C[an];
  try {
    C[an] = void 0;
    var t = !0;
  } catch {
  }
  var e = ir.call(C);
  return t && ($ ? C[an] = a : delete C[an]), e;
}
var cr = dr, sr = Object.prototype, ur = sr.toString;
function mr(C) {
  return ur.call(C);
}
var fr = mr, Zn = jn, vr = cr, pr = fr, hr = "[object Null]", gr = "[object Undefined]", kn = Zn ? Zn.toStringTag : void 0;
function Ar(C) {
  return C == null ? C === void 0 ? gr : hr : kn && kn in Object(C) ? vr(C) : pr(C);
}
var yn = Ar;
function yr(C) {
  var $ = typeof C;
  return C != null && ($ == "object" || $ == "function");
}
var rn = yr, xr = yn, Er = rn, Sr = "[object AsyncFunction]", Cr = "[object Function]", Tr = "[object GeneratorFunction]", Dr = "[object Proxy]";
function Ir(C) {
  if (!Er(C))
    return !1;
  var $ = xr(C);
  return $ == Cr || $ == Tr || $ == Sr || $ == Dr;
}
var Tt = Ir, Pr = be, Rr = Pr["__core-js_shared__"], Mr = Rr, Dn = Mr, qn = function() {
  var C = /[^.]+$/.exec(Dn && Dn.keys && Dn.keys.IE_PROTO || "");
  return C ? "Symbol(src)_1." + C : "";
}();
function Nr(C) {
  return !!qn && qn in C;
}
var br = Nr, Br = Function.prototype, $r = Br.toString;
function Fr(C) {
  if (C != null) {
    try {
      return $r.call(C);
    } catch {
    }
    try {
      return C + "";
    } catch {
    }
  }
  return "";
}
var Dt = Fr, Or = Tt, Lr = br, jr = rn, Hr = Dt, wr = /[\\^$.*+?()[\]{}|]/g, zr = /^\[object .+?Constructor\]$/, Ur = Function.prototype, Qr = Object.prototype, Vr = Ur.toString, Yr = Qr.hasOwnProperty, Gr = RegExp(
  "^" + Vr.call(Yr).replace(wr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Kr(C) {
  if (!jr(C) || Lr(C))
    return !1;
  var $ = Or(C) ? Gr : zr;
  return $.test(Hr(C));
}
var Jr = Kr;
function Wr(C, $) {
  return C == null ? void 0 : C[$];
}
var Xr = Wr, Zr = Jr, kr = Xr;
function qr(C, $) {
  var a = kr(C, $);
  return Zr(a) ? a : void 0;
}
var ze = qr, _r = ze, el = be, nl = _r(el, "Map"), Hn = nl, tl = ze, al = tl(Object, "create"), xn = al, _n = xn;
function ol() {
  this.__data__ = _n ? _n(null) : {}, this.size = 0;
}
var rl = ol;
function ll(C) {
  var $ = this.has(C) && delete this.__data__[C];
  return this.size -= $ ? 1 : 0, $;
}
var il = ll, dl = xn, cl = "__lodash_hash_undefined__", sl = Object.prototype, ul = sl.hasOwnProperty;
function ml(C) {
  var $ = this.__data__;
  if (dl) {
    var a = $[C];
    return a === cl ? void 0 : a;
  }
  return ul.call($, C) ? $[C] : void 0;
}
var fl = ml, vl = xn, pl = Object.prototype, hl = pl.hasOwnProperty;
function gl(C) {
  var $ = this.__data__;
  return vl ? $[C] !== void 0 : hl.call($, C);
}
var Al = gl, yl = xn, xl = "__lodash_hash_undefined__";
function El(C, $) {
  var a = this.__data__;
  return this.size += this.has(C) ? 0 : 1, a[C] = yl && $ === void 0 ? xl : $, this;
}
var Sl = El, Cl = rl, Tl = il, Dl = fl, Il = Al, Pl = Sl;
function Ze(C) {
  var $ = -1, a = C == null ? 0 : C.length;
  for (this.clear(); ++$ < a; ) {
    var t = C[$];
    this.set(t[0], t[1]);
  }
}
Ze.prototype.clear = Cl;
Ze.prototype.delete = Tl;
Ze.prototype.get = Dl;
Ze.prototype.has = Il;
Ze.prototype.set = Pl;
var Rl = Ze, et = Rl, Ml = An, Nl = Hn;
function bl() {
  this.size = 0, this.__data__ = {
    hash: new et(),
    map: new (Nl || Ml)(),
    string: new et()
  };
}
var Bl = bl;
function $l(C) {
  var $ = typeof C;
  return $ == "string" || $ == "number" || $ == "symbol" || $ == "boolean" ? C !== "__proto__" : C === null;
}
var Fl = $l, Ol = Fl;
function Ll(C, $) {
  var a = C.__data__;
  return Ol($) ? a[typeof $ == "string" ? "string" : "hash"] : a.map;
}
var En = Ll, jl = En;
function Hl(C) {
  var $ = jl(this, C).delete(C);
  return this.size -= $ ? 1 : 0, $;
}
var wl = Hl, zl = En;
function Ul(C) {
  return zl(this, C).get(C);
}
var Ql = Ul, Vl = En;
function Yl(C) {
  return Vl(this, C).has(C);
}
var Gl = Yl, Kl = En;
function Jl(C, $) {
  var a = Kl(this, C), t = a.size;
  return a.set(C, $), this.size += a.size == t ? 0 : 1, this;
}
var Wl = Jl, Xl = Bl, Zl = wl, kl = Ql, ql = Gl, _l = Wl;
function ke(C) {
  var $ = -1, a = C == null ? 0 : C.length;
  for (this.clear(); ++$ < a; ) {
    var t = C[$];
    this.set(t[0], t[1]);
  }
}
ke.prototype.clear = Xl;
ke.prototype.delete = Zl;
ke.prototype.get = kl;
ke.prototype.has = ql;
ke.prototype.set = _l;
var ei = ke, ni = An, ti = Hn, ai = ei, oi = 200;
function ri(C, $) {
  var a = this.__data__;
  if (a instanceof ni) {
    var t = a.__data__;
    if (!ti || t.length < oi - 1)
      return t.push([C, $]), this.size = ++a.size, this;
    a = this.__data__ = new ai(t);
  }
  return a.set(C, $), this.size = a.size, this;
}
var li = ri, ii = An, di = Jo, ci = Xo, si = ko, ui = _o, mi = li;
function qe(C) {
  var $ = this.__data__ = new ii(C);
  this.size = $.size;
}
qe.prototype.clear = di;
qe.prototype.delete = ci;
qe.prototype.get = si;
qe.prototype.has = ui;
qe.prototype.set = mi;
var fi = qe;
function vi(C, $) {
  for (var a = -1, t = C == null ? 0 : C.length; ++a < t && $(C[a], a, C) !== !1; )
    ;
  return C;
}
var pi = vi, hi = ze, gi = function() {
  try {
    var C = hi(Object, "defineProperty");
    return C({}, "", {}), C;
  } catch {
  }
}(), Ai = gi, nt = Ai;
function yi(C, $, a) {
  $ == "__proto__" && nt ? nt(C, $, {
    configurable: !0,
    enumerable: !0,
    value: a,
    writable: !0
  }) : C[$] = a;
}
var It = yi, xi = It, Ei = Et, Si = Object.prototype, Ci = Si.hasOwnProperty;
function Ti(C, $, a) {
  var t = C[$];
  (!(Ci.call(C, $) && Ei(t, a)) || a === void 0 && !($ in C)) && xi(C, $, a);
}
var Pt = Ti, Di = Pt, Ii = It;
function Pi(C, $, a, t) {
  var e = !a;
  a || (a = {});
  for (var n = -1, r = $.length; ++n < r; ) {
    var o = $[n], l = t ? t(a[o], C[o], o, a, C) : void 0;
    l === void 0 && (l = C[o]), e ? Ii(a, o, l) : Di(a, o, l);
  }
  return a;
}
var Sn = Pi;
function Ri(C, $) {
  for (var a = -1, t = Array(C); ++a < C; )
    t[a] = $(a);
  return t;
}
var Mi = Ri;
function Ni(C) {
  return C != null && typeof C == "object";
}
var ln = Ni, bi = yn, Bi = ln, $i = "[object Arguments]";
function Fi(C) {
  return Bi(C) && bi(C) == $i;
}
var Oi = Fi, tt = Oi, Li = ln, Rt = Object.prototype, ji = Rt.hasOwnProperty, Hi = Rt.propertyIsEnumerable, wi = tt(/* @__PURE__ */ function() {
  return arguments;
}()) ? tt : function(C) {
  return Li(C) && ji.call(C, "callee") && !Hi.call(C, "callee");
}, zi = wi, Ui = Array.isArray, wn = Ui, fn = { exports: {} };
function Qi() {
  return !1;
}
var Vi = Qi;
fn.exports;
(function(C, $) {
  var a = be, t = Vi, e = $ && !$.nodeType && $, n = e && !0 && C && !C.nodeType && C, r = n && n.exports === e, o = r ? a.Buffer : void 0, l = o ? o.isBuffer : void 0, s = l || t;
  C.exports = s;
})(fn, fn.exports);
var Mt = fn.exports, Yi = 9007199254740991, Gi = /^(?:0|[1-9]\d*)$/;
function Ki(C, $) {
  var a = typeof C;
  return $ = $ ?? Yi, !!$ && (a == "number" || a != "symbol" && Gi.test(C)) && C > -1 && C % 1 == 0 && C < $;
}
var Ji = Ki, Wi = 9007199254740991;
function Xi(C) {
  return typeof C == "number" && C > -1 && C % 1 == 0 && C <= Wi;
}
var Nt = Xi, Zi = yn, ki = Nt, qi = ln, _i = "[object Arguments]", ed = "[object Array]", nd = "[object Boolean]", td = "[object Date]", ad = "[object Error]", od = "[object Function]", rd = "[object Map]", ld = "[object Number]", id = "[object Object]", dd = "[object RegExp]", cd = "[object Set]", sd = "[object String]", ud = "[object WeakMap]", md = "[object ArrayBuffer]", fd = "[object DataView]", vd = "[object Float32Array]", pd = "[object Float64Array]", hd = "[object Int8Array]", gd = "[object Int16Array]", Ad = "[object Int32Array]", yd = "[object Uint8Array]", xd = "[object Uint8ClampedArray]", Ed = "[object Uint16Array]", Sd = "[object Uint32Array]", fe = {};
fe[vd] = fe[pd] = fe[hd] = fe[gd] = fe[Ad] = fe[yd] = fe[xd] = fe[Ed] = fe[Sd] = !0;
fe[_i] = fe[ed] = fe[md] = fe[nd] = fe[fd] = fe[td] = fe[ad] = fe[od] = fe[rd] = fe[ld] = fe[id] = fe[dd] = fe[cd] = fe[sd] = fe[ud] = !1;
function Cd(C) {
  return qi(C) && ki(C.length) && !!fe[Zi(C)];
}
var Td = Cd;
function Dd(C) {
  return function($) {
    return C($);
  };
}
var zn = Dd, vn = { exports: {} };
vn.exports;
(function(C, $) {
  var a = St, t = $ && !$.nodeType && $, e = t && !0 && C && !C.nodeType && C, n = e && e.exports === t, r = n && a.process, o = function() {
    try {
      var l = e && e.require && e.require("util").types;
      return l || r && r.binding && r.binding("util");
    } catch {
    }
  }();
  C.exports = o;
})(vn, vn.exports);
var Un = vn.exports, Id = Td, Pd = zn, at = Un, ot = at && at.isTypedArray, Rd = ot ? Pd(ot) : Id, Md = Rd, Nd = Mi, bd = zi, Bd = wn, $d = Mt, Fd = Ji, Od = Md, Ld = Object.prototype, jd = Ld.hasOwnProperty;
function Hd(C, $) {
  var a = Bd(C), t = !a && bd(C), e = !a && !t && $d(C), n = !a && !t && !e && Od(C), r = a || t || e || n, o = r ? Nd(C.length, String) : [], l = o.length;
  for (var s in C)
    ($ || jd.call(C, s)) && !(r && // Safari 9 has enumerable `arguments.length` in strict mode.
    (s == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    e && (s == "offset" || s == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    n && (s == "buffer" || s == "byteLength" || s == "byteOffset") || // Skip index properties.
    Fd(s, l))) && o.push(s);
  return o;
}
var bt = Hd, wd = Object.prototype;
function zd(C) {
  var $ = C && C.constructor, a = typeof $ == "function" && $.prototype || wd;
  return C === a;
}
var Qn = zd;
function Ud(C, $) {
  return function(a) {
    return C($(a));
  };
}
var Bt = Ud, Qd = Bt, Vd = Qd(Object.keys, Object), Yd = Vd, Gd = Qn, Kd = Yd, Jd = Object.prototype, Wd = Jd.hasOwnProperty;
function Xd(C) {
  if (!Gd(C))
    return Kd(C);
  var $ = [];
  for (var a in Object(C))
    Wd.call(C, a) && a != "constructor" && $.push(a);
  return $;
}
var Zd = Xd, kd = Tt, qd = Nt;
function _d(C) {
  return C != null && qd(C.length) && !kd(C);
}
var $t = _d, ec = bt, nc = Zd, tc = $t;
function ac(C) {
  return tc(C) ? ec(C) : nc(C);
}
var Vn = ac, oc = Sn, rc = Vn;
function lc(C, $) {
  return C && oc($, rc($), C);
}
var ic = lc;
function dc(C) {
  var $ = [];
  if (C != null)
    for (var a in Object(C))
      $.push(a);
  return $;
}
var cc = dc, sc = rn, uc = Qn, mc = cc, fc = Object.prototype, vc = fc.hasOwnProperty;
function pc(C) {
  if (!sc(C))
    return mc(C);
  var $ = uc(C), a = [];
  for (var t in C)
    t == "constructor" && ($ || !vc.call(C, t)) || a.push(t);
  return a;
}
var hc = pc, gc = bt, Ac = hc, yc = $t;
function xc(C) {
  return yc(C) ? gc(C, !0) : Ac(C);
}
var Yn = xc, Ec = Sn, Sc = Yn;
function Cc(C, $) {
  return C && Ec($, Sc($), C);
}
var Tc = Cc, pn = { exports: {} };
pn.exports;
(function(C, $) {
  var a = be, t = $ && !$.nodeType && $, e = t && !0 && C && !C.nodeType && C, n = e && e.exports === t, r = n ? a.Buffer : void 0, o = r ? r.allocUnsafe : void 0;
  function l(s, g) {
    if (g)
      return s.slice();
    var m = s.length, h = o ? o(m) : new s.constructor(m);
    return s.copy(h), h;
  }
  C.exports = l;
})(pn, pn.exports);
var Dc = pn.exports;
function Ic(C, $) {
  var a = -1, t = C.length;
  for ($ || ($ = Array(t)); ++a < t; )
    $[a] = C[a];
  return $;
}
var Pc = Ic;
function Rc(C, $) {
  for (var a = -1, t = C == null ? 0 : C.length, e = 0, n = []; ++a < t; ) {
    var r = C[a];
    $(r, a, C) && (n[e++] = r);
  }
  return n;
}
var Mc = Rc;
function Nc() {
  return [];
}
var Ft = Nc, bc = Mc, Bc = Ft, $c = Object.prototype, Fc = $c.propertyIsEnumerable, rt = Object.getOwnPropertySymbols, Oc = rt ? function(C) {
  return C == null ? [] : (C = Object(C), bc(rt(C), function($) {
    return Fc.call(C, $);
  }));
} : Bc, Gn = Oc, Lc = Sn, jc = Gn;
function Hc(C, $) {
  return Lc(C, jc(C), $);
}
var wc = Hc;
function zc(C, $) {
  for (var a = -1, t = $.length, e = C.length; ++a < t; )
    C[e + a] = $[a];
  return C;
}
var Ot = zc, Uc = Bt, Qc = Uc(Object.getPrototypeOf, Object), Lt = Qc, Vc = Ot, Yc = Lt, Gc = Gn, Kc = Ft, Jc = Object.getOwnPropertySymbols, Wc = Jc ? function(C) {
  for (var $ = []; C; )
    Vc($, Gc(C)), C = Yc(C);
  return $;
} : Kc, jt = Wc, Xc = Sn, Zc = jt;
function kc(C, $) {
  return Xc(C, Zc(C), $);
}
var qc = kc, _c = Ot, es = wn;
function ns(C, $, a) {
  var t = $(C);
  return es(C) ? t : _c(t, a(C));
}
var Ht = ns, ts = Ht, as = Gn, os = Vn;
function rs(C) {
  return ts(C, os, as);
}
var ls = rs, is = Ht, ds = jt, cs = Yn;
function ss(C) {
  return is(C, cs, ds);
}
var us = ss, ms = ze, fs = be, vs = ms(fs, "DataView"), ps = vs, hs = ze, gs = be, As = hs(gs, "Promise"), ys = As, xs = ze, Es = be, Ss = xs(Es, "Set"), Cs = Ss, Ts = ze, Ds = be, Is = Ts(Ds, "WeakMap"), Ps = Is, Pn = ps, Rn = Hn, Mn = ys, Nn = Cs, bn = Ps, wt = yn, _e = Dt, lt = "[object Map]", Rs = "[object Object]", it = "[object Promise]", dt = "[object Set]", ct = "[object WeakMap]", st = "[object DataView]", Ms = _e(Pn), Ns = _e(Rn), bs = _e(Mn), Bs = _e(Nn), $s = _e(bn), we = wt;
(Pn && we(new Pn(new ArrayBuffer(1))) != st || Rn && we(new Rn()) != lt || Mn && we(Mn.resolve()) != it || Nn && we(new Nn()) != dt || bn && we(new bn()) != ct) && (we = function(C) {
  var $ = wt(C), a = $ == Rs ? C.constructor : void 0, t = a ? _e(a) : "";
  if (t)
    switch (t) {
      case Ms:
        return st;
      case Ns:
        return lt;
      case bs:
        return it;
      case Bs:
        return dt;
      case $s:
        return ct;
    }
  return $;
});
var Kn = we, Fs = Object.prototype, Os = Fs.hasOwnProperty;
function Ls(C) {
  var $ = C.length, a = new C.constructor($);
  return $ && typeof C[0] == "string" && Os.call(C, "index") && (a.index = C.index, a.input = C.input), a;
}
var js = Ls, Hs = be, ws = Hs.Uint8Array, zs = ws, ut = zs;
function Us(C) {
  var $ = new C.constructor(C.byteLength);
  return new ut($).set(new ut(C)), $;
}
var Jn = Us, Qs = Jn;
function Vs(C, $) {
  var a = $ ? Qs(C.buffer) : C.buffer;
  return new C.constructor(a, C.byteOffset, C.byteLength);
}
var Ys = Vs, Gs = /\w*$/;
function Ks(C) {
  var $ = new C.constructor(C.source, Gs.exec(C));
  return $.lastIndex = C.lastIndex, $;
}
var Js = Ks, mt = jn, ft = mt ? mt.prototype : void 0, vt = ft ? ft.valueOf : void 0;
function Ws(C) {
  return vt ? Object(vt.call(C)) : {};
}
var Xs = Ws, Zs = Jn;
function ks(C, $) {
  var a = $ ? Zs(C.buffer) : C.buffer;
  return new C.constructor(a, C.byteOffset, C.length);
}
var qs = ks, _s = Jn, eu = Ys, nu = Js, tu = Xs, au = qs, ou = "[object Boolean]", ru = "[object Date]", lu = "[object Map]", iu = "[object Number]", du = "[object RegExp]", cu = "[object Set]", su = "[object String]", uu = "[object Symbol]", mu = "[object ArrayBuffer]", fu = "[object DataView]", vu = "[object Float32Array]", pu = "[object Float64Array]", hu = "[object Int8Array]", gu = "[object Int16Array]", Au = "[object Int32Array]", yu = "[object Uint8Array]", xu = "[object Uint8ClampedArray]", Eu = "[object Uint16Array]", Su = "[object Uint32Array]";
function Cu(C, $, a) {
  var t = C.constructor;
  switch ($) {
    case mu:
      return _s(C);
    case ou:
    case ru:
      return new t(+C);
    case fu:
      return eu(C, a);
    case vu:
    case pu:
    case hu:
    case gu:
    case Au:
    case yu:
    case xu:
    case Eu:
    case Su:
      return au(C, a);
    case lu:
      return new t();
    case iu:
    case su:
      return new t(C);
    case du:
      return nu(C);
    case cu:
      return new t();
    case uu:
      return tu(C);
  }
}
var Tu = Cu, Du = rn, pt = Object.create, Iu = /* @__PURE__ */ function() {
  function C() {
  }
  return function($) {
    if (!Du($))
      return {};
    if (pt)
      return pt($);
    C.prototype = $;
    var a = new C();
    return C.prototype = void 0, a;
  };
}(), Pu = Iu, Ru = Pu, Mu = Lt, Nu = Qn;
function bu(C) {
  return typeof C.constructor == "function" && !Nu(C) ? Ru(Mu(C)) : {};
}
var Bu = bu, $u = Kn, Fu = ln, Ou = "[object Map]";
function Lu(C) {
  return Fu(C) && $u(C) == Ou;
}
var ju = Lu, Hu = ju, wu = zn, ht = Un, gt = ht && ht.isMap, zu = gt ? wu(gt) : Hu, Uu = zu, Qu = Kn, Vu = ln, Yu = "[object Set]";
function Gu(C) {
  return Vu(C) && Qu(C) == Yu;
}
var Ku = Gu, Ju = Ku, Wu = zn, At = Un, yt = At && At.isSet, Xu = yt ? Wu(yt) : Ju, Zu = Xu, ku = fi, qu = pi, _u = Pt, em = ic, nm = Tc, tm = Dc, am = Pc, om = wc, rm = qc, lm = ls, im = us, dm = Kn, cm = js, sm = Tu, um = Bu, mm = wn, fm = Mt, vm = Uu, pm = rn, hm = Zu, gm = Vn, Am = Yn, ym = 1, xm = 2, Em = 4, zt = "[object Arguments]", Sm = "[object Array]", Cm = "[object Boolean]", Tm = "[object Date]", Dm = "[object Error]", Ut = "[object Function]", Im = "[object GeneratorFunction]", Pm = "[object Map]", Rm = "[object Number]", Qt = "[object Object]", Mm = "[object RegExp]", Nm = "[object Set]", bm = "[object String]", Bm = "[object Symbol]", $m = "[object WeakMap]", Fm = "[object ArrayBuffer]", Om = "[object DataView]", Lm = "[object Float32Array]", jm = "[object Float64Array]", Hm = "[object Int8Array]", wm = "[object Int16Array]", zm = "[object Int32Array]", Um = "[object Uint8Array]", Qm = "[object Uint8ClampedArray]", Vm = "[object Uint16Array]", Ym = "[object Uint32Array]", me = {};
me[zt] = me[Sm] = me[Fm] = me[Om] = me[Cm] = me[Tm] = me[Lm] = me[jm] = me[Hm] = me[wm] = me[zm] = me[Pm] = me[Rm] = me[Qt] = me[Mm] = me[Nm] = me[bm] = me[Bm] = me[Um] = me[Qm] = me[Vm] = me[Ym] = !0;
me[Dm] = me[Ut] = me[$m] = !1;
function mn(C, $, a, t, e, n) {
  var r, o = $ & ym, l = $ & xm, s = $ & Em;
  if (a && (r = e ? a(C, t, e, n) : a(C)), r !== void 0)
    return r;
  if (!pm(C))
    return C;
  var g = mm(C);
  if (g) {
    if (r = cm(C), !o)
      return am(C, r);
  } else {
    var m = dm(C), h = m == Ut || m == Im;
    if (fm(C))
      return tm(C, o);
    if (m == Qt || m == zt || h && !e) {
      if (r = l || h ? {} : um(C), !o)
        return l ? rm(C, nm(r, C)) : om(C, em(r, C));
    } else {
      if (!me[m])
        return e ? C : {};
      r = sm(C, m, o);
    }
  }
  n || (n = new ku());
  var c = n.get(C);
  if (c)
    return c;
  n.set(C, r), hm(C) ? C.forEach(function(d) {
    r.add(mn(d, $, a, d, C, n));
  }) : vm(C) && C.forEach(function(d, v) {
    r.set(v, mn(d, $, a, v, C, n));
  });
  var i = s ? l ? im : lm : l ? Am : gm, u = g ? void 0 : i(C);
  return qu(u || C, function(d, v) {
    u && (v = d, d = C[v]), _u(r, v, mn(d, $, a, v, C, n));
  }), r;
}
var Gm = mn, Km = Gm, Jm = 1, Wm = 4;
function Xm(C) {
  return Km(C, Jm | Wm);
}
var Zm = Xm;
const Bn = /* @__PURE__ */ xt(Zm);
var Vt = { exports: {} };
(function(C, $) {
  (function(t, e) {
    C.exports = e();
  })(window, function() {
    return (
      /******/
      function(a) {
        var t = {};
        function e(n) {
          if (t[n])
            return t[n].exports;
          var r = t[n] = {
            /******/
            i: n,
            /******/
            l: !1,
            /******/
            exports: {}
            /******/
          };
          return a[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports;
        }
        return e.m = a, e.c = t, e.d = function(n, r, o) {
          e.o(n, r) || Object.defineProperty(n, r, { enumerable: !0, get: o });
        }, e.r = function(n) {
          typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n, "__esModule", { value: !0 });
        }, e.t = function(n, r) {
          if (r & 1 && (n = e(n)), r & 8 || r & 4 && typeof n == "object" && n && n.__esModule) return n;
          var o = /* @__PURE__ */ Object.create(null);
          if (e.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: n }), r & 2 && typeof n != "string") for (var l in n) e.d(o, l, (function(s) {
            return n[s];
          }).bind(null, l));
          return o;
        }, e.n = function(n) {
          var r = n && n.__esModule ? (
            /******/
            function() {
              return n.default;
            }
          ) : (
            /******/
            function() {
              return n;
            }
          );
          return e.d(r, "a", r), r;
        }, e.o = function(n, r) {
          return Object.prototype.hasOwnProperty.call(n, r);
        }, e.p = "", e(e.s = 141);
      }([
        /* 0 */
        /***/
        function(a, t) {
          function e(n) {
            return n && n.__esModule ? n : {
              default: n
            };
          }
          a.exports = e;
        },
        /* 1 */
        /***/
        function(a, t, e) {
          a.exports = e(142);
        },
        /* 2 */
        /***/
        function(a, t, e) {
          e.r(t), e.d(t, "__extends", function() {
            return r;
          }), e.d(t, "__assign", function() {
            return o;
          }), e.d(t, "__rest", function() {
            return l;
          }), e.d(t, "__decorate", function() {
            return s;
          }), e.d(t, "__param", function() {
            return g;
          }), e.d(t, "__metadata", function() {
            return m;
          }), e.d(t, "__awaiter", function() {
            return h;
          }), e.d(t, "__generator", function() {
            return c;
          }), e.d(t, "__createBinding", function() {
            return i;
          }), e.d(t, "__exportStar", function() {
            return u;
          }), e.d(t, "__values", function() {
            return d;
          }), e.d(t, "__read", function() {
            return v;
          }), e.d(t, "__spread", function() {
            return f;
          }), e.d(t, "__spreadArrays", function() {
            return p;
          }), e.d(t, "__spreadArray", function() {
            return y;
          }), e.d(t, "__await", function() {
            return x;
          }), e.d(t, "__asyncGenerator", function() {
            return E;
          }), e.d(t, "__asyncDelegator", function() {
            return S;
          }), e.d(t, "__asyncValues", function() {
            return I;
          }), e.d(t, "__makeTemplateObject", function() {
            return P;
          }), e.d(t, "__importStar", function() {
            return A;
          }), e.d(t, "__importDefault", function() {
            return D;
          }), e.d(t, "__classPrivateFieldGet", function() {
            return R;
          }), e.d(t, "__classPrivateFieldSet", function() {
            return N;
          });
          /*! *****************************************************************************
          	Copyright (c) Microsoft Corporation.
          
          	Permission to use, copy, modify, and/or distribute this software for any
          	purpose with or without fee is hereby granted.
          
          	THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
          	REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
          	AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
          	INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
          	LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
          	OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
          	PERFORMANCE OF THIS SOFTWARE.
          	***************************************************************************** */
          var n = function(M, b) {
            return n = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(B, F) {
              B.__proto__ = F;
            } || function(B, F) {
              for (var j in F) Object.prototype.hasOwnProperty.call(F, j) && (B[j] = F[j]);
            }, n(M, b);
          };
          function r(M, b) {
            if (typeof b != "function" && b !== null)
              throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            n(M, b);
            function B() {
              this.constructor = M;
            }
            M.prototype = b === null ? Object.create(b) : (B.prototype = b.prototype, new B());
          }
          var o = function() {
            return o = Object.assign || function(b) {
              for (var B, F = 1, j = arguments.length; F < j; F++) {
                B = arguments[F];
                for (var O in B) Object.prototype.hasOwnProperty.call(B, O) && (b[O] = B[O]);
              }
              return b;
            }, o.apply(this, arguments);
          };
          function l(M, b) {
            var B = {};
            for (var F in M) Object.prototype.hasOwnProperty.call(M, F) && b.indexOf(F) < 0 && (B[F] = M[F]);
            if (M != null && typeof Object.getOwnPropertySymbols == "function")
              for (var j = 0, F = Object.getOwnPropertySymbols(M); j < F.length; j++)
                b.indexOf(F[j]) < 0 && Object.prototype.propertyIsEnumerable.call(M, F[j]) && (B[F[j]] = M[F[j]]);
            return B;
          }
          function s(M, b, B, F) {
            var j = arguments.length, O = j < 3 ? b : F === null ? F = Object.getOwnPropertyDescriptor(b, B) : F, L;
            if (typeof Reflect == "object" && typeof Reflect.decorate == "function") O = Reflect.decorate(M, b, B, F);
            else for (var H = M.length - 1; H >= 0; H--) (L = M[H]) && (O = (j < 3 ? L(O) : j > 3 ? L(b, B, O) : L(b, B)) || O);
            return j > 3 && O && Object.defineProperty(b, B, O), O;
          }
          function g(M, b) {
            return function(B, F) {
              b(B, F, M);
            };
          }
          function m(M, b) {
            if (typeof Reflect == "object" && typeof Reflect.metadata == "function") return Reflect.metadata(M, b);
          }
          function h(M, b, B, F) {
            function j(O) {
              return O instanceof B ? O : new B(function(L) {
                L(O);
              });
            }
            return new (B || (B = Promise))(function(O, L) {
              function H(Z) {
                try {
                  U(F.next(Z));
                } catch (W) {
                  L(W);
                }
              }
              function J(Z) {
                try {
                  U(F.throw(Z));
                } catch (W) {
                  L(W);
                }
              }
              function U(Z) {
                Z.done ? O(Z.value) : j(Z.value).then(H, J);
              }
              U((F = F.apply(M, b || [])).next());
            });
          }
          function c(M, b) {
            var B = { label: 0, sent: function() {
              if (O[0] & 1) throw O[1];
              return O[1];
            }, trys: [], ops: [] }, F, j, O, L;
            return L = { next: H(0), throw: H(1), return: H(2) }, typeof Symbol == "function" && (L[Symbol.iterator] = function() {
              return this;
            }), L;
            function H(U) {
              return function(Z) {
                return J([U, Z]);
              };
            }
            function J(U) {
              if (F) throw new TypeError("Generator is already executing.");
              for (; B; ) try {
                if (F = 1, j && (O = U[0] & 2 ? j.return : U[0] ? j.throw || ((O = j.return) && O.call(j), 0) : j.next) && !(O = O.call(j, U[1])).done) return O;
                switch (j = 0, O && (U = [U[0] & 2, O.value]), U[0]) {
                  case 0:
                  case 1:
                    O = U;
                    break;
                  case 4:
                    return B.label++, { value: U[1], done: !1 };
                  case 5:
                    B.label++, j = U[1], U = [0];
                    continue;
                  case 7:
                    U = B.ops.pop(), B.trys.pop();
                    continue;
                  default:
                    if (O = B.trys, !(O = O.length > 0 && O[O.length - 1]) && (U[0] === 6 || U[0] === 2)) {
                      B = 0;
                      continue;
                    }
                    if (U[0] === 3 && (!O || U[1] > O[0] && U[1] < O[3])) {
                      B.label = U[1];
                      break;
                    }
                    if (U[0] === 6 && B.label < O[1]) {
                      B.label = O[1], O = U;
                      break;
                    }
                    if (O && B.label < O[2]) {
                      B.label = O[2], B.ops.push(U);
                      break;
                    }
                    O[2] && B.ops.pop(), B.trys.pop();
                    continue;
                }
                U = b.call(M, B);
              } catch (Z) {
                U = [6, Z], j = 0;
              } finally {
                F = O = 0;
              }
              if (U[0] & 5) throw U[1];
              return { value: U[0] ? U[1] : void 0, done: !0 };
            }
          }
          var i = Object.create ? function(M, b, B, F) {
            F === void 0 && (F = B), Object.defineProperty(M, F, { enumerable: !0, get: function() {
              return b[B];
            } });
          } : function(M, b, B, F) {
            F === void 0 && (F = B), M[F] = b[B];
          };
          function u(M, b) {
            for (var B in M) B !== "default" && !Object.prototype.hasOwnProperty.call(b, B) && i(b, M, B);
          }
          function d(M) {
            var b = typeof Symbol == "function" && Symbol.iterator, B = b && M[b], F = 0;
            if (B) return B.call(M);
            if (M && typeof M.length == "number") return {
              next: function() {
                return M && F >= M.length && (M = void 0), { value: M && M[F++], done: !M };
              }
            };
            throw new TypeError(b ? "Object is not iterable." : "Symbol.iterator is not defined.");
          }
          function v(M, b) {
            var B = typeof Symbol == "function" && M[Symbol.iterator];
            if (!B) return M;
            var F = B.call(M), j, O = [], L;
            try {
              for (; (b === void 0 || b-- > 0) && !(j = F.next()).done; ) O.push(j.value);
            } catch (H) {
              L = { error: H };
            } finally {
              try {
                j && !j.done && (B = F.return) && B.call(F);
              } finally {
                if (L) throw L.error;
              }
            }
            return O;
          }
          function f() {
            for (var M = [], b = 0; b < arguments.length; b++)
              M = M.concat(v(arguments[b]));
            return M;
          }
          function p() {
            for (var M = 0, b = 0, B = arguments.length; b < B; b++) M += arguments[b].length;
            for (var F = Array(M), j = 0, b = 0; b < B; b++)
              for (var O = arguments[b], L = 0, H = O.length; L < H; L++, j++)
                F[j] = O[L];
            return F;
          }
          function y(M, b) {
            for (var B = 0, F = b.length, j = M.length; B < F; B++, j++)
              M[j] = b[B];
            return M;
          }
          function x(M) {
            return this instanceof x ? (this.v = M, this) : new x(M);
          }
          function E(M, b, B) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var F = B.apply(M, b || []), j, O = [];
            return j = {}, L("next"), L("throw"), L("return"), j[Symbol.asyncIterator] = function() {
              return this;
            }, j;
            function L(Q) {
              F[Q] && (j[Q] = function(Y) {
                return new Promise(function(X, ee) {
                  O.push([Q, Y, X, ee]) > 1 || H(Q, Y);
                });
              });
            }
            function H(Q, Y) {
              try {
                J(F[Q](Y));
              } catch (X) {
                W(O[0][3], X);
              }
            }
            function J(Q) {
              Q.value instanceof x ? Promise.resolve(Q.value.v).then(U, Z) : W(O[0][2], Q);
            }
            function U(Q) {
              H("next", Q);
            }
            function Z(Q) {
              H("throw", Q);
            }
            function W(Q, Y) {
              Q(Y), O.shift(), O.length && H(O[0][0], O[0][1]);
            }
          }
          function S(M) {
            var b, B;
            return b = {}, F("next"), F("throw", function(j) {
              throw j;
            }), F("return"), b[Symbol.iterator] = function() {
              return this;
            }, b;
            function F(j, O) {
              b[j] = M[j] ? function(L) {
                return (B = !B) ? { value: x(M[j](L)), done: j === "return" } : O ? O(L) : L;
              } : O;
            }
          }
          function I(M) {
            if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
            var b = M[Symbol.asyncIterator], B;
            return b ? b.call(M) : (M = typeof d == "function" ? d(M) : M[Symbol.iterator](), B = {}, F("next"), F("throw"), F("return"), B[Symbol.asyncIterator] = function() {
              return this;
            }, B);
            function F(O) {
              B[O] = M[O] && function(L) {
                return new Promise(function(H, J) {
                  L = M[O](L), j(H, J, L.done, L.value);
                });
              };
            }
            function j(O, L, H, J) {
              Promise.resolve(J).then(function(U) {
                O({ value: U, done: H });
              }, L);
            }
          }
          function P(M, b) {
            return Object.defineProperty ? Object.defineProperty(M, "raw", { value: b }) : M.raw = b, M;
          }
          var T = Object.create ? function(M, b) {
            Object.defineProperty(M, "default", { enumerable: !0, value: b });
          } : function(M, b) {
            M.default = b;
          };
          function A(M) {
            if (M && M.__esModule) return M;
            var b = {};
            if (M != null) for (var B in M) B !== "default" && Object.prototype.hasOwnProperty.call(M, B) && i(b, M, B);
            return T(b, M), b;
          }
          function D(M) {
            return M && M.__esModule ? M : { default: M };
          }
          function R(M, b) {
            if (!b.has(M))
              throw new TypeError("attempted to get private field on non-instance");
            return b.get(M);
          }
          function N(M, b, B) {
            if (!b.has(M))
              throw new TypeError("attempted to set private field on non-instance");
            return b.set(M, B), B;
          }
        },
        /* 3 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(89)), l = n(e(4)), s = n(e(26)), g = n(e(17)), m = n(e(121)), h = n(e(27)), c = n(e(91)), i = n(e(70)), u = n(e(28)), d = n(e(57));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.DomElement = void 0;
          var v = e(2), f = e(6), p = [];
          function y(T) {
            var A = document.createElement("div");
            A.innerHTML = T;
            var D = A.children;
            return f.toArray(D);
          }
          function x(T) {
            return T ? T instanceof HTMLCollection || T instanceof NodeList : !1;
          }
          function E(T) {
            var A = document.querySelectorAll(T);
            return f.toArray(A);
          }
          function S(T) {
            var A = [], D = [];
            return (0, o.default)(T) ? A = T : A = T.split(";"), (0, l.default)(A).call(A, function(R) {
              var N, M = (0, s.default)(N = R.split(":")).call(N, function(b) {
                return (0, g.default)(b).call(b);
              });
              M.length === 2 && D.push(M[0] + ":" + M[1]);
            }), D;
          }
          var I = (
            /** @class */
            function() {
              function T(A) {
                if (this.elems = [], this.length = this.elems.length, this.dataSource = new m.default(), !!A) {
                  if (A instanceof T)
                    return A;
                  var D = [], R = A instanceof Node ? A.nodeType : -1;
                  if (this.selector = A, R === 1 || R === 9)
                    D = [A];
                  else if (x(A))
                    D = f.toArray(A);
                  else if (A instanceof Array)
                    D = A;
                  else if (typeof A == "string") {
                    var N, M = (0, g.default)(N = A.replace(`/
/mg`, "")).call(N);
                    (0, h.default)(M).call(M, "<") === 0 ? D = y(M) : D = E(M);
                  }
                  var b = D.length;
                  if (!b)
                    return this;
                  for (var B = 0; B < b; B++)
                    this.elems.push(D[B]);
                  this.length = b;
                }
              }
              return (0, r.default)(T.prototype, "id", {
                /**
                 * 获取元素 id
                 */
                get: function() {
                  return this.elems[0].id;
                },
                enumerable: !1,
                configurable: !0
              }), T.prototype.forEach = function(A) {
                for (var D = 0; D < this.length; D++) {
                  var R = this.elems[D], N = A.call(R, R, D);
                  if (N === !1)
                    break;
                }
                return this;
              }, T.prototype.clone = function(A) {
                var D;
                A === void 0 && (A = !1);
                var R = [];
                return (0, l.default)(D = this.elems).call(D, function(N) {
                  R.push(N.cloneNode(!!A));
                }), P(R);
              }, T.prototype.get = function(A) {
                A === void 0 && (A = 0);
                var D = this.length;
                return A >= D && (A = A % D), P(this.elems[A]);
              }, T.prototype.first = function() {
                return this.get(0);
              }, T.prototype.last = function() {
                var A = this.length;
                return this.get(A - 1);
              }, T.prototype.on = function(A, D, R) {
                var N;
                return A ? (typeof D == "function" && (R = D, D = ""), (0, l.default)(N = this).call(N, function(M) {
                  if (!D) {
                    M.addEventListener(A, R);
                    return;
                  }
                  var b = function(F) {
                    var j = F.target;
                    j.matches(D) && R.call(j, F);
                  };
                  M.addEventListener(A, b), p.push({
                    elem: M,
                    selector: D,
                    fn: R,
                    agentFn: b
                  });
                })) : this;
              }, T.prototype.off = function(A, D, R) {
                var N;
                return A ? (typeof D == "function" && (R = D, D = ""), (0, l.default)(N = this).call(N, function(M) {
                  if (D) {
                    for (var b = -1, B = 0; B < p.length; B++) {
                      var F = p[B];
                      if (F.selector === D && F.fn === R && F.elem === M) {
                        b = B;
                        break;
                      }
                    }
                    if (b !== -1) {
                      var j = (0, c.default)(p).call(p, b, 1)[0].agentFn;
                      M.removeEventListener(A, j);
                    }
                  } else
                    M.removeEventListener(A, R);
                })) : this;
              }, T.prototype.attr = function(A, D) {
                var R;
                return D == null ? this.elems[0].getAttribute(A) || "" : (0, l.default)(R = this).call(R, function(N) {
                  N.setAttribute(A, D);
                });
              }, T.prototype.removeAttr = function(A) {
                var D;
                (0, l.default)(D = this).call(D, function(R) {
                  R.removeAttribute(A);
                });
              }, T.prototype.addClass = function(A) {
                var D;
                return A ? (0, l.default)(D = this).call(D, function(R) {
                  if (R.className) {
                    var N = R.className.split(/\s/);
                    N = (0, i.default)(N).call(N, function(M) {
                      return !!(0, g.default)(M).call(M);
                    }), (0, h.default)(N).call(N, A) < 0 && N.push(A), R.className = N.join(" ");
                  } else
                    R.className = A;
                }) : this;
              }, T.prototype.removeClass = function(A) {
                var D;
                return A ? (0, l.default)(D = this).call(D, function(R) {
                  if (R.className) {
                    var N = R.className.split(/\s/);
                    N = (0, i.default)(N).call(N, function(M) {
                      return M = (0, g.default)(M).call(M), !(!M || M === A);
                    }), R.className = N.join(" ");
                  }
                }) : this;
              }, T.prototype.hasClass = function(A) {
                if (!A)
                  return !1;
                var D = this.elems[0];
                if (!D.className)
                  return !1;
                var R = D.className.split(/\s/);
                return (0, u.default)(R).call(R, A);
              }, T.prototype.css = function(A, D) {
                var R, N;
                return D == "" ? N = "" : N = A + ":" + D + ";", (0, l.default)(R = this).call(R, function(M) {
                  var b, B = (0, g.default)(b = M.getAttribute("style") || "").call(b);
                  if (B) {
                    var F = S(B);
                    F = (0, s.default)(F).call(F, function(j) {
                      return (0, h.default)(j).call(j, A) === 0 ? N : j;
                    }), N != "" && (0, h.default)(F).call(F, N) < 0 && F.push(N), N == "" && (F = S(F)), M.setAttribute("style", F.join("; "));
                  } else
                    M.setAttribute("style", N);
                });
              }, T.prototype.getBoundingClientRect = function() {
                var A = this.elems[0];
                return A.getBoundingClientRect();
              }, T.prototype.show = function() {
                return this.css("display", "block");
              }, T.prototype.hide = function() {
                return this.css("display", "none");
              }, T.prototype.children = function() {
                var A = this.elems[0];
                return A ? P(A.children) : null;
              }, T.prototype.childNodes = function() {
                var A = this.elems[0];
                return A ? P(A.childNodes) : null;
              }, T.prototype.replaceChildAll = function(A) {
                for (var D = this.getNode(), R = this.elems[0]; R.hasChildNodes(); )
                  D.firstChild && R.removeChild(D.firstChild);
                this.append(A);
              }, T.prototype.append = function(A) {
                var D;
                return (0, l.default)(D = this).call(D, function(R) {
                  (0, l.default)(A).call(A, function(N) {
                    R.appendChild(N);
                  });
                });
              }, T.prototype.remove = function() {
                var A;
                return (0, l.default)(A = this).call(A, function(D) {
                  if (D.remove)
                    D.remove();
                  else {
                    var R = D.parentElement;
                    R && R.removeChild(D);
                  }
                });
              }, T.prototype.isContain = function(A) {
                var D = this.elems[0], R = A.elems[0];
                return D.contains(R);
              }, T.prototype.getNodeName = function() {
                var A = this.elems[0];
                return A.nodeName;
              }, T.prototype.getNode = function(A) {
                A === void 0 && (A = 0);
                var D;
                return D = this.elems[A], D;
              }, T.prototype.find = function(A) {
                var D = this.elems[0];
                return P(D.querySelectorAll(A));
              }, T.prototype.text = function(A) {
                if (A) {
                  var R;
                  return (0, l.default)(R = this).call(R, function(N) {
                    N.innerHTML = A;
                  });
                } else {
                  var D = this.elems[0];
                  return D.innerHTML.replace(/<[^>]+>/g, function() {
                    return "";
                  });
                }
              }, T.prototype.html = function(A) {
                var D = this.elems[0];
                return A ? (D.innerHTML = A, this) : D.innerHTML;
              }, T.prototype.val = function() {
                var A, D = this.elems[0];
                return (0, g.default)(A = D.value).call(A);
              }, T.prototype.focus = function() {
                var A;
                return (0, l.default)(A = this).call(A, function(D) {
                  D.focus();
                });
              }, T.prototype.prev = function() {
                var A = this.elems[0];
                return P(A.previousElementSibling);
              }, T.prototype.next = function() {
                var A = this.elems[0];
                return P(A.nextElementSibling);
              }, T.prototype.getNextSibling = function() {
                var A = this.elems[0];
                return P(A.nextSibling);
              }, T.prototype.parent = function() {
                var A = this.elems[0];
                return P(A.parentElement);
              }, T.prototype.parentUntil = function(A, D) {
                var R = D || this.elems[0];
                if (R.nodeName === "BODY")
                  return null;
                var N = R.parentElement;
                return N === null ? null : N.matches(A) ? P(N) : this.parentUntil(A, N);
              }, T.prototype.parentUntilEditor = function(A, D, R) {
                var N = R || this.elems[0];
                if (P(N).equal(D.$textContainerElem) || P(N).equal(D.$toolbarElem))
                  return null;
                var M = N.parentElement;
                return M === null ? null : M.matches(A) ? P(M) : this.parentUntilEditor(A, D, M);
              }, T.prototype.equal = function(A) {
                return A instanceof T ? this.elems[0] === A.elems[0] : A instanceof HTMLElement ? this.elems[0] === A : !1;
              }, T.prototype.insertBefore = function(A) {
                var D, R = P(A), N = R.elems[0];
                return N ? (0, l.default)(D = this).call(D, function(M) {
                  var b = N.parentNode;
                  b == null || b.insertBefore(M, N);
                }) : this;
              }, T.prototype.insertAfter = function(A) {
                var D, R = P(A), N = R.elems[0], M = N && N.nextSibling;
                return N ? (0, l.default)(D = this).call(D, function(b) {
                  var B = N.parentNode;
                  M ? B.insertBefore(b, M) : B.appendChild(b);
                }) : this;
              }, T.prototype.data = function(A, D) {
                if (D != null)
                  this.dataSource.set(A, D);
                else
                  return this.dataSource.get(A);
              }, T.prototype.getNodeTop = function(A) {
                if (this.length < 1)
                  return this;
                var D = this.parent();
                return A.$textElem.equal(this) || A.$textElem.equal(D) ? this : (D.prior = this, D.getNodeTop(A));
              }, T.prototype.getOffsetData = function() {
                var A = this.elems[0];
                return {
                  top: A.offsetTop,
                  left: A.offsetLeft,
                  width: A.offsetWidth,
                  height: A.offsetHeight,
                  parent: A.offsetParent
                };
              }, T.prototype.scrollTop = function(A) {
                var D = this.elems[0];
                D.scrollTo({
                  top: A
                });
              }, T;
            }()
          );
          t.DomElement = I;
          function P() {
            for (var T = [], A = 0; A < arguments.length; A++)
              T[A] = arguments[A];
            return new ((0, d.default)(I).apply(I, v.__spreadArrays([void 0], T)))();
          }
          t.default = P;
        },
        /* 4 */
        /***/
        function(a, t, e) {
          a.exports = e(180);
        },
        /* 5 */
        /***/
        function(a, t, e) {
          var n = e(8), r = e(71).f, o = e(101), l = e(9), s = e(40), g = e(19), m = e(16), h = function(c) {
            var i = function(u, d, v) {
              if (this instanceof c) {
                switch (arguments.length) {
                  case 0:
                    return new c();
                  case 1:
                    return new c(u);
                  case 2:
                    return new c(u, d);
                }
                return new c(u, d, v);
              }
              return c.apply(this, arguments);
            };
            return i.prototype = c.prototype, i;
          };
          a.exports = function(c, i) {
            var u = c.target, d = c.global, v = c.stat, f = c.proto, p = d ? n : v ? n[u] : (n[u] || {}).prototype, y = d ? l : l[u] || (l[u] = {}), x = y.prototype, E, S, I, P, T, A, D, R, N;
            for (P in i)
              E = o(d ? P : u + (v ? "." : "#") + P, c.forced), S = !E && p && m(p, P), A = y[P], S && (c.noTargetGet ? (N = r(p, P), D = N && N.value) : D = p[P]), T = S && D ? D : i[P], !(S && typeof A == typeof T) && (c.bind && S ? R = s(T, n) : c.wrap && S ? R = h(T) : f && typeof T == "function" ? R = s(Function.call, T) : R = T, (c.sham || T && T.sham || A && A.sham) && g(R, "sham", !0), y[P] = R, f && (I = u + "Prototype", m(l, I) || g(l, I, {}), l[I][P] = T, c.real && x && !x[P] && g(x, P, T)));
          };
        },
        /* 6 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(92)), o = n(e(1)), l = n(e(256)), s = n(e(45)), g = n(e(46)), m = n(e(89)), h = n(e(26));
          (0, o.default)(t, "__esModule", {
            value: !0
          }), t.hexToRgb = t.getRandomCode = t.toArray = t.deepClone = t.isFunction = t.debounce = t.throttle = t.arrForEach = t.forEach = t.replaceSpecialSymbol = t.replaceHtmlSymbol = t.getRandom = t.UA = void 0;
          var c = e(2), i = (
            /** @class */
            function() {
              function A() {
                this._ua = navigator.userAgent;
                var D = this._ua.match(/(Edge?)\/(\d+)/);
                this.isOldEdge = !!(D && D[1] == "Edge" && (0, l.default)(D[2]) < 19), this.isFirefox = !!(/Firefox\/\d+/.test(this._ua) && !/Seamonkey\/\d+/.test(this._ua));
              }
              return A.prototype.isIE = function() {
                return "ActiveXObject" in window;
              }, A.prototype.isWebkit = function() {
                return /webkit/i.test(this._ua);
              }, A;
            }()
          );
          t.UA = new i();
          function u(A) {
            var D;
            return A === void 0 && (A = ""), A + (0, s.default)(D = Math.random().toString()).call(D, 2);
          }
          t.getRandom = u;
          function d(A) {
            return A.replace(/</gm, "&lt;").replace(/>/gm, "&gt;").replace(/"/gm, "&quot;").replace(/(\r\n|\r|\n)/g, "<br/>");
          }
          t.replaceHtmlSymbol = d;
          function v(A) {
            return A.replace(/&lt;/gm, "<").replace(/&gt;/gm, ">").replace(/&quot;/gm, '"');
          }
          t.replaceSpecialSymbol = v;
          function f(A, D) {
            for (var R in A)
              if (Object.prototype.hasOwnProperty.call(A, R)) {
                var N = D(R, A[R]);
                if (N === !1)
                  break;
              }
          }
          t.forEach = f;
          function p(A, D) {
            var R, N, M, b = A.length || 0;
            for (R = 0; R < b && (N = A[R], M = D.call(A, N, R), M !== !1); R++)
              ;
          }
          t.arrForEach = p;
          function y(A, D) {
            D === void 0 && (D = 200);
            var R = !1;
            return function() {
              for (var N = this, M = [], b = 0; b < arguments.length; b++)
                M[b] = arguments[b];
              R || (R = !0, (0, g.default)(function() {
                R = !1, A.call.apply(A, c.__spreadArrays([N], M));
              }, D));
            };
          }
          t.throttle = y;
          function x(A, D) {
            D === void 0 && (D = 200);
            var R = 0;
            return function() {
              for (var N = this, M = [], b = 0; b < arguments.length; b++)
                M[b] = arguments[b];
              R && window.clearTimeout(R), R = (0, g.default)(function() {
                R = 0, A.call.apply(A, c.__spreadArrays([N], M));
              }, D);
            };
          }
          t.debounce = x;
          function E(A) {
            return typeof A == "function";
          }
          t.isFunction = E;
          function S(A) {
            if ((0, r.default)(A) !== "object" || typeof A == "function" || A === null)
              return A;
            var D;
            (0, m.default)(A) && (D = []), (0, m.default)(A) || (D = {});
            for (var R in A)
              Object.prototype.hasOwnProperty.call(A, R) && (D[R] = S(A[R]));
            return D;
          }
          t.deepClone = S;
          function I(A) {
            return (0, s.default)(Array.prototype).call(A);
          }
          t.toArray = I;
          function P() {
            var A;
            return (0, s.default)(A = Math.random().toString(36)).call(A, -5);
          }
          t.getRandomCode = P;
          function T(A) {
            var D = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(A);
            if (D == null) return null;
            var R = (0, h.default)(D).call(D, function(B) {
              return (0, l.default)(B, 16);
            }), N = R[1], M = R[2], b = R[3];
            return "rgb(" + N + ", " + M + ", " + b + ")";
          }
          t.hexToRgb = T;
        },
        /* 7 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.EMPTY_P_REGEX = t.EMPTY_P_LAST_REGEX = t.EMPTY_P = t.urlRegex = t.EMPTY_FN = void 0;
          function o() {
          }
          t.EMPTY_FN = o, t.urlRegex = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])?/g, t.EMPTY_P = '<p data-we-empty-p=""><br></p>', t.EMPTY_P_LAST_REGEX = /<p data-we-empty-p=""><br\/?><\/p>$/gim, t.EMPTY_P_REGEX = /<p data-we-empty-p="">/gim;
        },
        /* 8 */
        /***/
        function(a, t, e) {
          (function(n) {
            var r = function(o) {
              return o && o.Math == Math && o;
            };
            a.exports = // eslint-disable-next-line no-undef
            r(typeof globalThis == "object" && globalThis) || r(typeof window == "object" && window) || r(typeof self == "object" && self) || r(typeof n == "object" && n) || // eslint-disable-next-line no-new-func
            Function("return this")();
          }).call(this, e(145));
        },
        /* 9 */
        /***/
        function(a, t) {
          a.exports = {};
        },
        /* 10 */
        /***/
        function(a, t, e) {
          var n = e(8), r = e(74), o = e(16), l = e(64), s = e(76), g = e(106), m = r("wks"), h = n.Symbol, c = g ? h : h && h.withoutSetter || l;
          a.exports = function(i) {
            return o(m, i) || (s && o(h, i) ? m[i] = h[i] : m[i] = c("Symbol." + i)), m[i];
          };
        },
        /* 11 */
        /***/
        function(a, t) {
          a.exports = function(e) {
            try {
              return !!e();
            } catch {
              return !0;
            }
          };
        },
        /* 12 */
        /***/
        function(a, t, e) {
          var n = e(9), r = e(16), o = e(93), l = e(18).f;
          a.exports = function(s) {
            var g = n.Symbol || (n.Symbol = {});
            r(g, s) || l(g, s, {
              value: o.f(s)
            });
          };
        },
        /* 13 */
        /***/
        function(a, t) {
          a.exports = function(e) {
            return typeof e == "object" ? e !== null : typeof e == "function";
          };
        },
        /* 14 */
        /***/
        function(a, t, e) {
          var n = e(11);
          a.exports = !n(function() {
            return Object.defineProperty({}, 1, { get: function() {
              return 7;
            } })[1] != 7;
          });
        },
        /* 15 */
        /***/
        function(a, t, e) {
          var n = e(9);
          a.exports = function(r) {
            return n[r + "Prototype"];
          };
        },
        /* 16 */
        /***/
        function(a, t) {
          var e = {}.hasOwnProperty;
          a.exports = function(n, r) {
            return e.call(n, r);
          };
        },
        /* 17 */
        /***/
        function(a, t, e) {
          a.exports = e(192);
        },
        /* 18 */
        /***/
        function(a, t, e) {
          var n = e(14), r = e(100), o = e(25), l = e(60), s = Object.defineProperty;
          t.f = n ? s : function(m, h, c) {
            if (o(m), h = l(h, !0), o(c), r) try {
              return s(m, h, c);
            } catch {
            }
            if ("get" in c || "set" in c) throw TypeError("Accessors not supported");
            return "value" in c && (m[h] = c.value), m;
          };
        },
        /* 19 */
        /***/
        function(a, t, e) {
          var n = e(14), r = e(18), o = e(48);
          a.exports = n ? function(l, s, g) {
            return r.f(l, s, o(1, g));
          } : function(l, s, g) {
            return l[s] = g, l;
          };
        },
        /* 20 */
        /***/
        function(a, t, e) {
          var n = /* @__PURE__ */ function() {
            var p;
            return function() {
              return typeof p > "u" && (p = !!(window && document && document.all && !window.atob)), p;
            };
          }(), r = /* @__PURE__ */ function() {
            var p = {};
            return function(x) {
              if (typeof p[x] > "u") {
                var E = document.querySelector(x);
                if (window.HTMLIFrameElement && E instanceof window.HTMLIFrameElement)
                  try {
                    E = E.contentDocument.head;
                  } catch {
                    E = null;
                  }
                p[x] = E;
              }
              return p[x];
            };
          }(), o = [];
          function l(f) {
            for (var p = -1, y = 0; y < o.length; y++)
              if (o[y].identifier === f) {
                p = y;
                break;
              }
            return p;
          }
          function s(f, p) {
            for (var y = {}, x = [], E = 0; E < f.length; E++) {
              var S = f[E], I = p.base ? S[0] + p.base : S[0], P = y[I] || 0, T = "".concat(I, " ").concat(P);
              y[I] = P + 1;
              var A = l(T), D = {
                css: S[1],
                media: S[2],
                sourceMap: S[3]
              };
              A !== -1 ? (o[A].references++, o[A].updater(D)) : o.push({
                identifier: T,
                updater: v(D, p),
                references: 1
              }), x.push(T);
            }
            return x;
          }
          function g(f) {
            var p = document.createElement("style"), y = f.attributes || {};
            if (typeof y.nonce > "u") {
              var x = e.nc;
              x && (y.nonce = x);
            }
            if (Object.keys(y).forEach(function(S) {
              p.setAttribute(S, y[S]);
            }), typeof f.insert == "function")
              f.insert(p);
            else {
              var E = r(f.insert || "head");
              if (!E)
                throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
              E.appendChild(p);
            }
            return p;
          }
          function m(f) {
            if (f.parentNode === null)
              return !1;
            f.parentNode.removeChild(f);
          }
          var h = /* @__PURE__ */ function() {
            var p = [];
            return function(x, E) {
              return p[x] = E, p.filter(Boolean).join(`
`);
            };
          }();
          function c(f, p, y, x) {
            var E = y ? "" : x.media ? "@media ".concat(x.media, " {").concat(x.css, "}") : x.css;
            if (f.styleSheet)
              f.styleSheet.cssText = h(p, E);
            else {
              var S = document.createTextNode(E), I = f.childNodes;
              I[p] && f.removeChild(I[p]), I.length ? f.insertBefore(S, I[p]) : f.appendChild(S);
            }
          }
          function i(f, p, y) {
            var x = y.css, E = y.media, S = y.sourceMap;
            if (E ? f.setAttribute("media", E) : f.removeAttribute("media"), S && typeof btoa < "u" && (x += `
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(S)))), " */")), f.styleSheet)
              f.styleSheet.cssText = x;
            else {
              for (; f.firstChild; )
                f.removeChild(f.firstChild);
              f.appendChild(document.createTextNode(x));
            }
          }
          var u = null, d = 0;
          function v(f, p) {
            var y, x, E;
            if (p.singleton) {
              var S = d++;
              y = u || (u = g(p)), x = c.bind(null, y, S, !1), E = c.bind(null, y, S, !0);
            } else
              y = g(p), x = i.bind(null, y, p), E = function() {
                m(y);
              };
            return x(f), function(P) {
              if (P) {
                if (P.css === f.css && P.media === f.media && P.sourceMap === f.sourceMap)
                  return;
                x(f = P);
              } else
                E();
            };
          }
          a.exports = function(f, p) {
            p = p || {}, !p.singleton && typeof p.singleton != "boolean" && (p.singleton = n()), f = f || [];
            var y = s(f, p);
            return function(E) {
              if (E = E || [], Object.prototype.toString.call(E) === "[object Array]") {
                for (var S = 0; S < y.length; S++) {
                  var I = y[S], P = l(I);
                  o[P].references--;
                }
                for (var T = s(E, p), A = 0; A < y.length; A++) {
                  var D = y[A], R = l(D);
                  o[R].references === 0 && (o[R].updater(), o.splice(R, 1));
                }
                y = T;
              }
            };
          };
        },
        /* 21 */
        /***/
        function(a, t, e) {
          a.exports = function(o) {
            var l = [];
            return l.toString = function() {
              return this.map(function(g) {
                var m = n(g, o);
                return g[2] ? "@media ".concat(g[2], " {").concat(m, "}") : m;
              }).join("");
            }, l.i = function(s, g, m) {
              typeof s == "string" && (s = [[null, s, ""]]);
              var h = {};
              if (m)
                for (var c = 0; c < this.length; c++) {
                  var i = this[c][0];
                  i != null && (h[i] = !0);
                }
              for (var u = 0; u < s.length; u++) {
                var d = [].concat(s[u]);
                m && h[d[0]] || (g && (d[2] ? d[2] = "".concat(g, " and ").concat(d[2]) : d[2] = g), l.push(d));
              }
            }, l;
          };
          function n(o, l) {
            var s = o[1] || "", g = o[3];
            if (!g)
              return s;
            if (l && typeof btoa == "function") {
              var m = r(g), h = g.sources.map(function(c) {
                return "/*# sourceURL=".concat(g.sourceRoot || "").concat(c, " */");
              });
              return [s].concat(h).concat([m]).join(`
`);
            }
            return [s].join(`
`);
          }
          function r(o) {
            var l = btoa(unescape(encodeURIComponent(JSON.stringify(o)))), s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l);
            return "/*# ".concat(s, " */");
          }
        },
        /* 22 */
        /***/
        function(a, t, e) {
          var n = e(14), r = e(11), o = e(16), l = Object.defineProperty, s = {}, g = function(m) {
            throw m;
          };
          a.exports = function(m, h) {
            if (o(s, m)) return s[m];
            h || (h = {});
            var c = [][m], i = o(h, "ACCESSORS") ? h.ACCESSORS : !1, u = o(h, 0) ? h[0] : g, d = o(h, 1) ? h[1] : void 0;
            return s[m] = !!c && !r(function() {
              if (i && !n) return !0;
              var v = { length: -1 };
              i ? l(v, 1, { enumerable: !0, get: g }) : v[1] = 1, c.call(v, u, d);
            });
          };
        },
        /* 23 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(95)), s = (
            /** @class */
            function(g) {
              o.__extends(m, g);
              function m(h, c) {
                return g.call(this, h, c) || this;
              }
              return m;
            }(l.default)
          );
          t.default = s;
        },
        /* 24 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4)), l = n(e(46));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var s = e(2), g = s.__importDefault(e(3)), m = s.__importDefault(e(95)), h = s.__importDefault(e(134)), c = (
            /** @class */
            function(i) {
              s.__extends(u, i);
              function u(d, v, f) {
                var p = i.call(this, d, v) || this;
                f.title = v.i18next.t("menus.dropListMenu." + f.title);
                var y = v.config.lang === "zh-CN" ? "" : "w-e-drop-list-tl";
                if (y !== "" && f.type === "list") {
                  var x;
                  (0, o.default)(x = f.list).call(x, function(S) {
                    var I = S.$elem, P = g.default(I.children());
                    if (P.length > 0) {
                      var T = P == null ? void 0 : P.getNodeName();
                      T && T === "I" && I.addClass(y);
                    }
                  });
                }
                var E = new h.default(p, f);
                return p.dropList = E, d.on("click", function() {
                  var S;
                  v.selection.getRange() != null && (d.css("z-index", v.zIndex.get("menu")), (0, o.default)(S = v.txt.eventHooks.dropListMenuHoverEvents).call(S, function(I) {
                    return I();
                  }), E.show());
                }).on("mouseleave", function() {
                  d.css("z-index", "auto"), E.hideTimeoutId = (0, l.default)(function() {
                    E.hide();
                  });
                }), p;
              }
              return u;
            }(m.default)
          );
          t.default = c;
        },
        /* 25 */
        /***/
        function(a, t, e) {
          var n = e(13);
          a.exports = function(r) {
            if (!n(r))
              throw TypeError(String(r) + " is not an object");
            return r;
          };
        },
        /* 26 */
        /***/
        function(a, t, e) {
          a.exports = e(188);
        },
        /* 27 */
        /***/
        function(a, t, e) {
          a.exports = e(201);
        },
        /* 28 */
        /***/
        function(a, t, e) {
          a.exports = e(213);
        },
        /* 29 */
        /***/
        function(a, t, e) {
          a.exports = e(283);
        },
        /* 30 */
        /***/
        function(a, t, e) {
          var n = e(72), r = e(49);
          a.exports = function(o) {
            return n(r(o));
          };
        },
        /* 31 */
        /***/
        function(a, t, e) {
          var n = e(49);
          a.exports = function(r) {
            return Object(n(r));
          };
        },
        /* 32 */
        /***/
        function(a, t, e) {
          var n = e(40), r = e(72), o = e(31), l = e(35), s = e(88), g = [].push, m = function(h) {
            var c = h == 1, i = h == 2, u = h == 3, d = h == 4, v = h == 6, f = h == 5 || v;
            return function(p, y, x, E) {
              for (var S = o(p), I = r(S), P = n(y, x, 3), T = l(I.length), A = 0, D = E || s, R = c ? D(p, T) : i ? D(p, 0) : void 0, N, M; T > A; A++) if ((f || A in I) && (N = I[A], M = P(N, A, S), h)) {
                if (c) R[A] = M;
                else if (M) switch (h) {
                  case 3:
                    return !0;
                  case 5:
                    return N;
                  case 6:
                    return A;
                  case 2:
                    g.call(R, N);
                }
                else if (d) return !1;
              }
              return v ? -1 : u || d ? d : R;
            };
          };
          a.exports = {
            // `Array.prototype.forEach` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
            forEach: m(0),
            // `Array.prototype.map` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.map
            map: m(1),
            // `Array.prototype.filter` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.filter
            filter: m(2),
            // `Array.prototype.some` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.some
            some: m(3),
            // `Array.prototype.every` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.every
            every: m(4),
            // `Array.prototype.find` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.find
            find: m(5),
            // `Array.prototype.findIndex` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
            findIndex: m(6)
          };
        },
        /* 33 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4)), l = n(e(29)), s = n(e(132));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var g = e(2), m = g.__importDefault(e(3)), h = e(7), c = (
            /** @class */
            function() {
              function i(u, d) {
                this.menu = u, this.conf = d, this.$container = m.default('<div class="w-e-panel-container"></div>');
                var v = u.editor;
                v.txt.eventHooks.clickEvents.push(i.hideCurAllPanels), v.txt.eventHooks.toolbarClickEvents.push(i.hideCurAllPanels), v.txt.eventHooks.dropListMenuHoverEvents.push(i.hideCurAllPanels);
              }
              return i.prototype.create = function() {
                var u = this, d = this.menu;
                if (!i.createdMenus.has(d)) {
                  var v = this.conf, f = this.$container, p = v.width || 300, y = d.editor.$toolbarElem.getBoundingClientRect(), x = d.$elem.getBoundingClientRect(), E = y.height + y.top - x.top, S = (y.width - p) / 2 + y.left - x.left, I = 300;
                  Math.abs(S) > I && (x.left < document.documentElement.clientWidth / 2 ? S = -x.width / 2 : S = -p + x.width / 2), f.css("width", p + "px").css("margin-top", E + "px").css("margin-left", S + "px").css("z-index", d.editor.zIndex.get("panel"));
                  var P = m.default('<i class="w-e-icon-close w-e-panel-close"></i>');
                  f.append(P), P.on("click", function() {
                    u.remove();
                  });
                  var T = m.default('<ul class="w-e-panel-tab-title"></ul>'), A = m.default('<div class="w-e-panel-tab-content"></div>');
                  f.append(T).append(A);
                  var D = v.height;
                  D && A.css("height", D + "px").css("overflow-y", "auto");
                  var R = v.tabs || [], N = [], M = [];
                  (0, o.default)(R).call(R, function(B, F) {
                    if (B) {
                      var j = B.title || "", O = B.tpl || "", L = m.default('<li class="w-e-item">' + j + "</li>");
                      T.append(L);
                      var H = m.default(O);
                      A.append(H), N.push(L), M.push(H), F === 0 ? (L.data("active", !0), L.addClass("w-e-active")) : H.hide(), L.on("click", function() {
                        L.data("active") || ((0, o.default)(N).call(N, function(J) {
                          J.data("active", !1), J.removeClass("w-e-active");
                        }), (0, o.default)(M).call(M, function(J) {
                          J.hide();
                        }), L.data("active", !0), L.addClass("w-e-active"), H.show());
                      });
                    }
                  }), f.on("click", function(B) {
                    B.stopPropagation();
                  }), d.$elem.append(f), v.setLinkValue && v.setLinkValue(f, "text"), v.setLinkValue && v.setLinkValue(f, "link"), (0, o.default)(R).call(R, function(B, F) {
                    if (B) {
                      var j = B.events || [];
                      (0, o.default)(j).call(j, function(O) {
                        var L, H = O.selector, J = O.type, U = O.fn || h.EMPTY_FN, Z = M[F], W = (L = O.bindEnter) !== null && L !== void 0 ? L : !1, Q = function(X) {
                          return g.__awaiter(u, void 0, void 0, function() {
                            var ee;
                            return g.__generator(this, function(de) {
                              switch (de.label) {
                                case 0:
                                  return X.stopPropagation(), [
                                    4,
                                    U(X)
                                    // 执行完事件之后，是否要关闭 panel
                                  ];
                                case 1:
                                  return ee = de.sent(), ee && this.remove(), [
                                    2
                                    /*return*/
                                  ];
                              }
                            });
                          });
                        };
                        (0, l.default)(Z).call(Z, H).on(J, Q), W && J === "click" && Z.on("keyup", function(Y) {
                          Y.keyCode == 13 && Q(Y);
                        });
                      });
                    }
                  });
                  var b = (0, l.default)(f).call(f, "input[type=text],textarea");
                  b.length && b.get(0).focus(), i.hideCurAllPanels(), d.setPanel(this), i.createdMenus.add(d);
                }
              }, i.prototype.remove = function() {
                var u = this.menu, d = this.$container;
                d && d.remove(), i.createdMenus.delete(u);
              }, i.hideCurAllPanels = function() {
                var u;
                i.createdMenus.size !== 0 && (0, o.default)(u = i.createdMenus).call(u, function(d) {
                  var v = d.panel;
                  v && v.remove();
                });
              }, i.createdMenus = new s.default(), i;
            }()
          );
          t.default = c;
        },
        /* 34 */
        /***/
        function(a, t) {
          var e = {}.toString;
          a.exports = function(n) {
            return e.call(n).slice(8, -1);
          };
        },
        /* 35 */
        /***/
        function(a, t, e) {
          var n = e(62), r = Math.min;
          a.exports = function(o) {
            return o > 0 ? r(n(o), 9007199254740991) : 0;
          };
        },
        /* 36 */
        /***/
        function(a, t, e) {
          var n = e(9), r = e(8), o = function(l) {
            return typeof l == "function" ? l : void 0;
          };
          a.exports = function(l, s) {
            return arguments.length < 2 ? o(n[l]) || o(r[l]) : n[l] && n[l][s] || r[l] && r[l][s];
          };
        },
        /* 37 */
        /***/
        function(a, t, e) {
          var n = e(81), r = e(18).f, o = e(19), l = e(16), s = e(170), g = e(10), m = g("toStringTag");
          a.exports = function(h, c, i, u) {
            if (h) {
              var d = i ? h : h.prototype;
              l(d, m) || r(d, m, { configurable: !0, value: c }), u && !n && o(d, "toString", s);
            }
          };
        },
        /* 38 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(95)), s = (
            /** @class */
            function(g) {
              o.__extends(m, g);
              function m(h, c) {
                return g.call(this, h, c) || this;
              }
              return m.prototype.setPanel = function(h) {
                this.panel = h;
              }, m;
            }(l.default)
          );
          t.default = s;
        },
        /* 39 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4)), l = n(e(57));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var s = e(2), g = s.__importDefault(e(3)), m = (
            /** @class */
            function() {
              function h(c, i, u) {
                this.editor = c, this.$targetElem = i, this.conf = u, this._show = !1, this._isInsertTextContainer = !1;
                var d = g.default("<div></div>");
                d.addClass("w-e-tooltip"), this.$container = d;
              }
              return h.prototype.getPositionData = function() {
                var c = this.$container, i = 0, u = 0, d = 20, v = document.documentElement.scrollTop, f = this.$targetElem.getBoundingClientRect(), p = this.editor.$textElem.getBoundingClientRect(), y = this.$targetElem.getOffsetData(), x = g.default(y.parent), E = this.editor.$textElem.elems[0].scrollTop;
                if (this._isInsertTextContainer = x.equal(this.editor.$textContainerElem), this._isInsertTextContainer) {
                  var S = x.getBoundingClientRect().height, I = y.top, P = y.left, T = y.height, A = I - E;
                  A > d + 5 ? (i = A - d - 15, c.addClass("w-e-tooltip-up")) : A + T + d < S ? (i = A + T + 10, c.addClass("w-e-tooltip-down")) : (i = (A > 0 ? A : 0) + d + 10, c.addClass("w-e-tooltip-down")), P < 0 ? u = 0 : u = P;
                } else
                  f.top < d || f.top - p.top < d ? (i = f.bottom + v + 5, c.addClass("w-e-tooltip-down")) : (i = f.top + v - d - 15, c.addClass("w-e-tooltip-up")), f.left < 0 ? u = 0 : u = f.left;
                return {
                  top: i,
                  left: u
                };
              }, h.prototype.appendMenus = function() {
                var c = this, i = this.conf, u = this.editor, d = this.$targetElem, v = this.$container;
                (0, o.default)(i).call(i, function(f, p) {
                  var y = f.$elem, x = g.default("<div></div>");
                  x.addClass("w-e-tooltip-item-wrapper "), x.append(y), v.append(x), y.on("click", function(E) {
                    E.preventDefault();
                    var S = f.onClick(u, d);
                    S && c.remove();
                  });
                });
              }, h.prototype.create = function() {
                var c, i, u = this.editor, d = this.$container;
                this.appendMenus();
                var v = this.getPositionData(), f = v.top, p = v.left;
                d.css("top", f + "px"), d.css("left", p + "px"), d.css("z-index", u.zIndex.get("tooltip")), this._isInsertTextContainer ? this.editor.$textContainerElem.append(d) : g.default("body").append(d), this._show = !0, u.beforeDestroy((0, l.default)(c = this.remove).call(c, this)), u.txt.eventHooks.onBlurEvents.push((0, l.default)(i = this.remove).call(i, this));
              }, h.prototype.remove = function() {
                this.$container.remove(), this._show = !1;
              }, (0, r.default)(h.prototype, "isShow", {
                /**
                 * 是否显示
                 */
                get: function() {
                  return this._show;
                },
                enumerable: !1,
                configurable: !0
              }), h;
            }()
          );
          t.default = m;
        },
        /* 40 */
        /***/
        function(a, t, e) {
          var n = e(41);
          a.exports = function(r, o, l) {
            if (n(r), o === void 0) return r;
            switch (l) {
              case 0:
                return function() {
                  return r.call(o);
                };
              case 1:
                return function(s) {
                  return r.call(o, s);
                };
              case 2:
                return function(s, g) {
                  return r.call(o, s, g);
                };
              case 3:
                return function(s, g, m) {
                  return r.call(o, s, g, m);
                };
            }
            return function() {
              return r.apply(o, arguments);
            };
          };
        },
        /* 41 */
        /***/
        function(a, t) {
          a.exports = function(e) {
            if (typeof e != "function")
              throw TypeError(String(e) + " is not a function");
            return e;
          };
        },
        /* 42 */
        /***/
        function(a, t, e) {
          var n = e(165), r = e(8), o = e(13), l = e(19), s = e(16), g = e(63), m = e(51), h = r.WeakMap, c, i, u, d = function(S) {
            return u(S) ? i(S) : c(S, {});
          }, v = function(S) {
            return function(I) {
              var P;
              if (!o(I) || (P = i(I)).type !== S)
                throw TypeError("Incompatible receiver, " + S + " required");
              return P;
            };
          };
          if (n) {
            var f = new h(), p = f.get, y = f.has, x = f.set;
            c = function(S, I) {
              return x.call(f, S, I), I;
            }, i = function(S) {
              return p.call(f, S) || {};
            }, u = function(S) {
              return y.call(f, S);
            };
          } else {
            var E = g("state");
            m[E] = !0, c = function(S, I) {
              return l(S, E, I), I;
            }, i = function(S) {
              return s(S, E) ? S[E] : {};
            }, u = function(S) {
              return s(S, E);
            };
          }
          a.exports = {
            set: c,
            get: i,
            has: u,
            enforce: d,
            getterFor: v
          };
        },
        /* 43 */
        /***/
        function(a, t) {
          a.exports = !0;
        },
        /* 44 */
        /***/
        function(a, t) {
          a.exports = {};
        },
        /* 45 */
        /***/
        function(a, t, e) {
          a.exports = e(261);
        },
        /* 46 */
        /***/
        function(a, t, e) {
          a.exports = e(265);
        },
        /* 47 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.createElementFragment = t.createDocumentFragment = t.createElement = t.insertBefore = t.getEndPoint = t.getStartPoint = t.updateRange = t.filterSelectionNodes = void 0;
          var l = e(2), s = e(137), g = l.__importDefault(e(3));
          function m(p) {
            var y = [];
            return (0, o.default)(p).call(p, function(x) {
              var E = x.getNodeName();
              if (E !== s.ListType.OrderedList && E !== s.ListType.UnorderedList)
                y.push(x);
              else if (x.prior)
                y.push(x.prior);
              else {
                var S = x.children();
                S == null || (0, o.default)(S).call(S, function(I) {
                  y.push(g.default(I));
                });
              }
            }), y;
          }
          t.filterSelectionNodes = m;
          function h(p, y, x) {
            var E = p.selection, S = document.createRange();
            y.length > 1 ? (S.setStart(y.elems[0], 0), S.setEnd(y.elems[y.length - 1], y.elems[y.length - 1].childNodes.length)) : S.selectNodeContents(y.elems[0]), x && S.collapse(!1), E.saveRange(S), E.restoreSelection();
          }
          t.updateRange = h;
          function c(p) {
            var y;
            return p.prior ? p.prior : g.default((y = p.children()) === null || y === void 0 ? void 0 : y.elems[0]);
          }
          t.getStartPoint = c;
          function i(p) {
            var y;
            return p.prior ? p.prior : g.default((y = p.children()) === null || y === void 0 ? void 0 : y.last().elems[0]);
          }
          t.getEndPoint = i;
          function u(p, y, x) {
            x === void 0 && (x = null), p.parent().elems[0].insertBefore(y, x);
          }
          t.insertBefore = u;
          function d(p) {
            return document.createElement(p);
          }
          t.createElement = d;
          function v() {
            return document.createDocumentFragment();
          }
          t.createDocumentFragment = v;
          function f(p, y, x) {
            return x === void 0 && (x = "li"), (0, o.default)(p).call(p, function(E) {
              var S = d(x);
              S.innerHTML = E.html(), y.appendChild(S), E.remove();
            }), y;
          }
          t.createElementFragment = f;
        },
        /* 48 */
        /***/
        function(a, t) {
          a.exports = function(e, n) {
            return {
              enumerable: !(e & 1),
              configurable: !(e & 2),
              writable: !(e & 4),
              value: n
            };
          };
        },
        /* 49 */
        /***/
        function(a, t) {
          a.exports = function(e) {
            if (e == null) throw TypeError("Can't call method on " + e);
            return e;
          };
        },
        /* 50 */
        /***/
        function(a, t, e) {
          var n = e(164).charAt, r = e(42), o = e(75), l = "String Iterator", s = r.set, g = r.getterFor(l);
          o(String, "String", function(m) {
            s(this, {
              type: l,
              string: String(m),
              index: 0
            });
          }, function() {
            var h = g(this), c = h.string, i = h.index, u;
            return i >= c.length ? { value: void 0, done: !0 } : (u = n(c, i), h.index += u.length, { value: u, done: !1 });
          });
        },
        /* 51 */
        /***/
        function(a, t) {
          a.exports = {};
        },
        /* 52 */
        /***/
        function(a, t, e) {
          var n = e(107), r = e(80);
          a.exports = Object.keys || function(l) {
            return n(l, r);
          };
        },
        /* 53 */
        /***/
        function(a, t, e) {
          var n = e(19);
          a.exports = function(r, o, l, s) {
            s && s.enumerable ? r[o] = l : n(r, o, l);
          };
        },
        /* 54 */
        /***/
        function(a, t, e) {
          e(173);
          var n = e(174), r = e(8), o = e(65), l = e(19), s = e(44), g = e(10), m = g("toStringTag");
          for (var h in n) {
            var c = r[h], i = c && c.prototype;
            i && o(i) !== m && l(i, m, h), s[h] = s.Array;
          }
        },
        /* 55 */
        /***/
        function(a, t, e) {
          var n = e(34);
          a.exports = Array.isArray || function(o) {
            return n(o) == "Array";
          };
        },
        /* 56 */
        /***/
        function(a, t, e) {
          var n = e(11), r = e(10), o = e(86), l = r("species");
          a.exports = function(s) {
            return o >= 51 || !n(function() {
              var g = [], m = g.constructor = {};
              return m[l] = function() {
                return { foo: 1 };
              }, g[s](Boolean).foo !== 1;
            });
          };
        },
        /* 57 */
        /***/
        function(a, t, e) {
          a.exports = e(222);
        },
        /* 58 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.ListHandle = void 0;
          var o = e(2), l = o.__importDefault(e(373)), s = (
            /** @class */
            /* @__PURE__ */ function() {
              function g(m) {
                this.options = m, this.selectionRangeElem = new l.default();
              }
              return g;
            }()
          );
          t.ListHandle = s;
        },
        /* 59 */
        /***/
        function(a, t, e) {
          var n = {}.propertyIsEnumerable, r = Object.getOwnPropertyDescriptor, o = r && !n.call({ 1: 2 }, 1);
          t.f = o ? function(s) {
            var g = r(this, s);
            return !!g && g.enumerable;
          } : n;
        },
        /* 60 */
        /***/
        function(a, t, e) {
          var n = e(13);
          a.exports = function(r, o) {
            if (!n(r)) return r;
            var l, s;
            if (o && typeof (l = r.toString) == "function" && !n(s = l.call(r)) || typeof (l = r.valueOf) == "function" && !n(s = l.call(r)) || !o && typeof (l = r.toString) == "function" && !n(s = l.call(r))) return s;
            throw TypeError("Can't convert object to primitive value");
          };
        },
        /* 61 */
        /***/
        function(a, t) {
        },
        /* 62 */
        /***/
        function(a, t) {
          var e = Math.ceil, n = Math.floor;
          a.exports = function(r) {
            return isNaN(r = +r) ? 0 : (r > 0 ? n : e)(r);
          };
        },
        /* 63 */
        /***/
        function(a, t, e) {
          var n = e(74), r = e(64), o = n("keys");
          a.exports = function(l) {
            return o[l] || (o[l] = r(l));
          };
        },
        /* 64 */
        /***/
        function(a, t) {
          var e = 0, n = Math.random();
          a.exports = function(r) {
            return "Symbol(" + String(r === void 0 ? "" : r) + ")_" + (++e + n).toString(36);
          };
        },
        /* 65 */
        /***/
        function(a, t, e) {
          var n = e(81), r = e(34), o = e(10), l = o("toStringTag"), s = r(/* @__PURE__ */ function() {
            return arguments;
          }()) == "Arguments", g = function(m, h) {
            try {
              return m[h];
            } catch {
            }
          };
          a.exports = n ? r : function(m) {
            var h, c, i;
            return m === void 0 ? "Undefined" : m === null ? "Null" : typeof (c = g(h = Object(m), l)) == "string" ? c : s ? r(h) : (i = r(h)) == "Object" && typeof h.callee == "function" ? "Arguments" : i;
          };
        },
        /* 66 */
        /***/
        function(a, t, e) {
          var n = e(25), r = e(112), o = e(35), l = e(40), s = e(113), g = e(114), m = function(c, i) {
            this.stopped = c, this.result = i;
          }, h = a.exports = function(c, i, u, d, v) {
            var f = l(i, u, d ? 2 : 1), p, y, x, E, S, I, P;
            if (v)
              p = c;
            else {
              if (y = s(c), typeof y != "function") throw TypeError("Target is not iterable");
              if (r(y)) {
                for (x = 0, E = o(c.length); E > x; x++)
                  if (S = d ? f(n(P = c[x])[0], P[1]) : f(c[x]), S && S instanceof m) return S;
                return new m(!1);
              }
              p = y.call(c);
            }
            for (I = p.next; !(P = I.call(p)).done; )
              if (S = g(p, f, P.value, d), typeof S == "object" && S && S instanceof m) return S;
            return new m(!1);
          };
          h.stop = function(c) {
            return new m(!0, c);
          };
        },
        /* 67 */
        /***/
        function(a, t, e) {
          var n = e(11);
          a.exports = function(r, o) {
            var l = [][r];
            return !!l && n(function() {
              l.call(null, o || function() {
                throw 1;
              }, 1);
            });
          };
        },
        /* 68 */
        /***/
        function(a, t) {
          a.exports = `	
\v\f\r                　\u2028\u2029\uFEFF`;
        },
        /* 69 */
        /***/
        function(a, t, e) {
          var n = e(60), r = e(18), o = e(48);
          a.exports = function(l, s, g) {
            var m = n(s);
            m in l ? r.f(l, m, o(0, g)) : l[m] = g;
          };
        },
        /* 70 */
        /***/
        function(a, t, e) {
          a.exports = e(209);
        },
        /* 71 */
        /***/
        function(a, t, e) {
          var n = e(14), r = e(59), o = e(48), l = e(30), s = e(60), g = e(16), m = e(100), h = Object.getOwnPropertyDescriptor;
          t.f = n ? h : function(i, u) {
            if (i = l(i), u = s(u, !0), m) try {
              return h(i, u);
            } catch {
            }
            if (g(i, u)) return o(!r.f.call(i, u), i[u]);
          };
        },
        /* 72 */
        /***/
        function(a, t, e) {
          var n = e(11), r = e(34), o = "".split;
          a.exports = n(function() {
            return !Object("z").propertyIsEnumerable(0);
          }) ? function(l) {
            return r(l) == "String" ? o.call(l, "") : Object(l);
          } : Object;
        },
        /* 73 */
        /***/
        function(a, t, e) {
          var n = e(8), r = e(13), o = n.document, l = r(o) && r(o.createElement);
          a.exports = function(s) {
            return l ? o.createElement(s) : {};
          };
        },
        /* 74 */
        /***/
        function(a, t, e) {
          var n = e(43), r = e(103);
          (a.exports = function(o, l) {
            return r[o] || (r[o] = l !== void 0 ? l : {});
          })("versions", []).push({
            version: "3.6.4",
            mode: n ? "pure" : "global",
            copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
          });
        },
        /* 75 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(167), o = e(105), l = e(171), s = e(37), g = e(19), m = e(53), h = e(10), c = e(43), i = e(44), u = e(104), d = u.IteratorPrototype, v = u.BUGGY_SAFARI_ITERATORS, f = h("iterator"), p = "keys", y = "values", x = "entries", E = function() {
            return this;
          };
          a.exports = function(S, I, P, T, A, D, R) {
            r(P, I, T);
            var N = function(U) {
              if (U === A && j) return j;
              if (!v && U in B) return B[U];
              switch (U) {
                case p:
                  return function() {
                    return new P(this, U);
                  };
                case y:
                  return function() {
                    return new P(this, U);
                  };
                case x:
                  return function() {
                    return new P(this, U);
                  };
              }
              return function() {
                return new P(this);
              };
            }, M = I + " Iterator", b = !1, B = S.prototype, F = B[f] || B["@@iterator"] || A && B[A], j = !v && F || N(A), O = I == "Array" && B.entries || F, L, H, J;
            if (O && (L = o(O.call(new S())), d !== Object.prototype && L.next && (!c && o(L) !== d && (l ? l(L, d) : typeof L[f] != "function" && g(L, f, E)), s(L, M, !0, !0), c && (i[M] = E))), A == y && F && F.name !== y && (b = !0, j = function() {
              return F.call(this);
            }), (!c || R) && B[f] !== j && g(B, f, j), i[I] = j, A)
              if (H = {
                values: N(y),
                keys: D ? j : N(p),
                entries: N(x)
              }, R) for (J in H)
                (v || b || !(J in B)) && m(B, J, H[J]);
              else n({ target: I, proto: !0, forced: v || b }, H);
            return H;
          };
        },
        /* 76 */
        /***/
        function(a, t, e) {
          var n = e(11);
          a.exports = !!Object.getOwnPropertySymbols && !n(function() {
            return !String(Symbol());
          });
        },
        /* 77 */
        /***/
        function(a, t, e) {
          var n = e(25), r = e(169), o = e(80), l = e(51), s = e(108), g = e(73), m = e(63), h = ">", c = "<", i = "prototype", u = "script", d = m("IE_PROTO"), v = function() {
          }, f = function(S) {
            return c + u + h + S + c + "/" + u + h;
          }, p = function(S) {
            S.write(f("")), S.close();
            var I = S.parentWindow.Object;
            return S = null, I;
          }, y = function() {
            var S = g("iframe"), I = "java" + u + ":", P;
            return S.style.display = "none", s.appendChild(S), S.src = String(I), P = S.contentWindow.document, P.open(), P.write(f("document.F=Object")), P.close(), P.F;
          }, x, E = function() {
            try {
              x = document.domain && new ActiveXObject("htmlfile");
            } catch {
            }
            E = x ? p(x) : y();
            for (var S = o.length; S--; ) delete E[i][o[S]];
            return E();
          };
          l[d] = !0, a.exports = Object.create || function(I, P) {
            var T;
            return I !== null ? (v[i] = n(I), T = new v(), v[i] = null, T[d] = I) : T = E(), P === void 0 ? T : r(T, P);
          };
        },
        /* 78 */
        /***/
        function(a, t, e) {
          var n = e(30), r = e(35), o = e(79), l = function(s) {
            return function(g, m, h) {
              var c = n(g), i = r(c.length), u = o(h, i), d;
              if (s && m != m) {
                for (; i > u; )
                  if (d = c[u++], d != d) return !0;
              } else for (; i > u; u++)
                if ((s || u in c) && c[u] === m) return s || u || 0;
              return !s && -1;
            };
          };
          a.exports = {
            // `Array.prototype.includes` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.includes
            includes: l(!0),
            // `Array.prototype.indexOf` method
            // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
            indexOf: l(!1)
          };
        },
        /* 79 */
        /***/
        function(a, t, e) {
          var n = e(62), r = Math.max, o = Math.min;
          a.exports = function(l, s) {
            var g = n(l);
            return g < 0 ? r(g + s, 0) : o(g, s);
          };
        },
        /* 80 */
        /***/
        function(a, t) {
          a.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf"
          ];
        },
        /* 81 */
        /***/
        function(a, t, e) {
          var n = e(10), r = n("toStringTag"), o = {};
          o[r] = "z", a.exports = String(o) === "[object z]";
        },
        /* 82 */
        /***/
        function(a, t) {
          a.exports = function() {
          };
        },
        /* 83 */
        /***/
        function(a, t) {
          a.exports = function(e, n, r) {
            if (!(e instanceof n))
              throw TypeError("Incorrect " + (r ? r + " " : "") + "invocation");
            return e;
          };
        },
        /* 84 */
        /***/
        function(a, t, e) {
          var n = e(36);
          a.exports = n("navigator", "userAgent") || "";
        },
        /* 85 */
        /***/
        function(a, t, e) {
          var n = e(41), r = function(o) {
            var l, s;
            this.promise = new o(function(g, m) {
              if (l !== void 0 || s !== void 0) throw TypeError("Bad Promise constructor");
              l = g, s = m;
            }), this.resolve = n(l), this.reject = n(s);
          };
          a.exports.f = function(o) {
            return new r(o);
          };
        },
        /* 86 */
        /***/
        function(a, t, e) {
          var n = e(8), r = e(84), o = n.process, l = o && o.versions, s = l && l.v8, g, m;
          s ? (g = s.split("."), m = g[0] + g[1]) : r && (g = r.match(/Edge\/(\d+)/), (!g || g[1] >= 74) && (g = r.match(/Chrome\/(\d+)/), g && (m = g[1]))), a.exports = m && +m;
        },
        /* 87 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3)), g = e(6), m = l.__importDefault(e(267)), h = l.__importDefault(e(280)), c = l.__importDefault(e(281)), i = l.__importDefault(e(282)), u = l.__importDefault(e(301)), d = l.__importStar(e(416)), v = l.__importDefault(e(417)), f = l.__importDefault(e(418)), p = l.__importDefault(e(419)), y = l.__importStar(e(420)), x = l.__importDefault(e(423)), E = l.__importDefault(e(424)), S = l.__importDefault(e(425)), I = l.__importDefault(e(427)), P = l.__importDefault(e(437)), T = l.__importDefault(e(440)), A = l.__importStar(e(441)), D = l.__importDefault(e(23)), R = l.__importDefault(e(134)), N = l.__importDefault(e(24)), M = l.__importDefault(e(33)), b = l.__importDefault(e(38)), B = l.__importDefault(e(39)), F = 1, j = (
            /** @class */
            function() {
              function O(L, H) {
                this.pluginsFunctionList = {}, this.beforeDestroyHooks = [], this.id = "wangEditor-" + F++, this.toolbarSelector = L, this.textSelector = H, d.selectorValidator(this), this.config = g.deepClone(m.default), this.$toolbarElem = s.default("<div></div>"), this.$textContainerElem = s.default("<div></div>"), this.$textElem = s.default("<div></div>"), this.toolbarElemId = "", this.textElemId = "", this.isFocus = !1, this.isComposing = !1, this.isCompatibleMode = !1, this.selection = new h.default(this), this.cmd = new c.default(this), this.txt = new i.default(this), this.menus = new u.default(this), this.zIndex = new E.default(), this.change = new S.default(this), this.history = new I.default(this), this.onSelectionChange = new T.default(this);
                var J = P.default(this), U = J.disable, Z = J.enable;
                this.disable = U, this.enable = Z, this.isEnable = !0;
              }
              return O.prototype.initSelection = function(L) {
                v.default(this, L);
              }, O.prototype.create = function() {
                this.zIndex.init(this), this.isCompatibleMode = this.config.compatibleMode(), this.isCompatibleMode || (this.config.onchangeTimeout = 30), p.default(this), d.default(this), this.txt.init(), this.menus.init(), y.default(this), this.initSelection(!0), f.default(this), this.change.observe(), this.history.observe(), A.default(this);
              }, O.prototype.beforeDestroy = function(L) {
                return this.beforeDestroyHooks.push(L), this;
              }, O.prototype.destroy = function() {
                var L, H = this;
                (0, o.default)(L = this.beforeDestroyHooks).call(L, function(J) {
                  return J.call(H);
                }), this.$toolbarElem.remove(), this.$textContainerElem.remove();
              }, O.prototype.fullScreen = function() {
                y.setFullScreen(this);
              }, O.prototype.unFullScreen = function() {
                y.setUnFullScreen(this);
              }, O.prototype.scrollToHead = function(L) {
                x.default(this, L);
              }, O.registerMenu = function(L, H) {
                !H || typeof H != "function" || (O.globalCustomMenuConstructorList[L] = H);
              }, O.prototype.registerPlugin = function(L, H) {
                A.registerPlugin(L, H, this.pluginsFunctionList);
              }, O.registerPlugin = function(L, H) {
                A.registerPlugin(L, H, O.globalPluginsFunctionList);
              }, O.$ = s.default, O.BtnMenu = D.default, O.DropList = R.default, O.DropListMenu = N.default, O.Panel = M.default, O.PanelMenu = b.default, O.Tooltip = B.default, O.globalCustomMenuConstructorList = {}, O.globalPluginsFunctionList = {}, O;
            }()
          );
          t.default = j;
        },
        /* 88 */
        /***/
        function(a, t, e) {
          var n = e(13), r = e(55), o = e(10), l = o("species");
          a.exports = function(s, g) {
            var m;
            return r(s) && (m = s.constructor, typeof m == "function" && (m === Array || r(m.prototype)) ? m = void 0 : n(m) && (m = m[l], m === null && (m = void 0))), new (m === void 0 ? Array : m)(g === 0 ? 0 : g);
          };
        },
        /* 89 */
        /***/
        function(a, t, e) {
          a.exports = e(185);
        },
        /* 90 */
        /***/
        function(a, t, e) {
          var n = e(49), r = e(68), o = "[" + r + "]", l = RegExp("^" + o + o + "*"), s = RegExp(o + o + "*$"), g = function(m) {
            return function(h) {
              var c = String(n(h));
              return m & 1 && (c = c.replace(l, "")), m & 2 && (c = c.replace(s, "")), c;
            };
          };
          a.exports = {
            // `String.prototype.{ trimLeft, trimStart }` methods
            // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
            start: g(1),
            // `String.prototype.{ trimRight, trimEnd }` methods
            // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
            end: g(2),
            // `String.prototype.trim` method
            // https://tc39.github.io/ecma262/#sec-string.prototype.trim
            trim: g(3)
          };
        },
        /* 91 */
        /***/
        function(a, t, e) {
          a.exports = e(205);
        },
        /* 92 */
        /***/
        function(a, t, e) {
          var n = e(227), r = e(230);
          function o(l) {
            "@babel/helpers - typeof";
            return typeof r == "function" && typeof n == "symbol" ? a.exports = o = function(g) {
              return typeof g;
            } : a.exports = o = function(g) {
              return g && typeof r == "function" && g.constructor === r && g !== r.prototype ? "symbol" : typeof g;
            }, o(l);
          }
          a.exports = o;
        },
        /* 93 */
        /***/
        function(a, t, e) {
          var n = e(10);
          t.f = n;
        },
        /* 94 */
        /***/
        function(a, t, e) {
          a.exports = e(306);
        },
        /* 95 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(33)), g = (
            /** @class */
            function() {
              function m(h, c) {
                var i = this;
                this.$elem = h, this.editor = c, this._active = !1, h.on("click", function(u) {
                  var d;
                  s.default.hideCurAllPanels(), (0, o.default)(d = c.txt.eventHooks.menuClickEvents).call(d, function(v) {
                    return v();
                  }), u.stopPropagation(), c.selection.getRange() != null && i.clickHandler(u);
                });
              }
              return m.prototype.clickHandler = function(h) {
              }, m.prototype.active = function() {
                this._active = !0, this.$elem.addClass("w-e-active");
              }, m.prototype.unActive = function() {
                this._active = !1, this.$elem.removeClass("w-e-active");
              }, (0, r.default)(m.prototype, "isActive", {
                /**
                 * 是否处于激活状态
                 */
                get: function() {
                  return this._active;
                },
                enumerable: !1,
                configurable: !0
              }), m;
            }()
          );
          t.default = g;
        },
        /* 96 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(28));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.getParentNodeA = t.EXTRA_TAG = void 0, t.EXTRA_TAG = ["B", "FONT", "I", "STRIKE"];
          function l(g) {
            for (var m = g.elems[0]; m && (0, o.default)(h = t.EXTRA_TAG).call(h, m.nodeName); ) {
              var h;
              if (m = m.parentElement, m.nodeName === "A")
                return m;
            }
          }
          t.getParentNodeA = l;
          function s(g) {
            var m, h = g.selection.getSelectionContainerElem();
            if (!(!((m = h == null ? void 0 : h.elems) === null || m === void 0) && m.length))
              return !1;
            if (h.getNodeName() === "A")
              return !0;
            var c = l(h);
            return !!(c && c.nodeName === "A");
          }
          t.default = s;
        },
        /* 97 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(57)), l = n(e(4)), s = n(e(27));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var g = e(2), m = e(6), h = g.__importDefault(e(135)), c = g.__importDefault(e(136)), i = (
            /** @class */
            function() {
              function u(d) {
                this.editor = d;
              }
              return u.prototype.insertImg = function(d, v, f) {
                var p = this.editor, y = p.config, x = "validate.", E = function(D, R) {
                  return R === void 0 && (R = x), p.i18next.t(R + D);
                }, S = d.replace(/</g, "&lt;").replace(/>/g, "&gt;");
                S = S.replace("'", '"');
                var I = "";
                f && (I = f.replace("'", '"'), I = "data-href='" + encodeURIComponent(I) + "' ");
                var P = "";
                v && (P = v.replace(/</g, "&lt;").replace(/>/g, "&gt;"), P = P.replace("'", '"'), P = "alt='" + P + "' "), p.cmd.do("insertHTML", "<img src='" + S + "' " + P + I + 'style="max-width:100%;" contenteditable="false"/>'), y.linkImgCallback(d, v, f);
                var T = document.createElement("img");
                T.onload = function() {
                  T = null;
                }, T.onerror = function() {
                  y.customAlert(E("插入图片错误"), "error", "wangEditor: " + E("插入图片错误") + "，" + E("图片链接") + ' "' + d + '"，' + E("下载链接失败")), T = null;
                }, T.onabort = function() {
                  return T = null;
                }, T.src = d;
              }, u.prototype.uploadImg = function(d) {
                var v = this;
                if (d.length) {
                  var f = this.editor, p = f.config, y = "validate.", x = function(Q) {
                    return f.i18next.t(y + Q);
                  }, E = p.uploadImgServer, S = p.uploadImgShowBase64, I = p.uploadImgMaxSize, P = I / 1024 / 1024, T = p.uploadImgMaxLength, A = p.uploadFileName, D = p.uploadImgParams, R = p.uploadImgParamsWithUrl, N = p.uploadImgHeaders, M = p.uploadImgHooks, b = p.uploadImgTimeout, B = p.withCredentials, F = p.customUploadImg;
                  if (!(!F && !E && !S)) {
                    var j = [], O = [];
                    if (m.arrForEach(d, function(W) {
                      if (W) {
                        var Q = W.name || W.type.replace("/", "."), Y = W.size;
                        if (!(!Q || !Y)) {
                          var X = f.config.uploadImgAccept.join("|"), ee = ".(" + X + ")$", de = new RegExp(ee, "i");
                          if (de.test(Q) === !1) {
                            O.push("【" + Q + "】" + x("不是图片"));
                            return;
                          }
                          if (I < Y) {
                            O.push("【" + Q + "】" + x("大于") + " " + P + "M");
                            return;
                          }
                          j.push(W);
                        }
                      }
                    }), O.length) {
                      p.customAlert(x("图片验证未通过") + `: 
` + O.join(`
`), "warning");
                      return;
                    }
                    if (j.length === 0) {
                      p.customAlert(x("传入的文件不合法"), "warning");
                      return;
                    }
                    if (j.length > T) {
                      p.customAlert(x("一次最多上传") + T + x("张图片"), "warning");
                      return;
                    }
                    if (F && typeof F == "function") {
                      var L;
                      F(j, (0, o.default)(L = this.insertImg).call(L, this));
                      return;
                    }
                    var H = new FormData();
                    if ((0, l.default)(j).call(j, function(W, Q) {
                      var Y = A || W.name;
                      j.length > 1 && (Y = Y + (Q + 1)), H.append(Y, W);
                    }), E) {
                      var J = E.split("#");
                      E = J[0];
                      var U = J[1] || "";
                      (0, l.default)(m).call(m, D, function(W, Q) {
                        R && ((0, s.default)(E).call(E, "?") > 0 ? E += "&" : E += "?", E = E + W + "=" + Q), H.append(W, Q);
                      }), U && (E += "#" + U);
                      var Z = h.default(E, {
                        timeout: b,
                        formData: H,
                        headers: N,
                        withCredentials: !!B,
                        beforeSend: function(Q) {
                          if (M.before) return M.before(Q, f, j);
                        },
                        onTimeout: function(Q) {
                          p.customAlert(x("上传图片超时"), "error"), M.timeout && M.timeout(Q, f);
                        },
                        onProgress: function(Q, Y) {
                          var X = new c.default(f);
                          Y.lengthComputable && (Q = Y.loaded / Y.total, X.show(Q));
                        },
                        onError: function(Q) {
                          p.customAlert(x("上传图片错误"), "error", x("上传图片错误") + "，" + x("服务器返回状态") + ": " + Q.status), M.error && M.error(Q, f);
                        },
                        onFail: function(Q, Y) {
                          p.customAlert(x("上传图片失败"), "error", x("上传图片返回结果错误") + ("，" + x("返回结果") + ": ") + Y), M.fail && M.fail(Q, f, Y);
                        },
                        onSuccess: function(Q, Y) {
                          if (M.customInsert) {
                            var X;
                            M.customInsert((0, o.default)(X = v.insertImg).call(X, v), Y, f);
                            return;
                          }
                          if (Y.errno != "0") {
                            p.customAlert(x("上传图片失败"), "error", x("上传图片返回结果错误") + "，" + x("返回结果") + " errno=" + Y.errno), M.fail && M.fail(Q, f, Y);
                            return;
                          }
                          var ee = Y.data;
                          (0, l.default)(ee).call(ee, function(de) {
                            typeof de == "string" ? v.insertImg(de) : v.insertImg(de.url, de.alt, de.href);
                          }), M.success && M.success(Q, f, Y);
                        }
                      });
                      typeof Z == "string" && p.customAlert(Z, "error");
                      return;
                    }
                    S && m.arrForEach(d, function(W) {
                      var Q = v, Y = new FileReader();
                      Y.readAsDataURL(W), Y.onload = function() {
                        if (this.result) {
                          var X = this.result.toString();
                          Q.insertImg(X, X);
                        }
                      };
                    });
                  }
                }
              }, u;
            }()
          );
          t.default = i;
        },
        /* 98 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(410)), l = n(e(4)), s = n(e(45));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.dealTextNode = t.isAllTodo = t.isTodo = t.getCursorNextNode = void 0;
          function g(u) {
            return u.length ? u.attr("class") === "w-e-todo" : !1;
          }
          t.isTodo = g;
          function m(u) {
            var d = u.selection.getSelectionRangeTopNodes();
            if (d.length !== 0)
              return (0, o.default)(d).call(d, function(v) {
                return g(v);
              });
          }
          t.isAllTodo = m;
          function h(u, d, v) {
            var f;
            if (u.hasChildNodes()) {
              var p = u.cloneNode(), y = !1;
              d.nodeValue === "" && (y = !0);
              var x = [];
              return (0, l.default)(f = u.childNodes).call(f, function(E) {
                if (!c(E, d) && y && (p.appendChild(E.cloneNode(!0)), E.nodeName !== "BR" && x.push(E)), c(E, d)) {
                  if (E.nodeType === 1) {
                    var S = h(E, d, v);
                    S && S.textContent !== "" && (p == null || p.appendChild(S));
                  }
                  if (E.nodeType === 3 && d.isEqualNode(E)) {
                    var I = i(E, v);
                    p.textContent = I;
                  }
                  y = !0;
                }
              }), (0, l.default)(x).call(x, function(E) {
                var S = E;
                S.remove();
              }), p;
            }
          }
          t.getCursorNextNode = h;
          function c(u, d) {
            return u.nodeType === 3 ? u.nodeValue === d.nodeValue : u.contains(d);
          }
          function i(u, d, v) {
            v === void 0 && (v = !0);
            var f = u.nodeValue, p = f == null ? void 0 : (0, s.default)(f).call(f, 0, d);
            if (f = f == null ? void 0 : (0, s.default)(f).call(f, d), !v) {
              var y = f;
              f = p, p = y;
            }
            return u.nodeValue = p, f;
          }
          t.dealTextNode = i;
        },
        /* 99 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(430), l = (
            /** @class */
            function() {
              function s(g) {
                this.maxSize = g, this.isRe = !1, this.data = new o.CeilStack(g), this.revokeData = new o.CeilStack(g);
              }
              return (0, r.default)(s.prototype, "size", {
                /**
                 * 返回当前栈中的数据长度。格式为：[正常的数据的条数，被撤销的数据的条数]
                 */
                get: function() {
                  return [this.data.size, this.revokeData.size];
                },
                enumerable: !1,
                configurable: !0
              }), s.prototype.resetMaxSize = function(g) {
                this.data.resetMax(g), this.revokeData.resetMax(g);
              }, s.prototype.save = function(g) {
                return this.isRe && (this.revokeData.clear(), this.isRe = !1), this.data.instack(g), this;
              }, s.prototype.revoke = function(g) {
                !this.isRe && (this.isRe = !0);
                var m = this.data.outstack();
                return m ? (this.revokeData.instack(m), g(m), !0) : !1;
              }, s.prototype.restore = function(g) {
                !this.isRe && (this.isRe = !0);
                var m = this.revokeData.outstack();
                return m ? (this.data.instack(m), g(m), !0) : !1;
              }, s;
            }()
          );
          t.default = l;
        },
        /* 100 */
        /***/
        function(a, t, e) {
          var n = e(14), r = e(11), o = e(73);
          a.exports = !n && !r(function() {
            return Object.defineProperty(o("div"), "a", {
              get: function() {
                return 7;
              }
            }).a != 7;
          });
        },
        /* 101 */
        /***/
        function(a, t, e) {
          var n = e(11), r = /#|\.prototype\./, o = function(h, c) {
            var i = s[l(h)];
            return i == m ? !0 : i == g ? !1 : typeof c == "function" ? n(c) : !!c;
          }, l = o.normalize = function(h) {
            return String(h).replace(r, ".").toLowerCase();
          }, s = o.data = {}, g = o.NATIVE = "N", m = o.POLYFILL = "P";
          a.exports = o;
        },
        /* 102 */
        /***/
        function(a, t, e) {
          var n = e(103), r = Function.toString;
          typeof n.inspectSource != "function" && (n.inspectSource = function(o) {
            return r.call(o);
          }), a.exports = n.inspectSource;
        },
        /* 103 */
        /***/
        function(a, t, e) {
          var n = e(8), r = e(166), o = "__core-js_shared__", l = n[o] || r(o, {});
          a.exports = l;
        },
        /* 104 */
        /***/
        function(a, t, e) {
          var n = e(105), r = e(19), o = e(16), l = e(10), s = e(43), g = l("iterator"), m = !1, h = function() {
            return this;
          }, c, i, u;
          [].keys && (u = [].keys(), "next" in u ? (i = n(n(u)), i !== Object.prototype && (c = i)) : m = !0), c == null && (c = {}), !s && !o(c, g) && r(c, g, h), a.exports = {
            IteratorPrototype: c,
            BUGGY_SAFARI_ITERATORS: m
          };
        },
        /* 105 */
        /***/
        function(a, t, e) {
          var n = e(16), r = e(31), o = e(63), l = e(168), s = o("IE_PROTO"), g = Object.prototype;
          a.exports = l ? Object.getPrototypeOf : function(m) {
            return m = r(m), n(m, s) ? m[s] : typeof m.constructor == "function" && m instanceof m.constructor ? m.constructor.prototype : m instanceof Object ? g : null;
          };
        },
        /* 106 */
        /***/
        function(a, t, e) {
          var n = e(76);
          a.exports = n && !Symbol.sham && typeof Symbol.iterator == "symbol";
        },
        /* 107 */
        /***/
        function(a, t, e) {
          var n = e(16), r = e(30), o = e(78).indexOf, l = e(51);
          a.exports = function(s, g) {
            var m = r(s), h = 0, c = [], i;
            for (i in m) !n(l, i) && n(m, i) && c.push(i);
            for (; g.length > h; ) n(m, i = g[h++]) && (~o(c, i) || c.push(i));
            return c;
          };
        },
        /* 108 */
        /***/
        function(a, t, e) {
          var n = e(36);
          a.exports = n("document", "documentElement");
        },
        /* 109 */
        /***/
        function(a, t, e) {
          var n = e(8);
          a.exports = n.Promise;
        },
        /* 110 */
        /***/
        function(a, t, e) {
          var n = e(53);
          a.exports = function(r, o, l) {
            for (var s in o)
              l && l.unsafe && r[s] ? r[s] = o[s] : n(r, s, o[s], l);
            return r;
          };
        },
        /* 111 */
        /***/
        function(a, t, e) {
          var n = e(36), r = e(18), o = e(10), l = e(14), s = o("species");
          a.exports = function(g) {
            var m = n(g), h = r.f;
            l && m && !m[s] && h(m, s, {
              configurable: !0,
              get: function() {
                return this;
              }
            });
          };
        },
        /* 112 */
        /***/
        function(a, t, e) {
          var n = e(10), r = e(44), o = n("iterator"), l = Array.prototype;
          a.exports = function(s) {
            return s !== void 0 && (r.Array === s || l[o] === s);
          };
        },
        /* 113 */
        /***/
        function(a, t, e) {
          var n = e(65), r = e(44), o = e(10), l = o("iterator");
          a.exports = function(s) {
            if (s != null) return s[l] || s["@@iterator"] || r[n(s)];
          };
        },
        /* 114 */
        /***/
        function(a, t, e) {
          var n = e(25);
          a.exports = function(r, o, l, s) {
            try {
              return s ? o(n(l)[0], l[1]) : o(l);
            } catch (m) {
              var g = r.return;
              throw g !== void 0 && n(g.call(r)), m;
            }
          };
        },
        /* 115 */
        /***/
        function(a, t, e) {
          var n = e(10), r = n("iterator"), o = !1;
          try {
            var l = 0, s = {
              next: function() {
                return { done: !!l++ };
              },
              return: function() {
                o = !0;
              }
            };
            s[r] = function() {
              return this;
            }, Array.from(s, function() {
              throw 2;
            });
          } catch {
          }
          a.exports = function(g, m) {
            if (!m && !o) return !1;
            var h = !1;
            try {
              var c = {};
              c[r] = function() {
                return {
                  next: function() {
                    return { done: h = !0 };
                  }
                };
              }, g(c);
            } catch {
            }
            return h;
          };
        },
        /* 116 */
        /***/
        function(a, t, e) {
          var n = e(25), r = e(41), o = e(10), l = o("species");
          a.exports = function(s, g) {
            var m = n(s).constructor, h;
            return m === void 0 || (h = n(m)[l]) == null ? g : r(h);
          };
        },
        /* 117 */
        /***/
        function(a, t, e) {
          var n = e(8), r = e(11), o = e(34), l = e(40), s = e(108), g = e(73), m = e(118), h = n.location, c = n.setImmediate, i = n.clearImmediate, u = n.process, d = n.MessageChannel, v = n.Dispatch, f = 0, p = {}, y = "onreadystatechange", x, E, S, I = function(D) {
            if (p.hasOwnProperty(D)) {
              var R = p[D];
              delete p[D], R();
            }
          }, P = function(D) {
            return function() {
              I(D);
            };
          }, T = function(D) {
            I(D.data);
          }, A = function(D) {
            n.postMessage(D + "", h.protocol + "//" + h.host);
          };
          (!c || !i) && (c = function(R) {
            for (var N = [], M = 1; arguments.length > M; ) N.push(arguments[M++]);
            return p[++f] = function() {
              (typeof R == "function" ? R : Function(R)).apply(void 0, N);
            }, x(f), f;
          }, i = function(R) {
            delete p[R];
          }, o(u) == "process" ? x = function(D) {
            u.nextTick(P(D));
          } : v && v.now ? x = function(D) {
            v.now(P(D));
          } : d && !m ? (E = new d(), S = E.port2, E.port1.onmessage = T, x = l(S.postMessage, S, 1)) : n.addEventListener && typeof postMessage == "function" && !n.importScripts && !r(A) && h.protocol !== "file:" ? (x = A, n.addEventListener("message", T, !1)) : y in g("script") ? x = function(D) {
            s.appendChild(g("script"))[y] = function() {
              s.removeChild(this), I(D);
            };
          } : x = function(D) {
            setTimeout(P(D), 0);
          }), a.exports = {
            set: c,
            clear: i
          };
        },
        /* 118 */
        /***/
        function(a, t, e) {
          var n = e(84);
          a.exports = /(iphone|ipod|ipad).*applewebkit/i.test(n);
        },
        /* 119 */
        /***/
        function(a, t, e) {
          var n = e(25), r = e(13), o = e(85);
          a.exports = function(l, s) {
            if (n(l), r(s) && s.constructor === l) return s;
            var g = o.f(l), m = g.resolve;
            return m(s), g.promise;
          };
        },
        /* 120 */
        /***/
        function(a, t) {
          a.exports = function(e) {
            try {
              return { error: !1, value: e() };
            } catch (n) {
              return { error: !0, value: n };
            }
          };
        },
        /* 121 */
        /***/
        function(a, t, e) {
          a.exports = e(197);
        },
        /* 122 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(8), o = e(123), l = e(11), s = e(19), g = e(66), m = e(83), h = e(13), c = e(37), i = e(18).f, u = e(32).forEach, d = e(14), v = e(42), f = v.set, p = v.getterFor;
          a.exports = function(y, x, E) {
            var S = y.indexOf("Map") !== -1, I = y.indexOf("Weak") !== -1, P = S ? "set" : "add", T = r[y], A = T && T.prototype, D = {}, R;
            if (!d || typeof T != "function" || !(I || A.forEach && !l(function() {
              new T().entries().next();
            })))
              R = E.getConstructor(x, y, S, P), o.REQUIRED = !0;
            else {
              R = x(function(M, b) {
                f(m(M, R, y), {
                  type: y,
                  collection: new T()
                }), b != null && g(b, M[P], M, S);
              });
              var N = p(y);
              u(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(M) {
                var b = M == "add" || M == "set";
                M in A && !(I && M == "clear") && s(R.prototype, M, function(B, F) {
                  var j = N(this).collection;
                  if (!b && I && !h(B)) return M == "get" ? void 0 : !1;
                  var O = j[M](B === 0 ? 0 : B, F);
                  return b ? this : O;
                });
              }), I || i(R.prototype, "size", {
                configurable: !0,
                get: function() {
                  return N(this).collection.size;
                }
              });
            }
            return c(R, y, !1, !0), D[y] = R, n({ global: !0, forced: !0 }, D), I || E.setStrong(R, y, S), R;
          };
        },
        /* 123 */
        /***/
        function(a, t, e) {
          var n = e(51), r = e(13), o = e(16), l = e(18).f, s = e(64), g = e(200), m = s("meta"), h = 0, c = Object.isExtensible || function() {
            return !0;
          }, i = function(p) {
            l(p, m, { value: {
              objectID: "O" + ++h,
              // object ID
              weakData: {}
              // weak collections IDs
            } });
          }, u = function(p, y) {
            if (!r(p)) return typeof p == "symbol" ? p : (typeof p == "string" ? "S" : "P") + p;
            if (!o(p, m)) {
              if (!c(p)) return "F";
              if (!y) return "E";
              i(p);
            }
            return p[m].objectID;
          }, d = function(p, y) {
            if (!o(p, m)) {
              if (!c(p)) return !0;
              if (!y) return !1;
              i(p);
            }
            return p[m].weakData;
          }, v = function(p) {
            return g && f.REQUIRED && c(p) && !o(p, m) && i(p), p;
          }, f = a.exports = {
            REQUIRED: !1,
            fastKey: u,
            getWeakData: d,
            onFreeze: v
          };
          n[m] = !0;
        },
        /* 124 */
        /***/
        function(a, t, e) {
          var n = e(18).f, r = e(77), o = e(110), l = e(40), s = e(83), g = e(66), m = e(75), h = e(111), c = e(14), i = e(123).fastKey, u = e(42), d = u.set, v = u.getterFor;
          a.exports = {
            getConstructor: function(f, p, y, x) {
              var E = f(function(T, A) {
                s(T, E, p), d(T, {
                  type: p,
                  index: r(null),
                  first: void 0,
                  last: void 0,
                  size: 0
                }), c || (T.size = 0), A != null && g(A, T[x], T, y);
              }), S = v(p), I = function(T, A, D) {
                var R = S(T), N = P(T, A), M, b;
                return N ? N.value = D : (R.last = N = {
                  index: b = i(A, !0),
                  key: A,
                  value: D,
                  previous: M = R.last,
                  next: void 0,
                  removed: !1
                }, R.first || (R.first = N), M && (M.next = N), c ? R.size++ : T.size++, b !== "F" && (R.index[b] = N)), T;
              }, P = function(T, A) {
                var D = S(T), R = i(A), N;
                if (R !== "F") return D.index[R];
                for (N = D.first; N; N = N.next)
                  if (N.key == A) return N;
              };
              return o(E.prototype, {
                // 23.1.3.1 Map.prototype.clear()
                // 23.2.3.2 Set.prototype.clear()
                clear: function() {
                  for (var A = this, D = S(A), R = D.index, N = D.first; N; )
                    N.removed = !0, N.previous && (N.previous = N.previous.next = void 0), delete R[N.index], N = N.next;
                  D.first = D.last = void 0, c ? D.size = 0 : A.size = 0;
                },
                // 23.1.3.3 Map.prototype.delete(key)
                // 23.2.3.4 Set.prototype.delete(value)
                delete: function(T) {
                  var A = this, D = S(A), R = P(A, T);
                  if (R) {
                    var N = R.next, M = R.previous;
                    delete D.index[R.index], R.removed = !0, M && (M.next = N), N && (N.previous = M), D.first == R && (D.first = N), D.last == R && (D.last = M), c ? D.size-- : A.size--;
                  }
                  return !!R;
                },
                // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
                // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
                forEach: function(A) {
                  for (var D = S(this), R = l(A, arguments.length > 1 ? arguments[1] : void 0, 3), N; N = N ? N.next : D.first; )
                    for (R(N.value, N.key, this); N && N.removed; ) N = N.previous;
                },
                // 23.1.3.7 Map.prototype.has(key)
                // 23.2.3.7 Set.prototype.has(value)
                has: function(A) {
                  return !!P(this, A);
                }
              }), o(E.prototype, y ? {
                // 23.1.3.6 Map.prototype.get(key)
                get: function(A) {
                  var D = P(this, A);
                  return D && D.value;
                },
                // 23.1.3.9 Map.prototype.set(key, value)
                set: function(A, D) {
                  return I(this, A === 0 ? 0 : A, D);
                }
              } : {
                // 23.2.3.1 Set.prototype.add(value)
                add: function(A) {
                  return I(this, A = A === 0 ? 0 : A, A);
                }
              }), c && n(E.prototype, "size", {
                get: function() {
                  return S(this).size;
                }
              }), E;
            },
            setStrong: function(f, p, y) {
              var x = p + " Iterator", E = v(p), S = v(x);
              m(f, p, function(I, P) {
                d(this, {
                  type: x,
                  target: I,
                  state: E(I),
                  kind: P,
                  last: void 0
                });
              }, function() {
                for (var I = S(this), P = I.kind, T = I.last; T && T.removed; ) T = T.previous;
                return !I.target || !(I.last = T = T ? T.next : I.state.first) ? (I.target = void 0, { value: void 0, done: !0 }) : P == "keys" ? { value: T.key, done: !1 } : P == "values" ? { value: T.value, done: !1 } : { value: [T.key, T.value], done: !1 };
              }, y ? "entries" : "values", !y, !0), h(p);
            }
          };
        },
        /* 125 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("iterator");
        },
        /* 126 */
        /***/
        function(a, t, e) {
          var n = e(107), r = e(80), o = r.concat("length", "prototype");
          t.f = Object.getOwnPropertyNames || function(s) {
            return n(s, o);
          };
        },
        /* 127 */
        /***/
        function(a, t) {
          t.f = Object.getOwnPropertySymbols;
        },
        /* 128 */
        /***/
        function(a, t, e) {
          a.exports = e(268);
        },
        /* 129 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.default = {
            zIndex: 1e4
          };
        },
        /* 130 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.default = {
            focus: !0,
            height: 300,
            placeholder: "请输入正文",
            zIndexFullScreen: 10002,
            showFullScreen: !0
          };
        },
        /* 131 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.getPasteImgs = t.getPasteHtml = t.getPasteText = void 0;
          var l = e(2), s = e(6), g = l.__importDefault(e(292));
          function m(i) {
            var u = i.clipboardData, d = "";
            return u == null ? d = window.clipboardData && window.clipboardData.getData("text") : d = u.getData("text/plain"), s.replaceHtmlSymbol(d);
          }
          t.getPasteText = m;
          function h(i, u, d) {
            u === void 0 && (u = !0), d === void 0 && (d = !1);
            var v = i.clipboardData, f = "";
            if (v && (f = v.getData("text/html")), !f) {
              var p = m(i);
              if (!p)
                return "";
              f = "<p>" + p + "</p>";
            }
            return f = f.replace(/<(\d)/gm, function(y, x) {
              return "&lt;" + x;
            }), f = f.replace(/<(\/?meta.*?)>/gim, ""), f = g.default(f, u, d), f;
          }
          t.getPasteHtml = h;
          function c(i) {
            var u, d = [], v = m(i);
            if (v)
              return d;
            var f = (u = i.clipboardData) === null || u === void 0 ? void 0 : u.items;
            return f && (0, o.default)(s).call(s, f, function(p, y) {
              var x = y.type;
              /image/i.test(x) && d.push(y.getAsFile());
            }), d;
          }
          t.getPasteImgs = c;
        },
        /* 132 */
        /***/
        function(a, t, e) {
          a.exports = e(294);
        },
        /* 133 */
        /***/
        function(a, t, e) {
          a.exports = e(310);
        },
        /* 134 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4)), l = n(e(46));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var s = e(2), g = s.__importDefault(e(3)), m = e(7), h = (
            /** @class */
            function() {
              function c(i, u) {
                var d = this;
                this.hideTimeoutId = 0, this.menu = i, this.conf = u;
                var v = g.default('<div class="w-e-droplist"></div>'), f = g.default("<p>" + u.title + "</p>");
                f.addClass("w-e-dp-title"), v.append(f);
                var p = u.list || [], y = u.type || "list", x = u.clickHandler || m.EMPTY_FN, E = g.default('<ul class="' + (y === "list" ? "w-e-list" : "w-e-block") + '"></ul>');
                (0, o.default)(p).call(p, function(S) {
                  var I = S.$elem, P = S.value, T = g.default('<li class="w-e-item"></li>');
                  I && (T.append(I), E.append(T), T.on("click", function(A) {
                    x(P), A.stopPropagation(), d.hideTimeoutId = (0, l.default)(function() {
                      d.hide();
                    });
                  }));
                }), v.append(E), v.on("mouseleave", function() {
                  d.hideTimeoutId = (0, l.default)(function() {
                    d.hide();
                  });
                }), this.$container = v, this.rendered = !1, this._show = !1;
              }
              return c.prototype.show = function() {
                this.hideTimeoutId && clearTimeout(this.hideTimeoutId);
                var i = this.menu, u = i.$elem, d = this.$container;
                if (!this._show) {
                  if (this.rendered)
                    d.show();
                  else {
                    var v = u.getBoundingClientRect().height || 0, f = this.conf.width || 100;
                    d.css("margin-top", v + "px").css("width", f + "px"), u.append(d), this.rendered = !0;
                  }
                  this._show = !0;
                }
              }, c.prototype.hide = function() {
                var i = this.$container;
                this._show && (i.hide(), this._show = !1);
              }, (0, r.default)(c.prototype, "isShow", {
                get: function() {
                  return this._show;
                },
                enumerable: !1,
                configurable: !0
              }), c;
            }()
          );
          t.default = h;
        },
        /* 135 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(92)), o = n(e(1)), l = n(e(4));
          (0, o.default)(t, "__esModule", {
            value: !0
          });
          var s = e(6);
          function g(m, h) {
            var c = new XMLHttpRequest();
            if (c.open("POST", m), c.timeout = h.timeout || 10 * 1e3, c.ontimeout = function() {
              console.error("wangEditor - 请求超时"), h.onTimeout && h.onTimeout(c);
            }, c.upload && (c.upload.onprogress = function(u) {
              var d = u.loaded / u.total;
              h.onProgress && h.onProgress(d, u);
            }), h.headers && (0, l.default)(s).call(s, h.headers, function(u, d) {
              c.setRequestHeader(u, d);
            }), c.withCredentials = !!h.withCredentials, h.beforeSend) {
              var i = h.beforeSend(c);
              if (i && (0, r.default)(i) === "object" && i.prevent)
                return i.msg;
            }
            return c.onreadystatechange = function() {
              if (c.readyState === 4) {
                var u = c.status;
                if (!(u < 200) && !(u >= 300 && u < 400)) {
                  if (u >= 400) {
                    console.error("wangEditor - XHR 报错，状态码 " + u), h.onError && h.onError(c);
                    return;
                  }
                  var d = c.responseText, v;
                  if ((0, r.default)(d) !== "object")
                    try {
                      v = JSON.parse(d);
                    } catch {
                      console.error("wangEditor - 返回结果不是 JSON 格式", d), h.onFail && h.onFail(c, d);
                      return;
                    }
                  else
                    v = d;
                  h.onSuccess(c, v);
                }
              }
            }, c.send(h.formData || null), c;
          }
          t.default = g;
        },
        /* 136 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(342)), l = n(e(46));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var s = e(2), g = s.__importDefault(e(3)), m = (
            /** @class */
            function() {
              function h(c) {
                this.editor = c, this.$textContainer = c.$textContainerElem, this.$bar = g.default('<div class="w-e-progress"></div>'), this.isShow = !1, this.time = 0, this.timeoutId = 0;
              }
              return h.prototype.show = function(c) {
                var i = this;
                if (!this.isShow) {
                  this.isShow = !0;
                  var u = this.$bar, d = this.$textContainer;
                  d.append(u), (0, o.default)() - this.time > 100 && c <= 1 && (u.css("width", c * 100 + "%"), this.time = (0, o.default)());
                  var v = this.timeoutId;
                  v && clearTimeout(v), this.timeoutId = (0, l.default)(function() {
                    i.hide();
                  }, 500);
                }
              }, h.prototype.hide = function() {
                var c = this.$bar;
                c.remove(), this.isShow = !1, this.time = 0, this.timeoutId = 0;
              }, h;
            }()
          );
          t.default = m;
        },
        /* 137 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.ListType = void 0;
          var o = e(2), l = o.__importDefault(e(3)), s = o.__importDefault(e(24)), g = e(47), m = o.__importStar(e(371)), h;
          (function(i) {
            i.OrderedList = "OL", i.UnorderedList = "UL";
          })(h = t.ListType || (t.ListType = {}));
          var c = (
            /** @class */
            function(i) {
              o.__extends(u, i);
              function u(d) {
                var v = this, f = l.default(`<div class="w-e-menu" data-title="序列">
                <i class="w-e-icon-list2"></i>
            </div>`), p = {
                  width: 130,
                  title: "序列",
                  type: "list",
                  list: [{
                    $elem: l.default(`
                        <p>
                            <i class="w-e-icon-list2 w-e-drop-list-item"></i>
                            ` + d.i18next.t("menus.dropListMenu.list.无序列表") + `
                        <p>`),
                    value: h.UnorderedList
                  }, {
                    $elem: l.default(`<p>
                            <i class="w-e-icon-list-numbered w-e-drop-list-item"></i>
                            ` + d.i18next.t("menus.dropListMenu.list.有序列表") + `
                        <p>`),
                    value: h.OrderedList
                  }],
                  clickHandler: function(x) {
                    v.command(x);
                  }
                };
                return v = i.call(this, f, d, p) || this, v;
              }
              return u.prototype.command = function(d) {
                var v = this.editor, f = v.selection.getSelectionContainerElem();
                f !== void 0 && (this.handleSelectionRangeNodes(d), this.tryChangeActive());
              }, u.prototype.validator = function(d, v, f) {
                return !(!d.length || !v.length || f.equal(d) || f.equal(v));
              }, u.prototype.handleSelectionRangeNodes = function(d) {
                var v = this.editor, f = v.selection, p = d.toLowerCase(), y = f.getSelectionContainerElem(), x = f.getSelectionStartElem().getNodeTop(v), E = f.getSelectionEndElem().getNodeTop(v);
                if (this.validator(x, E, v.$textElem)) {
                  var S = f.getRange(), I = S == null ? void 0 : S.collapsed;
                  v.$textElem.equal(y) || (y = y.getNodeTop(v));
                  var P = {
                    editor: v,
                    listType: d,
                    listTarget: p,
                    $selectionElem: y,
                    $startElem: x,
                    $endElem: E
                  }, T;
                  this.isOrderElem(y) ? T = m.ClassType.Wrap : this.isOrderElem(x) && this.isOrderElem(E) ? T = m.ClassType.Join : this.isOrderElem(x) ? T = m.ClassType.StartJoin : this.isOrderElem(E) ? T = m.ClassType.EndJoin : T = m.ClassType.Other;
                  var A = new m.default(m.createListHandle(T, P, S));
                  g.updateRange(v, A.getSelectionRangeElem(), !!I);
                }
              }, u.prototype.isOrderElem = function(d) {
                var v = d.getNodeName();
                return v === h.OrderedList || v === h.UnorderedList;
              }, u.prototype.tryChangeActive = function() {
              }, u;
            }(s.default)
          );
          t.default = c;
        },
        /* 138 */
        /***/
        function(a, t, e) {
          a.exports = e(395);
        },
        /* 139 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          function o(l) {
            var s = l.selection.getSelectionContainerElem();
            return s != null && s.length ? !!(s.getNodeName() == "CODE" || s.getNodeName() == "PRE" || s.parent().getNodeName() == "CODE" || s.parent().getNodeName() == "PRE" || /hljs/.test(s.parent().attr("class"))) : !1;
          }
          t.default = o;
        },
        /* 140 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(29));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.todo = void 0;
          var l = e(2), s = l.__importDefault(e(3)), g = (
            /** @class */
            function() {
              function h(c) {
                var i;
                this.template = '<ul class="w-e-todo"><li><span contenteditable="false"><input type="checkbox"></span></li></ul>', this.checked = !1, this.$todo = s.default(this.template), this.$child = (i = c == null ? void 0 : c.childNodes()) === null || i === void 0 ? void 0 : i.clone(!0);
              }
              return h.prototype.init = function() {
                var c = this.$child, i = this.getInputContainer();
                c && c.insertAfter(i);
              }, h.prototype.getInput = function() {
                var c = this.$todo, i = (0, o.default)(c).call(c, "input");
                return i;
              }, h.prototype.getInputContainer = function() {
                var c = this.getInput().parent();
                return c;
              }, h.prototype.getTodo = function() {
                return this.$todo;
              }, h;
            }()
          );
          t.todo = g;
          function m(h) {
            var c = new g(h);
            return c.init(), c;
          }
          t.default = m;
        },
        /* 141 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2);
          e(146), e(148), e(152), e(154), e(156), e(158), e(160);
          var l = o.__importDefault(e(87));
          o.__exportStar(e(442), t);
          try {
          } catch {
            throw new Error("请在浏览器环境下运行");
          }
          t.default = l.default;
        },
        /* 142 */
        /***/
        function(a, t, e) {
          var n = e(143);
          a.exports = n;
        },
        /* 143 */
        /***/
        function(a, t, e) {
          e(144);
          var n = e(9), r = n.Object, o = a.exports = function(s, g, m) {
            return r.defineProperty(s, g, m);
          };
          r.defineProperty.sham && (o.sham = !0);
        },
        /* 144 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(14), o = e(18);
          n({ target: "Object", stat: !0, forced: !r, sham: !r }, {
            defineProperty: o.f
          });
        },
        /* 145 */
        /***/
        function(a, t) {
          var e;
          e = /* @__PURE__ */ function() {
            return this;
          }();
          try {
            e = e || new Function("return this")();
          } catch {
            typeof window == "object" && (e = window);
          }
          a.exports = e;
        },
        /* 146 */
        /***/
        function(a, t, e) {
          var n = e(20), r = e(147);
          r = r.__esModule ? r.default : r, typeof r == "string" && (r = [[a.i, r, ""]]);
          var o = {};
          o.insert = "head", o.singleton = !1, n(r, o), a.exports = r.locals || {};
        },
        /* 147 */
        /***/
        function(a, t, e) {
          var n = e(21);
          t = n(!1), t.push([a.i, `.w-e-toolbar,
.w-e-text-container,
.w-e-menu-panel {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background-color: #fff;
  /*表情菜单样式*/
  /*分割线样式*/
}
.w-e-toolbar h1,
.w-e-text-container h1,
.w-e-menu-panel h1 {
  font-size: 32px !important;
}
.w-e-toolbar h2,
.w-e-text-container h2,
.w-e-menu-panel h2 {
  font-size: 24px !important;
}
.w-e-toolbar h3,
.w-e-text-container h3,
.w-e-menu-panel h3 {
  font-size: 18.72px !important;
}
.w-e-toolbar h4,
.w-e-text-container h4,
.w-e-menu-panel h4 {
  font-size: 16px !important;
}
.w-e-toolbar h5,
.w-e-text-container h5,
.w-e-menu-panel h5 {
  font-size: 13.28px !important;
}
.w-e-toolbar p,
.w-e-text-container p,
.w-e-menu-panel p {
  font-size: 16px !important;
}
.w-e-toolbar .eleImg,
.w-e-text-container .eleImg,
.w-e-menu-panel .eleImg {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  padding: 0 3px;
}
.w-e-toolbar *,
.w-e-text-container *,
.w-e-menu-panel * {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.w-e-toolbar hr,
.w-e-text-container hr,
.w-e-menu-panel hr {
  cursor: pointer;
  display: block;
  height: 0px;
  border: 0;
  border-top: 3px solid #ccc;
  margin: 20px 0;
}
.w-e-clear-fix:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-drop-list-item {
  position: relative;
  top: 1px;
  padding-right: 7px;
  color: #333 !important;
}
.w-e-drop-list-tl {
  padding-left: 10px;
  text-align: left;
}
`, ""]), a.exports = t;
        },
        /* 148 */
        /***/
        function(a, t, e) {
          var n = e(20), r = e(149);
          r = r.__esModule ? r.default : r, typeof r == "string" && (r = [[a.i, r, ""]]);
          var o = {};
          o.insert = "head", o.singleton = !1, n(r, o), a.exports = r.locals || {};
        },
        /* 149 */
        /***/
        function(a, t, e) {
          var n = e(21), r = e(150), o = e(151);
          t = n(!1);
          var l = r(o);
          t.push([a.i, `@font-face {
  font-family: 'w-e-icon';
  src: url(` + l + `) format('truetype');
  font-weight: normal;
  font-style: normal;
}
[class^="w-e-icon-"],
[class*=" w-e-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'w-e-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-e-icon-close:before {
  content: "\\f00d";
}
.w-e-icon-upload2:before {
  content: "\\e9c6";
}
.w-e-icon-trash-o:before {
  content: "\\f014";
}
.w-e-icon-header:before {
  content: "\\f1dc";
}
.w-e-icon-pencil2:before {
  content: "\\e906";
}
.w-e-icon-paint-brush:before {
  content: "\\f1fc";
}
.w-e-icon-image:before {
  content: "\\e90d";
}
.w-e-icon-play:before {
  content: "\\e912";
}
.w-e-icon-location:before {
  content: "\\e947";
}
.w-e-icon-undo:before {
  content: "\\e965";
}
.w-e-icon-redo:before {
  content: "\\e966";
}
.w-e-icon-quotes-left:before {
  content: "\\e977";
}
.w-e-icon-list-numbered:before {
  content: "\\e9b9";
}
.w-e-icon-list2:before {
  content: "\\e9bb";
}
.w-e-icon-link:before {
  content: "\\e9cb";
}
.w-e-icon-happy:before {
  content: "\\e9df";
}
.w-e-icon-bold:before {
  content: "\\ea62";
}
.w-e-icon-underline:before {
  content: "\\ea63";
}
.w-e-icon-italic:before {
  content: "\\ea64";
}
.w-e-icon-strikethrough:before {
  content: "\\ea65";
}
.w-e-icon-table2:before {
  content: "\\ea71";
}
.w-e-icon-paragraph-left:before {
  content: "\\ea77";
}
.w-e-icon-paragraph-center:before {
  content: "\\ea78";
}
.w-e-icon-paragraph-right:before {
  content: "\\ea79";
}
.w-e-icon-paragraph-justify:before {
  content: "\\ea7a";
}
.w-e-icon-terminal:before {
  content: "\\f120";
}
.w-e-icon-page-break:before {
  content: "\\ea68";
}
.w-e-icon-cancel-circle:before {
  content: "\\ea0d";
}
.w-e-icon-font:before {
  content: "\\ea5c";
}
.w-e-icon-text-heigh:before {
  content: "\\ea5f";
}
.w-e-icon-paint-format:before {
  content: "\\e90c";
}
.w-e-icon-indent-increase:before {
  content: "\\ea7b";
}
.w-e-icon-indent-decrease:before {
  content: "\\ea7c";
}
.w-e-icon-row-height:before {
  content: "\\e9be";
}
.w-e-icon-fullscreen_exit:before {
  content: "\\e900";
}
.w-e-icon-fullscreen:before {
  content: "\\e901";
}
.w-e-icon-split-line:before {
  content: "\\ea0b";
}
.w-e-icon-checkbox-checked:before {
  content: "\\ea52";
}
`, ""]), a.exports = t;
        },
        /* 150 */
        /***/
        function(a, t, e) {
          a.exports = function(n, r) {
            return r || (r = {}), n = n && n.__esModule ? n.default : n, typeof n != "string" ? n : (/^['"].*['"]$/.test(n) && (n = n.slice(1, -1)), r.hash && (n += r.hash), /["'() \t\n]/.test(n) || r.needQuotes ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : n);
          };
        },
        /* 151 */
        /***/
        function(a, t, e) {
          e.r(t), t.default = "data:font/woff;base64,d09GRgABAAAAABskAAsAAAAAGtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIPFWNtYXAAAAFoAAABHAAAARz2mfAgZ2FzcAAAAoQAAAAIAAAACAAAABBnbHlmAAACjAAAFXwAABV8IH7+mGhlYWQAABgIAAAANgAAADYb6gumaGhlYQAAGEAAAAAkAAAAJAkjBWlobXR4AAAYZAAAAKQAAACkmYcEbmxvY2EAABkIAAAAVAAAAFReAmKYbWF4cAAAGVwAAAAgAAAAIAA0ALZuYW1lAAAZfAAAAYYAAAGGmUoJ+3Bvc3QAABsEAAAAIAAAACAAAwAAAAMD7wGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA8fwDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEAQAAAAA8ACAABAAcAAEAIOkB6QbpDekS6UfpZul36bnpu+m+6cbpy+nf6gvqDepS6lzqX+pl6nHqfPAN8BTxIPHc8fz//f//AAAAAAAg6QDpBukM6RLpR+ll6Xfpuem76b7pxunL6d/qC+oN6lLqXOpf6mLqcep38A3wFPEg8dzx/P/9//8AAf/jFwQXABb7FvcWwxamFpYWVRZUFlIWSxZHFjQWCRYIFcQVuxW5FbcVrBWnEBcQEQ8GDksOLAADAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAAEAEEAAQO/A38ABQALABEAFwAAATMVIREzAxEhFSMVATUzESE1ETUhESM1Av/A/sJ+fgE+wP4Cfv7CAT5+Ar9+AT78ggE+fsACvsD+wn7+An7+wsAAAAAABABBAAEDvwN/AAUACwARABcAAAEhESM1IxM1MxEhNQERIRUjFREVMxUhEQKBAT5+wMB+/sL9wAE+wMD+wgN//sLA/X7A/sJ+AcIBPn7A/v7AfgE+AAAAAAIAAP/ABAADwAAEABMAAAE3AScBAy4BJxM3ASMBAyUBNQEHAYCAAcBA/kCfFzsyY4ABgMD+gMACgAGA/oBOAUBAAcBA/kD+nTI7FwERTgGA/oD9gMABgMD+gIAAAgAA/8AEAAOAACkALQAAAREjNTQmIyEiBh0BFBYzITI2PQEzESEVIyIGFREUFjsBMjY1ETQmKwE1ASE1IQQAwCYa/UAaJiYaAsAaJoD9wCANExMNgA0TEw0gAUD9QALAAYABgEAaJiYawBomJhpA/wCAEw3+wA0TEw0BQA0TQAGAQAAABAAAAAAEAAOAABAAIQAtADQAAAE4ATEROAExITgBMRE4ATEhNSEiBhURFBYzITI2NRE0JiMHFAYjIiY1NDYzMhYTITUTATM3A8D8gAOA/IAaJiYaA4AaJiYagDgoKDg4KCg4QP0A4AEAQOADQP0AAwBAJhr9ABomJhoDABom4Cg4OCgoODj9uIABgP7AwAAAAgAAAEAEAANAADgAPAAAASYnLgEnJiMiBw4BBwYHBgcOAQcGFRQXHgEXFhcWFx4BFxYzMjc+ATc2NzY3PgE3NjU0Jy4BJyYnARENAQPVNjg5djw9Pz89PHY5ODYLBwgLAwMDAwsIBws2ODl2PD0/Pz08djk4NgsHCAsDAwMDCwgHC/2rAUD+wAMgCAYGCAICAgIIBgYIKSoqWS0uLy8uLVkqKikIBgYIAgICAggGBggpKipZLS4vLy4tWSoqKf3gAYDAwAAAAAACAMD/wANAA8AAGwAnAAABIgcOAQcGFRQXHgEXFjEwNz4BNzY1NCcuAScmAyImNTQ2MzIWFRQGAgBCOzpXGRkyMngyMjIyeDIyGRlXOjtCUHBwUFBwcAPAGRlXOjtCeH19zEFBQUHMfX14Qjs6VxkZ/gBwUFBwcFBQcAAAAQAAAAAEAAOAACsAAAEiBw4BBwYHJxEhJz4BMzIXHgEXFhUUBw4BBwYHFzY3PgE3NjU0Jy4BJyYjAgA1MjJcKSkjlgGAkDWLUFBFRmkeHgkJIhgYHlUoICAtDAwoKIteXWoDgAoLJxscI5b+gJA0PB4eaUZFUCsoKUkgIRpgIysrYjY2OWpdXosoKAABAAAAAAQAA4AAKgAAExQXHgEXFhc3JicuAScmNTQ3PgE3NjMyFhcHIREHJicuAScmIyIHDgEHBgAMDC0gIChVHhgYIgkJHh5pRkVQUIs1kAGAliMpKVwyMjVqXV6LKCgBgDk2NmIrKyNgGiEgSSkoK1BFRmkeHjw0kAGAliMcGycLCigoi15dAAAAAAIAAABABAEDAAAmAE0AABMyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+ASEyFx4BFxYVFAcOAQcGIyInLgEnJjUnNDc+ATc2MxUiBgcOAQc+AeEuKSk9ERISET0pKS4uKSk9ERIBIyN6UlFdQHUtCRAHCBICSS4pKT0REhIRPSkpLi4pKT0REgEjI3pSUV1AdS0JEAcIEgIAEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBEhE9KSkuLikpPRESEhE9KSkuIF1RUnojI4AwLggTCgIBAAAGAED/wAQAA8AAAwAHAAsAEQAdACkAACUhFSERIRUhESEVIScRIzUjNRMVMxUjNTc1IzUzFRURIzUzNSM1MzUjNQGAAoD9gAKA/YACgP2AwEBAQIDAgIDAwICAgICAgAIAgAIAgMD/AMBA/fIyQJI8MkCS7v7AQEBAQEAABgAA/8AEAAPAAAMABwALABcAIwAvAAABIRUhESEVIREhFSEBNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYRNDYzMhYVFAYjIiYBgAKA/YACgP2AAoD9gP6ASzU1S0s1NUtLNTVLSzU1S0s1NUtLNTVLA4CA/wCA/wCAA0A1S0s1NUtL/rU1S0s1NUtL/rU1S0s1NUtLAAUAAABABWADAAADAAcACwAOABEAABMhFSEVIRUhFSEVIQEXNzUnBwADgPyAA4D8gAOA/IAD4MDAwMADAMBAwEDAAUDAwEDAwAAAAAADAAAAAAQAA6AAAwANABQAADchFSElFSE1EyEVITUhJQkBIxEjEQAEAPwABAD8AIABAAEAAQD9YAEgASDggEBAwEBAAQCAgMABIP7g/wABAAAAAAACAB7/zAPiA7QAMwBkAAABIiYnJicmNDc2PwE+ATMyFhcWFxYUBwYPAQYiJyY0PwE2NCcuASMiBg8BBhQXFhQHDgEjAyImJyYnJjQ3Nj8BNjIXFhQPAQYUFx4BMzI2PwE2NCcmNDc2MhcWFxYUBwYPAQ4BIwG4ChMIIxISEhIjwCNZMTFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PCBMKuDFZIyMSEhISI1gPLA8PD1gpKRQzHBwzFMApKQ8PDysQIxISEhIjwCNZMQFECAckLS1eLS0kwCIlJSIkLS1eLS0kVxAQDysPWCl0KRQVFRTAKXQpDysQBwj+iCUiJC0tXi0tJFcQEA8rD1gpdCkUFRUUwCl0KQ8rEA8PJC0tXi0tJMAiJQAAAAAFAAD/wAQAA8AAGwA3AFMAXwBrAAAFMjc+ATc2NTQnLgEnJiMiBw4BBwYVFBceARcWEzIXHgEXFhUUBw4BBwYjIicuAScmNTQ3PgE3NhMyNz4BNzY3BgcOAQcGIyInLgEnJicWFx4BFxYnNDYzMhYVFAYjIiYlNDYzMhYVFAYjIiYCAGpdXosoKCgoi15dampdXosoKCgoi15dalZMTHEgISEgcUxMVlZMTHEgISEgcUxMVisrKlEmJiMFHBtWODc/Pzc4VhscBSMmJlEqK9UlGxslJRsbJQGAJRsbJSUbGyVAKCiLXl1qal1eiygoKCiLXl1qal1eiygoA6AhIHFMTFZWTExxICEhIHFMTFZWTExxICH+CQYGFRAQFEM6OlYYGRkYVjo6QxQQEBUGBvcoODgoKDg4KCg4OCgoODgAAAEAAAFABAACQAAPAAATFRQWMyEyNj0BNCYjISIGABMNA8ANExMN/EANEwIgwA0TEw3ADRMTAAAAAwAA/8AEAAPAABsANwBDAAABIgcOAQcGFRQXHgEXFjMyNz4BNzY1NCcuAScmAyInLgEnJjU0Nz4BNzYzMhceARcWFRQHDgEHBhMHJwcXBxc3FzcnNwIAal1eiygoKCiLXl1qal1eiygoKCiLXl1qVkxMcSAhISBxTExWVkxMcSAhISBxTExKoKBgoKBgoKBgoKADwCgoi15dampdXosoKCgoi15dampdXosoKPxgISBxTExWVkxMcSAhISBxTExWVkxMcSAhAqCgoGCgoGCgoGCgoAACAAD/wAQAA8AADwAVAAABISIGFREUFjMhMjY1ETQmASc3FwEXA4D9ADVLSzUDADVLS/4L7VqTATNaA8BLNf0ANUtLNQMANUv85e5akgEyWgAAAAABAGX/wAObA8AAKQAAASImIyIHDgEHBhUUFjMuATU0NjcwBwYCBwYHFSETMzcjNx4BMzI2Nw4BAyBEaEZxU1RtGhtJSAYNZUoQEEs8PFkBPWzGLNc0LVUmLlAYHT0DsBAeHWE+P0FNOwsmN5lvA31+/sWPkCMZAgCA9gkPN2sJBwAAAAACAAAAAAQAA4AACQAXAAAlMwcnMxEjNxcjJREnIxEzFSE1MxEjBxEDgICgoICAoKCA/wBAwID+gIDAQMDAwAIAwMDA/wCA/UBAQALAgAEAAAMAwAAAA0ADgAAWAB8AKAAAAT4BNTQnLgEnJiMhESEyNz4BNzY1NCYBMzIWFRQGKwETIxEzMhYVFAYCxBwgFBRGLi81/sABgDUvLkYUFET+hGUqPDwpZp+fnyw+PgHbIlQvNS8uRhQU/IAUFEYuLzVGdAFGSzU1S/6AAQBLNTVLAAAAAAIAwAAAA0ADgAAfACMAAAEzERQHDgEHBiMiJy4BJyY1ETMRFBYXHgEzMjY3PgE1ASEVIQLAgBkZVzo7QkI7OlcZGYAbGBxJKChJHBgb/gACgP2AA4D+YDw0NU4WFxcWTjU0PAGg/mAeOBcYGxsYFzge/qCAAAAAAAEAgAAAA4ADgAALAAABFSMBMxUhNTMBIzUDgID+wID+QIABQIADgED9AEBAAwBAAAEAAAAABAADgAA9AAABFSMeARUUBgcOASMiJicuATUzFBYzMjY1NCYjITUhLgEnLgE1NDY3PgEzMhYXHgEVIzQmIyIGFRQWMzIWFwQA6xUWNTAscT4+cSwwNYByTk5yck7+AAEsAgQBMDU1MCxxPj5xLDA1gHJOTnJyTjtuKwHAQB1BIjViJCEkJCEkYjU0TEw0NExAAQMBJGI1NWIkISQkISRiNTRMTDQ0TCEfAAAACgAAAAAEAAOAAAMABwALAA8AEwAXABsAHwAjACcAABMRIREBNSEVHQEhNQEVITUjFSE1ESEVISUhFSERNSEVASEVISE1IRUABAD9gAEA/wABAP8AQP8AAQD/AAKAAQD/AAEA/IABAP8AAoABAAOA/IADgP3AwMBAwMACAMDAwMD/AMDAwAEAwMD+wMDAwAAABQAAAAAEAAOAAAMABwALAA8AEwAAEyEVIRUhFSERIRUhESEVIREhFSEABAD8AAKA/YACgP2ABAD8AAQA/AADgIBAgP8AgAFAgP8AgAAAAAAFAAAAAAQAA4AAAwAHAAsADwATAAATIRUhFyEVIREhFSEDIRUhESEVIQAEAPwAwAKA/YACgP2AwAQA/AAEAPwAA4CAQID/AIABQID/AIAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEFIRUhESEVIQEhFSERIRUhAAQA/AABgAKA/YACgP2A/oAEAPwABAD8AAOAgECA/wCAAUCA/wCAAAAAAAUAAAAABAADgAADAAcACwAPABMAABMhFSEVIRUhFSEVIRUhFSEVIRUhAAQA/AAEAPwABAD8AAQA/AAEAPwAA4CAQIBAgECAQIAAAAAGAAAAAAQAA4AAAwAHAAsADwATABYAABMhFSEFIRUhFSEVIRUhFSEFIRUhGQEFAAQA/AABgAKA/YACgP2AAoD9gP6ABAD8AAEAA4CAQIBAgECAQIABAAGAwAAAAAYAAAAABAADgAADAAcACwAPABMAFgAAEyEVIQUhFSEVIRUhFSEVIQUhFSEBESUABAD8AAGAAoD9gAKA/YACgP2A/oAEAPwAAQD/AAOAgECAQIBAgECAAoD+gMAAAQA/AD8C5gLmACwAACUUDwEGIyIvAQcGIyIvASY1ND8BJyY1ND8BNjMyHwE3NjMyHwEWFRQPARcWFQLmEE4QFxcQqKgQFxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQwxYQThAQqKgQEE4QFhcQqKgQFxcQThAQqKgQEE4QFxcQqKgQFwAAAAYAAAAAAyUDbgAUACgAPABNAFUAggAAAREUBwYrASInJjURNDc2OwEyFxYVMxEUBwYrASInJjURNDc2OwEyFxYXERQHBisBIicmNRE0NzY7ATIXFhMRIREUFxYXFjMhMjc2NzY1ASEnJicjBgcFFRQHBisBERQHBiMhIicmNREjIicmPQE0NzY7ATc2NzY7ATIXFh8BMzIXFhUBJQYFCCQIBQYGBQgkCAUGkgUFCCUIBQUFBQglCAUFkgUFCCUIBQUFBQglCAUFSf4ABAQFBAIB2wIEBAQE/oABABsEBrUGBAH3BgUINxobJv4lJhsbNwgFBQUFCLEoCBcWF7cXFhYJKLAIBQYCEv63CAUFBQUIAUkIBQYGBQj+twgFBQUFCAFJCAUGBgUI/rcIBQUFBQgBSQgFBgYF/lsCHf3jDQsKBQUFBQoLDQJmQwUCAgVVJAgGBf3jMCIjISIvAiAFBggkCAUFYBUPDw8PFWAFBQgAAgAHAEkDtwKvABoALgAACQEGIyIvASY1ND8BJyY1ND8BNjMyFwEWFRQHARUUBwYjISInJj0BNDc2MyEyFxYBTv72BgcIBR0GBuHhBgYdBQgHBgEKBgYCaQUFCP3bCAUFBQUIAiUIBQUBhf72BgYcBggHBuDhBgcHBh0FBf71BQgHBv77JQgFBQUFCCUIBQUFBQAAAAEAIwAAA90DbgCzAAAlIicmIyIHBiMiJyY1NDc2NzY3Njc2PQE0JyYjISIHBh0BFBcWFxYzFhcWFRQHBiMiJyYjIgcGIyInJjU0NzY3Njc2NzY9ARE0NTQ1NCc0JyYnJicmJyYnJiMiJyY1NDc2MzIXFjMyNzYzMhcWFRQHBiMGBwYHBh0BFBcWMyEyNzY9ATQnJicmJyY1NDc2MzIXFjMyNzYzMhcWFRQHBgciBwYHBhURFBcWFxYXMhcWFRQHBiMDwRkzMhoZMjMZDQgHCQoNDBEQChIBBxX+fhYHARUJEhMODgwLBwcOGzU1GhgxMRgNBwcJCQsMEA8JEgECAQIDBAQFCBIRDQ0KCwcHDho1NRoYMDEYDgcHCQoMDRAQCBQBBw8BkA4HARQKFxcPDgcHDhkzMhkZMTEZDgcHCgoNDRARCBQUCRERDg0KCwcHDgACAgICDAsPEQkJAQEDAwUMROAMBQMDBQzUUQ0GAQIBCAgSDwwNAgICAgwMDhEICQECAwMFDUUhAdACDQ0ICA4OCgoLCwcHAwYBAQgIEg8MDQICAgINDA8RCAgBAgEGDFC2DAcBAQcMtlAMBgEBBgcWDwwNAgICAg0MDxEICAEBAgYNT/3mRAwGAgIBCQgRDwwNAAACAAD/twP/A7cAEwA5AAABMhcWFRQHAgcGIyInJjU0NwE2MwEWFxYfARYHBiMiJyYnJicmNRYXFhcWFxYzMjc2NzY3Njc2NzY3A5soHh4avkw3RUg0NDUBbSEp/fgXJicvAQJMTHtHNjYhIRARBBMUEBASEQkXCA8SExUVHR0eHikDtxsaKCQz/plGNDU0SUkwAUsf/bErHx8NKHpNTBobLi86OkQDDw4LCwoKFiUbGhERCgsEBAIAAQAAAAAAAIWwaoFfDzz1AAsEAAAAAADbteOZAAAAANu145kAAP+3BWADwAAAAAgAAgAAAAAAAAABAAADwP/AAAAFgAAA//8FYAABAAAAAAAAAAAAAAAAAAAAKQQAAAAAAAAAAAAAAAIAAAAEAABBBAAAQQQAAAAEAAAABAAAAAQAAAAEAADABAAAAAQAAAAEAAAABAAAQAQAAAAFgAAABAAAAAQAAB4EAAAABAAAAAQAAAAEAAAABAAAZQQAAAAEAADABAAAwAQAAIAEAAAABAAAAAQAAAAEAAAABAAAAAQAAAAEAAAABAAAAAMlAD8DJQAAA74ABwQAACMD/wAAAAAAAAAKABQAHgBKAHYApADmAS4BkgHQAhYCXALQAw4DWAN+A6gEPgTeBPoFZAWOBdAF+AY6BnYGjgbmBy4HVgd+B6gHzgf8CCoIbgkmCXAKYgq+AAEAAAApALQACgAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
        },
        /* 152 */
        /***/
        function(a, t, e) {
          var n = e(20), r = e(153);
          r = r.__esModule ? r.default : r, typeof r == "string" && (r = [[a.i, r, ""]]);
          var o = {};
          o.insert = "head", o.singleton = !1, n(r, o), a.exports = r.locals || {};
        },
        /* 153 */
        /***/
        function(a, t, e) {
          var n = e(21);
          t = n(!1), t.push([a.i, `.w-e-toolbar {
  display: flex;
  padding: 0 6px;
  flex-wrap: wrap;
  position: relative;
  /* 单个菜单 */
}
.w-e-toolbar .w-e-menu {
  position: relative;
  display: flex;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
}
.w-e-toolbar .w-e-menu i {
  color: #999;
}
.w-e-toolbar .w-e-menu:hover {
  background-color: #F6F6F6;
}
.w-e-toolbar .w-e-menu:hover i {
  color: #333;
}
.w-e-toolbar .w-e-active i {
  color: #1e88e5;
}
.w-e-toolbar .w-e-active:hover i {
  color: #1e88e5;
}
.w-e-menu-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-menu-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-menu-tooltip-item-wrapper {
  font-size: 14px;
  margin: 0 5px;
}
`, ""]), a.exports = t;
        },
        /* 154 */
        /***/
        function(a, t, e) {
          var n = e(20), r = e(155);
          r = r.__esModule ? r.default : r, typeof r == "string" && (r = [[a.i, r, ""]]);
          var o = {};
          o.insert = "head", o.singleton = !1, n(r, o), a.exports = r.locals || {};
        },
        /* 155 */
        /***/
        function(a, t, e) {
          var n = e(21);
          t = n(!1), t.push([a.i, `.w-e-text-container {
  position: relative;
  height: 100%;
}
.w-e-text-container .w-e-progress {
  position: absolute;
  background-color: #1e88e5;
  top: 0;
  left: 0;
  height: 1px;
}
.w-e-text-container .placeholder {
  color: #D4D4D4;
  position: absolute;
  font-size: 11pt;
  line-height: 22px;
  left: 10px;
  top: 10px;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  z-index: -1;
}
.w-e-text {
  padding: 0 10px;
  overflow-y: auto;
}
.w-e-text p,
.w-e-text h1,
.w-e-text h2,
.w-e-text h3,
.w-e-text h4,
.w-e-text h5,
.w-e-text table,
.w-e-text pre {
  margin: 10px 0;
  line-height: 1.5;
}
.w-e-text ul,
.w-e-text ol {
  margin: 10px 0 10px 20px;
}
.w-e-text blockquote {
  display: block;
  border-left: 8px solid #d0e5f2;
  padding: 5px 10px;
  margin: 10px 0;
  line-height: 1.4;
  font-size: 100%;
  background-color: #f1f1f1;
}
.w-e-text code {
  display: inline-block;
  background-color: #f1f1f1;
  border-radius: 3px;
  padding: 3px 5px;
  margin: 0 3px;
}
.w-e-text pre code {
  display: block;
}
.w-e-text table {
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
}
.w-e-text table td,
.w-e-text table th {
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  padding: 3px 5px;
  min-height: 30px;
  height: 30px;
}
.w-e-text table th {
  border-bottom: 2px solid #ccc;
  text-align: center;
  background-color: #f1f1f1;
}
.w-e-text:focus {
  outline: none;
}
.w-e-text img {
  cursor: pointer;
}
.w-e-text img:hover {
  box-shadow: 0 0 5px #333;
}
.w-e-text .w-e-todo {
  margin: 0 0 0 20px;
}
.w-e-text .w-e-todo li {
  list-style: none;
  font-size: 1em;
}
.w-e-text .w-e-todo li span:nth-child(1) {
  position: relative;
  left: -18px;
}
.w-e-text .w-e-todo li span:nth-child(1) input {
  position: absolute;
  margin-right: 3px;
}
.w-e-text .w-e-todo li span:nth-child(1) input[type=checkbox] {
  top: 50%;
  margin-top: -6px;
}
.w-e-tooltip {
  position: absolute;
  display: flex;
  color: #f1f1f1;
  background-color: rgba(0, 0, 0, 0.75);
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 4px 5px 6px;
  justify-content: center;
  align-items: center;
}
.w-e-tooltip-up::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-down::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border: 5px solid rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0.73);
}
.w-e-tooltip-item-wrapper {
  cursor: pointer;
  font-size: 14px;
  margin: 0 5px;
}
.w-e-tooltip-item-wrapper:hover {
  color: #ccc;
  text-decoration: underline;
}
`, ""]), a.exports = t;
        },
        /* 156 */
        /***/
        function(a, t, e) {
          var n = e(20), r = e(157);
          r = r.__esModule ? r.default : r, typeof r == "string" && (r = [[a.i, r, ""]]);
          var o = {};
          o.insert = "head", o.singleton = !1, n(r, o), a.exports = r.locals || {};
        },
        /* 157 */
        /***/
        function(a, t, e) {
          var n = e(21);
          t = n(!1), t.push([a.i, `.w-e-menu .w-e-panel-container {
  position: absolute;
  top: 0;
  left: 50%;
  border: 1px solid #ccc;
  border-top: 0;
  box-shadow: 1px 1px 2px #ccc;
  color: #333;
  background-color: #fff;
  text-align: left;
  /* 为 emotion panel 定制的样式 */
  /* 上传图片、上传视频的 panel 定制样式 */
}
.w-e-menu .w-e-panel-container .w-e-panel-close {
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
  margin: 2px 5px 0 0;
  cursor: pointer;
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-close:hover {
  color: #333;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title {
  list-style: none;
  display: flex;
  font-size: 14px;
  margin: 2px 10px 0 10px;
  border-bottom: 1px solid #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-item {
  padding: 3px 5px;
  color: #999;
  cursor: pointer;
  margin: 0 3px;
  position: relative;
  top: 1px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-title .w-e-active {
  color: #333;
  border-bottom: 1px solid #333;
  cursor: default;
  font-weight: 700;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content {
  padding: 10px 15px 10px 15px;
  font-size: 16px;
  /* 输入框的样式 */
  /* 按钮的样式 */
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus,
.w-e-menu .w-e-panel-container .w-e-panel-tab-content button:focus {
  outline: none;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea {
  width: 100%;
  border: 1px solid #ccc;
  padding: 5px;
  margin-top: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content textarea:focus {
  border-color: #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text] {
  border: none;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  height: 20px;
  color: #333;
  text-align: left;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].small {
  width: 30px;
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text].block {
  display: block;
  width: 100%;
  margin: 10px 0;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {
  border-bottom: 2px solid #1e88e5;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {
  font-size: 14px;
  color: #1e88e5;
  border: none;
  padding: 5px 10px;
  background-color: #fff;
  cursor: pointer;
  border-radius: 3px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {
  float: left;
  margin-right: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {
  float: right;
  margin-left: 10px;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {
  color: #999;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {
  color: #c24f4a;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {
  background-color: #f1f1f1;
}
.w-e-menu .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {
  content: "";
  display: table;
  clear: both;
}
.w-e-menu .w-e-panel-container .w-e-emoticon-container .w-e-item {
  cursor: pointer;
  font-size: 18px;
  padding: 0 3px;
  display: inline-block;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container,
.w-e-menu .w-e-panel-container .w-e-up-video-container {
  text-align: center;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn {
  display: inline-block;
  color: #999;
  cursor: pointer;
  font-size: 60px;
  line-height: 1;
}
.w-e-menu .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover,
.w-e-menu .w-e-panel-container .w-e-up-video-container .w-e-up-btn:hover {
  color: #333;
}
`, ""]), a.exports = t;
        },
        /* 158 */
        /***/
        function(a, t, e) {
          var n = e(20), r = e(159);
          r = r.__esModule ? r.default : r, typeof r == "string" && (r = [[a.i, r, ""]]);
          var o = {};
          o.insert = "head", o.singleton = !1, n(r, o), a.exports = r.locals || {};
        },
        /* 159 */
        /***/
        function(a, t, e) {
          var n = e(21);
          t = n(!1), t.push([a.i, `.w-e-toolbar .w-e-droplist {
  position: absolute;
  left: 0;
  top: 0;
  background-color: #fff;
  border: 1px solid #f1f1f1;
  border-right-color: #ccc;
  border-bottom-color: #ccc;
}
.w-e-toolbar .w-e-droplist .w-e-dp-title {
  text-align: center;
  color: #999;
  line-height: 2;
  border-bottom: 1px solid #f1f1f1;
  font-size: 13px;
}
.w-e-toolbar .w-e-droplist ul.w-e-list {
  list-style: none;
  line-height: 1;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {
  color: #333;
  padding: 5px 0;
}
.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {
  background-color: #f1f1f1;
}
.w-e-toolbar .w-e-droplist ul.w-e-block {
  list-style: none;
  text-align: left;
  padding: 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {
  display: inline-block;
  padding: 3px 5px;
}
.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {
  background-color: #f1f1f1;
}
`, ""]), a.exports = t;
        },
        /* 160 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(161));
          Element.prototype.matches || (Element.prototype.matches = function(o) {
            var l = this.ownerDocument.querySelectorAll(o), s = l.length;
            for (s; s >= 0 && l.item(s) !== this; s--)
              ;
            return s > -1;
          }), r.default || (window.Promise = r.default);
        },
        /* 161 */
        /***/
        function(a, t, e) {
          a.exports = e(162);
        },
        /* 162 */
        /***/
        function(a, t, e) {
          var n = e(163);
          a.exports = n;
        },
        /* 163 */
        /***/
        function(a, t, e) {
          e(61), e(50), e(54), e(175), e(178), e(179);
          var n = e(9);
          a.exports = n.Promise;
        },
        /* 164 */
        /***/
        function(a, t, e) {
          var n = e(62), r = e(49), o = function(l) {
            return function(s, g) {
              var m = String(r(s)), h = n(g), c = m.length, i, u;
              return h < 0 || h >= c ? l ? "" : void 0 : (i = m.charCodeAt(h), i < 55296 || i > 56319 || h + 1 === c || (u = m.charCodeAt(h + 1)) < 56320 || u > 57343 ? l ? m.charAt(h) : i : l ? m.slice(h, h + 2) : (i - 55296 << 10) + (u - 56320) + 65536);
            };
          };
          a.exports = {
            // `String.prototype.codePointAt` method
            // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
            codeAt: o(!1),
            // `String.prototype.at` method
            // https://github.com/mathiasbynens/String.prototype.at
            charAt: o(!0)
          };
        },
        /* 165 */
        /***/
        function(a, t, e) {
          var n = e(8), r = e(102), o = n.WeakMap;
          a.exports = typeof o == "function" && /native code/.test(r(o));
        },
        /* 166 */
        /***/
        function(a, t, e) {
          var n = e(8), r = e(19);
          a.exports = function(o, l) {
            try {
              r(n, o, l);
            } catch {
              n[o] = l;
            }
            return l;
          };
        },
        /* 167 */
        /***/
        function(a, t, e) {
          var n = e(104).IteratorPrototype, r = e(77), o = e(48), l = e(37), s = e(44), g = function() {
            return this;
          };
          a.exports = function(m, h, c) {
            var i = h + " Iterator";
            return m.prototype = r(n, { next: o(1, c) }), l(m, i, !1, !0), s[i] = g, m;
          };
        },
        /* 168 */
        /***/
        function(a, t, e) {
          var n = e(11);
          a.exports = !n(function() {
            function r() {
            }
            return r.prototype.constructor = null, Object.getPrototypeOf(new r()) !== r.prototype;
          });
        },
        /* 169 */
        /***/
        function(a, t, e) {
          var n = e(14), r = e(18), o = e(25), l = e(52);
          a.exports = n ? Object.defineProperties : function(g, m) {
            o(g);
            for (var h = l(m), c = h.length, i = 0, u; c > i; ) r.f(g, u = h[i++], m[u]);
            return g;
          };
        },
        /* 170 */
        /***/
        function(a, t, e) {
          var n = e(81), r = e(65);
          a.exports = n ? {}.toString : function() {
            return "[object " + r(this) + "]";
          };
        },
        /* 171 */
        /***/
        function(a, t, e) {
          var n = e(25), r = e(172);
          a.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var o = !1, l = {}, s;
            try {
              s = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, s.call(l, []), o = l instanceof Array;
            } catch {
            }
            return function(m, h) {
              return n(m), r(h), o ? s.call(m, h) : m.__proto__ = h, m;
            };
          }() : void 0);
        },
        /* 172 */
        /***/
        function(a, t, e) {
          var n = e(13);
          a.exports = function(r) {
            if (!n(r) && r !== null)
              throw TypeError("Can't set " + String(r) + " as a prototype");
            return r;
          };
        },
        /* 173 */
        /***/
        function(a, t, e) {
          var n = e(30), r = e(82), o = e(44), l = e(42), s = e(75), g = "Array Iterator", m = l.set, h = l.getterFor(g);
          a.exports = s(Array, "Array", function(c, i) {
            m(this, {
              type: g,
              target: n(c),
              // target
              index: 0,
              // next index
              kind: i
              // kind
            });
          }, function() {
            var c = h(this), i = c.target, u = c.kind, d = c.index++;
            return !i || d >= i.length ? (c.target = void 0, { value: void 0, done: !0 }) : u == "keys" ? { value: d, done: !1 } : u == "values" ? { value: i[d], done: !1 } : { value: [d, i[d]], done: !1 };
          }, "values"), o.Arguments = o.Array, r("keys"), r("values"), r("entries");
        },
        /* 174 */
        /***/
        function(a, t) {
          a.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
          };
        },
        /* 175 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(43), o = e(8), l = e(36), s = e(109), g = e(53), m = e(110), h = e(37), c = e(111), i = e(13), u = e(41), d = e(83), v = e(34), f = e(102), p = e(66), y = e(115), x = e(116), E = e(117).set, S = e(176), I = e(119), P = e(177), T = e(85), A = e(120), D = e(42), R = e(101), N = e(10), M = e(86), b = N("species"), B = "Promise", F = D.get, j = D.set, O = D.getterFor(B), L = s, H = o.TypeError, J = o.document, U = o.process, Z = l("fetch"), W = T.f, Q = W, Y = v(U) == "process", X = !!(J && J.createEvent && o.dispatchEvent), ee = "unhandledrejection", de = "rejectionhandled", he = 0, Re = 1, dn = 2, Se = 1, en = 2, Ue, Ce, Be, Qe, $e = R(B, function() {
            var k = f(L) !== String(L);
            if (!k && (M === 66 || !Y && typeof PromiseRejectionEvent != "function") || r && !L.prototype.finally) return !0;
            if (M >= 51 && /native code/.test(L)) return !1;
            var V = L.resolve(1), te = function(K) {
              K(function() {
              }, function() {
              });
            }, re = V.constructor = {};
            return re[b] = te, !(V.then(function() {
            }) instanceof te);
          }), Cn = $e || !y(function(k) {
            L.all(k).catch(function() {
            });
          }), Ve = function(k) {
            var V;
            return i(k) && typeof (V = k.then) == "function" ? V : !1;
          }, je = function(k, V, te) {
            if (!V.notified) {
              V.notified = !0;
              var re = V.reactions;
              S(function() {
                for (var K = V.value, G = V.state == Re, q = 0; re.length > q; ) {
                  var ae = re[q++], le = G ? ae.ok : ae.fail, ge = ae.resolve, Te = ae.reject, Ne = ae.domain, Ee, tn, cn;
                  try {
                    le ? (G || (V.rejection === en && Ke(k, V), V.rejection = Se), le === !0 ? Ee = K : (Ne && Ne.enter(), Ee = le(K), Ne && (Ne.exit(), cn = !0)), Ee === ae.promise ? Te(H("Promise-chain cycle")) : (tn = Ve(Ee)) ? tn.call(Ee, ge, Te) : ge(Ee)) : Te(K);
                  } catch (Yt) {
                    Ne && !cn && Ne.exit(), Te(Yt);
                  }
                }
                V.reactions = [], V.notified = !1, te && !V.rejection && nn(k, V);
              });
            }
          }, Ye = function(k, V, te) {
            var re, K;
            X ? (re = J.createEvent("Event"), re.promise = V, re.reason = te, re.initEvent(k, !1, !0), o.dispatchEvent(re)) : re = { promise: V, reason: te }, (K = o["on" + k]) ? K(re) : k === ee && P("Unhandled promise rejection", te);
          }, nn = function(k, V) {
            E.call(o, function() {
              var te = V.value, re = Ge(V), K;
              if (re && (K = A(function() {
                Y ? U.emit("unhandledRejection", te, k) : Ye(ee, k, te);
              }), V.rejection = Y || Ge(V) ? en : Se, K.error))
                throw K.value;
            });
          }, Ge = function(k) {
            return k.rejection !== Se && !k.parent;
          }, Ke = function(k, V) {
            E.call(o, function() {
              Y ? U.emit("rejectionHandled", k) : Ye(de, k, V.value);
            });
          }, Fe = function(k, V, te, re) {
            return function(K) {
              k(V, te, K, re);
            };
          }, Le = function(k, V, te, re) {
            V.done || (V.done = !0, re && (V = re), V.value = te, V.state = dn, je(k, V, !0));
          }, He = function(k, V, te, re) {
            if (!V.done) {
              V.done = !0, re && (V = re);
              try {
                if (k === te) throw H("Promise can't be resolved itself");
                var K = Ve(te);
                K ? S(function() {
                  var G = { done: !1 };
                  try {
                    K.call(
                      te,
                      Fe(He, k, G, V),
                      Fe(Le, k, G, V)
                    );
                  } catch (q) {
                    Le(k, G, q, V);
                  }
                }) : (V.value = te, V.state = Re, je(k, V, !1));
              } catch (G) {
                Le(k, { done: !1 }, G, V);
              }
            }
          };
          $e && (L = function(V) {
            d(this, L, B), u(V), Ue.call(this);
            var te = F(this);
            try {
              V(Fe(He, this, te), Fe(Le, this, te));
            } catch (re) {
              Le(this, te, re);
            }
          }, Ue = function(V) {
            j(this, {
              type: B,
              done: !1,
              notified: !1,
              parent: !1,
              reactions: [],
              rejection: !1,
              state: he,
              value: void 0
            });
          }, Ue.prototype = m(L.prototype, {
            // `Promise.prototype.then` method
            // https://tc39.github.io/ecma262/#sec-promise.prototype.then
            then: function(V, te) {
              var re = O(this), K = W(x(this, L));
              return K.ok = typeof V == "function" ? V : !0, K.fail = typeof te == "function" && te, K.domain = Y ? U.domain : void 0, re.parent = !0, re.reactions.push(K), re.state != he && je(this, re, !1), K.promise;
            },
            // `Promise.prototype.catch` method
            // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
            catch: function(k) {
              return this.then(void 0, k);
            }
          }), Ce = function() {
            var k = new Ue(), V = F(k);
            this.promise = k, this.resolve = Fe(He, k, V), this.reject = Fe(Le, k, V);
          }, T.f = W = function(k) {
            return k === L || k === Be ? new Ce(k) : Q(k);
          }, !r && typeof s == "function" && (Qe = s.prototype.then, g(s.prototype, "then", function(V, te) {
            var re = this;
            return new L(function(K, G) {
              Qe.call(re, K, G);
            }).then(V, te);
          }, { unsafe: !0 }), typeof Z == "function" && n({ global: !0, enumerable: !0, forced: !0 }, {
            // eslint-disable-next-line no-unused-vars
            fetch: function(V) {
              return I(L, Z.apply(o, arguments));
            }
          }))), n({ global: !0, wrap: !0, forced: $e }, {
            Promise: L
          }), h(L, B, !1, !0), c(B), Be = l(B), n({ target: B, stat: !0, forced: $e }, {
            // `Promise.reject` method
            // https://tc39.github.io/ecma262/#sec-promise.reject
            reject: function(V) {
              var te = W(this);
              return te.reject.call(void 0, V), te.promise;
            }
          }), n({ target: B, stat: !0, forced: r || $e }, {
            // `Promise.resolve` method
            // https://tc39.github.io/ecma262/#sec-promise.resolve
            resolve: function(V) {
              return I(r && this === Be ? L : this, V);
            }
          }), n({ target: B, stat: !0, forced: Cn }, {
            // `Promise.all` method
            // https://tc39.github.io/ecma262/#sec-promise.all
            all: function(V) {
              var te = this, re = W(te), K = re.resolve, G = re.reject, q = A(function() {
                var ae = u(te.resolve), le = [], ge = 0, Te = 1;
                p(V, function(Ne) {
                  var Ee = ge++, tn = !1;
                  le.push(void 0), Te++, ae.call(te, Ne).then(function(cn) {
                    tn || (tn = !0, le[Ee] = cn, --Te || K(le));
                  }, G);
                }), --Te || K(le);
              });
              return q.error && G(q.value), re.promise;
            },
            // `Promise.race` method
            // https://tc39.github.io/ecma262/#sec-promise.race
            race: function(V) {
              var te = this, re = W(te), K = re.reject, G = A(function() {
                var q = u(te.resolve);
                p(V, function(ae) {
                  q.call(te, ae).then(re.resolve, K);
                });
              });
              return G.error && K(G.value), re.promise;
            }
          });
        },
        /* 176 */
        /***/
        function(a, t, e) {
          var n = e(8), r = e(71).f, o = e(34), l = e(117).set, s = e(118), g = n.MutationObserver || n.WebKitMutationObserver, m = n.process, h = n.Promise, c = o(m) == "process", i = r(n, "queueMicrotask"), u = i && i.value, d, v, f, p, y, x, E, S;
          u || (d = function() {
            var I, P;
            for (c && (I = m.domain) && I.exit(); v; ) {
              P = v.fn, v = v.next;
              try {
                P();
              } catch (T) {
                throw v ? p() : f = void 0, T;
              }
            }
            f = void 0, I && I.enter();
          }, c ? p = function() {
            m.nextTick(d);
          } : g && !s ? (y = !0, x = document.createTextNode(""), new g(d).observe(x, { characterData: !0 }), p = function() {
            x.data = y = !y;
          }) : h && h.resolve ? (E = h.resolve(void 0), S = E.then, p = function() {
            S.call(E, d);
          }) : p = function() {
            l.call(n, d);
          }), a.exports = u || function(I) {
            var P = { fn: I, next: void 0 };
            f && (f.next = P), v || (v = P, p()), f = P;
          };
        },
        /* 177 */
        /***/
        function(a, t, e) {
          var n = e(8);
          a.exports = function(r, o) {
            var l = n.console;
            l && l.error && (arguments.length === 1 ? l.error(r) : l.error(r, o));
          };
        },
        /* 178 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(41), o = e(85), l = e(120), s = e(66);
          n({ target: "Promise", stat: !0 }, {
            allSettled: function(m) {
              var h = this, c = o.f(h), i = c.resolve, u = c.reject, d = l(function() {
                var v = r(h.resolve), f = [], p = 0, y = 1;
                s(m, function(x) {
                  var E = p++, S = !1;
                  f.push(void 0), y++, v.call(h, x).then(function(I) {
                    S || (S = !0, f[E] = { status: "fulfilled", value: I }, --y || i(f));
                  }, function(I) {
                    S || (S = !0, f[E] = { status: "rejected", reason: I }, --y || i(f));
                  });
                }), --y || i(f);
              });
              return d.error && u(d.value), c.promise;
            }
          });
        },
        /* 179 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(43), o = e(109), l = e(11), s = e(36), g = e(116), m = e(119), h = e(53), c = !!o && l(function() {
            o.prototype.finally.call({ then: function() {
            } }, function() {
            });
          });
          n({ target: "Promise", proto: !0, real: !0, forced: c }, {
            finally: function(i) {
              var u = g(this, s("Promise")), d = typeof i == "function";
              return this.then(
                d ? function(v) {
                  return m(u, i()).then(function() {
                    return v;
                  });
                } : i,
                d ? function(v) {
                  return m(u, i()).then(function() {
                    throw v;
                  });
                } : i
              );
            }
          }), !r && typeof o == "function" && !o.prototype.finally && h(o.prototype, "finally", s("Promise").prototype.finally);
        },
        /* 180 */
        /***/
        function(a, t, e) {
          e(54);
          var n = e(181), r = e(65), o = Array.prototype, l = {
            DOMTokenList: !0,
            NodeList: !0
          };
          a.exports = function(s) {
            var g = s.forEach;
            return s === o || s instanceof Array && g === o.forEach || l.hasOwnProperty(r(s)) ? n : g;
          };
        },
        /* 181 */
        /***/
        function(a, t, e) {
          var n = e(182);
          a.exports = n;
        },
        /* 182 */
        /***/
        function(a, t, e) {
          e(183);
          var n = e(15);
          a.exports = n("Array").forEach;
        },
        /* 183 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(184);
          n({ target: "Array", proto: !0, forced: [].forEach != r }, {
            forEach: r
          });
        },
        /* 184 */
        /***/
        function(a, t, e) {
          var n = e(32).forEach, r = e(67), o = e(22), l = r("forEach"), s = o("forEach");
          a.exports = !l || !s ? function(m) {
            return n(this, m, arguments.length > 1 ? arguments[1] : void 0);
          } : [].forEach;
        },
        /* 185 */
        /***/
        function(a, t, e) {
          var n = e(186);
          a.exports = n;
        },
        /* 186 */
        /***/
        function(a, t, e) {
          e(187);
          var n = e(9);
          a.exports = n.Array.isArray;
        },
        /* 187 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(55);
          n({ target: "Array", stat: !0 }, {
            isArray: r
          });
        },
        /* 188 */
        /***/
        function(a, t, e) {
          var n = e(189);
          a.exports = n;
        },
        /* 189 */
        /***/
        function(a, t, e) {
          var n = e(190), r = Array.prototype;
          a.exports = function(o) {
            var l = o.map;
            return o === r || o instanceof Array && l === r.map ? n : l;
          };
        },
        /* 190 */
        /***/
        function(a, t, e) {
          e(191);
          var n = e(15);
          a.exports = n("Array").map;
        },
        /* 191 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(32).map, o = e(56), l = e(22), s = o("map"), g = l("map");
          n({ target: "Array", proto: !0, forced: !s || !g }, {
            map: function(h) {
              return r(this, h, arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        /* 192 */
        /***/
        function(a, t, e) {
          var n = e(193);
          a.exports = n;
        },
        /* 193 */
        /***/
        function(a, t, e) {
          var n = e(194), r = String.prototype;
          a.exports = function(o) {
            var l = o.trim;
            return typeof o == "string" || o === r || o instanceof String && l === r.trim ? n : l;
          };
        },
        /* 194 */
        /***/
        function(a, t, e) {
          e(195);
          var n = e(15);
          a.exports = n("String").trim;
        },
        /* 195 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(90).trim, o = e(196);
          n({ target: "String", proto: !0, forced: o("trim") }, {
            trim: function() {
              return r(this);
            }
          });
        },
        /* 196 */
        /***/
        function(a, t, e) {
          var n = e(11), r = e(68), o = "​᠎";
          a.exports = function(l) {
            return n(function() {
              return !!r[l]() || o[l]() != o || r[l].name !== l;
            });
          };
        },
        /* 197 */
        /***/
        function(a, t, e) {
          var n = e(198);
          a.exports = n;
        },
        /* 198 */
        /***/
        function(a, t, e) {
          e(199), e(61), e(50), e(54);
          var n = e(9);
          a.exports = n.Map;
        },
        /* 199 */
        /***/
        function(a, t, e) {
          var n = e(122), r = e(124);
          a.exports = n("Map", function(o) {
            return function() {
              return o(this, arguments.length ? arguments[0] : void 0);
            };
          }, r);
        },
        /* 200 */
        /***/
        function(a, t, e) {
          var n = e(11);
          a.exports = !n(function() {
            return Object.isExtensible(Object.preventExtensions({}));
          });
        },
        /* 201 */
        /***/
        function(a, t, e) {
          var n = e(202);
          a.exports = n;
        },
        /* 202 */
        /***/
        function(a, t, e) {
          var n = e(203), r = Array.prototype;
          a.exports = function(o) {
            var l = o.indexOf;
            return o === r || o instanceof Array && l === r.indexOf ? n : l;
          };
        },
        /* 203 */
        /***/
        function(a, t, e) {
          e(204);
          var n = e(15);
          a.exports = n("Array").indexOf;
        },
        /* 204 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(78).indexOf, o = e(67), l = e(22), s = [].indexOf, g = !!s && 1 / [1].indexOf(1, -0) < 0, m = o("indexOf"), h = l("indexOf", { ACCESSORS: !0, 1: 0 });
          n({ target: "Array", proto: !0, forced: g || !m || !h }, {
            indexOf: function(i) {
              return g ? s.apply(this, arguments) || 0 : r(this, i, arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        /* 205 */
        /***/
        function(a, t, e) {
          var n = e(206);
          a.exports = n;
        },
        /* 206 */
        /***/
        function(a, t, e) {
          var n = e(207), r = Array.prototype;
          a.exports = function(o) {
            var l = o.splice;
            return o === r || o instanceof Array && l === r.splice ? n : l;
          };
        },
        /* 207 */
        /***/
        function(a, t, e) {
          e(208);
          var n = e(15);
          a.exports = n("Array").splice;
        },
        /* 208 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(79), o = e(62), l = e(35), s = e(31), g = e(88), m = e(69), h = e(56), c = e(22), i = h("splice"), u = c("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), d = Math.max, v = Math.min, f = 9007199254740991, p = "Maximum allowed length exceeded";
          n({ target: "Array", proto: !0, forced: !i || !u }, {
            splice: function(x, E) {
              var S = s(this), I = l(S.length), P = r(x, I), T = arguments.length, A, D, R, N, M, b;
              if (T === 0 ? A = D = 0 : T === 1 ? (A = 0, D = I - P) : (A = T - 2, D = v(d(o(E), 0), I - P)), I + A - D > f)
                throw TypeError(p);
              for (R = g(S, D), N = 0; N < D; N++)
                M = P + N, M in S && m(R, N, S[M]);
              if (R.length = D, A < D) {
                for (N = P; N < I - D; N++)
                  M = N + D, b = N + A, M in S ? S[b] = S[M] : delete S[b];
                for (N = I; N > I - D + A; N--) delete S[N - 1];
              } else if (A > D)
                for (N = I - D; N > P; N--)
                  M = N + D - 1, b = N + A - 1, M in S ? S[b] = S[M] : delete S[b];
              for (N = 0; N < A; N++)
                S[N + P] = arguments[N + 2];
              return S.length = I - D + A, R;
            }
          });
        },
        /* 209 */
        /***/
        function(a, t, e) {
          var n = e(210);
          a.exports = n;
        },
        /* 210 */
        /***/
        function(a, t, e) {
          var n = e(211), r = Array.prototype;
          a.exports = function(o) {
            var l = o.filter;
            return o === r || o instanceof Array && l === r.filter ? n : l;
          };
        },
        /* 211 */
        /***/
        function(a, t, e) {
          e(212);
          var n = e(15);
          a.exports = n("Array").filter;
        },
        /* 212 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(32).filter, o = e(56), l = e(22), s = o("filter"), g = l("filter");
          n({ target: "Array", proto: !0, forced: !s || !g }, {
            filter: function(h) {
              return r(this, h, arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        /* 213 */
        /***/
        function(a, t, e) {
          var n = e(214);
          a.exports = n;
        },
        /* 214 */
        /***/
        function(a, t, e) {
          var n = e(215), r = e(217), o = Array.prototype, l = String.prototype;
          a.exports = function(s) {
            var g = s.includes;
            return s === o || s instanceof Array && g === o.includes ? n : typeof s == "string" || s === l || s instanceof String && g === l.includes ? r : g;
          };
        },
        /* 215 */
        /***/
        function(a, t, e) {
          e(216);
          var n = e(15);
          a.exports = n("Array").includes;
        },
        /* 216 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(78).includes, o = e(82), l = e(22), s = l("indexOf", { ACCESSORS: !0, 1: 0 });
          n({ target: "Array", proto: !0, forced: !s }, {
            includes: function(m) {
              return r(this, m, arguments.length > 1 ? arguments[1] : void 0);
            }
          }), o("includes");
        },
        /* 217 */
        /***/
        function(a, t, e) {
          e(218);
          var n = e(15);
          a.exports = n("String").includes;
        },
        /* 218 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(219), o = e(49), l = e(221);
          n({ target: "String", proto: !0, forced: !l("includes") }, {
            includes: function(g) {
              return !!~String(o(this)).indexOf(r(g), arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        /* 219 */
        /***/
        function(a, t, e) {
          var n = e(220);
          a.exports = function(r) {
            if (n(r))
              throw TypeError("The method doesn't accept regular expressions");
            return r;
          };
        },
        /* 220 */
        /***/
        function(a, t, e) {
          var n = e(13), r = e(34), o = e(10), l = o("match");
          a.exports = function(s) {
            var g;
            return n(s) && ((g = s[l]) !== void 0 ? !!g : r(s) == "RegExp");
          };
        },
        /* 221 */
        /***/
        function(a, t, e) {
          var n = e(10), r = n("match");
          a.exports = function(o) {
            var l = /./;
            try {
              "/./"[o](l);
            } catch {
              try {
                return l[r] = !1, "/./"[o](l);
              } catch {
              }
            }
            return !1;
          };
        },
        /* 222 */
        /***/
        function(a, t, e) {
          var n = e(223);
          a.exports = n;
        },
        /* 223 */
        /***/
        function(a, t, e) {
          var n = e(224), r = Function.prototype;
          a.exports = function(o) {
            var l = o.bind;
            return o === r || o instanceof Function && l === r.bind ? n : l;
          };
        },
        /* 224 */
        /***/
        function(a, t, e) {
          e(225);
          var n = e(15);
          a.exports = n("Function").bind;
        },
        /* 225 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(226);
          n({ target: "Function", proto: !0 }, {
            bind: r
          });
        },
        /* 226 */
        /***/
        function(a, t, e) {
          var n = e(41), r = e(13), o = [].slice, l = {}, s = function(g, m, h) {
            if (!(m in l)) {
              for (var c = [], i = 0; i < m; i++) c[i] = "a[" + i + "]";
              l[m] = Function("C,a", "return new C(" + c.join(",") + ")");
            }
            return l[m](g, h);
          };
          a.exports = Function.bind || function(m) {
            var h = n(this), c = o.call(arguments, 1), i = function() {
              var d = c.concat(o.call(arguments));
              return this instanceof i ? s(h, d.length, d) : h.apply(m, d);
            };
            return r(h.prototype) && (i.prototype = h.prototype), i;
          };
        },
        /* 227 */
        /***/
        function(a, t, e) {
          a.exports = e(228);
        },
        /* 228 */
        /***/
        function(a, t, e) {
          var n = e(229);
          a.exports = n;
        },
        /* 229 */
        /***/
        function(a, t, e) {
          e(125), e(50), e(54);
          var n = e(93);
          a.exports = n.f("iterator");
        },
        /* 230 */
        /***/
        function(a, t, e) {
          a.exports = e(231);
        },
        /* 231 */
        /***/
        function(a, t, e) {
          var n = e(232);
          e(251), e(252), e(253), e(254), e(255), a.exports = n;
        },
        /* 232 */
        /***/
        function(a, t, e) {
          e(233), e(61), e(234), e(236), e(237), e(238), e(239), e(125), e(240), e(241), e(242), e(243), e(244), e(245), e(246), e(247), e(248), e(249), e(250);
          var n = e(9);
          a.exports = n.Symbol;
        },
        /* 233 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(11), o = e(55), l = e(13), s = e(31), g = e(35), m = e(69), h = e(88), c = e(56), i = e(10), u = e(86), d = i("isConcatSpreadable"), v = 9007199254740991, f = "Maximum allowed index exceeded", p = u >= 51 || !r(function() {
            var S = [];
            return S[d] = !1, S.concat()[0] !== S;
          }), y = c("concat"), x = function(S) {
            if (!l(S)) return !1;
            var I = S[d];
            return I !== void 0 ? !!I : o(S);
          }, E = !p || !y;
          n({ target: "Array", proto: !0, forced: E }, {
            concat: function(I) {
              var P = s(this), T = h(P, 0), A = 0, D, R, N, M, b;
              for (D = -1, N = arguments.length; D < N; D++)
                if (b = D === -1 ? P : arguments[D], x(b)) {
                  if (M = g(b.length), A + M > v) throw TypeError(f);
                  for (R = 0; R < M; R++, A++) R in b && m(T, A, b[R]);
                } else {
                  if (A >= v) throw TypeError(f);
                  m(T, A++, b);
                }
              return T.length = A, T;
            }
          });
        },
        /* 234 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(8), o = e(36), l = e(43), s = e(14), g = e(76), m = e(106), h = e(11), c = e(16), i = e(55), u = e(13), d = e(25), v = e(31), f = e(30), p = e(60), y = e(48), x = e(77), E = e(52), S = e(126), I = e(235), P = e(127), T = e(71), A = e(18), D = e(59), R = e(19), N = e(53), M = e(74), b = e(63), B = e(51), F = e(64), j = e(10), O = e(93), L = e(12), H = e(37), J = e(42), U = e(32).forEach, Z = b("hidden"), W = "Symbol", Q = "prototype", Y = j("toPrimitive"), X = J.set, ee = J.getterFor(W), de = Object[Q], he = r.Symbol, Re = o("JSON", "stringify"), dn = T.f, Se = A.f, en = I.f, Ue = D.f, Ce = M("symbols"), Be = M("op-symbols"), Qe = M("string-to-symbol-registry"), $e = M("symbol-to-string-registry"), Cn = M("wks"), Ve = r.QObject, je = !Ve || !Ve[Q] || !Ve[Q].findChild, Ye = s && h(function() {
            return x(Se({}, "a", {
              get: function() {
                return Se(this, "a", { value: 7 }).a;
              }
            })).a != 7;
          }) ? function(K, G, q) {
            var ae = dn(de, G);
            ae && delete de[G], Se(K, G, q), ae && K !== de && Se(de, G, ae);
          } : Se, nn = function(K, G) {
            var q = Ce[K] = x(he[Q]);
            return X(q, {
              type: W,
              tag: K,
              description: G
            }), s || (q.description = G), q;
          }, Ge = m ? function(K) {
            return typeof K == "symbol";
          } : function(K) {
            return Object(K) instanceof he;
          }, Ke = function(G, q, ae) {
            G === de && Ke(Be, q, ae), d(G);
            var le = p(q, !0);
            return d(ae), c(Ce, le) ? (ae.enumerable ? (c(G, Z) && G[Z][le] && (G[Z][le] = !1), ae = x(ae, { enumerable: y(0, !1) })) : (c(G, Z) || Se(G, Z, y(1, {})), G[Z][le] = !0), Ye(G, le, ae)) : Se(G, le, ae);
          }, Fe = function(G, q) {
            d(G);
            var ae = f(q), le = E(ae).concat(te(ae));
            return U(le, function(ge) {
              (!s || He.call(ae, ge)) && Ke(G, ge, ae[ge]);
            }), G;
          }, Le = function(G, q) {
            return q === void 0 ? x(G) : Fe(x(G), q);
          }, He = function(G) {
            var q = p(G, !0), ae = Ue.call(this, q);
            return this === de && c(Ce, q) && !c(Be, q) ? !1 : ae || !c(this, q) || !c(Ce, q) || c(this, Z) && this[Z][q] ? ae : !0;
          }, k = function(G, q) {
            var ae = f(G), le = p(q, !0);
            if (!(ae === de && c(Ce, le) && !c(Be, le))) {
              var ge = dn(ae, le);
              return ge && c(Ce, le) && !(c(ae, Z) && ae[Z][le]) && (ge.enumerable = !0), ge;
            }
          }, V = function(G) {
            var q = en(f(G)), ae = [];
            return U(q, function(le) {
              !c(Ce, le) && !c(B, le) && ae.push(le);
            }), ae;
          }, te = function(G) {
            var q = G === de, ae = en(q ? Be : f(G)), le = [];
            return U(ae, function(ge) {
              c(Ce, ge) && (!q || c(de, ge)) && le.push(Ce[ge]);
            }), le;
          };
          if (g || (he = function() {
            if (this instanceof he) throw TypeError("Symbol is not a constructor");
            var G = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), q = F(G), ae = function(le) {
              this === de && ae.call(Be, le), c(this, Z) && c(this[Z], q) && (this[Z][q] = !1), Ye(this, q, y(1, le));
            };
            return s && je && Ye(de, q, { configurable: !0, set: ae }), nn(q, G);
          }, N(he[Q], "toString", function() {
            return ee(this).tag;
          }), N(he, "withoutSetter", function(K) {
            return nn(F(K), K);
          }), D.f = He, A.f = Ke, T.f = k, S.f = I.f = V, P.f = te, O.f = function(K) {
            return nn(j(K), K);
          }, s && (Se(he[Q], "description", {
            configurable: !0,
            get: function() {
              return ee(this).description;
            }
          }), l || N(de, "propertyIsEnumerable", He, { unsafe: !0 }))), n({ global: !0, wrap: !0, forced: !g, sham: !g }, {
            Symbol: he
          }), U(E(Cn), function(K) {
            L(K);
          }), n({ target: W, stat: !0, forced: !g }, {
            // `Symbol.for` method
            // https://tc39.github.io/ecma262/#sec-symbol.for
            for: function(K) {
              var G = String(K);
              if (c(Qe, G)) return Qe[G];
              var q = he(G);
              return Qe[G] = q, $e[q] = G, q;
            },
            // `Symbol.keyFor` method
            // https://tc39.github.io/ecma262/#sec-symbol.keyfor
            keyFor: function(G) {
              if (!Ge(G)) throw TypeError(G + " is not a symbol");
              if (c($e, G)) return $e[G];
            },
            useSetter: function() {
              je = !0;
            },
            useSimple: function() {
              je = !1;
            }
          }), n({ target: "Object", stat: !0, forced: !g, sham: !s }, {
            // `Object.create` method
            // https://tc39.github.io/ecma262/#sec-object.create
            create: Le,
            // `Object.defineProperty` method
            // https://tc39.github.io/ecma262/#sec-object.defineproperty
            defineProperty: Ke,
            // `Object.defineProperties` method
            // https://tc39.github.io/ecma262/#sec-object.defineproperties
            defineProperties: Fe,
            // `Object.getOwnPropertyDescriptor` method
            // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
            getOwnPropertyDescriptor: k
          }), n({ target: "Object", stat: !0, forced: !g }, {
            // `Object.getOwnPropertyNames` method
            // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
            getOwnPropertyNames: V,
            // `Object.getOwnPropertySymbols` method
            // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
            getOwnPropertySymbols: te
          }), n({ target: "Object", stat: !0, forced: h(function() {
            P.f(1);
          }) }, {
            getOwnPropertySymbols: function(G) {
              return P.f(v(G));
            }
          }), Re) {
            var re = !g || h(function() {
              var K = he();
              return Re([K]) != "[null]" || Re({ a: K }) != "{}" || Re(Object(K)) != "{}";
            });
            n({ target: "JSON", stat: !0, forced: re }, {
              // eslint-disable-next-line no-unused-vars
              stringify: function(G, q, ae) {
                for (var le = [G], ge = 1, Te; arguments.length > ge; ) le.push(arguments[ge++]);
                if (Te = q, !(!u(q) && G === void 0 || Ge(G)))
                  return i(q) || (q = function(Ne, Ee) {
                    if (typeof Te == "function" && (Ee = Te.call(this, Ne, Ee)), !Ge(Ee)) return Ee;
                  }), le[1] = q, Re.apply(null, le);
              }
            });
          }
          he[Q][Y] || R(he[Q], Y, he[Q].valueOf), H(he, W), B[Z] = !0;
        },
        /* 235 */
        /***/
        function(a, t, e) {
          var n = e(30), r = e(126).f, o = {}.toString, l = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], s = function(g) {
            try {
              return r(g);
            } catch {
              return l.slice();
            }
          };
          a.exports.f = function(m) {
            return l && o.call(m) == "[object Window]" ? s(m) : r(n(m));
          };
        },
        /* 236 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("asyncIterator");
        },
        /* 237 */
        /***/
        function(a, t) {
        },
        /* 238 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("hasInstance");
        },
        /* 239 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("isConcatSpreadable");
        },
        /* 240 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("match");
        },
        /* 241 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("matchAll");
        },
        /* 242 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("replace");
        },
        /* 243 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("search");
        },
        /* 244 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("species");
        },
        /* 245 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("split");
        },
        /* 246 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("toPrimitive");
        },
        /* 247 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("toStringTag");
        },
        /* 248 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("unscopables");
        },
        /* 249 */
        /***/
        function(a, t, e) {
          var n = e(37);
          n(Math, "Math", !0);
        },
        /* 250 */
        /***/
        function(a, t, e) {
          var n = e(8), r = e(37);
          r(n.JSON, "JSON", !0);
        },
        /* 251 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("asyncDispose");
        },
        /* 252 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("dispose");
        },
        /* 253 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("observable");
        },
        /* 254 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("patternMatch");
        },
        /* 255 */
        /***/
        function(a, t, e) {
          var n = e(12);
          n("replaceAll");
        },
        /* 256 */
        /***/
        function(a, t, e) {
          a.exports = e(257);
        },
        /* 257 */
        /***/
        function(a, t, e) {
          var n = e(258);
          a.exports = n;
        },
        /* 258 */
        /***/
        function(a, t, e) {
          e(259);
          var n = e(9);
          a.exports = n.parseInt;
        },
        /* 259 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(260);
          n({ global: !0, forced: parseInt != r }, {
            parseInt: r
          });
        },
        /* 260 */
        /***/
        function(a, t, e) {
          var n = e(8), r = e(90).trim, o = e(68), l = n.parseInt, s = /^[+-]?0[Xx]/, g = l(o + "08") !== 8 || l(o + "0x16") !== 22;
          a.exports = g ? function(h, c) {
            var i = r(String(h));
            return l(i, c >>> 0 || (s.test(i) ? 16 : 10));
          } : l;
        },
        /* 261 */
        /***/
        function(a, t, e) {
          var n = e(262);
          a.exports = n;
        },
        /* 262 */
        /***/
        function(a, t, e) {
          var n = e(263), r = Array.prototype;
          a.exports = function(o) {
            var l = o.slice;
            return o === r || o instanceof Array && l === r.slice ? n : l;
          };
        },
        /* 263 */
        /***/
        function(a, t, e) {
          e(264);
          var n = e(15);
          a.exports = n("Array").slice;
        },
        /* 264 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(13), o = e(55), l = e(79), s = e(35), g = e(30), m = e(69), h = e(10), c = e(56), i = e(22), u = c("slice"), d = i("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), v = h("species"), f = [].slice, p = Math.max;
          n({ target: "Array", proto: !0, forced: !u || !d }, {
            slice: function(x, E) {
              var S = g(this), I = s(S.length), P = l(x, I), T = l(E === void 0 ? I : E, I), A, D, R;
              if (o(S) && (A = S.constructor, typeof A == "function" && (A === Array || o(A.prototype)) ? A = void 0 : r(A) && (A = A[v], A === null && (A = void 0)), A === Array || A === void 0))
                return f.call(S, P, T);
              for (D = new (A === void 0 ? Array : A)(p(T - P, 0)), R = 0; P < T; P++, R++) P in S && m(D, R, S[P]);
              return D.length = R, D;
            }
          });
        },
        /* 265 */
        /***/
        function(a, t, e) {
          e(266);
          var n = e(9);
          a.exports = n.setTimeout;
        },
        /* 266 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(8), o = e(84), l = [].slice, s = /MSIE .\./.test(o), g = function(m) {
            return function(h, c) {
              var i = arguments.length > 2, u = i ? l.call(arguments, 2) : void 0;
              return m(i ? function() {
                (typeof h == "function" ? h : Function(h)).apply(this, u);
              } : h, c);
            };
          };
          n({ global: !0, bind: !0, forced: s }, {
            // `setTimeout` method
            // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
            setTimeout: g(r.setTimeout),
            // `setInterval` method
            // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
            setInterval: g(r.setInterval)
          });
        },
        /* 267 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(128));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(272)), g = l.__importDefault(e(273)), m = l.__importDefault(e(129)), h = l.__importDefault(e(274)), c = l.__importDefault(e(275)), i = l.__importDefault(e(276)), u = l.__importDefault(e(130)), d = l.__importDefault(e(277)), v = l.__importDefault(e(278)), f = l.__importDefault(e(279)), p = (0, o.default)(
            {},
            s.default,
            g.default,
            m.default,
            c.default,
            h.default,
            i.default,
            u.default,
            d.default,
            v.default,
            f.default,
            //链接校验的配置函数
            {
              linkCheck: function(x, E) {
                return !0;
              }
            }
          );
          t.default = p;
        },
        /* 268 */
        /***/
        function(a, t, e) {
          var n = e(269);
          a.exports = n;
        },
        /* 269 */
        /***/
        function(a, t, e) {
          e(270);
          var n = e(9);
          a.exports = n.Object.assign;
        },
        /* 270 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(271);
          n({ target: "Object", stat: !0, forced: Object.assign !== r }, {
            assign: r
          });
        },
        /* 271 */
        /***/
        function(a, t, e) {
          var n = e(14), r = e(11), o = e(52), l = e(127), s = e(59), g = e(31), m = e(72), h = Object.assign, c = Object.defineProperty;
          a.exports = !h || r(function() {
            if (n && h({ b: 1 }, h(c({}, "a", {
              enumerable: !0,
              get: function() {
                c(this, "b", {
                  value: 3,
                  enumerable: !1
                });
              }
            }), { b: 2 })).b !== 1) return !0;
            var i = {}, u = {}, d = Symbol(), v = "abcdefghijklmnopqrst";
            return i[d] = 7, v.split("").forEach(function(f) {
              u[f] = f;
            }), h({}, i)[d] != 7 || o(h({}, u)).join("") != v;
          }) ? function(u, d) {
            for (var v = g(u), f = arguments.length, p = 1, y = l.f, x = s.f; f > p; )
              for (var E = m(arguments[p++]), S = y ? o(E).concat(y(E)) : o(E), I = S.length, P = 0, T; I > P; )
                T = S[P++], (!n || x.call(E, T)) && (v[T] = E[T]);
            return v;
          } : h;
        },
        /* 272 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.default = {
            menus: [
              "head",
              "bold",
              "fontSize",
              // 'customFontSize',
              "fontName",
              "italic",
              "underline",
              "strikeThrough",
              "indent",
              "lineHeight",
              "foreColor",
              "backColor",
              "link",
              "list",
              "todo",
              "justify",
              "quote",
              "emoticon",
              "image",
              "video",
              "table",
              "code",
              "splitLine",
              "undo",
              "redo"
            ],
            fontNames: ["黑体", "仿宋", "楷体", "标楷体", "华文仿宋", "华文楷体", "宋体", "微软雅黑", "Arial", "Tahoma", "Verdana", "Times New Roman", "Courier New"],
            //  fontNames: [{ name: '宋体', value: '宋体' }],
            fontSizes: {
              "x-small": {
                name: "10px",
                value: "1"
              },
              small: {
                name: "13px",
                value: "2"
              },
              normal: {
                name: "16px",
                value: "3"
              },
              large: {
                name: "18px",
                value: "4"
              },
              "x-large": {
                name: "24px",
                value: "5"
              },
              "xx-large": {
                name: "32px",
                value: "6"
              },
              "xxx-large": {
                name: "48px",
                value: "7"
              }
            },
            // customFontSize: [ // 该菜单暂时不用 - 王福朋 20200924
            //     { value: '9px', text: '9' },
            //     { value: '10px', text: '10' },
            //     { value: '12px', text: '12' },
            //     { value: '14px', text: '14' },
            //     { value: '16px', text: '16' },
            //     { value: '20px', text: '20' },
            //     { value: '42px', text: '42' },
            //     { value: '72px', text: '72' },
            // ],
            colors: ["#000000", "#ffffff", "#eeece0", "#1c487f", "#4d80bf", "#c24f4a", "#8baa4a", "#7b5ba1", "#46acc8", "#f9963b"],
            //插入代码语言配置
            languageType: ["Bash", "C", "C#", "C++", "CSS", "Java", "JavaScript", "JSON", "TypeScript", "Plain text", "Html", "XML", "SQL", "Go", "Kotlin", "Lua", "Markdown", "PHP", "Python", "Shell Session", "Ruby"],
            languageTab: "　　　　",
            /**
             * 表情配置菜单
             * 如果为emoji表情直接作为元素插入
             * emoticon:Array<EmotionsType>
             */
            emotions: [{
              // tab 的标题
              title: "表情",
              // type -> 'emoji' / 'image'
              type: "emoji",
              // content -> 数组
              content: "😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😛 😝 😜 🤓 😎 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 😢 😭 😤 😠 😡 😳 😱 😨 🤗 🤔 😶 😑 😬 🙄 😯 😴 😷 🤑 😈 🤡 💩 👻 💀 👀 👣".split(/\s/)
            }, {
              // tab 的标题
              title: "手势",
              // type -> 'emoji' / 'image'
              type: "emoji",
              // content -> 数组
              content: "👐 🙌 👏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🙏".split(/\s/)
            }],
            lineHeights: ["1", "1.15", "1.6", "2", "2.5", "3"],
            undoLimit: 20,
            indentation: "2em",
            showMenuTooltips: !0,
            // 菜单栏tooltip为上标还是下标
            menuTooltipPosition: "up"
          };
        },
        /* 273 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(7);
          function l(s, g, m) {
            window.alert(s), m && console.error("wangEditor: " + m);
          }
          t.default = {
            onchangeTimeout: 200,
            onchange: null,
            onfocus: o.EMPTY_FN,
            onblur: o.EMPTY_FN,
            onCatalogChange: null,
            customAlert: l
          };
        },
        /* 274 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.default = {
            // 粘贴过滤样式，默认开启
            pasteFilterStyle: !0,
            // 粘贴内容时，忽略图片。默认关闭
            pasteIgnoreImg: !1,
            // 对粘贴的文字进行自定义处理，返回处理后的结果。编辑器会将处理后的结果粘贴到编辑区域中。
            // IE 暂时不支持
            pasteTextHandle: function(l) {
              return l;
            }
          };
        },
        /* 275 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.default = {
            styleWithCSS: !1
          };
        },
        /* 276 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(7);
          t.default = {
            // 网络图片校验的配置函数
            linkImgCheck: function(s, g, m) {
              return !0;
            },
            // 显示“插入网络图片”
            showLinkImg: !0,
            // 显示“插入图片alt”
            showLinkImgAlt: !0,
            // 显示“插入图片href”
            showLinkImgHref: !0,
            // 插入图片成功之后的回调函数
            linkImgCallback: o.EMPTY_FN,
            // accept
            uploadImgAccept: ["jpg", "jpeg", "png", "gif", "bmp"],
            // 服务端地址
            uploadImgServer: "",
            // 使用 base64 存储图片
            uploadImgShowBase64: !1,
            // 上传图片的最大体积，默认 5M
            uploadImgMaxSize: 5 * 1024 * 1024,
            // 一次最多上传多少个图片
            uploadImgMaxLength: 100,
            // 自定义上传图片的名称
            uploadFileName: "",
            // 上传图片自定义参数
            uploadImgParams: {},
            // 自定义参数拼接到 url 中
            uploadImgParamsWithUrl: !1,
            // 上传图片自定义 header
            uploadImgHeaders: {},
            // 钩子函数
            uploadImgHooks: {},
            // 上传图片超时时间 ms
            uploadImgTimeout: 10 * 1e3,
            // 跨域带 cookie
            withCredentials: !1,
            // 自定义上传
            customUploadImg: null,
            // 从媒体库上传
            uploadImgFromMedia: null
          };
        },
        /* 277 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.default = {
            lang: "zh-CN",
            languages: {
              "zh-CN": {
                wangEditor: {
                  重置: "重置",
                  插入: "插入",
                  默认: "默认",
                  创建: "创建",
                  修改: "修改",
                  如: "如",
                  请输入正文: "请输入正文",
                  menus: {
                    title: {
                      标题: "标题",
                      加粗: "加粗",
                      字号: "字号",
                      字体: "字体",
                      斜体: "斜体",
                      下划线: "下划线",
                      删除线: "删除线",
                      缩进: "缩进",
                      行高: "行高",
                      文字颜色: "文字颜色",
                      背景色: "背景色",
                      链接: "链接",
                      序列: "序列",
                      对齐: "对齐",
                      引用: "引用",
                      表情: "表情",
                      图片: "图片",
                      视频: "视频",
                      表格: "表格",
                      代码: "代码",
                      分割线: "分割线",
                      恢复: "恢复",
                      撤销: "撤销",
                      全屏: "全屏",
                      取消全屏: "取消全屏",
                      待办事项: "待办事项"
                    },
                    dropListMenu: {
                      设置标题: "设置标题",
                      背景颜色: "背景颜色",
                      文字颜色: "文字颜色",
                      设置字号: "设置字号",
                      设置字体: "设置字体",
                      设置缩进: "设置缩进",
                      对齐方式: "对齐方式",
                      设置行高: "设置行高",
                      序列: "序列",
                      head: {
                        正文: "正文"
                      },
                      indent: {
                        增加缩进: "增加缩进",
                        减少缩进: "减少缩进"
                      },
                      justify: {
                        靠左: "靠左",
                        居中: "居中",
                        靠右: "靠右",
                        两端: "两端"
                      },
                      list: {
                        无序列表: "无序列表",
                        有序列表: "有序列表"
                      }
                    },
                    panelMenus: {
                      emoticon: {
                        默认: "默认",
                        新浪: "新浪",
                        emoji: "emoji",
                        手势: "手势"
                      },
                      image: {
                        上传图片: "上传图片",
                        网络图片: "网络图片",
                        图片地址: "图片地址",
                        图片文字说明: "图片文字说明",
                        跳转链接: "跳转链接"
                      },
                      link: {
                        链接: "链接",
                        链接文字: "链接文字",
                        取消链接: "取消链接",
                        查看链接: "查看链接"
                      },
                      video: {
                        插入视频: "插入视频",
                        上传视频: "上传视频"
                      },
                      table: {
                        行: "行",
                        列: "列",
                        的: "的",
                        表格: "表格",
                        添加行: "添加行",
                        删除行: "删除行",
                        添加列: "添加列",
                        删除列: "删除列",
                        设置表头: "设置表头",
                        取消表头: "取消表头",
                        插入表格: "插入表格",
                        删除表格: "删除表格"
                      },
                      code: {
                        删除代码: "删除代码",
                        修改代码: "修改代码",
                        插入代码: "插入代码"
                      }
                    }
                  },
                  validate: {
                    张图片: "张图片",
                    大于: "大于",
                    图片链接: "图片链接",
                    不是图片: "不是图片",
                    返回结果: "返回结果",
                    上传图片超时: "上传图片超时",
                    上传图片错误: "上传图片错误",
                    上传图片失败: "上传图片失败",
                    插入图片错误: "插入图片错误",
                    一次最多上传: "一次最多上传",
                    下载链接失败: "下载链接失败",
                    图片验证未通过: "图片验证未通过",
                    服务器返回状态: "服务器返回状态",
                    上传图片返回结果错误: "上传图片返回结果错误",
                    请替换为支持的图片类型: "请替换为支持的图片类型",
                    您插入的网络图片无法识别: "您插入的网络图片无法识别",
                    您刚才插入的图片链接未通过编辑器校验: "您刚才插入的图片链接未通过编辑器校验",
                    插入视频错误: "插入视频错误",
                    视频链接: "视频链接",
                    不是视频: "不是视频",
                    视频验证未通过: "视频验证未通过",
                    个视频: "个视频",
                    上传视频超时: "上传视频超时",
                    上传视频错误: "上传视频错误",
                    上传视频失败: "上传视频失败",
                    上传视频返回结果错误: "上传视频返回结果错误"
                  }
                }
              },
              en: {
                wangEditor: {
                  重置: "reset",
                  插入: "insert",
                  默认: "default",
                  创建: "create",
                  修改: "edit",
                  如: "like",
                  请输入正文: "please enter the text",
                  menus: {
                    title: {
                      标题: "head",
                      加粗: "bold",
                      字号: "font size",
                      字体: "font family",
                      斜体: "italic",
                      下划线: "underline",
                      删除线: "strikethrough",
                      缩进: "indent",
                      行高: "line heihgt",
                      文字颜色: "font color",
                      背景色: "background",
                      链接: "link",
                      序列: "numbered list",
                      对齐: "align",
                      引用: "quote",
                      表情: "emoticons",
                      图片: "image",
                      视频: "media",
                      表格: "table",
                      代码: "code",
                      分割线: "split line",
                      恢复: "redo",
                      撤销: "undo",
                      全屏: "fullscreen",
                      取消全屏: "cancel fullscreen",
                      待办事项: "todo"
                    },
                    dropListMenu: {
                      设置标题: "title",
                      背景颜色: "background",
                      文字颜色: "font color",
                      设置字号: "font size",
                      设置字体: "font family",
                      设置缩进: "indent",
                      对齐方式: "align",
                      设置行高: "line heihgt",
                      序列: "list",
                      head: {
                        正文: "text"
                      },
                      indent: {
                        增加缩进: "indent",
                        减少缩进: "outdent"
                      },
                      justify: {
                        靠左: "left",
                        居中: "center",
                        靠右: "right",
                        两端: "justify"
                      },
                      list: {
                        无序列表: "unordered",
                        有序列表: "ordered"
                      }
                    },
                    panelMenus: {
                      emoticon: {
                        表情: "emoji",
                        手势: "gesture"
                      },
                      image: {
                        上传图片: "upload image",
                        网络图片: "network image",
                        图片地址: "image link",
                        图片文字说明: "image alt",
                        跳转链接: "hyperlink"
                      },
                      link: {
                        链接: "link",
                        链接文字: "link text",
                        取消链接: "unlink",
                        查看链接: "view links"
                      },
                      video: {
                        插入视频: "insert video",
                        上传视频: "upload local video"
                      },
                      table: {
                        行: "rows",
                        列: "columns",
                        的: " ",
                        表格: "table",
                        添加行: "insert row",
                        删除行: "delete row",
                        添加列: "insert column",
                        删除列: "delete column",
                        设置表头: "set header",
                        取消表头: "cancel header",
                        插入表格: "insert table",
                        删除表格: "delete table"
                      },
                      code: {
                        删除代码: "delete code",
                        修改代码: "edit code",
                        插入代码: "insert code"
                      }
                    }
                  },
                  validate: {
                    张图片: "images",
                    大于: "greater than",
                    图片链接: "image link",
                    不是图片: "is not image",
                    返回结果: "return results",
                    上传图片超时: "upload image timeout",
                    上传图片错误: "upload image error",
                    上传图片失败: "upload image failed",
                    插入图片错误: "insert image error",
                    一次最多上传: "once most at upload",
                    下载链接失败: "download link failed",
                    图片验证未通过: "image validate failed",
                    服务器返回状态: "server return status",
                    上传图片返回结果错误: "upload image return results error",
                    请替换为支持的图片类型: "please replace with a supported image type",
                    您插入的网络图片无法识别: "the network picture you inserted is not recognized",
                    您刚才插入的图片链接未通过编辑器校验: "the image link you just inserted did not pass the editor verification",
                    插入视频错误: "insert video error",
                    视频链接: "video link",
                    不是视频: "is not video",
                    视频验证未通过: "video validate failed",
                    个视频: "videos",
                    上传视频超时: "upload video timeout",
                    上传视频错误: "upload video error",
                    上传视频失败: "upload video failed",
                    上传视频返回结果错误: "upload video return results error"
                  }
                }
              }
            }
          };
        },
        /* 278 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(6);
          function l() {
            return !!(o.UA.isIE() || o.UA.isOldEdge);
          }
          t.default = {
            compatibleMode: l,
            historyMaxSize: 30
          };
        },
        /* 279 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(7);
          t.default = {
            // 插入网络视频前的回调函数
            onlineVideoCheck: function(s) {
              return !0;
            },
            // 插入网络视频成功之后的回调函数
            onlineVideoCallback: o.EMPTY_FN,
            // 显示“插入视频”
            showLinkVideo: !0,
            // accept
            uploadVideoAccept: ["mp4"],
            // 服务端地址
            uploadVideoServer: "",
            // 上传视频的最大体积，默认 1024M
            uploadVideoMaxSize: 1 * 1024 * 1024 * 1024,
            // 一次最多上传多少个视频
            // uploadVideoMaxLength: 2,
            // 自定义上传视频的名称
            uploadVideoName: "",
            // 上传视频自定义参数
            uploadVideoParams: {},
            // 自定义参数拼接到 url 中
            uploadVideoParamsWithUrl: !1,
            // 上传视频自定义 header
            uploadVideoHeaders: {},
            // 钩子函数
            uploadVideoHooks: {},
            // 上传视频超时时间 ms 默认2个小时
            uploadVideoTimeout: 1e3 * 60 * 60 * 2,
            // 跨域带 cookie
            withVideoCredentials: !1,
            // 自定义上传
            customUploadVideo: null,
            // 自定义插入视频
            customInsertVideo: null
          };
        },
        /* 280 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(17));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3)), g = e(6), m = e(7), h = (
            /** @class */
            function() {
              function c(i) {
                this._currentRange = null, this.editor = i;
              }
              return c.prototype.getRange = function() {
                return this._currentRange;
              }, c.prototype.saveRange = function(i) {
                if (i) {
                  this._currentRange = i;
                  return;
                }
                var u = window.getSelection();
                if (u.rangeCount !== 0) {
                  var d = u.getRangeAt(0), v = this.getSelectionContainerElem(d);
                  if (v != null && v.length && !(v.attr("contenteditable") === "false" || v.parentUntil("[contenteditable=false]"))) {
                    var f = this.editor, p = f.$textElem;
                    if (p.isContain(v)) {
                      if (p.elems[0] === v.elems[0]) {
                        var y;
                        if ((0, o.default)(y = p.html()).call(y) === m.EMPTY_P) {
                          var x = p.children(), E = x == null ? void 0 : x.last();
                          f.selection.createRangeByElem(E, !0, !0), f.selection.restoreSelection();
                        }
                      }
                      this._currentRange = d;
                    }
                  }
                }
              }, c.prototype.collapseRange = function(i) {
                i === void 0 && (i = !1);
                var u = this._currentRange;
                u && u.collapse(i);
              }, c.prototype.getSelectionText = function() {
                var i = this._currentRange;
                return i ? i.toString() : "";
              }, c.prototype.getSelectionContainerElem = function(i) {
                var u;
                u = i || this._currentRange;
                var d;
                if (u)
                  return d = u.commonAncestorContainer, s.default(d.nodeType === 1 ? d : d.parentNode);
              }, c.prototype.getSelectionStartElem = function(i) {
                var u;
                u = i || this._currentRange;
                var d;
                if (u)
                  return d = u.startContainer, s.default(d.nodeType === 1 ? d : d.parentNode);
              }, c.prototype.getSelectionEndElem = function(i) {
                var u;
                u = i || this._currentRange;
                var d;
                if (u)
                  return d = u.endContainer, s.default(d.nodeType === 1 ? d : d.parentNode);
              }, c.prototype.isSelectionEmpty = function() {
                var i = this._currentRange;
                return !!(i && i.startContainer && i.startContainer === i.endContainer && i.startOffset === i.endOffset);
              }, c.prototype.restoreSelection = function() {
                var i = window.getSelection(), u = this._currentRange;
                i && u && (i.removeAllRanges(), i.addRange(u));
              }, c.prototype.createEmptyRange = function() {
                var i = this.editor, u = this.getRange(), d;
                if (u && this.isSelectionEmpty())
                  try {
                    g.UA.isWebkit() ? (i.cmd.do("insertHTML", "&#8203;"), u.setEnd(u.endContainer, u.endOffset + 1), this.saveRange(u)) : (d = s.default("<strong>&#8203;</strong>"), i.cmd.do("insertElem", d), this.createRangeByElem(d, !0));
                  } catch {
                  }
              }, c.prototype.createRangeByElems = function(i, u) {
                var d = window.getSelection ? window.getSelection() : document.getSelection();
                d == null || d.removeAllRanges();
                var v = document.createRange();
                v.setStart(i, 0), v.setEnd(u, u.childNodes.length || 1), this.saveRange(v), this.restoreSelection();
              }, c.prototype.createRangeByElem = function(i, u, d) {
                if (i.length) {
                  var v = i.elems[0], f = document.createRange();
                  d ? f.selectNodeContents(v) : f.selectNode(v), u != null && (f.collapse(u), u || (this.saveRange(f), this.editor.selection.moveCursor(v))), this.saveRange(f);
                }
              }, c.prototype.getSelectionRangeTopNodes = function() {
                var i, u, d, v = (i = this.getSelectionStartElem()) === null || i === void 0 ? void 0 : i.getNodeTop(this.editor), f = (u = this.getSelectionEndElem()) === null || u === void 0 ? void 0 : u.getNodeTop(this.editor);
                return d = this.recordSelectionNodes(s.default(v), s.default(f)), d;
              }, c.prototype.moveCursor = function(i, u) {
                var d, v = this.getRange(), f = i.nodeType === 3 ? (d = i.nodeValue) === null || d === void 0 ? void 0 : d.length : i.childNodes.length;
                (g.UA.isFirefox || g.UA.isIE()) && f !== 0 && (i.nodeType === 3 || i.childNodes[f - 1].nodeName === "BR") && (f = f - 1);
                var p = u ?? f;
                v && i && (v.setStart(i, p), v.setEnd(i, p), this.restoreSelection());
              }, c.prototype.getCursorPos = function() {
                var i = window.getSelection();
                return i == null ? void 0 : i.anchorOffset;
              }, c.prototype.clearWindowSelectionRange = function() {
                var i = window.getSelection();
                i && i.removeAllRanges();
              }, c.prototype.recordSelectionNodes = function(i, u) {
                var d = [], v = !0;
                try {
                  for (var f = i, p = this.editor.$textElem; v; ) {
                    var y = f == null ? void 0 : f.getNodeTop(this.editor);
                    y.getNodeName() === "BODY" && (v = !1), y.length > 0 && (d.push(s.default(f)), u != null && u.equal(y) || p.equal(y) ? v = !1 : f = y.getNextSibling());
                  }
                } catch {
                  v = !1;
                }
                return d;
              }, c.prototype.setRangeToElem = function(i) {
                var u = this.getRange();
                u == null || u.setStart(i, 0), u == null || u.setEnd(i, 0);
              }, c;
            }()
          );
          t.default = h;
        },
        /* 281 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(3)), s = (
            /** @class */
            function() {
              function g(m) {
                this.editor = m;
              }
              return g.prototype.do = function(m, h) {
                var c = this.editor;
                c.config.styleWithCSS && document.execCommand("styleWithCSS", !1, "true");
                var i = c.selection;
                if (i.getRange()) {
                  switch (i.restoreSelection(), m) {
                    case "insertHTML":
                      this.insertHTML(h);
                      break;
                    case "insertElem":
                      this.insertElem(h);
                      break;
                    default:
                      this.execCommand(m, h);
                      break;
                  }
                  c.menus.changeActive(), i.saveRange(), i.restoreSelection();
                }
              }, g.prototype.insertHTML = function(m) {
                var h = this.editor, c = h.selection.getRange();
                if (c != null) {
                  if (this.queryCommandSupported("insertHTML"))
                    this.execCommand("insertHTML", m);
                  else if (c.insertNode) {
                    if (c.deleteContents(), l.default(m).elems.length > 0)
                      c.insertNode(l.default(m).elems[0]);
                    else {
                      var i = document.createElement("p");
                      i.appendChild(document.createTextNode(m)), c.insertNode(i);
                    }
                    h.selection.collapseRange();
                  }
                }
              }, g.prototype.insertElem = function(m) {
                var h = this.editor, c = h.selection.getRange();
                c != null && c.insertNode && (c.deleteContents(), c.insertNode(m.elems[0]));
              }, g.prototype.execCommand = function(m, h) {
                document.execCommand(m, !1, h);
              }, g.prototype.queryCommandValue = function(m) {
                return document.queryCommandValue(m);
              }, g.prototype.queryCommandState = function(m) {
                return document.queryCommandState(m);
              }, g.prototype.queryCommandSupported = function(m) {
                return document.queryCommandSupported(m);
              }, g;
            }()
          );
          t.default = s;
        },
        /* 282 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(29)), l = n(e(4)), s = n(e(17)), g = n(e(27)), m = n(e(46));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var h = e(2), c = h.__importDefault(e(3)), i = h.__importDefault(e(287)), u = e(6), d = h.__importDefault(e(299)), v = h.__importDefault(e(300)), f = e(7), p = (
            /** @class */
            function() {
              function y(x) {
                this.editor = x, this.eventHooks = {
                  onBlurEvents: [],
                  changeEvents: [],
                  dropEvents: [],
                  clickEvents: [],
                  keydownEvents: [],
                  keyupEvents: [],
                  tabUpEvents: [],
                  tabDownEvents: [],
                  enterUpEvents: [],
                  enterDownEvents: [],
                  deleteUpEvents: [],
                  deleteDownEvents: [],
                  pasteEvents: [],
                  linkClickEvents: [],
                  codeClickEvents: [],
                  textScrollEvents: [],
                  toolbarClickEvents: [],
                  imgClickEvents: [],
                  imgDragBarMouseDownEvents: [],
                  tableClickEvents: [],
                  menuClickEvents: [],
                  dropListMenuHoverEvents: [],
                  splitLineEvents: [],
                  videoClickEvents: []
                };
              }
              return y.prototype.init = function() {
                this._saveRange(), this._bindEventHooks(), i.default(this);
              }, y.prototype.togglePlaceholder = function() {
                var x, E = this.html(), S = (0, o.default)(x = this.editor.$textContainerElem).call(x, ".placeholder");
                S.hide(), !this.editor.isComposing && (!E || E === " ") && S.show();
              }, y.prototype.clear = function() {
                this.html(f.EMPTY_P);
              }, y.prototype.html = function(x) {
                var E = this.editor, S = E.$textElem;
                if (x == null) {
                  var I = S.html();
                  I = I.replace(/\u200b/gm, ""), I = I.replace(/<p><\/p>/gim, ""), I = I.replace(f.EMPTY_P_LAST_REGEX, ""), I = I.replace(f.EMPTY_P_REGEX, "<p>");
                  var P = I.match(/<(img|br|hr|input)[^>]*>/gi);
                  return P !== null && (0, l.default)(P).call(P, function(T) {
                    T.match(/\/>/) || (I = I.replace(T, T.substring(0, T.length - 1) + "/>"));
                  }), I;
                }
                x = (0, s.default)(x).call(x), x === "" && (x = f.EMPTY_P), (0, g.default)(x).call(x, "<") !== 0 && (x = "<p>" + x + "</p>"), S.html(x), E.initSelection();
              }, y.prototype.setJSON = function(x) {
                var E = v.default(x).children(), S = this.editor, I = S.$textElem;
                E && I.replaceChildAll(E);
              }, y.prototype.getJSON = function() {
                var x = this.editor, E = x.$textElem;
                return d.default(E);
              }, y.prototype.text = function(x) {
                var E = this.editor, S = E.$textElem;
                if (x == null) {
                  var I = S.text();
                  return I = I.replace(/\u200b/gm, ""), I;
                }
                S.text("<p>" + x + "</p>"), E.initSelection();
              }, y.prototype.append = function(x) {
                var E = this.editor;
                (0, g.default)(x).call(x, "<") !== 0 && (x = "<p>" + x + "</p>"), this.html(this.html() + x), E.initSelection();
              }, y.prototype._saveRange = function() {
                var x = this.editor, E = x.$textElem, S = c.default(document);
                function I() {
                  x.selection.saveRange(), x.menus.changeActive();
                }
                E.on("keyup", I);
                function P() {
                  I(), E.off("click", P);
                }
                E.on("click", P);
                function T() {
                  I(), S.off("mouseup", T);
                }
                function A() {
                  S.on("mouseup", T), E.off("mouseleave", A);
                }
                E.on("mousedown", function() {
                  E.on("mouseleave", A);
                }), E.on("mouseup", function(D) {
                  E.off("mouseleave", A), (0, m.default)(function() {
                    var R = x.selection, N = R.getRange();
                    N !== null && I();
                  }, 0);
                });
              }, y.prototype._bindEventHooks = function() {
                var x = this.editor, E = x.$textElem, S = this.eventHooks;
                E.on("click", function(P) {
                  var T = S.clickEvents;
                  (0, l.default)(T).call(T, function(A) {
                    return A(P);
                  });
                }), E.on("keyup", function(P) {
                  if (P.keyCode === 13) {
                    var T = S.enterUpEvents;
                    (0, l.default)(T).call(T, function(A) {
                      return A(P);
                    });
                  }
                }), E.on("keyup", function(P) {
                  var T = S.keyupEvents;
                  (0, l.default)(T).call(T, function(A) {
                    return A(P);
                  });
                }), E.on("keydown", function(P) {
                  var T = S.keydownEvents;
                  (0, l.default)(T).call(T, function(A) {
                    return A(P);
                  });
                }), E.on("keyup", function(P) {
                  if (!(P.keyCode !== 8 && P.keyCode !== 46)) {
                    var T = S.deleteUpEvents;
                    (0, l.default)(T).call(T, function(A) {
                      return A(P);
                    });
                  }
                }), E.on("keydown", function(P) {
                  if (!(P.keyCode !== 8 && P.keyCode !== 46)) {
                    var T = S.deleteDownEvents;
                    (0, l.default)(T).call(T, function(A) {
                      return A(P);
                    });
                  }
                }), E.on("paste", function(P) {
                  if (!u.UA.isIE()) {
                    P.preventDefault();
                    var T = S.pasteEvents;
                    (0, l.default)(T).call(T, function(A) {
                      return A(P);
                    });
                  }
                }), E.on("keydown", function(P) {
                  // 编辑器处于聚焦状态下（多编辑器实例） || 当前处于兼容模式（兼容模式撤销/恢复后不聚焦，所以直接过，但会造成多编辑器同时撤销/恢复）
                  (x.isFocus || x.isCompatibleMode) && (P.ctrlKey || P.metaKey) && P.keyCode === 90 && (P.preventDefault(), P.shiftKey ? x.history.restore() : x.history.revoke());
                }), E.on("keyup", function(P) {
                  if (P.keyCode === 9) {
                    P.preventDefault();
                    var T = S.tabUpEvents;
                    (0, l.default)(T).call(T, function(A) {
                      return A(P);
                    });
                  }
                }), E.on("keydown", function(P) {
                  if (P.keyCode === 9) {
                    P.preventDefault();
                    var T = S.tabDownEvents;
                    (0, l.default)(T).call(T, function(A) {
                      return A(P);
                    });
                  }
                }), E.on(
                  "scroll",
                  // 使用节流
                  u.throttle(function(P) {
                    var T = S.textScrollEvents;
                    (0, l.default)(T).call(T, function(A) {
                      return A(P);
                    });
                  }, 100)
                );
                function I(P) {
                  P.preventDefault();
                }
                c.default(document).on("dragleave", I).on("drop", I).on("dragenter", I).on("dragover", I), x.beforeDestroy(function() {
                  c.default(document).off("dragleave", I).off("drop", I).off("dragenter", I).off("dragover", I);
                }), E.on("drop", function(P) {
                  P.preventDefault();
                  var T = S.dropEvents;
                  (0, l.default)(T).call(T, function(A) {
                    return A(P);
                  });
                }), E.on("click", function(P) {
                  var T = null, A = P.target, D = c.default(A);
                  if (D.getNodeName() === "A")
                    T = D;
                  else {
                    var R = D.parentUntil("a");
                    R != null && (T = R);
                  }
                  if (T) {
                    var N = S.linkClickEvents;
                    (0, l.default)(N).call(N, function(M) {
                      return M(T);
                    });
                  }
                }), E.on("click", function(P) {
                  var T = null, A = P.target, D = c.default(A);
                  if (D.getNodeName() === "IMG" && !D.elems[0].getAttribute("data-emoji") && (P.stopPropagation(), T = D), !!T) {
                    var R = S.imgClickEvents;
                    (0, l.default)(R).call(R, function(N) {
                      return N(T);
                    });
                  }
                }), E.on("click", function(P) {
                  var T = null, A = P.target, D = c.default(A);
                  if (D.getNodeName() === "PRE")
                    T = D;
                  else {
                    var R = D.parentUntil("pre");
                    R !== null && (T = R);
                  }
                  if (T) {
                    var N = S.codeClickEvents;
                    (0, l.default)(N).call(N, function(M) {
                      return M(T);
                    });
                  }
                }), E.on("click", function(P) {
                  var T = null, A = P.target, D = c.default(A);
                  if (D.getNodeName() === "HR" && (T = D), !!T) {
                    x.selection.createRangeByElem(T), x.selection.restoreSelection();
                    var R = S.splitLineEvents;
                    (0, l.default)(R).call(R, function(N) {
                      return N(T);
                    });
                  }
                }), x.$toolbarElem.on("click", function(P) {
                  var T = S.toolbarClickEvents;
                  (0, l.default)(T).call(T, function(A) {
                    return A(P);
                  });
                }), x.$textContainerElem.on("mousedown", function(P) {
                  var T = P.target, A = c.default(T);
                  if (A.hasClass("w-e-img-drag-rb")) {
                    var D = S.imgDragBarMouseDownEvents;
                    (0, l.default)(D).call(D, function(R) {
                      return R();
                    });
                  }
                }), E.on("click", function(P) {
                  var T = null, A = P.target;
                  if (T = c.default(A).parentUntilEditor("TABLE", x, A), !!T) {
                    var D = S.tableClickEvents;
                    (0, l.default)(D).call(D, function(R) {
                      return R(T, P);
                    });
                  }
                }), E.on("keydown", function(P) {
                  if (P.keyCode === 13) {
                    var T = S.enterDownEvents;
                    (0, l.default)(T).call(T, function(A) {
                      return A(P);
                    });
                  }
                }), E.on("click", function(P) {
                  var T = null, A = P.target, D = c.default(A);
                  if (D.getNodeName() === "VIDEO" && (P.stopPropagation(), T = D), !!T) {
                    var R = S.videoClickEvents;
                    (0, l.default)(R).call(R, function(N) {
                      return N(T);
                    });
                  }
                });
              }, y;
            }()
          );
          t.default = p;
        },
        /* 283 */
        /***/
        function(a, t, e) {
          var n = e(284);
          a.exports = n;
        },
        /* 284 */
        /***/
        function(a, t, e) {
          var n = e(285), r = Array.prototype;
          a.exports = function(o) {
            var l = o.find;
            return o === r || o instanceof Array && l === r.find ? n : l;
          };
        },
        /* 285 */
        /***/
        function(a, t, e) {
          e(286);
          var n = e(15);
          a.exports = n("Array").find;
        },
        /* 286 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(32).find, o = e(82), l = e(22), s = "find", g = !0, m = l(s);
          s in [] && Array(1)[s](function() {
            g = !1;
          }), n({ target: "Array", proto: !0, forced: g || !m }, {
            find: function(c) {
              return r(this, c, arguments.length > 1 ? arguments[1] : void 0);
            }
          }), o(s);
        },
        /* 287 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(288)), s = o.__importStar(e(289)), g = o.__importDefault(e(290)), m = o.__importDefault(e(291)), h = o.__importDefault(e(298));
          function c(i) {
            var u = i.editor, d = i.eventHooks;
            l.default(u, d.enterUpEvents, d.enterDownEvents), s.default(u, d.deleteUpEvents, d.deleteDownEvents), s.cutToKeepP(u, d.keyupEvents), g.default(u, d.tabDownEvents), m.default(u, d.pasteEvents), h.default(u, d.imgClickEvents);
          }
          t.default = c;
        },
        /* 288 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(27));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = e(7), g = l.__importDefault(e(3));
          function m(h, c, i) {
            function u(f) {
              var p, y = g.default(s.EMPTY_P);
              if (y.insertBefore(f), (0, o.default)(p = f.html()).call(p, "<img") >= 0) {
                y.remove();
                return;
              }
              h.selection.createRangeByElem(y, !0, !0), h.selection.restoreSelection(), f.remove();
            }
            function d() {
              var f = h.$textElem, p = h.selection.getSelectionContainerElem(), y = p.parent();
              if (y.html() === "<code><br></code>") {
                u(y);
                return;
              }
              if (p.getNodeName() === "FONT" && p.text() === "" && p.attr("face") === "monospace") {
                u(y);
                return;
              }
              if (y.equal(f)) {
                var x = p.getNodeName();
                x === "P" && p.attr("data-we-empty-p") === null || p.text() || u(p);
              }
            }
            c.push(d);
            function v(f) {
              var p;
              h.selection.saveRange((p = getSelection()) === null || p === void 0 ? void 0 : p.getRangeAt(0));
              var y = h.selection.getSelectionContainerElem();
              y.id === h.textElemId && (f.preventDefault(), h.cmd.do("insertHTML", "<p><br></p>"));
            }
            i.push(v);
          }
          t.default = m;
        },
        /* 289 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(17)), l = n(e(28));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.cutToKeepP = void 0;
          var s = e(2), g = e(7), m = s.__importDefault(e(3));
          function h(i, u, d) {
            function v() {
              var p = i.$textElem, y = i.$textElem.html(), x = i.$textElem.text(), E = (0, o.default)(y).call(y), S = ["<p><br></p>", "<br>", '<p data-we-empty-p=""></p>', g.EMPTY_P];
              if (/^\s*$/.test(x) && (!E || (0, l.default)(S).call(S, E))) {
                p.html(g.EMPTY_P);
                var I = p.getNode();
                i.selection.createRangeByElems(I.childNodes[0], I.childNodes[0]);
                var P = i.selection.getSelectionContainerElem();
                i.selection.restoreSelection(), i.selection.moveCursor(P.getNode(), 0);
              }
            }
            u.push(v);
            function f(p) {
              var y, x = i.$textElem, E = (0, o.default)(y = x.html().toLowerCase()).call(y);
              if (E === g.EMPTY_P) {
                p.preventDefault();
                return;
              }
            }
            d.push(f);
          }
          function c(i, u) {
            function d(v) {
              var f;
              if (v.keyCode === 88) {
                var p = i.$textElem, y = (0, o.default)(f = p.html().toLowerCase()).call(f);
                if (!y || y === "<br>") {
                  var x = m.default(g.EMPTY_P);
                  p.html(" "), p.append(x), i.selection.createRangeByElem(x, !1, !0), i.selection.restoreSelection(), i.selection.moveCursor(x.getNode(), 0);
                }
              }
            }
            u.push(d);
          }
          t.cutToKeepP = c, t.default = h;
        },
        /* 290 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          function o(l, s) {
            function g() {
              if (l.cmd.queryCommandSupported("insertHTML")) {
                var m = l.selection.getSelectionContainerElem();
                if (m) {
                  var h = m.parent(), c = m.getNodeName(), i = h.getNodeName();
                  c == "CODE" || i === "CODE" || i === "PRE" || /hljs/.test(i) ? l.cmd.do("insertHTML", l.config.languageTab) : l.cmd.do("insertHTML", "&nbsp;&nbsp;&nbsp;&nbsp;");
                }
              }
            }
            s.push(g);
          }
          t.default = o;
        },
        /* 291 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(17)), l = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var s = e(131), g = e(6), m = e(7);
          function h(v) {
            var f, p = (0, o.default)(f = v.replace(/<div>/gim, "<p>").replace(/<\/div>/gim, "</p>")).call(f), y = document.createElement("div");
            return y.innerHTML = p, y.innerHTML.replace(/<p><\/p>/gim, "");
          }
          function c(v) {
            var f = v.replace(/<br>|<br\/>/gm, `
`).replace(/<[^>]+>/gm, "");
            return f;
          }
          function i(v) {
            var f;
            if (v === "") return !1;
            var p = document.createElement("div");
            return p.innerHTML = v, ((f = p.firstChild) === null || f === void 0 ? void 0 : f.nodeName) === "P";
          }
          function u(v) {
            if (!(v != null && v.length)) return !1;
            var f = v.elems[0];
            return f.nodeName === "P" && f.innerHTML === "<br>";
          }
          function d(v, f) {
            function p(y) {
              var x = v.config, E = x.pasteFilterStyle, S = x.pasteIgnoreImg, I = x.pasteTextHandle, P = s.getPasteHtml(y, E, S), T = s.getPasteText(y);
              T = T.replace(/\n/gm, "<br>");
              var A = v.selection.getSelectionContainerElem();
              if (A) {
                var D = A == null ? void 0 : A.getNodeName(), R = A == null ? void 0 : A.getNodeTop(v), N = "";
                if (R.elems[0] && (N = R == null ? void 0 : R.getNodeName()), D === "CODE" || N === "PRE") {
                  I && g.isFunction(I) && (T = "" + (I(T) || "")), v.cmd.do("insertHTML", c(T));
                  return;
                }
                if (m.urlRegex.test(T) && E) {
                  I && g.isFunction(I) && (T = "" + (I(T) || ""));
                  var M = T.replace(m.urlRegex, function(J) {
                    return '<a href="' + J + '" target="_blank">' + J + "</a>";
                  }), b = v.selection.getRange(), B = document.createElement("div"), F = document.createDocumentFragment();
                  if (B.innerHTML = M, b == null) return;
                  for (; B.childNodes.length; )
                    F.append(B.childNodes[0]);
                  var j = F.querySelectorAll("a");
                  (0, l.default)(j).call(j, function(J) {
                    J.innerText = J.href;
                  }), b.insertNode && (b.deleteContents(), b.insertNode(F)), v.selection.clearWindowSelectionRange();
                  return;
                }
                if (P)
                  try {
                    I && g.isFunction(I) && (P = "" + (I(P) || ""));
                    var O = /[\.\#\@]?\w+[ ]+\{[^}]*\}/.test(P);
                    if (O && E)
                      v.cmd.do("insertHTML", "" + h(T));
                    else {
                      var L = h(P);
                      if (i(L)) {
                        var H = v.$textElem;
                        if (v.cmd.do("insertHTML", L), H.equal(A)) {
                          v.selection.createEmptyRange();
                          return;
                        }
                        u(R) && R.remove();
                      } else
                        v.cmd.do("insertHTML", L);
                    }
                  } catch {
                    I && g.isFunction(I) && (T = "" + (I(T) || "")), v.cmd.do("insertHTML", "" + h(T));
                  }
              }
            }
            f.push(p);
          }
          t.default = d;
        },
        /* 292 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(17)), l = n(e(4)), s = n(e(28));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var g = e(2), m = e(293), h = g.__importDefault(e(297));
          function c(f) {
            var p = /<span>.*?<\/span>/gi, y = /<span>(.*?)<\/span>/;
            return f.replace(p, function(x) {
              var E = x.match(y);
              return E == null ? "" : E[1];
            });
          }
          function i(f, p) {
            var y;
            return f = (0, o.default)(y = f.toLowerCase()).call(y), !!(m.IGNORE_TAGS.has(f) || p && f === "img");
          }
          function u(f, p) {
            var y = "";
            y = "<" + f;
            var x = [];
            (0, l.default)(p).call(p, function(S) {
              x.push(S.name + '="' + S.value + '"');
            }), x.length > 0 && (y = y + " " + x.join(" "));
            var E = m.EMPTY_TAGS.has(f);
            return y = y + (E ? "/" : "") + ">", y;
          }
          function d(f) {
            return "</" + f + ">";
          }
          function v(f, p, y) {
            p === void 0 && (p = !0), y === void 0 && (y = !1);
            var x = [], E = "";
            function S(A) {
              A = (0, o.default)(A).call(A), A && (m.EMPTY_TAGS.has(A) || (E = A));
            }
            function I() {
              E = "";
            }
            var P = new h.default();
            P.parse(f, {
              startElement: function(D, R) {
                if (S(D), !i(D, y)) {
                  var N = m.NECESSARY_ATTRS.get(D) || [], M = [];
                  (0, l.default)(R).call(R, function(B) {
                    var F = B.name;
                    if (F === "style") {
                      p || M.push(B);
                      return;
                    }
                    (0, s.default)(N).call(N, F) !== !1 && M.push(B);
                  });
                  var b = u(D, M);
                  x.push(b);
                }
              },
              characters: function(D) {
                D && (i(E, y) || x.push(D));
              },
              endElement: function(D) {
                if (!i(D, y)) {
                  var R = d(D);
                  x.push(R), I();
                }
              },
              comment: function(D) {
                S(D);
              }
            });
            var T = x.join("");
            return T = c(T), T;
          }
          t.default = v;
        },
        /* 293 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(132)), l = n(e(121));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.TOP_LEVEL_TAGS = t.EMPTY_TAGS = t.NECESSARY_ATTRS = t.IGNORE_TAGS = void 0, t.IGNORE_TAGS = new o.default(["doctype", "!doctype", "html", "head", "meta", "body", "script", "style", "link", "frame", "iframe", "title", "svg", "center", "o:p"]), t.NECESSARY_ATTRS = new l.default([["img", ["src", "alt"]], ["a", ["href", "target"]], ["td", ["colspan", "rowspan"]], ["th", ["colspan", "rowspan"]]]), t.EMPTY_TAGS = new o.default(["area", "base", "basefont", "br", "col", "hr", "img", "input", "isindex", "embed"]), t.TOP_LEVEL_TAGS = new o.default(["h1", "h2", "h3", "h4", "h5", "p", "ul", "ol", "table", "blockquote", "pre", "hr", "form"]);
        },
        /* 294 */
        /***/
        function(a, t, e) {
          var n = e(295);
          a.exports = n;
        },
        /* 295 */
        /***/
        function(a, t, e) {
          e(296), e(61), e(50), e(54);
          var n = e(9);
          a.exports = n.Set;
        },
        /* 296 */
        /***/
        function(a, t, e) {
          var n = e(122), r = e(124);
          a.exports = n("Set", function(o) {
            return function() {
              return o(this, arguments.length ? arguments[0] : void 0);
            };
          }, r);
        },
        /* 297 */
        /***/
        function(a, t) {
          function e() {
          }
          e.prototype = {
            handler: null,
            // regexps
            startTagRe: /^<([^>\s\/]+)((\s+[^=>\s]+(\s*=\s*((\"[^"]*\")|(\'[^']*\')|[^>\s]+))?)*)\s*\/?\s*>/m,
            endTagRe: /^<\/([^>\s]+)[^>]*>/m,
            attrRe: /([^=\s]+)(\s*=\s*((\"([^"]*)\")|(\'([^']*)\')|[^>\s]+))?/gm,
            parse: function(n, r) {
              r && (this.contentHandler = r);
              for (var o, l, s, g = !1, m = this; n.length > 0; )
                n.substring(0, 4) == "<!--" ? (s = n.indexOf("-->"), s != -1 ? (this.contentHandler.comment(n.substring(4, s)), n = n.substring(s + 3), g = !1) : g = !0) : n.substring(0, 2) == "</" ? this.endTagRe.test(n) ? (o = RegExp.lastMatch, l = RegExp.rightContext, o.replace(this.endTagRe, function() {
                  return m.parseEndTag.apply(m, arguments);
                }), n = l, g = !1) : g = !0 : n.charAt(0) == "<" && (this.startTagRe.test(n) ? (o = RegExp.lastMatch, l = RegExp.rightContext, o.replace(this.startTagRe, function() {
                  return m.parseStartTag.apply(m, arguments);
                }), n = l, g = !1) : g = !0), g && (s = n.indexOf("<"), s == -1 ? (this.contentHandler.characters(n), n = "") : (this.contentHandler.characters(n.substring(0, s)), n = n.substring(s))), g = !0;
            },
            parseStartTag: function(n, r, o) {
              var l = this.parseAttributes(r, o);
              this.contentHandler.startElement(r, l);
            },
            parseEndTag: function(n, r) {
              this.contentHandler.endElement(r);
            },
            parseAttributes: function(n, r) {
              var o = this, l = [];
              return r.replace(this.attrRe, function(s, g, m, h, c, i, u, d) {
                l.push(o.parseAttribute(n, s, g, m, h, c, i, u, d));
              }), l;
            },
            parseAttribute: function(n, r, o) {
              var l = "";
              arguments[7] ? l = arguments[8] : arguments[5] ? l = arguments[6] : arguments[3] && (l = arguments[4]);
              var s = !l && !arguments[3];
              return { name: o, value: s ? null : l };
            }
          }, a.exports = e;
        },
        /* 298 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          function o(l, s) {
            function g(m) {
              l.selection.createRangeByElem(m), l.selection.restoreSelection();
            }
            s.push(g);
          }
          t.default = o;
        },
        /* 299 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = e(6), g = l.__importDefault(e(3));
          function m(h) {
            var c = [], i = h.childNodes() || [];
            return (0, o.default)(i).call(i, function(u) {
              var d, v = u.nodeType;
              if (v === 3 && (d = u.textContent || "", d = s.replaceHtmlSymbol(d)), v === 1) {
                d = {}, d = d, d.tag = u.nodeName.toLowerCase();
                for (var f = [], p = u.attributes, y = p.length || 0, x = 0; x < y; x++) {
                  var E = p[x];
                  f.push({
                    name: E.name,
                    value: E.value
                  });
                }
                d.attrs = f, d.children = m(g.default(u));
              }
              d && c.push(d);
            }), c;
          }
          t.default = m;
        },
        /* 300 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(92)), o = n(e(1)), l = n(e(4));
          (0, o.default)(t, "__esModule", {
            value: !0
          });
          var s = e(2), g = s.__importDefault(e(3));
          function m(h, c) {
            c === void 0 && (c = document.createElement("div"));
            var i = c;
            return (0, l.default)(h).call(h, function(u) {
              var d;
              if (typeof u == "string" && (d = document.createTextNode(u)), (0, r.default)(u) === "object") {
                var v;
                d = document.createElement(u.tag), (0, l.default)(v = u.attrs).call(v, function(f) {
                  g.default(d).attr(f.name, f.value);
                }), u.children && u.children.length > 0 && m(u.children, d.getRootNode());
              }
              d && i.appendChild(d);
            }), g.default(i);
          }
          t.default = m;
        },
        /* 301 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(89)), l = n(e(70)), s = n(e(28)), g = n(e(302)), m = n(e(4)), h = n(e(94)), c = n(e(133)), i = n(e(46)), u = n(e(57));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var d = e(2), v = d.__importDefault(e(87)), f = d.__importDefault(e(314)), p = d.__importDefault(e(3)), y = (
            /** @class */
            function() {
              function x(E) {
                this.editor = E, this.menuList = [], this.constructorList = f.default;
              }
              return x.prototype.extend = function(E, S) {
                !S || typeof S != "function" || (this.constructorList[E] = S);
              }, x.prototype.init = function() {
                var E, S, I = this, P = this.editor.config, T = P.excludeMenus;
                (0, o.default)(T) === !1 && (T = []), P.menus = (0, l.default)(E = P.menus).call(E, function(F) {
                  return (0, s.default)(T).call(T, F) === !1;
                });
                var A = (0, g.default)(v.default.globalCustomMenuConstructorList);
                A = (0, l.default)(A).call(A, function(F) {
                  return (0, s.default)(T).call(T, F);
                }), (0, m.default)(A).call(A, function(F) {
                  delete v.default.globalCustomMenuConstructorList[F];
                }), (0, m.default)(S = P.menus).call(S, function(F) {
                  var j = I.constructorList[F];
                  I._initMenuList(F, j);
                });
                for (var D = 0, R = (0, h.default)(v.default.globalCustomMenuConstructorList); D < R.length; D++) {
                  var N = R[D], M = N[0], b = N[1], B = b;
                  this._initMenuList(M, B);
                }
                this._addToToolbar(), P.showMenuTooltips && this._bindMenuTooltips();
              }, x.prototype._initMenuList = function(E, S) {
                var I;
                if (!(S == null || typeof S != "function"))
                  if ((0, c.default)(I = this.menuList).call(I, function(T) {
                    return T.key === E;
                  }))
                    console.warn("菜单名称重复:" + E);
                  else {
                    var P = new S(this.editor);
                    P.key = E, this.menuList.push(P);
                  }
              }, x.prototype._bindMenuTooltips = function() {
                var E = this.editor, S = E.$toolbarElem, I = E.config, P = I.menuTooltipPosition, T = p.default('<div class="w-e-menu-tooltip w-e-menu-tooltip-' + P + `">
            <div class="w-e-menu-tooltip-item-wrapper">
              <div></div>
            </div>
          </div>`);
                T.css("visibility", "hidden"), S.append(T), T.css("z-index", E.zIndex.get("tooltip"));
                var A = 0;
                function D() {
                  A && clearTimeout(A);
                }
                function R() {
                  D(), T.css("visibility", "hidden");
                }
                S.on("mouseover", function(N) {
                  var M = N.target, b = p.default(M), B, F;
                  if (b.isContain(S)) {
                    R();
                    return;
                  }
                  if (b.parentUntil(".w-e-droplist") != null)
                    R();
                  else if (b.attr("data-title"))
                    B = b.attr("data-title"), F = b;
                  else {
                    var j = b.parentUntil(".w-e-menu");
                    j != null && (B = j.attr("data-title"), F = j);
                  }
                  if (B && F) {
                    D();
                    var O = F.getOffsetData();
                    T.text(E.i18next.t("menus.title." + B));
                    var L = T.getOffsetData(), H = O.left + O.width / 2 - L.width / 2;
                    T.css("left", H + "px"), P === "up" ? T.css("top", O.top - L.height - 8 + "px") : P === "down" && T.css("top", O.top + O.height + 8 + "px"), A = (0, i.default)(function() {
                      T.css("visibility", "visible");
                    }, 200);
                  } else
                    R();
                }).on("mouseleave", function() {
                  R();
                });
              }, x.prototype._addToToolbar = function() {
                var E, S = this.editor, I = S.$toolbarElem;
                (0, m.default)(E = this.menuList).call(E, function(P) {
                  var T = P.$elem;
                  T && I.append(T);
                });
              }, x.prototype.menuFind = function(E) {
                for (var S = this.menuList, I = 0, P = S.length; I < P; I++)
                  if (S[I].key === E) return S[I];
                return S[0];
              }, x.prototype.changeActive = function() {
                var E;
                (0, m.default)(E = this.menuList).call(E, function(S) {
                  var I;
                  (0, i.default)((0, u.default)(I = S.tryChangeActive).call(I, S), 100);
                });
              }, x;
            }()
          );
          t.default = y;
        },
        /* 302 */
        /***/
        function(a, t, e) {
          a.exports = e(303);
        },
        /* 303 */
        /***/
        function(a, t, e) {
          var n = e(304);
          a.exports = n;
        },
        /* 304 */
        /***/
        function(a, t, e) {
          e(305);
          var n = e(9);
          a.exports = n.Object.keys;
        },
        /* 305 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(31), o = e(52), l = e(11), s = l(function() {
            o(1);
          });
          n({ target: "Object", stat: !0, forced: s }, {
            keys: function(m) {
              return o(r(m));
            }
          });
        },
        /* 306 */
        /***/
        function(a, t, e) {
          var n = e(307);
          a.exports = n;
        },
        /* 307 */
        /***/
        function(a, t, e) {
          e(308);
          var n = e(9);
          a.exports = n.Object.entries;
        },
        /* 308 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(309).entries;
          n({ target: "Object", stat: !0 }, {
            entries: function(l) {
              return r(l);
            }
          });
        },
        /* 309 */
        /***/
        function(a, t, e) {
          var n = e(14), r = e(52), o = e(30), l = e(59).f, s = function(g) {
            return function(m) {
              for (var h = o(m), c = r(h), i = c.length, u = 0, d = [], v; i > u; )
                v = c[u++], (!n || l.call(h, v)) && d.push(g ? [v, h[v]] : h[v]);
              return d;
            };
          };
          a.exports = {
            // `Object.entries` method
            // https://tc39.github.io/ecma262/#sec-object.entries
            entries: s(!0),
            // `Object.values` method
            // https://tc39.github.io/ecma262/#sec-object.values
            values: s(!1)
          };
        },
        /* 310 */
        /***/
        function(a, t, e) {
          var n = e(311);
          a.exports = n;
        },
        /* 311 */
        /***/
        function(a, t, e) {
          var n = e(312), r = Array.prototype;
          a.exports = function(o) {
            var l = o.some;
            return o === r || o instanceof Array && l === r.some ? n : l;
          };
        },
        /* 312 */
        /***/
        function(a, t, e) {
          e(313);
          var n = e(15);
          a.exports = n("Array").some;
        },
        /* 313 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(32).some, o = e(67), l = e(22), s = o("some"), g = l("some");
          n({ target: "Array", proto: !0, forced: !s || !g }, {
            some: function(h) {
              return r(this, h, arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        /* 314 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(315)), s = o.__importDefault(e(316)), g = o.__importDefault(e(321)), m = o.__importDefault(e(326)), h = o.__importDefault(e(327)), c = o.__importDefault(e(328)), i = o.__importDefault(e(329)), u = o.__importDefault(e(331)), d = o.__importDefault(e(333)), v = o.__importDefault(e(334)), f = o.__importDefault(e(337)), p = o.__importDefault(e(338)), y = o.__importDefault(e(339)), x = o.__importDefault(e(350)), E = o.__importDefault(e(365)), S = o.__importDefault(e(369)), I = o.__importDefault(e(137)), P = o.__importDefault(e(378)), T = o.__importDefault(e(380)), A = o.__importDefault(e(381)), D = o.__importDefault(e(382)), R = o.__importDefault(e(401)), N = o.__importDefault(e(406)), M = o.__importDefault(e(409));
          t.default = {
            bold: l.default,
            head: s.default,
            italic: m.default,
            link: g.default,
            underline: h.default,
            strikeThrough: c.default,
            fontName: i.default,
            fontSize: u.default,
            justify: d.default,
            quote: v.default,
            backColor: f.default,
            foreColor: p.default,
            video: y.default,
            image: x.default,
            indent: E.default,
            emoticon: S.default,
            list: I.default,
            lineHeight: P.default,
            undo: T.default,
            redo: A.default,
            table: D.default,
            code: R.default,
            splitLine: N.default,
            todo: M.default
          };
        },
        /* 315 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(23)), s = o.__importDefault(e(3)), g = (
            /** @class */
            function(m) {
              o.__extends(h, m);
              function h(c) {
                var i = this, u = s.default(`<div class="w-e-menu" data-title="加粗">
                <i class="w-e-icon-bold"></i>
            </div>`);
                return i = m.call(this, u, c) || this, i;
              }
              return h.prototype.clickHandler = function() {
                var c = this.editor, i = c.selection.isSelectionEmpty();
                i && c.selection.createEmptyRange(), c.cmd.do("bold"), i && (c.selection.collapseRange(), c.selection.restoreSelection());
              }, h.prototype.tryChangeActive = function() {
                var c = this.editor;
                c.cmd.queryCommandState("bold") ? this.active() : this.unActive();
              }, h;
            }(l.default)
          );
          t.default = g;
        },
        /* 316 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(27)), l = n(e(29)), s = n(e(4)), g = n(e(317)), m = n(e(28));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var h = e(2), c = h.__importDefault(e(24)), i = h.__importDefault(e(3)), u = e(6), d = e(7), v = (
            /** @class */
            function(f) {
              h.__extends(p, f);
              function p(y) {
                var x = this, E = i.default('<div class="w-e-menu" data-title="标题"><i class="w-e-icon-header"></i></div>'), S = {
                  width: 100,
                  title: "设置标题",
                  type: "list",
                  list: [{
                    $elem: i.default("<h1>H1</h1>"),
                    value: "<h1>"
                  }, {
                    $elem: i.default("<h2>H2</h2>"),
                    value: "<h2>"
                  }, {
                    $elem: i.default("<h3>H3</h3>"),
                    value: "<h3>"
                  }, {
                    $elem: i.default("<h4>H4</h4>"),
                    value: "<h4>"
                  }, {
                    $elem: i.default("<h5>H5</h5>"),
                    value: "<h5>"
                  }, {
                    $elem: i.default("<p>" + y.i18next.t("menus.dropListMenu.head.正文") + "</p>"),
                    value: "<p>"
                  }],
                  clickHandler: function(T) {
                    x.command(T);
                  }
                };
                x = f.call(this, E, y, S) || this;
                var I = y.config.onCatalogChange;
                return I && (x.oldCatalogs = [], x.addListenerCatalog(), x.getCatalogs()), x;
              }
              return p.prototype.command = function(y) {
                var x = this.editor, E = x.selection.getSelectionContainerElem();
                if (E && x.$textElem.equal(E))
                  this.setMultilineHead(y);
                else {
                  var S;
                  if ((0, o.default)(S = ["OL", "UL", "LI", "TABLE", "TH", "TR", "CODE", "HR"]).call(S, i.default(E).getNodeName()) > -1)
                    return;
                  x.cmd.do("formatBlock", y);
                }
                y !== "<p>" && this.addUidForSelectionElem();
              }, p.prototype.addUidForSelectionElem = function() {
                var y = this.editor, x = y.selection.getSelectionContainerElem(), E = u.getRandomCode();
                i.default(x).attr("id", E);
              }, p.prototype.addListenerCatalog = function() {
                var y = this, x = this.editor;
                x.txt.eventHooks.changeEvents.push(function() {
                  y.getCatalogs();
                });
              }, p.prototype.getCatalogs = function() {
                var y = this.editor, x = this.editor.$textElem, E = y.config.onCatalogChange, S = (0, l.default)(x).call(x, "h1,h2,h3,h4,h5"), I = [];
                (0, s.default)(S).call(S, function(P, T) {
                  var A = i.default(P), D = A.attr("id"), R = A.getNodeName(), N = A.text();
                  D || (D = u.getRandomCode(), A.attr("id", D)), N && I.push({
                    tag: R,
                    id: D,
                    text: N
                  });
                }), (0, g.default)(this.oldCatalogs) !== (0, g.default)(I) && (this.oldCatalogs = I, E && E(I));
              }, p.prototype.setMultilineHead = function(y) {
                var x = this, E, S, I = this.editor, P = I.selection, T = (E = P.getSelectionContainerElem()) === null || E === void 0 ? void 0 : E.elems[0], A = ["IMG", "VIDEO", "TABLE", "TH", "TR", "UL", "OL", "PRE", "HR", "BLOCKQUOTE"], D = i.default(P.getSelectionStartElem()), R = i.default(P.getSelectionEndElem());
                R.elems[0].outerHTML === i.default(d.EMPTY_P).elems[0].outerHTML && !R.elems[0].nextSibling && (R = R.prev());
                var N = [];
                N.push(D.getNodeTop(I));
                var M = [], b = (S = P.getRange()) === null || S === void 0 ? void 0 : S.commonAncestorContainer.childNodes;
                b == null || (0, s.default)(b).call(b, function(j, O) {
                  j === N[0].getNode() && M.push(O), j === R.getNodeTop(I).getNode() && M.push(O);
                });
                for (var B = 0; N[B].getNode() !== R.getNodeTop(I).getNode(); ) {
                  if (!N[B].elems[0]) return;
                  var F = i.default(N[B].next().getNode());
                  N.push(F), B++;
                }
                N == null || (0, s.default)(N).call(N, function(j, O) {
                  if (!x.hasTag(j, A)) {
                    var L = i.default(y), H = j.parent().getNode();
                    L.html("" + j.html()), H.insertBefore(L.getNode(), j.getNode()), j.remove();
                  }
                }), P.createRangeByElems(T.children[M[0]], T.children[M[1]]);
              }, p.prototype.hasTag = function(y, x) {
                var E = this, S;
                if (!y) return !1;
                if ((0, m.default)(x).call(x, y == null ? void 0 : y.getNodeName())) return !0;
                var I = !1;
                return (S = y.children()) === null || S === void 0 || (0, s.default)(S).call(S, function(P) {
                  I = E.hasTag(i.default(P), x);
                }), I;
              }, p.prototype.tryChangeActive = function() {
                var y = this.editor, x = /^h/i, E = y.cmd.queryCommandValue("formatBlock");
                x.test(E) ? this.active() : this.unActive();
              }, p;
            }(c.default)
          );
          t.default = v;
        },
        /* 317 */
        /***/
        function(a, t, e) {
          a.exports = e(318);
        },
        /* 318 */
        /***/
        function(a, t, e) {
          var n = e(319);
          a.exports = n;
        },
        /* 319 */
        /***/
        function(a, t, e) {
          e(320);
          var n = e(9);
          n.JSON || (n.JSON = { stringify: JSON.stringify }), a.exports = function(o, l, s) {
            return n.JSON.stringify.apply(null, arguments);
          };
        },
        /* 320 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(36), o = e(11), l = r("JSON", "stringify"), s = /[\uD800-\uDFFF]/g, g = /^[\uD800-\uDBFF]$/, m = /^[\uDC00-\uDFFF]$/, h = function(i, u, d) {
            var v = d.charAt(u - 1), f = d.charAt(u + 1);
            return g.test(i) && !m.test(f) || m.test(i) && !g.test(v) ? "\\u" + i.charCodeAt(0).toString(16) : i;
          }, c = o(function() {
            return l("\uDF06\uD834") !== '"\\udf06\\ud834"' || l("\uDEAD") !== '"\\udead"';
          });
          l && n({ target: "JSON", stat: !0, forced: c }, {
            // eslint-disable-next-line no-unused-vars
            stringify: function(u, d, v) {
              var f = l.apply(null, arguments);
              return typeof f == "string" ? f.replace(s, h) : f;
            }
          });
        },
        /* 321 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(17));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(38)), g = l.__importDefault(e(3)), m = l.__importDefault(e(322)), h = l.__importStar(e(96)), c = l.__importDefault(e(33)), i = l.__importDefault(e(324)), u = e(7), d = (
            /** @class */
            function(v) {
              l.__extends(f, v);
              function f(p) {
                var y = this, x = g.default('<div class="w-e-menu" data-title="链接"><i class="w-e-icon-link"></i></div>');
                return y = v.call(this, x, p) || this, i.default(p), y;
              }
              return f.prototype.clickHandler = function() {
                var p = this.editor, y, x = p.selection.getSelectionContainerElem(), E = p.$textElem, S = E.html(), I = (0, o.default)(S).call(S);
                if (I === u.EMPTY_P) {
                  var P = E.children();
                  p.selection.createRangeByElem(P, !0, !0), x = p.selection.getSelectionContainerElem();
                }
                if (!(x && p.$textElem.equal(x)))
                  if (this.isActive) {
                    var T = "", A = "";
                    if (y = p.selection.getSelectionContainerElem(), !y)
                      return;
                    if (y.getNodeName() !== "A") {
                      var D = h.getParentNodeA(y);
                      y = g.default(D);
                    }
                    T = y.elems[0].innerText, A = y.attr("href"), this.createPanel(T, A);
                  } else
                    p.selection.isSelectionEmpty() ? this.createPanel("", "") : this.createPanel(p.selection.getSelectionText(), "");
              }, f.prototype.createPanel = function(p, y) {
                var x = m.default(this.editor, p, y), E = new c.default(this, x);
                E.create();
              }, f.prototype.tryChangeActive = function() {
                var p = this.editor;
                h.default(p) ? this.active() : this.unActive();
              }, f;
            }(s.default)
          );
          t.default = d;
        },
        /* 322 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(28)), l = n(e(17)), s = n(e(29));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var g = e(2), m = e(6), h = g.__importDefault(e(3)), c = g.__importStar(e(96)), i = e(323);
          function u(d, v, f) {
            var p = m.getRandom("input-link"), y = m.getRandom("input-text"), x = m.getRandom("btn-ok"), E = m.getRandom("btn-del"), S = c.default(d) ? "inline-block" : "none", I;
            function P() {
              if (c.default(d)) {
                var N = d.selection.getSelectionContainerElem();
                N && (d.selection.createRangeByElem(N), d.selection.restoreSelection(), I = N);
              }
            }
            function T(N, M) {
              var b = N.replace(/</g, "&lt;").replace(/>/g, "&gt;"), B = h.default('<a target="_blank">' + b + "</a>"), F = B.elems[0];
              F.innerText = N, F.href = M, c.default(d) && P(), d.cmd.do("insertElem", B);
            }
            function A() {
              if (c.default(d))
                if (P(), I.getNodeName() === "A") {
                  var N, M = I.elems[0], b = M.parentElement;
                  b && (0, o.default)(N = c.EXTRA_TAG).call(N, b.nodeName) ? b.innerHTML = M.innerHTML : d.cmd.do("insertHTML", "<span>" + M.innerHTML + "</span>");
                } else {
                  var B = c.getParentNodeA(I), F = B.innerHTML;
                  d.cmd.do("insertHTML", "<span>" + F + "</span>");
                }
            }
            function D(N, M) {
              var b = d.config.linkCheck(N, M);
              if (b !== void 0) {
                if (b === !0)
                  return !0;
                d.config.customAlert(b, "warning");
              }
              return !1;
            }
            var R = {
              width: 300,
              height: 0,
              // 拼接字符串的：xss 攻击：
              //    如值为："><img src=1 onerror=alert(/xss/)>， 插入后：value=""><img src=1 onerror=alert(/xss/)>", 插入一个img元素
              // panel 中可包含多个 tab
              tabs: [{
                // tab 的标题
                title: d.i18next.t("menus.panelMenus.link.链接"),
                // 模板
                tpl: `<div>
                        <input
                            id="` + y + `"
                            type="text"
                            class="block"
                            placeholder="` + d.i18next.t("menus.panelMenus.link.链接文字") + `"/>
                        </td>
                        <input
                            id="` + p + `"
                            type="text"
                            class="block"
                            placeholder="` + d.i18next.t("如") + ` https://..."/>
                        </td>
                        <div class="w-e-button-container">
                            <button type="button" id="` + x + `" class="right">
                                ` + d.i18next.t("插入") + `
                            </button>
                            <button type="button" id="` + E + '" class="gray right" style="display:' + S + `">
                                ` + d.i18next.t("menus.panelMenus.link.取消链接") + `
                            </button>
                        </div>
                    </div>`,
                // 事件绑定
                events: [
                  // 插入链接
                  {
                    selector: "#" + x,
                    type: "click",
                    fn: function() {
                      var M, b, B, F, j, O = d.selection.getSelectionContainerElem(), L = O == null ? void 0 : O.elems[0];
                      d.selection.restoreSelection();
                      var H = d.selection.getSelectionRangeTopNodes()[0].getNode(), J = window.getSelection(), U = h.default("#" + p), Z = h.default("#" + y), W = (0, l.default)(M = U.val()).call(M), Q = (0, l.default)(b = Z.val()).call(b), Y = "";
                      J && !(J != null && J.isCollapsed) && (Y = (F = i.insertHtml(J, H)) === null || F === void 0 ? void 0 : (0, l.default)(F).call(F));
                      var X = Y == null ? void 0 : Y.replace(/<.*?>/g, ""), ee = (j = X == null ? void 0 : X.length) !== null && j !== void 0 ? j : 0;
                      if (ee <= Q.length) {
                        var de = Q.substring(0, ee), he = Q.substring(ee);
                        X === de && (Q = X + he);
                      }
                      if (W && (Q || (Q = W), !!D(Q, W))) {
                        if ((L == null ? void 0 : L.nodeName) === "A")
                          return L.setAttribute("href", W), L.innerText = Q, !0;
                        if ((L == null ? void 0 : L.nodeName) !== "A" && (0, o.default)(B = c.EXTRA_TAG).call(B, L.nodeName)) {
                          var Re = c.getParentNodeA(O);
                          if (Re)
                            return Re.setAttribute("href", W), L.innerText = Q, !0;
                        }
                        return T(Q, W), !0;
                      }
                    },
                    bindEnter: !0
                  },
                  // 取消链接
                  {
                    selector: "#" + E,
                    type: "click",
                    fn: function() {
                      return A(), !0;
                    }
                  }
                ]
              }],
              /**
               * 设置input的值，分别为文案和链接地址设置值
               *
               * 利用dom 设置链接文案的值，防止回填拼接引号问题, 出现xss攻击
               *
               * @param $container 对应上面生成的dom容器
               * @param type text | link
               */
              setLinkValue: function(M, b) {
                var B = "", F = "", j;
                b === "text" && (B = "#" + y, F = v), b === "link" && (B = "#" + p, F = f), j = (0, s.default)(M).call(M, B).elems[0], j.value = F;
              }
            };
            return R;
          }
          t.default = u;
        },
        /* 323 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.insertHtml = t.createPartHtml = t.makeHtmlString = t.getTopNode = void 0;
          function l(i, u) {
            var d = i, v = i;
            do {
              if (d.textContent === u) break;
              v = d, d.parentNode && (d = d == null ? void 0 : d.parentNode);
            } while ((d == null ? void 0 : d.nodeName) !== "P");
            return v;
          }
          t.getTopNode = l;
          function s(i, u) {
            var d = i.nodeName, v = "";
            if (i.nodeType === 3 || /^(h|H)[1-6]$/.test(d))
              return u;
            if (i.nodeType === 1) {
              var f = i.getAttribute("style"), p = i.getAttribute("face"), y = i.getAttribute("color");
              f && (v = v + (' style="' + f + '"')), p && (v = v + (' face="' + p + '"')), y && (v = v + (' color="' + y + '"'));
            }
            return d = d.toLowerCase(), "<" + d + v + ">" + u + "</" + d + ">";
          }
          t.makeHtmlString = s;
          function g(i, u, d, v) {
            var f, p = (f = u.textContent) === null || f === void 0 ? void 0 : f.substring(d, v), y = u, x = "";
            do
              x = s(y, p ?? ""), p = x, y = y == null ? void 0 : y.parentElement;
            while (y && y.textContent !== i);
            return x;
          }
          t.createPartHtml = g;
          function m(i, u) {
            var d, v, f, p, y, x = i.anchorNode, E = i.focusNode, S = i.anchorOffset, I = i.focusOffset, P = (d = u.textContent) !== null && d !== void 0 ? d : "", T = h(u), A = "", D = "", R = "", N = "", M = x, b = E, B = x;
            if (x != null && x.isEqualNode(E ?? null)) {
              var F = g(P, x, S, I);
              return F = c(T, F), F;
            }
            for (x && (D = g(P, x, S ?? 0)), E && (N = g(P, E, 0, I)), x && (M = l(x, P)), E && (b = l(E, P)), B = (v = M == null ? void 0 : M.nextSibling) !== null && v !== void 0 ? v : x; !(B != null && B.isEqualNode(b ?? null)); ) {
              var j = B == null ? void 0 : B.nodeName;
              if (j === "#text")
                R = R + (B == null ? void 0 : B.textContent);
              else {
                var O = (p = (f = B == null ? void 0 : B.firstChild) === null || f === void 0 ? void 0 : f.parentElement) === null || p === void 0 ? void 0 : p.innerHTML;
                B && (R = R + s(B, O ?? ""));
              }
              var L = (y = B == null ? void 0 : B.nextSibling) !== null && y !== void 0 ? y : B;
              if (L === B) break;
              B = L;
            }
            return A = "" + D + R + N, A = c(T, A), A;
          }
          t.insertHtml = m;
          function h(i) {
            for (var u, d = (u = i.textContent) !== null && u !== void 0 ? u : "", v = []; (i == null ? void 0 : i.textContent) === d; )
              i.nodeName !== "P" && i.nodeName !== "TABLE" && v.push(i), i = i.childNodes[0];
            return v;
          }
          function c(i, u) {
            return (0, o.default)(i).call(i, function(d) {
              u = s(d, u);
            }), u;
          }
        },
        /* 324 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(325));
          function s(g) {
            l.default(g);
          }
          t.default = s;
        },
        /* 325 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(28));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3)), g = l.__importDefault(e(39)), m = e(96);
          function h(i) {
            var u;
            function d(f) {
              var p = [{
                $elem: s.default("<span>" + i.i18next.t("menus.panelMenus.link.查看链接") + "</span>"),
                onClick: function(x, E) {
                  var S = E.attr("href");
                  return window.open(S, "_target"), !0;
                }
              }, {
                $elem: s.default("<span>" + i.i18next.t("menus.panelMenus.link.取消链接") + "</span>"),
                onClick: function(x, E) {
                  var S, I;
                  x.selection.createRangeByElem(E), x.selection.restoreSelection();
                  var P = E.childNodes();
                  if ((P == null ? void 0 : P.getNodeName()) === "IMG") {
                    var T = (I = (S = x.selection.getSelectionContainerElem()) === null || S === void 0 ? void 0 : S.children()) === null || I === void 0 ? void 0 : I.elems[0].children[0];
                    x.cmd.do("insertHTML", `<img 
                                src=` + (T == null ? void 0 : T.getAttribute("src")) + ` 
                                style=` + (T == null ? void 0 : T.getAttribute("style")) + ">");
                  } else {
                    var A, D = E.elems[0], R = D.innerHTML, N = D.parentElement;
                    N && (0, o.default)(A = m.EXTRA_TAG).call(A, N.nodeName) ? N.innerHTML = R : x.cmd.do("insertHTML", "<span>" + R + "</span>");
                  }
                  return !0;
                }
              }];
              u = new g.default(i, f, p), u.create();
            }
            function v() {
              u && (u.remove(), u = null);
            }
            return {
              showLinkTooltip: d,
              hideLinkTooltip: v
            };
          }
          function c(i) {
            var u = h(i), d = u.showLinkTooltip, v = u.hideLinkTooltip;
            i.txt.eventHooks.linkClickEvents.push(d), i.txt.eventHooks.clickEvents.push(v), i.txt.eventHooks.keyupEvents.push(v), i.txt.eventHooks.toolbarClickEvents.push(v), i.txt.eventHooks.menuClickEvents.push(v), i.txt.eventHooks.textScrollEvents.push(v);
          }
          t.default = c;
        },
        /* 326 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(23)), s = o.__importDefault(e(3)), g = (
            /** @class */
            function(m) {
              o.__extends(h, m);
              function h(c) {
                var i = this, u = s.default(`<div class="w-e-menu" data-title="斜体">
                <i class="w-e-icon-italic"></i>
            </div>`);
                return i = m.call(this, u, c) || this, i;
              }
              return h.prototype.clickHandler = function() {
                var c = this.editor, i = c.selection.isSelectionEmpty();
                i && c.selection.createEmptyRange(), c.cmd.do("italic"), i && (c.selection.collapseRange(), c.selection.restoreSelection());
              }, h.prototype.tryChangeActive = function() {
                var c = this.editor;
                c.cmd.queryCommandState("italic") ? this.active() : this.unActive();
              }, h;
            }(l.default)
          );
          t.default = g;
        },
        /* 327 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(23)), s = o.__importDefault(e(3)), g = (
            /** @class */
            function(m) {
              o.__extends(h, m);
              function h(c) {
                var i = this, u = s.default(`<div class="w-e-menu" data-title="下划线">
                <i class="w-e-icon-underline"></i>
            </div>`);
                return i = m.call(this, u, c) || this, i;
              }
              return h.prototype.clickHandler = function() {
                var c = this.editor, i = c.selection.isSelectionEmpty();
                i && c.selection.createEmptyRange(), c.cmd.do("underline"), i && (c.selection.collapseRange(), c.selection.restoreSelection());
              }, h.prototype.tryChangeActive = function() {
                var c = this.editor;
                c.cmd.queryCommandState("underline") ? this.active() : this.unActive();
              }, h;
            }(l.default)
          );
          t.default = g;
        },
        /* 328 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(23)), s = o.__importDefault(e(3)), g = (
            /** @class */
            function(m) {
              o.__extends(h, m);
              function h(c) {
                var i = this, u = s.default(`<div class="w-e-menu" data-title="删除线">
                <i class="w-e-icon-strikethrough"></i>
            </div>`);
                return i = m.call(this, u, c) || this, i;
              }
              return h.prototype.clickHandler = function() {
                var c = this.editor, i = c.selection.isSelectionEmpty();
                i && c.selection.createEmptyRange(), c.cmd.do("strikeThrough"), i && (c.selection.collapseRange(), c.selection.restoreSelection());
              }, h.prototype.tryChangeActive = function() {
                var c = this.editor;
                c.cmd.queryCommandState("strikeThrough") ? this.active() : this.unActive();
              }, h;
            }(l.default)
          );
          t.default = g;
        },
        /* 329 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(24)), s = o.__importDefault(e(3)), g = o.__importDefault(e(330)), m = (
            /** @class */
            function(h) {
              o.__extends(c, h);
              function c(i) {
                var u = this, d = s.default(`<div class="w-e-menu" data-title="字体">
                <i class="w-e-icon-font"></i>
            </div>`), v = new g.default(i.config.fontNames), f = {
                  width: 100,
                  title: "设置字体",
                  type: "list",
                  list: v.getItemList(),
                  clickHandler: function(y) {
                    u.command(y);
                  }
                };
                return u = h.call(this, d, i, f) || this, u;
              }
              return c.prototype.command = function(i) {
                var u, d = this.editor, v = d.selection.isSelectionEmpty(), f = (u = d.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
                if (f != null) {
                  var p = (f == null ? void 0 : f.nodeName.toLowerCase()) !== "p", y = (f == null ? void 0 : f.getAttribute("face")) === i;
                  if (v) {
                    if (p && !y) {
                      var x = d.selection.getSelectionRangeTopNodes();
                      d.selection.createRangeByElem(x[0]), d.selection.moveCursor(x[0].elems[0]);
                    }
                    d.selection.setRangeToElem(f), d.selection.createEmptyRange();
                  }
                  d.cmd.do("fontName", i), v && (d.selection.collapseRange(), d.selection.restoreSelection());
                }
              }, c.prototype.tryChangeActive = function() {
              }, c;
            }(l.default)
          );
          t.default = m;
        },
        /* 330 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3)), g = (
            /** @class */
            function() {
              function m(h) {
                var c = this;
                this.itemList = [], (0, o.default)(h).call(h, function(i) {
                  var u = typeof i == "string" ? i : i.value, d = typeof i == "string" ? i : i.name;
                  c.itemList.push({
                    $elem: s.default(`<p style="font-family:'` + u + `'">` + d + "</p>"),
                    value: d
                  });
                });
              }
              return m.prototype.getItemList = function() {
                return this.itemList;
              }, m;
            }()
          );
          t.default = g;
        },
        /* 331 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(24)), s = o.__importDefault(e(3)), g = o.__importDefault(e(332)), m = (
            /** @class */
            function(h) {
              o.__extends(c, h);
              function c(i) {
                var u = this, d = s.default(`<div class="w-e-menu" data-title="字号">
                <i class="w-e-icon-text-heigh"></i>
            </div>`), v = new g.default(i.config.fontSizes), f = {
                  width: 160,
                  title: "设置字号",
                  type: "list",
                  list: v.getItemList(),
                  clickHandler: function(y) {
                    u.command(y);
                  }
                };
                return u = h.call(this, d, i, f) || this, u;
              }
              return c.prototype.command = function(i) {
                var u, d = this.editor, v = d.selection.isSelectionEmpty(), f = (u = d.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
                f != null && (d.cmd.do("fontSize", i), v && (d.selection.collapseRange(), d.selection.restoreSelection()));
              }, c.prototype.tryChangeActive = function() {
              }, c;
            }(l.default)
          );
          t.default = m;
        },
        /* 332 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(3)), s = (
            /** @class */
            function() {
              function g(m) {
                this.itemList = [];
                for (var h in m) {
                  var c = m[h];
                  this.itemList.push({
                    $elem: l.default('<p style="font-size:' + h + '">' + c.name + "</p>"),
                    value: c.value
                  });
                }
              }
              return g.prototype.getItemList = function() {
                return this.itemList;
              }, g;
            }()
          );
          t.default = s;
        },
        /* 333 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4)), l = n(e(27));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var s = e(2), g = s.__importDefault(e(24)), m = s.__importDefault(e(3)), h = ["LI"], c = ["BLOCKQUOTE"], i = (
            /** @class */
            function(u) {
              s.__extends(d, u);
              function d(v) {
                var f = this, p = m.default('<div class="w-e-menu" data-title="对齐"><i class="w-e-icon-paragraph-left"></i></div>'), y = {
                  width: 100,
                  title: "对齐方式",
                  type: "list",
                  list: [{
                    $elem: m.default(`<p>
                            <i class="w-e-icon-paragraph-left w-e-drop-list-item"></i>
                            ` + v.i18next.t("menus.dropListMenu.justify.靠左") + `
                        </p>`),
                    value: "left"
                  }, {
                    $elem: m.default(`<p>
                            <i class="w-e-icon-paragraph-center w-e-drop-list-item"></i>
                            ` + v.i18next.t("menus.dropListMenu.justify.居中") + `
                        </p>`),
                    value: "center"
                  }, {
                    $elem: m.default(`<p>
                            <i class="w-e-icon-paragraph-right w-e-drop-list-item"></i>
                            ` + v.i18next.t("menus.dropListMenu.justify.靠右") + `
                        </p>`),
                    value: "right"
                  }, {
                    $elem: m.default(`<p>
                            <i class="w-e-icon-paragraph-justify w-e-drop-list-item"></i>
                            ` + v.i18next.t("menus.dropListMenu.justify.两端") + `
                        </p>`),
                    value: "justify"
                  }],
                  clickHandler: function(E) {
                    f.command(E);
                  }
                };
                return f = u.call(this, p, v, y) || this, f;
              }
              return d.prototype.command = function(v) {
                var f = this.editor, p = f.selection, y = p.getSelectionContainerElem();
                p.saveRange();
                var x = f.selection.getSelectionRangeTopNodes();
                if (y != null && y.length)
                  if (this.isSpecialNode(y, x[0]) || this.isSpecialTopNode(x[0])) {
                    var E = this.getSpecialNodeUntilTop(y, x[0]);
                    if (E == null) return;
                    m.default(E).css("text-align", v);
                  } else
                    (0, o.default)(x).call(x, function(S) {
                      S.css("text-align", v);
                    });
                p.restoreSelection();
              }, d.prototype.getSpecialNodeUntilTop = function(v, f) {
                for (var p = v.elems[0], y = f.elems[0]; p != null; ) {
                  if ((0, l.default)(h).call(h, p == null ? void 0 : p.nodeName) !== -1 || p.parentNode === y)
                    return p;
                  p = p.parentNode;
                }
                return p;
              }, d.prototype.isSpecialNode = function(v, f) {
                var p = this.getSpecialNodeUntilTop(v, f);
                return p == null ? !1 : (0, l.default)(h).call(h, p.nodeName) !== -1;
              }, d.prototype.isSpecialTopNode = function(v) {
                var f;
                return v == null ? !1 : (0, l.default)(c).call(c, (f = v.elems[0]) === null || f === void 0 ? void 0 : f.nodeName) !== -1;
              }, d.prototype.tryChangeActive = function() {
              }, d;
            }(g.default)
          );
          t.default = i;
        },
        /* 334 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3)), g = l.__importDefault(e(23)), m = l.__importDefault(e(335)), h = l.__importDefault(e(336)), c = e(7), i = (
            /** @class */
            function(u) {
              l.__extends(d, u);
              function d(v) {
                var f = this, p = s.default(`<div class="w-e-menu" data-title="引用">
                <i class="w-e-icon-quotes-left"></i>
            </div>`);
                return f = u.call(this, p, v) || this, m.default(v), f;
              }
              return d.prototype.clickHandler = function() {
                var v, f, p = this.editor, y = p.selection.isSelectionEmpty(), x = p.selection.getSelectionRangeTopNodes(), E = x[x.length - 1], S = this.getTopNodeName();
                if (S === "BLOCKQUOTE") {
                  var I = s.default(E.childNodes()), P = I.length, T = E;
                  (0, o.default)(I).call(I, function(N) {
                    var M = s.default(N);
                    M.insertAfter(T), T = M;
                  }), E.remove(), p.selection.moveCursor(I.elems[P - 1]), this.tryChangeActive();
                } else {
                  var A = h.default(x);
                  if (p.$textElem.equal(E)) {
                    var D = (v = p.selection.getSelectionContainerElem()) === null || v === void 0 ? void 0 : v.elems[0];
                    p.selection.createRangeByElems(D.children[0], D.children[0]), x = p.selection.getSelectionRangeTopNodes(), A = h.default(x), E.append(A);
                  } else
                    A.insertAfter(E);
                  this.delSelectNode(x);
                  var R = (f = A.childNodes()) === null || f === void 0 ? void 0 : f.last().getNode();
                  if (R == null) return;
                  R.textContent ? p.selection.moveCursor(R) : p.selection.moveCursor(R, 0), this.tryChangeActive(), s.default(c.EMPTY_P).insertAfter(A);
                  return;
                }
                y && (p.selection.collapseRange(), p.selection.restoreSelection());
              }, d.prototype.tryChangeActive = function() {
                var v, f = this.editor, p = (v = f.selection.getSelectionRangeTopNodes()[0]) === null || v === void 0 ? void 0 : v.getNodeName();
                p === "BLOCKQUOTE" ? this.active() : this.unActive();
              }, d.prototype.getTopNodeName = function() {
                var v = this.editor, f = v.selection.getSelectionRangeTopNodes()[0], p = f == null ? void 0 : f.getNodeName();
                return p;
              }, d.prototype.delSelectNode = function(v) {
                (0, o.default)(v).call(v, function(f) {
                  f.remove();
                });
              }, d;
            }(g.default)
          );
          t.default = i;
        },
        /* 335 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = e(7), s = o.__importDefault(e(3));
          function g(m) {
            function h(c) {
              var i, u = m.selection.getSelectionContainerElem(), d = m.selection.getSelectionRangeTopNodes()[0];
              if ((d == null ? void 0 : d.getNodeName()) === "BLOCKQUOTE") {
                if (u.getNodeName() === "BLOCKQUOTE") {
                  var v = (i = u.childNodes()) === null || i === void 0 ? void 0 : i.getNode();
                  m.selection.moveCursor(v);
                }
                if (u.text() === "") {
                  c.preventDefault(), u.remove();
                  var f = s.default(l.EMPTY_P);
                  f.insertAfter(d), m.selection.moveCursor(f.getNode(), 0);
                }
                d.text() === "" && d.remove();
              }
            }
            m.txt.eventHooks.enterDownEvents.push(h);
          }
          t.default = g;
        },
        /* 336 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3));
          function g(m) {
            var h = s.default("<blockquote></blockquote>");
            return (0, o.default)(m).call(m, function(c) {
              h.append(c.clone(!0));
            }), h;
          }
          t.default = g;
        },
        /* 337 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(26));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(24)), g = l.__importDefault(e(3)), m = e(6), h = (
            /** @class */
            function(c) {
              l.__extends(i, c);
              function i(u) {
                var d, v = this, f = g.default(`<div class="w-e-menu" data-title="背景色">
                <i class="w-e-icon-paint-brush"></i>
            </div>`), p = {
                  width: 120,
                  title: "背景颜色",
                  // droplist 内容以 block 形式展示
                  type: "inline-block",
                  list: (0, o.default)(d = u.config.colors).call(d, function(y) {
                    return {
                      $elem: g.default('<i style="color:' + y + ';" class="w-e-icon-paint-brush"></i>'),
                      value: y
                    };
                  }),
                  clickHandler: function(x) {
                    v.command(x);
                  }
                };
                return v = c.call(this, f, u, p) || this, v;
              }
              return i.prototype.command = function(u) {
                var d, v = this.editor, f = v.selection.isSelectionEmpty(), p = (d = v.selection.getSelectionContainerElem()) === null || d === void 0 ? void 0 : d.elems[0];
                if (p != null) {
                  var y = (p == null ? void 0 : p.nodeName.toLowerCase()) !== "p", x = p == null ? void 0 : p.style.backgroundColor, E = m.hexToRgb(u) === x;
                  if (f) {
                    if (y && !E) {
                      var S = v.selection.getSelectionRangeTopNodes();
                      v.selection.createRangeByElem(S[0]), v.selection.moveCursor(S[0].elems[0]);
                    }
                    v.selection.createEmptyRange();
                  }
                  v.cmd.do("backColor", u), f && (v.selection.collapseRange(), v.selection.restoreSelection());
                }
              }, i.prototype.tryChangeActive = function() {
              }, i;
            }(s.default)
          );
          t.default = h;
        },
        /* 338 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(26));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(24)), g = l.__importDefault(e(3)), m = (
            /** @class */
            function(h) {
              l.__extends(c, h);
              function c(i) {
                var u, d = this, v = g.default(`<div class="w-e-menu" data-title="文字颜色">
                <i class="w-e-icon-pencil2"></i>
            </div>`), f = {
                  width: 120,
                  title: "文字颜色",
                  // droplist 内容以 block 形式展示
                  type: "inline-block",
                  list: (0, o.default)(u = i.config.colors).call(u, function(p) {
                    return {
                      $elem: g.default('<i style="color:' + p + ';" class="w-e-icon-pencil2"></i>'),
                      value: p
                    };
                  }),
                  clickHandler: function(y) {
                    d.command(y);
                  }
                };
                return d = h.call(this, v, i, f) || this, d;
              }
              return c.prototype.command = function(i) {
                var u, d = this.editor, v = d.selection.isSelectionEmpty(), f = (u = d.selection.getSelectionContainerElem()) === null || u === void 0 ? void 0 : u.elems[0];
                if (f != null) {
                  var p = d.selection.getSelectionText();
                  if (f.nodeName === "A" && f.textContent === p) {
                    var y = g.default("<span>&#8203;</span>").getNode();
                    f.appendChild(y);
                  }
                  d.cmd.do("foreColor", i), v && (d.selection.collapseRange(), d.selection.restoreSelection());
                }
              }, c.prototype.tryChangeActive = function() {
              }, c;
            }(s.default)
          );
          t.default = m;
        },
        /* 339 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(3)), s = o.__importDefault(e(33)), g = o.__importDefault(e(38)), m = o.__importDefault(e(340)), h = o.__importDefault(e(346)), c = (
            /** @class */
            function(i) {
              o.__extends(u, i);
              function u(d) {
                var v = this, f = l.default(`<div class="w-e-menu" data-title="视频">
                <i class="w-e-icon-play"></i>
            </div>`);
                return v = i.call(this, f, d) || this, h.default(d), v;
              }
              return u.prototype.clickHandler = function() {
                this.createPanel("");
              }, u.prototype.createPanel = function(d) {
                var v = m.default(this.editor, d), f = new s.default(this, v);
                f.create();
              }, u.prototype.tryChangeActive = function() {
              }, u;
            }(g.default)
          );
          t.default = c;
        },
        /* 340 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(17));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = e(6), g = l.__importDefault(e(3)), m = l.__importDefault(e(341)), h = e(7);
          function c(i, u) {
            var d = i.config, v = new m.default(i), f = s.getRandom("input-iframe"), p = s.getRandom("btn-ok"), y = s.getRandom("input-upload"), x = s.getRandom("btn-local-ok");
            function E(T) {
              i.cmd.do("insertHTML", T + h.EMPTY_P), i.config.onlineVideoCallback(T);
            }
            function S(T) {
              var A = i.config.onlineVideoCheck(T);
              return A === !0 ? !0 : (typeof A == "string" && i.config.customAlert(A, "error"), !1);
            }
            var I = [{
              // tab 的标题
              title: i.i18next.t("menus.panelMenus.video.上传视频"),
              tpl: `<div class="w-e-up-video-container">
                    <div id="` + x + `" class="w-e-up-btn">
                        <i class="w-e-icon-upload2"></i>
                    </div>
                    <div style="display:none;">
                        <input id="` + y + `" type="file" accept="video/*"/>
                    </div>
                 </div>`,
              events: [
                // 触发选择视频
                {
                  selector: "#" + x,
                  type: "click",
                  fn: function() {
                    var A = g.default("#" + y), D = A.elems[0];
                    if (D)
                      D.click();
                    else
                      return !0;
                  }
                },
                // 选择视频完毕
                {
                  selector: "#" + y,
                  type: "change",
                  fn: function() {
                    var A = g.default("#" + y), D = A.elems[0];
                    if (!D)
                      return !0;
                    var R = D.files;
                    return R.length && v.uploadVideo(R), !0;
                  }
                }
              ]
            }, {
              // tab 的标题
              title: i.i18next.t("menus.panelMenus.video.插入视频"),
              // 模板
              tpl: `<div>
                    <input 
                        id="` + f + `" 
                        type="text" 
                        class="block" 
                        placeholder="` + i.i18next.t("如") + `：<iframe src=... ></iframe>"/>
                    </td>
                    <div class="w-e-button-container">
                        <button type="button" id="` + p + `" class="right">
                            ` + i.i18next.t("插入") + `
                        </button>
                    </div>
                </div>`,
              // 事件绑定
              events: [
                // 插入视频
                {
                  selector: "#" + p,
                  type: "click",
                  fn: function() {
                    var A, D = g.default("#" + f), R = (0, o.default)(A = D.val()).call(A);
                    if (R && S(R))
                      return E(R), !0;
                  },
                  bindEnter: !0
                }
              ]
            }], P = {
              width: 300,
              height: 0,
              // panel 中可包含多个 tab
              tabs: []
            };
            return window.FileReader && (d.uploadVideoServer || d.customUploadVideo) && P.tabs.push(I[0]), d.showLinkVideo && P.tabs.push(I[1]), P;
          }
          t.default = c;
        },
        /* 341 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(133)), l = n(e(57)), s = n(e(4)), g = n(e(27));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var m = e(2), h = e(6), c = m.__importDefault(e(135)), i = m.__importDefault(e(136)), u = e(7), d = e(6), v = (
            /** @class */
            function() {
              function f(p) {
                this.editor = p;
              }
              return f.prototype.uploadVideo = function(p) {
                var y = this;
                if (p.length) {
                  var x = this.editor, E = x.config, S = "validate.", I = function(X) {
                    return x.i18next.t(S + X);
                  }, P = E.uploadVideoServer, T = E.uploadVideoMaxSize, A = T / 1024, D = E.uploadVideoName, R = E.uploadVideoParams, N = E.uploadVideoParamsWithUrl, M = E.uploadVideoHeaders, b = E.uploadVideoHooks, B = E.uploadVideoTimeout, F = E.withVideoCredentials, j = E.customUploadVideo, O = E.uploadVideoAccept, L = [], H = [];
                  if (h.arrForEach(p, function(Y) {
                    var X = Y.name, ee = Y.size / 1024 / 1024;
                    if (!(!X || !ee)) {
                      if (!(O instanceof Array)) {
                        H.push("【" + O + "】" + I("uploadVideoAccept 不是Array"));
                        return;
                      }
                      if (!(0, o.default)(O).call(O, function(de) {
                        return de === X.split(".")[X.split(".").length - 1];
                      })) {
                        H.push("【" + X + "】" + I("不是视频"));
                        return;
                      }
                      if (A < ee) {
                        H.push("【" + X + "】" + I("大于") + " " + A + "M");
                        return;
                      }
                      L.push(Y);
                    }
                  }), H.length) {
                    E.customAlert(I("视频验证未通过") + `: 
` + H.join(`
`), "warning");
                    return;
                  }
                  if (L.length === 0) {
                    E.customAlert(I("传入的文件不合法"), "warning");
                    return;
                  }
                  if (j && typeof j == "function") {
                    var J;
                    j(L, (0, l.default)(J = this.insertVideo).call(J, this));
                    return;
                  }
                  var U = new FormData();
                  if ((0, s.default)(L).call(L, function(Y, X) {
                    var ee = D || Y.name;
                    L.length > 1 && (ee = ee + (X + 1)), U.append(ee, Y);
                  }), P) {
                    var Z = P.split("#");
                    P = Z[0];
                    var W = Z[1] || "";
                    (0, s.default)(h).call(h, R, function(Y, X) {
                      N && ((0, g.default)(P).call(P, "?") > 0 ? P += "&" : P += "?", P = P + Y + "=" + X), U.append(Y, X);
                    }), W && (P += "#" + W);
                    var Q = c.default(P, {
                      timeout: B,
                      formData: U,
                      headers: M,
                      withCredentials: !!F,
                      beforeSend: function(X) {
                        if (b.before) return b.before(X, x, L);
                      },
                      onTimeout: function(X) {
                        E.customAlert(I("上传视频超时"), "error"), b.timeout && b.timeout(X, x);
                      },
                      onProgress: function(X, ee) {
                        var de = new i.default(x);
                        ee.lengthComputable && (X = ee.loaded / ee.total, de.show(X));
                      },
                      onError: function(X) {
                        E.customAlert(I("上传视频错误"), "error", I("上传视频错误") + "，" + I("服务器返回状态") + ": " + X.status), b.error && b.error(X, x);
                      },
                      onFail: function(X, ee) {
                        E.customAlert(I("上传视频失败"), "error", I("上传视频返回结果错误") + ("，" + I("返回结果") + ": ") + ee), b.fail && b.fail(X, x, ee);
                      },
                      onSuccess: function(X, ee) {
                        if (b.customInsert) {
                          var de;
                          b.customInsert((0, l.default)(de = y.insertVideo).call(de, y), ee, x);
                          return;
                        }
                        if (ee.errno != "0") {
                          E.customAlert(I("上传视频失败"), "error", I("上传视频返回结果错误") + "，" + I("返回结果") + " errno=" + ee.errno), b.fail && b.fail(X, x, ee);
                          return;
                        }
                        var he = ee.data;
                        y.insertVideo(he.url), b.success && b.success(X, x, ee);
                      }
                    });
                    typeof Q == "string" && E.customAlert(Q, "error");
                  }
                }
              }, f.prototype.insertVideo = function(p) {
                var y = this.editor, x = y.config, E = "validate.", S = function(T, A) {
                  return A === void 0 && (A = E), y.i18next.t(A + T);
                };
                if (!x.customInsertVideo)
                  d.UA.isFirefox ? y.cmd.do("insertHTML", '<p data-we-video-p="true"><video src="' + p + '" controls="controls" style="max-width:100%"></video></p><p>&#8203</p>') : y.cmd.do("insertHTML", '<video src="' + p + '" controls="controls" style="max-width:100%"></video>' + u.EMPTY_P);
                else {
                  x.customInsertVideo(p);
                  return;
                }
                var I = document.createElement("video");
                I.onload = function() {
                  I = null;
                }, I.onerror = function() {
                  x.customAlert(S("插入视频错误"), "error", "wangEditor: " + S("插入视频错误") + "，" + S("视频链接") + ' "' + p + '"，' + S("下载链接失败")), I = null;
                }, I.onabort = function() {
                  return I = null;
                }, I.src = p;
              }, f;
            }()
          );
          t.default = v;
        },
        /* 342 */
        /***/
        function(a, t, e) {
          a.exports = e(343);
        },
        /* 343 */
        /***/
        function(a, t, e) {
          var n = e(344);
          a.exports = n;
        },
        /* 344 */
        /***/
        function(a, t, e) {
          e(345);
          var n = e(9);
          a.exports = n.Date.now;
        },
        /* 345 */
        /***/
        function(a, t, e) {
          var n = e(5);
          n({ target: "Date", stat: !0 }, {
            now: function() {
              return (/* @__PURE__ */ new Date()).getTime();
            }
          });
        },
        /* 346 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(347)), s = o.__importDefault(e(349));
          function g(m) {
            l.default(m), s.default(m);
          }
          t.default = g;
        },
        /* 347 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.createShowHideFn = void 0;
          var o = e(2), l = o.__importDefault(e(3)), s = o.__importDefault(e(39)), g = o.__importDefault(e(348));
          function m(c) {
            var i, u = function(p, y) {
              return y === void 0 && (y = ""), c.i18next.t(y + p);
            };
            function d(f) {
              var p = [{
                $elem: l.default("<span class='w-e-icon-trash-o'></span>"),
                onClick: function(x, E) {
                  return E.remove(), !0;
                }
              }, {
                $elem: l.default("<span>100%</span>"),
                onClick: function(x, E) {
                  return E.attr("width", "100%"), E.removeAttr("height"), !0;
                }
              }, {
                $elem: l.default("<span>50%</span>"),
                onClick: function(x, E) {
                  return E.attr("width", "50%"), E.removeAttr("height"), !0;
                }
              }, {
                $elem: l.default("<span>30%</span>"),
                onClick: function(x, E) {
                  return E.attr("width", "30%"), E.removeAttr("height"), !0;
                }
              }, {
                $elem: l.default("<span>" + u("重置") + "</span>"),
                onClick: function(x, E) {
                  return E.removeAttr("width"), E.removeAttr("height"), !0;
                }
              }, {
                $elem: l.default("<span>" + u("menus.justify.靠左") + "</span>"),
                onClick: function(x, E) {
                  return g.default(E, "left"), !0;
                }
              }, {
                $elem: l.default("<span>" + u("menus.justify.居中") + "</span>"),
                onClick: function(x, E) {
                  return g.default(E, "center"), !0;
                }
              }, {
                $elem: l.default("<span>" + u("menus.justify.靠右") + "</span>"),
                onClick: function(x, E) {
                  return g.default(E, "right"), !0;
                }
              }];
              i = new s.default(c, f, p), i.create();
            }
            function v() {
              i && (i.remove(), i = null);
            }
            return {
              showVideoTooltip: d,
              hideVideoTooltip: v
            };
          }
          t.createShowHideFn = m;
          function h(c) {
            var i = m(c), u = i.showVideoTooltip, d = i.hideVideoTooltip;
            c.txt.eventHooks.videoClickEvents.push(u), c.txt.eventHooks.clickEvents.push(d), c.txt.eventHooks.keyupEvents.push(d), c.txt.eventHooks.toolbarClickEvents.push(d), c.txt.eventHooks.menuClickEvents.push(d), c.txt.eventHooks.textScrollEvents.push(d), c.txt.eventHooks.changeEvents.push(d);
          }
          t.default = h;
        },
        /* 348 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(28));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3));
          function g(h, c) {
            var i = ["P"], u = m(h, i);
            u && s.default(u).css("text-align", c);
          }
          t.default = g;
          function m(h, c) {
            for (var i, u = h.elems[0]; u != null; ) {
              if ((0, o.default)(c).call(c, u == null ? void 0 : u.nodeName))
                return u;
              if (((i = u == null ? void 0 : u.parentNode) === null || i === void 0 ? void 0 : i.nodeName) === "BODY")
                return null;
              u = u.parentNode;
            }
            return u;
          }
        },
        /* 349 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(6);
          function l(s) {
            if (o.UA.isFirefox) {
              var g = s.txt, m = s.selection, h = g.eventHooks.keydownEvents;
              h.push(function(c) {
                var i = m.getSelectionContainerElem();
                if (i) {
                  var u = i.getNodeTop(s), d = u.length && u.prev().length ? u.prev() : null;
                  d && d.attr("data-we-video-p") && m.getCursorPos() === 0 && c.keyCode === 8 && d.remove();
                }
              });
            }
          }
          t.default = l;
        },
        /* 350 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(26));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = e(7), g = l.__importDefault(e(3)), m = l.__importDefault(e(33)), h = l.__importDefault(e(38)), c = l.__importDefault(e(351)), i = l.__importDefault(e(364)), u = (
            /** @class */
            function(d) {
              l.__extends(v, d);
              function v(f) {
                var p = this, y = g.default('<div class="w-e-menu" data-title="图片"><i class="w-e-icon-image"></i></div>'), x = i.default(f);
                if (x.onlyUploadConf) {
                  var E;
                  y = x.onlyUploadConf.$elem, (0, o.default)(E = x.onlyUploadConf.events).call(E, function(S) {
                    var I = S.type, P = S.fn || s.EMPTY_FN;
                    y.on(I, function(T) {
                      T.stopPropagation(), P(T);
                    });
                  });
                }
                return p = d.call(this, y, f) || this, p.imgPanelConfig = x, c.default(f), p;
              }
              return v.prototype.clickHandler = function() {
                this.imgPanelConfig.onlyUploadConf || this.createPanel();
              }, v.prototype.createPanel = function() {
                var f = this.imgPanelConfig, p = new m.default(this, f);
                this.setPanel(p), p.create();
              }, v.prototype.tryChangeActive = function() {
              }, v;
            }(h.default)
          );
          t.default = u;
        },
        /* 351 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(352)), s = o.__importDefault(e(353)), g = o.__importDefault(e(354)), m = o.__importDefault(e(362)), h = o.__importDefault(e(363));
          function c(i) {
            l.default(i), s.default(i), g.default(i), m.default(i), h.default(i);
          }
          t.default = c;
        },
        /* 352 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = e(131), s = o.__importDefault(e(97));
          function g(i, u) {
            var d = i.config, v = d.pasteFilterStyle, f = d.pasteIgnoreImg, p = l.getPasteHtml(u, v, f);
            if (p) return !0;
            var y = l.getPasteText(u);
            return !!y;
          }
          function m(i, u) {
            for (var d, v = ((d = u.clipboardData) === null || d === void 0 ? void 0 : d.types) || [], f = 0; f < v.length; f++) {
              var p = v[f];
              if (p === "Files")
                return !0;
            }
            return !1;
          }
          function h(i, u) {
            if (!(!m(u, i) && g(u, i))) {
              var d = l.getPasteImgs(i);
              if (d.length) {
                var v = new s.default(u);
                v.uploadImg(d);
              }
            }
          }
          function c(i) {
            i.txt.eventHooks.pasteEvents.unshift(function(u) {
              h(u, i);
            });
          }
          t.default = c;
        },
        /* 353 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(97));
          function s(g) {
            function m(h) {
              var c = h.dataTransfer && h.dataTransfer.files;
              if (!(!c || !c.length)) {
                var i = new l.default(g);
                i.uploadImg(c);
              }
            }
            g.txt.eventHooks.dropEvents.push(m);
          }
          t.default = s;
        },
        /* 354 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(29)), l = n(e(355));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.createShowHideFn = void 0;
          var s = e(2), g = s.__importDefault(e(3));
          e(360);
          var m = e(6);
          function h(v, f, p, y, x) {
            v.attr("style", "width:" + f + "px; height:" + p + "px; left:" + y + "px; top:" + x + "px;");
          }
          function c(v, f) {
            var p = g.default(`<div class="w-e-img-drag-mask">
            <div class="w-e-img-drag-show-size"></div>
            <div class="w-e-img-drag-rb"></div>
         </div>`);
            return p.hide(), f.append(p), p;
          }
          function i(v, f, p) {
            var y = v.getBoundingClientRect(), x = p.getBoundingClientRect(), E = x.width.toFixed(2), S = x.height.toFixed(2);
            (0, o.default)(f).call(f, ".w-e-img-drag-show-size").text(E + "px * " + S + "px"), h(f, (0, l.default)(E), (0, l.default)(S), x.left - y.left, x.top - y.top), f.show();
          }
          function u(v) {
            var f = v.$textContainerElem, p, y = c(v, f);
            function x(I, P) {
              I.on("click", function(T) {
                T.stopPropagation();
              }), I.on("mousedown", ".w-e-img-drag-rb", function(T) {
                if (T.preventDefault(), !p) return;
                var A = T.clientX, D = T.clientY, R = P.getBoundingClientRect(), N = p.getBoundingClientRect(), M = N.width, b = N.height, B = N.left - R.left, F = N.top - R.top, j = M / b, O = M, L = b, H = g.default(document);
                function J() {
                  H.off("mousemove", U), H.off("mouseup", Z);
                }
                function U(W) {
                  W.stopPropagation(), W.preventDefault(), O = M + (W.clientX - A), L = b + (W.clientY - D), O / L != j && (L = O / j), O = (0, l.default)(O.toFixed(2)), L = (0, l.default)(L.toFixed(2)), (0, o.default)(I).call(I, ".w-e-img-drag-show-size").text(O.toFixed(2).replace(".00", "") + "px * " + L.toFixed(2).replace(".00", "") + "px"), h(I, O, L, B, F);
                }
                H.on("mousemove", U);
                function Z() {
                  p.attr("width", O + ""), p.attr("height", L + "");
                  var W = p.getBoundingClientRect();
                  h(I, O, L, W.left - R.left, W.top - R.top), J();
                }
                H.on("mouseup", Z), H.on("mouseleave", J);
              });
            }
            function E(I) {
              if (m.UA.isIE()) return !1;
              I && (p = I, i(f, y, p));
            }
            function S() {
              (0, o.default)(f).call(f, ".w-e-img-drag-mask").hide();
            }
            return x(y, f), g.default(document).on("click", S), v.beforeDestroy(function() {
              g.default(document).off("click", S);
            }), {
              showDrag: E,
              hideDrag: S
            };
          }
          t.createShowHideFn = u;
          function d(v) {
            var f = u(v), p = f.showDrag, y = f.hideDrag;
            v.txt.eventHooks.imgClickEvents.push(p), v.txt.eventHooks.textScrollEvents.push(y), v.txt.eventHooks.keyupEvents.push(y), v.txt.eventHooks.toolbarClickEvents.push(y), v.txt.eventHooks.menuClickEvents.push(y), v.txt.eventHooks.changeEvents.push(y);
          }
          t.default = d;
        },
        /* 355 */
        /***/
        function(a, t, e) {
          a.exports = e(356);
        },
        /* 356 */
        /***/
        function(a, t, e) {
          var n = e(357);
          a.exports = n;
        },
        /* 357 */
        /***/
        function(a, t, e) {
          e(358);
          var n = e(9);
          a.exports = n.parseFloat;
        },
        /* 358 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(359);
          n({ global: !0, forced: parseFloat != r }, {
            parseFloat: r
          });
        },
        /* 359 */
        /***/
        function(a, t, e) {
          var n = e(8), r = e(90).trim, o = e(68), l = n.parseFloat, s = 1 / l(o + "-0") !== -1 / 0;
          a.exports = s ? function(m) {
            var h = r(String(m)), c = l(h);
            return c === 0 && h.charAt(0) == "-" ? -0 : c;
          } : l;
        },
        /* 360 */
        /***/
        function(a, t, e) {
          var n = e(20), r = e(361);
          r = r.__esModule ? r.default : r, typeof r == "string" && (r = [[a.i, r, ""]]);
          var o = {};
          o.insert = "head", o.singleton = !1, n(r, o), a.exports = r.locals || {};
        },
        /* 361 */
        /***/
        function(a, t, e) {
          var n = e(21);
          t = n(!1), t.push([a.i, `.w-e-text-container {
  overflow: hidden;
}
.w-e-img-drag-mask {
  position: absolute;
  z-index: 1;
  border: 1px dashed #ccc;
  box-sizing: border-box;
}
.w-e-img-drag-mask .w-e-img-drag-rb {
  position: absolute;
  right: -5px;
  bottom: -5px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #ccc;
  cursor: se-resize;
}
.w-e-img-drag-mask .w-e-img-drag-show-size {
  min-width: 110px;
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  color: #999;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #999;
  color: #fff;
  border-radius: 2px;
  padding: 0 5px;
}
`, ""]), a.exports = t;
        },
        /* 362 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.createShowHideFn = void 0;
          var o = e(2), l = o.__importDefault(e(3)), s = o.__importDefault(e(39));
          function g(h) {
            var c, i = function(f, p) {
              return p === void 0 && (p = ""), h.i18next.t(p + f);
            };
            function u(v) {
              var f = [{
                $elem: l.default("<span class='w-e-icon-trash-o'></span>"),
                onClick: function(y, x) {
                  return y.selection.createRangeByElem(x), y.selection.restoreSelection(), y.cmd.do("delete"), !0;
                }
              }, {
                $elem: l.default("<span>30%</span>"),
                onClick: function(y, x) {
                  return x.attr("width", "30%"), x.removeAttr("height"), !0;
                }
              }, {
                $elem: l.default("<span>50%</span>"),
                onClick: function(y, x) {
                  return x.attr("width", "50%"), x.removeAttr("height"), !0;
                }
              }, {
                $elem: l.default("<span>100%</span>"),
                onClick: function(y, x) {
                  return x.attr("width", "100%"), x.removeAttr("height"), !0;
                }
              }];
              f.push({
                $elem: l.default("<span>" + i("重置") + "</span>"),
                onClick: function(y, x) {
                  return x.removeAttr("width"), x.removeAttr("height"), !0;
                }
              }), v.attr("data-href") && f.push({
                $elem: l.default("<span>" + i("查看链接") + "</span>"),
                onClick: function(y, x) {
                  var E = x.attr("data-href");
                  return E && (E = decodeURIComponent(E), window.open(E, "_target")), !0;
                }
              }), c = new s.default(h, v, f), c.create();
            }
            function d() {
              c && (c.remove(), c = null);
            }
            return {
              showImgTooltip: u,
              hideImgTooltip: d
            };
          }
          t.createShowHideFn = g;
          function m(h) {
            var c = g(h), i = c.showImgTooltip, u = c.hideImgTooltip;
            h.txt.eventHooks.imgClickEvents.push(i), h.txt.eventHooks.clickEvents.push(u), h.txt.eventHooks.keyupEvents.push(u), h.txt.eventHooks.toolbarClickEvents.push(u), h.txt.eventHooks.menuClickEvents.push(u), h.txt.eventHooks.textScrollEvents.push(u), h.txt.eventHooks.imgDragBarMouseDownEvents.push(u), h.txt.eventHooks.changeEvents.push(u);
          }
          t.default = m;
        },
        /* 363 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          function o(l) {
            var s = l.txt, g = l.selection, m = s.eventHooks.keydownEvents;
            m.push(function(h) {
              var c = g.getSelectionContainerElem(), i = g.getRange();
              if (!(!i || !c || h.keyCode !== 8 || !g.isSelectionEmpty())) {
                var u = i.startContainer, d = i.startOffset, v = null;
                if (d === 0)
                  for (; u !== c.elems[0] && c.elems[0].contains(u) && u.parentNode && !v; ) {
                    if (u.previousSibling) {
                      v = u.previousSibling;
                      break;
                    }
                    u = u.parentNode;
                  }
                else u.nodeType !== 3 && (v = u.childNodes[d - 1]);
                if (v) {
                  for (var f = v; f.childNodes.length; )
                    f = f.childNodes[f.childNodes.length - 1];
                  f instanceof HTMLElement && f.tagName === "IMG" && (f.remove(), h.preventDefault());
                }
              }
            });
          }
          t.default = o;
        },
        /* 364 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(26)), l = n(e(17));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var s = e(2), g = s.__importDefault(e(3)), m = e(6), h = s.__importDefault(e(97));
          function c(i) {
            var u, d = i.config, v = new h.default(i), f = m.getRandom("up-trigger-id"), p = m.getRandom("up-file-id"), y = m.getRandom("input-link-url"), x = m.getRandom("input-link-url-alt"), E = m.getRandom("input-link-url-href"), S = m.getRandom("btn-link"), I = "menus.panelMenus.image.", P = function(j, O) {
              return O === void 0 && (O = I), i.i18next.t(O + j);
            };
            function T(F, j, O) {
              var L = d.linkImgCheck(F);
              return L === !0 ? !0 : (typeof L == "string" && d.customAlert(L, "error"), !1);
            }
            var A = d.uploadImgMaxLength === 1 ? "" : 'multiple="multiple"', D = (0, o.default)(u = d.uploadImgAccept).call(u, function(F) {
              return "image/" + F;
            }).join(","), R = function(j, O, L) {
              return '<div class="' + j + '" data-title="' + L + `">
            <div id="` + f + `" class="w-e-up-btn">
                <i class="` + O + `"></i>
            </div>
            <div style="display:none;">
                <input id="` + p + '" type="file" ' + A + ' accept="' + D + `"/>
            </div>
        </div>`;
            }, N = [
              // 触发选择图片
              {
                selector: "#" + f,
                type: "click",
                fn: function() {
                  var j = d.uploadImgFromMedia;
                  if (j && typeof j == "function")
                    return j(), !0;
                  var O = g.default("#" + p), L = O.elems[0];
                  if (L)
                    L.click();
                  else
                    return !0;
                }
              },
              // 选择图片完毕
              {
                selector: "#" + p,
                type: "change",
                fn: function() {
                  var j = g.default("#" + p), O = j.elems[0];
                  if (!O)
                    return !0;
                  var L = O.files;
                  return L != null && L.length && v.uploadImg(L), O && (O.value = ""), !0;
                }
              }
            ], M = [`<input
            id="` + y + `"
            type="text"
            class="block"
            placeholder="` + P("图片地址") + '"/>'];
            d.showLinkImgAlt && M.push(`
        <input
            id="` + x + `"
            type="text"
            class="block"
            placeholder="` + P("图片文字说明") + '"/>'), d.showLinkImgHref && M.push(`
        <input
            id="` + E + `"
            type="text"
            class="block"
            placeholder="` + P("跳转链接") + '"/>');
            var b = [
              // first tab
              {
                // 标题
                title: P("上传图片"),
                // 模板
                tpl: R("w-e-up-img-container", "w-e-icon-upload2", ""),
                // 事件绑定
                events: N
              },
              // second tab
              {
                title: P("网络图片"),
                tpl: `<div>
                    ` + M.join("") + `
                    <div class="w-e-button-container">
                        <button type="button" id="` + S + '" class="right">' + P("插入", "") + `</button>
                    </div>
                </div>`,
                events: [{
                  selector: "#" + S,
                  type: "click",
                  fn: function() {
                    var j, O = g.default("#" + y), L = (0, l.default)(j = O.val()).call(j);
                    if (L) {
                      var H;
                      if (d.showLinkImgAlt) {
                        var J;
                        H = (0, l.default)(J = g.default("#" + x).val()).call(J);
                      }
                      var U;
                      if (d.showLinkImgHref) {
                        var Z;
                        U = (0, l.default)(Z = g.default("#" + E).val()).call(Z);
                      }
                      if (T(L))
                        return v.insertImg(L, H, U), !0;
                    }
                  },
                  bindEnter: !0
                }]
              }
            ], B = {
              width: 300,
              height: 0,
              tabs: [],
              onlyUploadConf: {
                $elem: g.default(R("w-e-menu", "w-e-icon-image", "图片")),
                events: N
              }
            };
            return window.FileReader && (d.uploadImgShowBase64 || d.uploadImgServer || d.customUploadImg || d.uploadImgFromMedia) && B.tabs.push(b[0]), d.showLinkImg && (B.tabs.push(b[1]), B.onlyUploadConf = void 0), B;
          }
          t.default = c;
        },
        /* 365 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3)), g = l.__importDefault(e(24)), m = l.__importDefault(e(366)), h = (
            /** @class */
            function(c) {
              l.__extends(i, c);
              function i(u) {
                var d = this, v = s.default(`<div class="w-e-menu" data-title="缩进">
                <i class="w-e-icon-indent-increase"></i>
            </div>`), f = {
                  width: 130,
                  title: "设置缩进",
                  type: "list",
                  list: [{
                    $elem: s.default(`<p>
                            <i class="w-e-icon-indent-increase w-e-drop-list-item"></i>
                            ` + u.i18next.t("menus.dropListMenu.indent.增加缩进") + `
                        <p>`),
                    value: "increase"
                  }, {
                    $elem: s.default(`<p>
                            <i class="w-e-icon-indent-decrease w-e-drop-list-item"></i>
                            ` + u.i18next.t("menus.dropListMenu.indent.减少缩进") + `
                        <p>`),
                    value: "decrease"
                  }],
                  clickHandler: function(y) {
                    d.command(y);
                  }
                };
                return d = c.call(this, v, u, f) || this, d;
              }
              return i.prototype.command = function(u) {
                var d = this.editor, v = d.selection.getSelectionContainerElem();
                if (v && d.$textElem.equal(v)) {
                  var f = d.selection.getSelectionRangeTopNodes();
                  f.length > 0 && (0, o.default)(f).call(f, function(p) {
                    m.default(s.default(p), u, d);
                  });
                } else
                  v && v.length > 0 && (0, o.default)(v).call(v, function(p) {
                    m.default(s.default(p), u, d);
                  });
                d.selection.restoreSelection(), this.tryChangeActive();
              }, i.prototype.tryChangeActive = function() {
                var u = this.editor, d = u.selection.getSelectionStartElem(), v = s.default(d).getNodeTop(u);
                v.length <= 0 || (v.elems[0].style.paddingLeft != "" ? this.active() : this.unActive());
              }, i;
            }(g.default)
          );
          t.default = h;
        },
        /* 366 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(45)), l = n(e(17));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var s = e(2), g = s.__importDefault(e(367)), m = s.__importDefault(e(368)), h = /^(\d+)(\w+)$/, c = /^(\d+)%$/;
          function i(d) {
            var v = d.config.indentation;
            if (typeof v == "string") {
              if (h.test(v)) {
                var f, p = (0, o.default)(f = (0, l.default)(v).call(v).match(h)).call(f, 1, 3), y = p[0], x = p[1];
                return {
                  value: Number(y),
                  unit: x
                };
              } else if (c.test(v))
                return {
                  value: Number((0, l.default)(v).call(v).match(c)[1]),
                  unit: "%"
                };
            } else if (v.value !== void 0 && v.unit)
              return v;
            return {
              value: 2,
              unit: "em"
            };
          }
          function u(d, v, f) {
            var p = d.getNodeTop(f), y = /^(P|H[0-9]*)$/;
            y.test(p.getNodeName()) && (v === "increase" ? g.default(p, i(f)) : v === "decrease" && m.default(p, i(f)));
          }
          t.default = u;
        },
        /* 367 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(45));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          function l(s, g) {
            var m = s.elems[0];
            if (m.style.paddingLeft === "")
              s.css("padding-left", g.value + g.unit);
            else {
              var h = m.style.paddingLeft, c = (0, o.default)(h).call(h, 0, h.length - g.unit.length), i = Number(c) + g.value;
              s.css("padding-left", "" + i + g.unit);
            }
          }
          t.default = l;
        },
        /* 368 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(45));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          function l(s, g) {
            var m = s.elems[0];
            if (m.style.paddingLeft !== "") {
              var h = m.style.paddingLeft, c = (0, o.default)(h).call(h, 0, h.length - g.unit.length), i = Number(c) - g.value;
              i > 0 ? s.css("padding-left", "" + i + g.unit) : s.css("padding-left", "");
            }
          }
          t.default = l;
        },
        /* 369 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(3)), s = o.__importDefault(e(38)), g = o.__importDefault(e(33)), m = o.__importDefault(e(370)), h = (
            /** @class */
            function(c) {
              o.__extends(i, c);
              function i(u) {
                var d = this, v = l.default(`<div class="w-e-menu" data-title="表情">
                <i class="w-e-icon-happy"></i>
            </div>`);
                return d = c.call(this, v, u) || this, d;
              }
              return i.prototype.createPanel = function() {
                var u = m.default(this.editor), d = new g.default(this, u);
                d.create();
              }, i.prototype.clickHandler = function() {
                this.createPanel();
              }, i.prototype.tryChangeActive = function() {
              }, i;
            }(s.default)
          );
          t.default = h;
        },
        /* 370 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(26)), l = n(e(70)), s = n(e(17));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var g = e(2), m = g.__importDefault(e(3));
          function h(c) {
            var i = c.config.emotions;
            function u(f) {
              var p = [];
              if (f.type == "image") {
                var y;
                p = (0, o.default)(y = f.content).call(y, function(E) {
                  return typeof E == "string" ? "" : '<span  title="' + E.alt + `">
                    <img class="eleImg" data-emoji="` + E.alt + '" style src="' + E.src + '" alt="[' + E.alt + `]">
                </span>`;
                }), p = (0, l.default)(p).call(p, function(E) {
                  return E !== "";
                });
              } else {
                var x;
                p = (0, o.default)(x = f.content).call(x, function(E) {
                  return '<span class="eleImg" title="' + E + '">' + E + "</span>";
                });
              }
              return p.join("").replace(/&nbsp;/g, "");
            }
            var d = (0, o.default)(i).call(i, function(f) {
              return {
                title: c.i18next.t("menus.panelMenus.emoticon." + f.title),
                // 判断type类型如果是image则以img的形式插入否则以内容
                tpl: "<div>" + u(f) + "</div>",
                events: [{
                  selector: ".eleImg",
                  type: "click",
                  fn: function(y) {
                    var x = m.default(y.target), E = x.getNodeName(), S;
                    if (E === "IMG") {
                      var I;
                      S = (0, s.default)(I = x.parent().html()).call(I);
                    } else
                      S = "<span>" + x.html() + "</span>";
                    return c.cmd.do("insertHTML", S), !0;
                  }
                }]
              };
            }), v = {
              width: 300,
              height: 230,
              tabs: d
            };
            return v;
          }
          t.default = h;
        },
        /* 371 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.createListHandle = t.ClassType = void 0;
          var o = e(2), l = o.__importDefault(e(3)), s = o.__importDefault(e(372)), g = o.__importDefault(e(374)), m = o.__importDefault(e(375)), h = o.__importDefault(e(376)), c = o.__importDefault(e(377)), i;
          (function(f) {
            f.Wrap = "WrapListHandle", f.Join = "JoinListHandle", f.StartJoin = "StartJoinListHandle", f.EndJoin = "EndJoinListHandle", f.Other = "OtherListHandle";
          })(i = t.ClassType || (t.ClassType = {}));
          var u = {
            WrapListHandle: s.default,
            JoinListHandle: g.default,
            StartJoinListHandle: m.default,
            EndJoinListHandle: h.default,
            OtherListHandle: c.default
          };
          function d(f, p, y) {
            if (f === i.Other && y === void 0)
              throw new Error("other 类需要传入 range");
            return f !== i.Other ? new u[f](p) : new u[f](p, y);
          }
          t.createListHandle = d;
          var v = (
            /** @class */
            function() {
              function f(p) {
                this.handle = p, this.handle.exec();
              }
              return f.prototype.getSelectionRangeElem = function() {
                return l.default(this.handle.selectionRangeElem.get());
              }, f;
            }()
          );
          t.default = v;
        },
        /* 372 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3)), g = e(58), m = e(47), h = (
            /** @class */
            function(c) {
              l.__extends(i, c);
              function i(u) {
                return c.call(this, u) || this;
              }
              return i.prototype.exec = function() {
                var u = this.options, d = u.listType, v = u.listTarget, f = u.$selectionElem, p = u.$startElem, y = u.$endElem, x, E = [], S = f == null ? void 0 : f.getNodeName(), I = p.prior, P = y.prior;
                if (!p.prior && !y.prior || !(I != null && I.prev().length) && !(P != null && P.next().length)) {
                  var T;
                  (0, o.default)(T = f == null ? void 0 : f.children()).call(T, function(B) {
                    E.push(s.default(B));
                  }), S === d ? x = m.createElementFragment(
                    E,
                    m.createDocumentFragment(),
                    // 创建 文档片段
                    "p"
                  ) : (x = m.createElement(v), (0, o.default)(E).call(E, function(B) {
                    x.appendChild(B.elems[0]);
                  })), this.selectionRangeElem.set(x), m.insertBefore(f, x, f.elems[0]), f.remove();
                } else {
                  for (var A = I; A.length; )
                    E.push(A), P != null && P.equal(A) ? A = s.default(void 0) : (
                      // 结束
                      A = A.next()
                    );
                  var D = I.prev(), R = P.next();
                  if (S === d ? x = m.createElementFragment(
                    E,
                    m.createDocumentFragment(),
                    // 创建 文档片段
                    "p"
                  ) : (x = m.createElement(v), (0, o.default)(E).call(E, function(B) {
                    x.append(B.elems[0]);
                  })), D.length && R.length) {
                    for (var N = []; R.length; )
                      N.push(R), R = R.next();
                    var M = m.createElement(S);
                    (0, o.default)(N).call(N, function(B) {
                      M.append(B.elems[0]);
                    }), s.default(M).insertAfter(f), this.selectionRangeElem.set(x);
                    var b = f.next();
                    b.length ? m.insertBefore(f, x, b.elems[0]) : f.parent().elems[0].append(x);
                  } else if (!D.length)
                    this.selectionRangeElem.set(x), m.insertBefore(f, x, f.elems[0]);
                  else {
                    this.selectionRangeElem.set(x);
                    var b = f.next();
                    b.length ? m.insertBefore(f, x, b.elems[0]) : f.parent().elems[0].append(x);
                  }
                }
              }, i;
            }(g.ListHandle)
          );
          t.default = h;
        },
        /* 373 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = (
            /** @class */
            function() {
              function s() {
                this._element = null;
              }
              return s.prototype.set = function(g) {
                if (g instanceof DocumentFragment) {
                  var m, h = [];
                  (0, o.default)(m = g.childNodes).call(m, function(c) {
                    h.push(c);
                  }), g = h;
                }
                this._element = g;
              }, s.prototype.get = function() {
                return this._element;
              }, s.prototype.clear = function() {
                this._element = null;
              }, s;
            }()
          );
          t.default = l;
        },
        /* 374 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3)), g = e(58), m = e(47), h = (
            /** @class */
            function(c) {
              l.__extends(i, c);
              function i(u) {
                return c.call(this, u) || this;
              }
              return i.prototype.exec = function() {
                var u, d, v, f, p, y, x, E = this.options, S = E.editor, I = E.listType, P = E.listTarget, T = E.$startElem, A = E.$endElem, D, R = S.selection.getSelectionRangeTopNodes(), N = T == null ? void 0 : T.getNodeName(), M = A == null ? void 0 : A.getNodeName();
                if (N === M)
                  if (R.length > 2)
                    if (R.shift(), R.pop(), D = m.createElementFragment(
                      m.filterSelectionNodes(R),
                      // 过滤 $nodes 获取到符合要求的选中元素节点
                      m.createDocumentFragment()
                      // 创建 文档片段
                    ), N === I)
                      (u = A.children()) === null || u === void 0 || (0, o.default)(u).call(u, function(W) {
                        D.append(W);
                      }), A.remove(), this.selectionRangeElem.set(D), T.elems[0].append(D);
                    else {
                      for (var b = document.createDocumentFragment(), B = document.createDocumentFragment(), F = m.getStartPoint(T); F.length; ) {
                        var j = F.elems[0];
                        F = F.next(), b.append(j);
                      }
                      for (var O = m.getEndPoint(A), L = []; O.length; )
                        L.unshift(O.elems[0]), O = O.prev();
                      (0, o.default)(L).call(L, function(W) {
                        B.append(W);
                      });
                      var H = m.createElement(P);
                      H.append(b), H.append(D), H.append(B), D = H, this.selectionRangeElem.set(D), s.default(H).insertAfter(T), !(!((d = T.children()) === null || d === void 0) && d.length) && T.remove(), !(!((v = A.children()) === null || v === void 0) && v.length) && A.remove();
                    }
                  else {
                    R.length = 0;
                    for (var F = m.getStartPoint(T); F.length; )
                      R.push(F), F = F.next();
                    for (var O = m.getEndPoint(A), L = []; O.length; )
                      L.unshift(O), O = O.prev();
                    R.push.apply(R, L), N === I ? (D = m.createElementFragment(R, m.createDocumentFragment(), "p"), this.selectionRangeElem.set(D), m.insertBefore(T, D, A.elems[0])) : (D = m.createElement(P), (0, o.default)(R).call(R, function(X) {
                      D.append(X.elems[0]);
                    }), this.selectionRangeElem.set(D), s.default(D).insertAfter(T)), !(!((f = T.children()) === null || f === void 0) && f.length) && A.remove(), !(!((p = A.children()) === null || p === void 0) && p.length) && A.remove();
                  }
                else {
                  for (var J = [], O = m.getEndPoint(A); O.length; )
                    J.unshift(O), O = O.prev();
                  for (var U = [], F = m.getStartPoint(T); F.length; )
                    U.push(F), F = F.next();
                  if (D = m.createDocumentFragment(), R.shift(), R.pop(), (0, o.default)(U).call(U, function(Y) {
                    return D.append(Y.elems[0]);
                  }), D = m.createElementFragment(
                    m.filterSelectionNodes(R),
                    // 序列中间的数据 - 进行数据过滤
                    D
                  ), (0, o.default)(J).call(J, function(Y) {
                    return D.append(Y.elems[0]);
                  }), this.selectionRangeElem.set(D), N === I)
                    T.elems[0].append(D), !(!((y = A.children()) === null || y === void 0) && y.length) && A.remove();
                  else if (!((x = A.children()) === null || x === void 0) && x.length) {
                    var Z = A.children();
                    m.insertBefore(Z, D, Z.elems[0]);
                  } else
                    A.elems[0].append(D);
                }
              }, i;
            }(g.ListHandle)
          );
          t.default = h;
        },
        /* 375 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3)), g = e(58), m = e(47), h = (
            /** @class */
            function(c) {
              l.__extends(i, c);
              function i(u) {
                return c.call(this, u) || this;
              }
              return i.prototype.exec = function() {
                var u, d = this.options, v = d.editor, f = d.listType, p = d.listTarget, y = d.$startElem, x, E = v.selection.getSelectionRangeTopNodes(), S = y == null ? void 0 : y.getNodeName();
                E.shift();
                for (var I = [], P = m.getStartPoint(y); P.length; )
                  I.push(P), P = P.next();
                S === f ? (x = m.createDocumentFragment(), (0, o.default)(I).call(I, function(T) {
                  return x.append(T.elems[0]);
                }), x = m.createElementFragment(
                  m.filterSelectionNodes(E),
                  // 过滤元素节点数据
                  x
                ), this.selectionRangeElem.set(x), y.elems[0].append(x)) : (x = m.createElement(p), (0, o.default)(I).call(I, function(T) {
                  return x.append(T.elems[0]);
                }), x = m.createElementFragment(
                  m.filterSelectionNodes(E),
                  // 过滤普通节点
                  x
                ), this.selectionRangeElem.set(x), s.default(x).insertAfter(y), !(!((u = y.children()) === null || u === void 0) && u.length) && y.remove());
              }, i;
            }(g.ListHandle)
          );
          t.default = h;
        },
        /* 376 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3)), g = e(58), m = e(47), h = (
            /** @class */
            function(c) {
              l.__extends(i, c);
              function i(u) {
                return c.call(this, u) || this;
              }
              return i.prototype.exec = function() {
                var u, d, v = this.options, f = v.editor, p = v.listType, y = v.listTarget, x = v.$endElem, E, S = f.selection.getSelectionRangeTopNodes(), I = x == null ? void 0 : x.getNodeName();
                S.pop();
                for (var P = [], T = m.getEndPoint(x); T.length; )
                  P.unshift(T), T = T.prev();
                if (I === p)
                  if (E = m.createElementFragment(
                    m.filterSelectionNodes(S),
                    // 过滤元素节点数据
                    m.createDocumentFragment()
                    // 创建 文档片段
                  ), (0, o.default)(P).call(P, function(R) {
                    return E.append(R.elems[0]);
                  }), this.selectionRangeElem.set(E), !((u = x.children()) === null || u === void 0) && u.length) {
                    var A = x.children();
                    m.insertBefore(A, E, A.elems[0]);
                  } else
                    x.elems[0].append(E);
                else {
                  var D = m.filterSelectionNodes(S);
                  D.push.apply(D, P), E = m.createElementFragment(
                    D,
                    m.createElement(y)
                    // 创建 序列节点
                  ), this.selectionRangeElem.set(E), s.default(E).insertBefore(x), !(!((d = x.children()) === null || d === void 0) && d.length) && x.remove();
                }
              }, i;
            }(g.ListHandle)
          );
          t.default = h;
        },
        /* 377 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = e(58), s = e(47), g = (
            /** @class */
            function(m) {
              o.__extends(h, m);
              function h(c, i) {
                var u = m.call(this, c) || this;
                return u.range = i, u;
              }
              return h.prototype.exec = function() {
                var c = this.options, i = c.editor, u = c.listTarget, d = i.selection.getSelectionRangeTopNodes(), v = s.createElementFragment(
                  s.filterSelectionNodes(d),
                  // 过滤选取的元素
                  s.createElement(u)
                  // 创建 序列节点
                );
                this.selectionRangeElem.set(v), this.range.insertNode(v);
              }, h;
            }(l.ListHandle)
          );
          t.default = g;
        },
        /* 378 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4)), l = n(e(27));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var s = e(2), g = s.__importDefault(e(24)), m = s.__importDefault(e(3)), h = s.__importDefault(e(379)), c = (
            /** @class */
            function(i) {
              s.__extends(u, i);
              function u(d) {
                var v = this, f = m.default(`<div class="w-e-menu" data-title="行高">
                    <i class="w-e-icon-row-height"></i>
                </div>`), p = new h.default(d, d.config.lineHeights), y = {
                  width: 100,
                  title: "设置行高",
                  type: "list",
                  list: p.getItemList(),
                  clickHandler: function(E) {
                    d.selection.saveRange(), v.command(E);
                  }
                };
                return v = i.call(this, f, d, y) || this, v;
              }
              return u.prototype.command = function(d) {
                var v = this.editor;
                v.selection.restoreSelection();
                var f = m.default(v.selection.getSelectionContainerElem());
                if (f.elems.length) {
                  if (f && v.$textElem.equal(f)) {
                    for (var p = !1, y = m.default(v.selection.getSelectionStartElem()).elems[0], x = m.default(v.selection.getSelectionEndElem()).elems[0], E = this.getDom(y), S = this.getDom(x), I = f.elems[0].children, P = 0; P < I.length; P++) {
                      var T = I[P];
                      if (m.default(T).getNodeName() === "P" && (T === E && (p = !0), p && (m.default(T).css("line-height", d), T === S))) {
                        p = !1;
                        return;
                      }
                    }
                    v.selection.createRangeByElems(y, x);
                    return;
                  }
                  var A = f.elems[0], D = this.getDom(A);
                  m.default(D).getNodeName() === "P" && (m.default(D).css("line-height", d), v.selection.createRangeByElems(D, D));
                }
              }, u.prototype.getDom = function(d) {
                var v = m.default(d).elems[0];
                if (!v.parentNode)
                  return v;
                function f(p, y) {
                  var x = m.default(p.parentNode);
                  return y.$textElem.equal(x) ? p : f(x.elems[0], y);
                }
                return v = f(v, this.editor), v;
              }, u.prototype.styleProcessing = function(d) {
                var v = "";
                return (0, o.default)(d).call(d, function(f) {
                  f !== "" && (0, l.default)(f).call(f, "line-height") === -1 && (v = v + f + ";");
                }), v;
              }, u.prototype.setRange = function(d, v) {
                var f = this.editor, p = window.getSelection ? window.getSelection() : document.getSelection();
                p == null || p.removeAllRanges();
                var y = document.createRange(), x = d, E = v;
                y.setStart(x, 0), y.setEnd(E, 1), p == null || p.addRange(y), f.selection.saveRange(), p == null || p.removeAllRanges(), f.selection.restoreSelection();
              }, u.prototype.tryChangeActive = function() {
                var d = this.editor, v = d.selection.getSelectionContainerElem();
                if (!(v && d.$textElem.equal(v))) {
                  var f = m.default(d.selection.getSelectionStartElem());
                  if (f.length !== 0) {
                    f = this.getDom(f.elems[0]);
                    var p = f.getAttribute("style") ? f.getAttribute("style") : "";
                    p && (0, l.default)(p).call(p, "line-height") !== -1 ? this.active() : this.unActive();
                  }
                }
              }, u;
            }(g.default)
          );
          t.default = c;
        },
        /* 379 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3)), g = (
            /** @class */
            function() {
              function m(h, c) {
                var i = this;
                this.itemList = [{
                  $elem: s.default("<span>" + h.i18next.t("默认") + "</span>"),
                  value: ""
                }], (0, o.default)(c).call(c, function(u) {
                  i.itemList.push({
                    $elem: s.default("<span>" + u + "</span>"),
                    value: u
                  });
                });
              }
              return m.prototype.getItemList = function() {
                return this.itemList;
              }, m;
            }()
          );
          t.default = g;
        },
        /* 380 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(3)), s = o.__importDefault(e(23)), g = (
            /** @class */
            function(m) {
              o.__extends(h, m);
              function h(c) {
                var i = this, u = l.default(`<div class="w-e-menu" data-title="撤销">
                <i class="w-e-icon-undo"></i>
            </div>`);
                return i = m.call(this, u, c) || this, i;
              }
              return h.prototype.clickHandler = function() {
                var c = this.editor;
                c.history.revoke();
                var i = c.$textElem.children();
                if (i != null && i.length) {
                  var u = i.last();
                  c.selection.createRangeByElem(u, !1, !0), c.selection.restoreSelection();
                }
              }, h.prototype.tryChangeActive = function() {
                this.editor.isCompatibleMode || (this.editor.history.size[0] ? this.active() : this.unActive());
              }, h;
            }(s.default)
          );
          t.default = g;
        },
        /* 381 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(3)), s = o.__importDefault(e(23)), g = (
            /** @class */
            function(m) {
              o.__extends(h, m);
              function h(c) {
                var i = this, u = l.default(`<div class="w-e-menu" data-title="恢复">
                <i class="w-e-icon-redo"></i>
            </div>`);
                return i = m.call(this, u, c) || this, i;
              }
              return h.prototype.clickHandler = function() {
                var c = this.editor;
                c.history.restore();
                var i = c.$textElem.children();
                if (i != null && i.length) {
                  var u = i.last();
                  c.selection.createRangeByElem(u, !1, !0), c.selection.restoreSelection();
                }
              }, h.prototype.tryChangeActive = function() {
                this.editor.isCompatibleMode || (this.editor.history.size[1] ? this.active() : this.unActive());
              }, h;
            }(s.default)
          );
          t.default = g;
        },
        /* 382 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(38)), s = o.__importDefault(e(3)), g = o.__importDefault(e(383)), m = o.__importDefault(e(33)), h = o.__importDefault(e(392)), c = (
            /** @class */
            function(i) {
              o.__extends(u, i);
              function u(d) {
                var v = this, f = s.default('<div class="w-e-menu" data-title="表格"><i class="w-e-icon-table2"></i></div>');
                return v = i.call(this, f, d) || this, h.default(d), v;
              }
              return u.prototype.clickHandler = function() {
                this.createPanel();
              }, u.prototype.createPanel = function() {
                var d = g.default(this.editor), v = new m.default(this, d);
                v.create();
              }, u.prototype.tryChangeActive = function() {
              }, u;
            }(l.default)
          );
          t.default = c;
        },
        /* 383 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(384));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = e(6), g = l.__importDefault(e(3));
          e(389);
          var m = l.__importDefault(e(391));
          function h(i) {
            return i > 0 && (0, o.default)(i);
          }
          function c(i) {
            var u = new m.default(i), d = s.getRandom("w-col-id"), v = s.getRandom("w-row-id"), f = s.getRandom("btn-link"), p = "menus.panelMenus.table.", y = function(I) {
              return i.i18next.t(I);
            }, x = [{
              title: y(p + "插入表格"),
              tpl: `<div>
                    <div class="w-e-table">
                        <span>` + y("创建") + `</span>
                        <input id="` + v + `"  type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + y(p + "行") + `</span>
                        <input id="` + d + `" type="text" class="w-e-table-input" value="5"/></td>
                        <span>` + (y(p + "列") + y(p + "的") + y(p + "表格")) + `</span>
                    </div>
                    <div class="w-e-button-container">
                        <button type="button" id="` + f + '" class="right">' + y("插入") + `</button>
                    </div>
                </div>`,
              events: [{
                selector: "#" + f,
                type: "click",
                fn: function() {
                  var I = Number(g.default("#" + d).val()), P = Number(g.default("#" + v).val());
                  return h(P) && h(I) ? (u.createAction(P, I), !0) : (i.config.customAlert("表格行列请输入正整数", "warning"), !1);
                },
                bindEnter: !0
              }]
            }], E = {
              width: 330,
              height: 0,
              tabs: []
            };
            return E.tabs.push(x[0]), E;
          }
          t.default = c;
        },
        /* 384 */
        /***/
        function(a, t, e) {
          a.exports = e(385);
        },
        /* 385 */
        /***/
        function(a, t, e) {
          var n = e(386);
          a.exports = n;
        },
        /* 386 */
        /***/
        function(a, t, e) {
          e(387);
          var n = e(9);
          a.exports = n.Number.isInteger;
        },
        /* 387 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(388);
          n({ target: "Number", stat: !0 }, {
            isInteger: r
          });
        },
        /* 388 */
        /***/
        function(a, t, e) {
          var n = e(13), r = Math.floor;
          a.exports = function(l) {
            return !n(l) && isFinite(l) && r(l) === l;
          };
        },
        /* 389 */
        /***/
        function(a, t, e) {
          var n = e(20), r = e(390);
          r = r.__esModule ? r.default : r, typeof r == "string" && (r = [[a.i, r, ""]]);
          var o = {};
          o.insert = "head", o.singleton = !1, n(r, o), a.exports = r.locals || {};
        },
        /* 390 */
        /***/
        function(a, t, e) {
          var n = e(21);
          t = n(!1), t.push([a.i, `.w-e-table {
  display: flex;
}
.w-e-table .w-e-table-input {
  width: 40px;
  text-align: center!important;
  margin: 0 5px;
}
`, ""]), a.exports = t;
        },
        /* 391 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = e(7), s = o.__importDefault(e(3)), g = (
            /** @class */
            function() {
              function m(h) {
                this.editor = h;
              }
              return m.prototype.createAction = function(h, c) {
                var i = this.editor, u = s.default(i.selection.getSelectionContainerElem()), d = s.default(u.elems[0]).parentUntilEditor("UL", i), v = s.default(u.elems[0]).parentUntilEditor("OL", i);
                if (!(d || v)) {
                  var f = this.createTableHtml(h, c);
                  i.cmd.do("insertHTML", f);
                }
              }, m.prototype.createTableHtml = function(h, c) {
                for (var i = "", u = "", d = 0; d < h; d++) {
                  u = "";
                  for (var v = 0; v < c; v++)
                    d === 0 ? u = u + "<th></th>" : u = u + "<td></td>";
                  i = i + "<tr>" + u + "</tr>";
                }
                var f = '<table border="0" width="100%" cellpadding="0" cellspacing="0"><tbody>' + i + ("</tbody></table>" + l.EMPTY_P);
                return f;
              }, m;
            }()
          );
          t.default = g;
        },
        /* 392 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(393)), s = e(400);
          function g(m) {
            l.default(m), s.bindEventKeyboardEvent(m), s.bindClickEvent(m);
          }
          t.default = g;
        },
        /* 393 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(3)), s = o.__importDefault(e(39)), g = o.__importDefault(e(394)), m = o.__importDefault(e(399)), h = e(7);
          function c(v) {
            var f;
            function p(x) {
              var E = new m.default(v), S = "menus.panelMenus.table.", I = function(A, D) {
                return D === void 0 && (D = S), v.i18next.t(D + A);
              }, P = [{
                // $elem: $("<span class='w-e-icon-trash-o'></span>"),
                $elem: l.default("<span>" + I("删除表格") + "</span>"),
                onClick: function(A, D) {
                  return A.selection.createRangeByElem(D), A.selection.restoreSelection(), A.cmd.do("insertHTML", h.EMPTY_P), !0;
                }
              }, {
                $elem: l.default("<span>" + I("添加行") + "</span>"),
                onClick: function(A, D) {
                  var R = i(A);
                  if (R)
                    return !0;
                  var N = l.default(A.selection.getSelectionStartElem()), M = E.getRowNode(N.elems[0]);
                  if (!M)
                    return !0;
                  var b = Number(E.getCurrentRowIndex(D.elems[0], M)), B = E.getTableHtml(D.elems[0]), F = E.getTableHtml(g.default.ProcessingRow(l.default(B), b).elems[0]);
                  return F = d(D, F), A.selection.createRangeByElem(D), A.selection.restoreSelection(), A.cmd.do("insertHTML", F), !0;
                }
              }, {
                $elem: l.default("<span>" + I("删除行") + "</span>"),
                onClick: function(A, D) {
                  var R = i(A);
                  if (R)
                    return !0;
                  var N = l.default(A.selection.getSelectionStartElem()), M = E.getRowNode(N.elems[0]);
                  if (!M)
                    return !0;
                  var b = Number(E.getCurrentRowIndex(D.elems[0], M)), B = E.getTableHtml(D.elems[0]), F = g.default.DeleteRow(l.default(B), b).elems[0].children[0].children.length, j = "";
                  return A.selection.createRangeByElem(D), A.selection.restoreSelection(), F === 0 ? j = h.EMPTY_P : j = E.getTableHtml(g.default.DeleteRow(l.default(B), b).elems[0]), j = d(D, j), A.cmd.do("insertHTML", j), !0;
                }
              }, {
                $elem: l.default("<span>" + I("添加列") + "</span>"),
                onClick: function(A, D) {
                  var R = i(A);
                  if (R)
                    return !0;
                  var N = l.default(A.selection.getSelectionStartElem()), M = E.getCurrentColIndex(N.elems[0]), b = E.getTableHtml(D.elems[0]), B = E.getTableHtml(g.default.ProcessingCol(l.default(b), M).elems[0]);
                  return B = d(D, B), A.selection.createRangeByElem(D), A.selection.restoreSelection(), A.cmd.do("insertHTML", B), !0;
                }
              }, {
                $elem: l.default("<span>" + I("删除列") + "</span>"),
                onClick: function(A, D) {
                  var R = i(A);
                  if (R)
                    return !0;
                  var N = l.default(A.selection.getSelectionStartElem()), M = E.getCurrentColIndex(N.elems[0]), b = E.getTableHtml(D.elems[0]), B = g.default.DeleteCol(l.default(b), M), F = B.elems[0].children[0].children[0].children.length, j = "";
                  return A.selection.createRangeByElem(D), A.selection.restoreSelection(), F === 0 ? j = h.EMPTY_P : j = E.getTableHtml(B.elems[0]), j = d(D, j), A.cmd.do("insertHTML", j), !0;
                }
              }, {
                $elem: l.default("<span>" + I("设置表头") + "</span>"),
                onClick: function(A, D) {
                  var R = i(A);
                  if (R)
                    return !0;
                  var N = l.default(A.selection.getSelectionStartElem()), M = E.getRowNode(N.elems[0]);
                  if (!M)
                    return !0;
                  var b = Number(E.getCurrentRowIndex(D.elems[0], M));
                  b !== 0 && (b = 0);
                  var B = E.getTableHtml(D.elems[0]), F = E.getTableHtml(g.default.setTheHeader(l.default(B), b, "th").elems[0]);
                  return F = d(D, F), A.selection.createRangeByElem(D), A.selection.restoreSelection(), A.cmd.do("insertHTML", F), !0;
                }
              }, {
                $elem: l.default("<span>" + I("取消表头") + "</span>"),
                onClick: function(A, D) {
                  var R = l.default(A.selection.getSelectionStartElem()), N = E.getRowNode(R.elems[0]);
                  if (!N)
                    return !0;
                  var M = Number(E.getCurrentRowIndex(D.elems[0], N));
                  M !== 0 && (M = 0);
                  var b = E.getTableHtml(D.elems[0]), B = E.getTableHtml(g.default.setTheHeader(l.default(b), M, "td").elems[0]);
                  return B = d(D, B), A.selection.createRangeByElem(D), A.selection.restoreSelection(), A.cmd.do("insertHTML", B), !0;
                }
              }];
              f = new s.default(v, x, P), f.create();
            }
            function y() {
              f && (f.remove(), f = null);
            }
            return {
              showTableTooltip: p,
              hideTableTooltip: y
            };
          }
          function i(v) {
            var f = v.selection.getSelectionStartElem(), p = v.selection.getSelectionEndElem();
            return (f == null ? void 0 : f.elems[0]) !== (p == null ? void 0 : p.elems[0]);
          }
          function u(v) {
            var f = c(v), p = f.showTableTooltip, y = f.hideTableTooltip;
            v.txt.eventHooks.tableClickEvents.push(p), v.txt.eventHooks.clickEvents.push(y), v.txt.eventHooks.keyupEvents.push(y), v.txt.eventHooks.toolbarClickEvents.push(y), v.txt.eventHooks.menuClickEvents.push(y), v.txt.eventHooks.textScrollEvents.push(y);
          }
          t.default = u;
          function d(v, f) {
            var p = v.elems[0].nextSibling;
            return (!p || p.innerHTML === "<br>") && (f += "" + h.EMPTY_P), f;
          }
        },
        /* 394 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(45)), l = n(e(91)), s = n(e(4)), g = n(e(138));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var m = e(2), h = m.__importDefault(e(3));
          function c(y, x) {
            for (var E = p(y), S = (0, o.default)(Array.prototype).apply(E.children), I = S[0].children.length, P = document.createElement("tr"), T = 0; T < I; T++) {
              var A = document.createElement("td");
              P.appendChild(A);
            }
            return (0, l.default)(S).call(S, x + 1, 0, P), f(E, S), h.default(E.parentNode);
          }
          function i(y, x) {
            for (var E = p(y), S = (0, o.default)(Array.prototype).apply(E.children), I = function(A) {
              var D, R = [];
              for ((0, s.default)(D = (0, g.default)(S[A].children)).call(D, function(b) {
                R.push(b);
              }); S[A].children.length !== 0; )
                S[A].removeChild(S[A].children[0]);
              var N = h.default(R[0]).getNodeName() !== "TH" ? document.createElement("td") : document.createElement("th");
              (0, l.default)(R).call(R, x + 1, 0, N);
              for (var M = 0; M < R.length; M++)
                S[A].appendChild(R[M]);
            }, P = 0; P < S.length; P++)
              I(P);
            return f(E, S), h.default(E.parentNode);
          }
          function u(y, x) {
            var E = p(y), S = (0, o.default)(Array.prototype).apply(E.children);
            return (0, l.default)(S).call(S, x, 1), f(E, S), h.default(E.parentNode);
          }
          function d(y, x) {
            for (var E = p(y), S = (0, o.default)(Array.prototype).apply(E.children), I = function(A) {
              var D, R = [];
              for ((0, s.default)(D = (0, g.default)(S[A].children)).call(D, function(M) {
                R.push(M);
              }); S[A].children.length !== 0; )
                S[A].removeChild(S[A].children[0]);
              (0, l.default)(R).call(R, x, 1);
              for (var N = 0; N < R.length; N++)
                S[A].appendChild(R[N]);
            }, P = 0; P < S.length; P++)
              I(P);
            return f(E, S), h.default(E.parentNode);
          }
          function v(y, x, E) {
            for (var S = p(y), I = (0, o.default)(Array.prototype).apply(S.children), P = I[x].children, T = document.createElement("tr"), A = function(N) {
              var M, b = document.createElement(E), B = P[N];
              (0, s.default)(M = (0, g.default)(B.childNodes)).call(M, function(F) {
                b.appendChild(F);
              }), T.appendChild(b);
            }, D = 0; D < P.length; D++)
              A(D);
            return (0, l.default)(I).call(I, x, 1, T), f(S, I), h.default(S.parentNode);
          }
          function f(y, x) {
            for (; y.children.length !== 0; )
              y.removeChild(y.children[0]);
            for (var E = 0; E < x.length; E++)
              y.appendChild(x[E]);
          }
          function p(y) {
            var x = y.elems[0].children[0];
            return x.nodeName === "COLGROUP" && (x = y.elems[0].children[y.elems[0].children.length - 1]), x;
          }
          t.default = {
            ProcessingRow: c,
            ProcessingCol: i,
            DeleteRow: u,
            DeleteCol: d,
            setTheHeader: v
          };
        },
        /* 395 */
        /***/
        function(a, t, e) {
          var n = e(396);
          a.exports = n;
        },
        /* 396 */
        /***/
        function(a, t, e) {
          e(50), e(397);
          var n = e(9);
          a.exports = n.Array.from;
        },
        /* 397 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(398), o = e(115), l = !o(function(s) {
            Array.from(s);
          });
          n({ target: "Array", stat: !0, forced: l }, {
            from: r
          });
        },
        /* 398 */
        /***/
        function(a, t, e) {
          var n = e(40), r = e(31), o = e(114), l = e(112), s = e(35), g = e(69), m = e(113);
          a.exports = function(c) {
            var i = r(c), u = typeof this == "function" ? this : Array, d = arguments.length, v = d > 1 ? arguments[1] : void 0, f = v !== void 0, p = m(i), y = 0, x, E, S, I, P, T;
            if (f && (v = n(v, d > 2 ? arguments[2] : void 0, 2)), p != null && !(u == Array && l(p)))
              for (I = p.call(i), P = I.next, E = new u(); !(S = P.call(I)).done; y++)
                T = f ? o(I, v, [S.value, y], !0) : S.value, g(E, y, T);
            else
              for (x = s(i.length), E = new u(x); x > y; y++)
                T = f ? v(i[y], y) : i[y], g(E, y, T);
            return E.length = y, E;
          };
        },
        /* 399 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4)), l = n(e(138));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var s = e(2), g = s.__importDefault(e(3)), m = (
            /** @class */
            function() {
              function h(c) {
                this.editor = c;
              }
              return h.prototype.getRowNode = function(c) {
                var i, u = g.default(c).elems[0];
                return u.parentNode && (u = (i = g.default(u).parentUntil("TR", u)) === null || i === void 0 ? void 0 : i.elems[0]), u;
              }, h.prototype.getCurrentRowIndex = function(c, i) {
                var u, d = 0, v = c.children[0];
                return v.nodeName === "COLGROUP" && (v = c.children[c.children.length - 1]), (0, o.default)(u = (0, l.default)(v.children)).call(u, function(f, p) {
                  f === i && (d = p);
                }), d;
              }, h.prototype.getCurrentColIndex = function(c) {
                var i, u, d = 0, v = g.default(c).getNodeName() === "TD" || g.default(c).getNodeName() === "TH" ? c : (u = g.default(c).parentUntil("TD", c)) === null || u === void 0 ? void 0 : u.elems[0], f = g.default(v).parent();
                return (0, o.default)(i = (0, l.default)(f.elems[0].children)).call(i, function(p, y) {
                  p === v && (d = y);
                }), d;
              }, h.prototype.getTableHtml = function(c) {
                var i = '<table border="0" width="100%" cellpadding="0" cellspacing="0">' + g.default(c).html() + "</table>";
                return i;
              }, h;
            }()
          );
          t.default = m;
        },
        /* 400 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.bindEventKeyboardEvent = t.bindClickEvent = void 0;
          var o = e(2), l = o.__importDefault(e(3));
          function s(h) {
            if (!h.length)
              return !1;
            var c = h.elems[0];
            return c.nodeName === "P" && c.innerHTML === "<br>";
          }
          function g(h) {
            function c(i, u) {
              if (u.detail >= 3) {
                var d = window.getSelection();
                if (d) {
                  var v = d.focusNode, f = d.anchorNode, p = l.default(f == null ? void 0 : f.parentElement);
                  if (!i.isContain(l.default(v))) {
                    var y = p.elems[0].tagName === "TD" ? p : p.parentUntilEditor("td", h);
                    if (y) {
                      var x = h.selection.getRange();
                      x == null || x.setEnd(y.elems[0], y.elems[0].childNodes.length), h.selection.restoreSelection();
                    }
                  }
                }
              }
            }
            h.txt.eventHooks.tableClickEvents.push(c);
          }
          t.bindClickEvent = g;
          function m(h) {
            var c = h.txt, i = h.selection, u = c.eventHooks.keydownEvents;
            u.push(function(d) {
              h.selection.saveRange();
              var v = i.getSelectionContainerElem();
              if (v) {
                var f = v.getNodeTop(h), p = f.length && f.prev().length ? f.prev() : null;
                if (p && p.getNodeName() === "TABLE" && i.isSelectionEmpty() && i.getCursorPos() === 0 && d.keyCode === 8) {
                  var y = f.next(), x = !!y.length;
                  x && s(f) && (f.remove(), h.selection.setRangeToElem(y.elems[0])), d.preventDefault();
                }
              }
            });
          }
          t.bindEventKeyboardEvent = m;
        },
        /* 401 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(26));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.formatCodeHtml = void 0;
          var l = e(2), s = l.__importDefault(e(38)), g = l.__importDefault(e(3)), m = e(6), h = l.__importDefault(e(402)), c = l.__importDefault(e(139)), i = l.__importDefault(e(33)), u = l.__importDefault(e(403));
          function d(f, p) {
            if (!p) return p;
            return p = x(p), p = y(p), p = m.replaceSpecialSymbol(p), p;
            function y(E) {
              var S = E.match(/<pre[\s|\S]+?\/pre>/g);
              return S === null || (0, o.default)(S).call(S, function(I) {
                E = E.replace(I, I.replace(/<\/code><code>/g, `
`).replace(/<br>/g, ""));
              }), E;
            }
            function x(E) {
              var S, I = E.match(/<span\sclass="hljs[\s|\S]+?\/span>/gm);
              if (!I || !I.length) return E;
              for (var P = (0, o.default)(S = m.deepClone(I)).call(S, function(A) {
                return A = A.replace(/<span\sclass="hljs[^>]+>/, ""), A.replace(/<\/span>/, "");
              }), T = 0; T < I.length; T++)
                E = E.replace(I[T], P[T]);
              return x(E);
            }
          }
          t.formatCodeHtml = d;
          var v = (
            /** @class */
            function(f) {
              l.__extends(p, f);
              function p(y) {
                var x = this, E = g.default('<div class="w-e-menu" data-title="代码"><i class="w-e-icon-terminal"></i></div>');
                return x = f.call(this, E, y) || this, u.default(y), x;
              }
              return p.prototype.insertLineCode = function(y) {
                var x = this.editor, E = g.default("<code>" + y + "</code>");
                x.cmd.do("insertElem", E), x.selection.createRangeByElem(E, !1), x.selection.restoreSelection();
              }, p.prototype.clickHandler = function() {
                var y = this.editor, x = y.selection.getSelectionText();
                this.isActive || (y.selection.isSelectionEmpty() ? this.createPanel("", "") : this.insertLineCode(x));
              }, p.prototype.createPanel = function(y, x) {
                var E = h.default(this.editor, y, x), S = new i.default(this, E);
                S.create();
              }, p.prototype.tryChangeActive = function() {
                var y = this.editor;
                c.default(y) ? this.active() : this.unActive();
              }, p;
            }(s.default)
          );
          t.default = v;
        },
        /* 402 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(26));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = e(6), g = l.__importDefault(e(3)), m = l.__importDefault(e(139)), h = e(7);
          function c(i, u, d) {
            var v, f = s.getRandom("input-iframe"), p = s.getRandom("select"), y = s.getRandom("btn-ok");
            function x(P, T) {
              var A, D = m.default(i);
              D && E();
              var R = (A = i.selection.getSelectionStartElem()) === null || A === void 0 ? void 0 : A.elems[0].innerHTML;
              R && i.cmd.do("insertHTML", h.EMPTY_P);
              var N = T.replace(/</g, "&lt;").replace(/>/g, "&gt;");
              i.highlight && (N = i.highlight.highlightAuto(N).value), i.cmd.do("insertHTML", '<pre><code class="' + P + '">' + N + "</code></pre>");
              var M = i.selection.getSelectionStartElem(), b = M == null ? void 0 : M.getNodeTop(i);
              (b == null ? void 0 : b.getNextSibling().elems.length) === 0 && g.default(h.EMPTY_P).insertAfter(b);
            }
            function E() {
              if (m.default(i)) {
                var P = i.selection.getSelectionStartElem(), T = P == null ? void 0 : P.getNodeTop(i);
                T && (i.selection.createRangeByElem(T), i.selection.restoreSelection());
              }
            }
            var S = function(T) {
              return i.i18next.t(T);
            }, I = {
              width: 500,
              height: 0,
              // panel 中可包含多个 tab
              tabs: [{
                // tab 的标题
                title: S("menus.panelMenus.code.插入代码"),
                // 模板
                tpl: `<div>
                        <select name="" id="` + p + `">
                            ` + (0, o.default)(v = i.config.languageType).call(v, function(P) {
                  return "<option " + (d == P ? "selected" : "") + ' value ="' + P + '">' + P + "</option>";
                }) + `
                        </select>
                        <textarea id="` + f + '" type="text" class="wang-code-textarea" placeholder="" style="height: 160px">' + u.replace(/&quot;/g, '"') + `</textarea>
                        <div class="w-e-button-container">
                            <button type="button" id="` + y + '" class="right">' + (m.default(i) ? S("修改") : S("插入")) + `</button>
                        </div>
                    </div>`,
                // 事件绑定
                events: [
                  // 插入链接
                  {
                    selector: "#" + y,
                    type: "click",
                    fn: function() {
                      var T = document.getElementById(f), A = g.default("#" + p), D = A.val(), R = T.value;
                      if (R)
                        return m.default(i) ? !1 : (x(D, R), !0);
                    }
                  }
                ]
              }]
            };
            return I;
          }
          t.default = c;
        },
        /* 403 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(404)), s = o.__importDefault(e(405));
          function g(m) {
            l.default(m), s.default(m);
          }
          t.default = g;
        },
        /* 404 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.createShowHideFn = void 0;
          var o = e(2), l = o.__importDefault(e(3)), s = o.__importDefault(e(39));
          function g(h) {
            var c;
            function i(d) {
              var v = "menus.panelMenus.code.", f = function(x, E) {
                return E === void 0 && (E = v), h.i18next.t(E + x);
              }, p = [{
                $elem: l.default("<span>" + f("删除代码") + "</span>"),
                onClick: function(x, E) {
                  return E.remove(), !0;
                }
              }];
              c = new s.default(h, d, p), c.create();
            }
            function u() {
              c && (c.remove(), c = null);
            }
            return {
              showCodeTooltip: i,
              hideCodeTooltip: u
            };
          }
          t.createShowHideFn = g;
          function m(h) {
            var c = g(h), i = c.showCodeTooltip, u = c.hideCodeTooltip;
            h.txt.eventHooks.codeClickEvents.push(i), h.txt.eventHooks.clickEvents.push(u), h.txt.eventHooks.toolbarClickEvents.push(u), h.txt.eventHooks.menuClickEvents.push(u), h.txt.eventHooks.textScrollEvents.push(u);
          }
          t.default = m;
        },
        /* 405 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = e(7), s = o.__importDefault(e(3));
          function g(m) {
            var h = m.$textElem, c = m.selection, i = m.txt, u = i.eventHooks.keydownEvents;
            u.push(function(d) {
              var v;
              if (d.keyCode === 40) {
                var f = c.getSelectionContainerElem(), p = (v = h.children()) === null || v === void 0 ? void 0 : v.last();
                if ((f == null ? void 0 : f.elems[0].tagName) === "XMP" && (p == null ? void 0 : p.elems[0].tagName) === "PRE") {
                  var y = s.default(l.EMPTY_P);
                  h.append(y);
                }
              }
            }), u.push(function(d) {
              m.selection.saveRange();
              var v = c.getSelectionContainerElem();
              if (v) {
                var f = v.getNodeTop(m), p = f == null ? void 0 : f.prev(), y = f == null ? void 0 : f.getNextSibling();
                if (p.length && (p == null ? void 0 : p.getNodeName()) === "PRE" && y.length === 0 && c.getCursorPos() === 0 && d.keyCode === 8) {
                  var x = s.default(l.EMPTY_P);
                  h.append(x);
                }
              }
            });
          }
          t.default = g;
        },
        /* 406 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(23)), s = o.__importDefault(e(3)), g = o.__importDefault(e(407)), m = e(6), h = e(7), c = (
            /** @class */
            function(i) {
              o.__extends(u, i);
              function u(d) {
                var v = this, f = s.default('<div class="w-e-menu" data-title="分割线"><i class="w-e-icon-split-line"></i></div>');
                return v = i.call(this, f, d) || this, g.default(d), v;
              }
              return u.prototype.clickHandler = function() {
                var d = this.editor, v = d.selection.getRange(), f = d.selection.getSelectionContainerElem();
                if (f != null && f.length) {
                  var p = s.default(f.elems[0]), y = p.parentUntil("TABLE", f.elems[0]), x = p.children();
                  p.getNodeName() !== "CODE" && (y && s.default(y.elems[0]).getNodeName() === "TABLE" || x && x.length !== 0 && s.default(x.elems[0]).getNodeName() === "IMG" && !(v != null && v.collapsed) || this.createSplitLine());
                }
              }, u.prototype.createSplitLine = function() {
                var d = "<hr/>" + h.EMPTY_P;
                m.UA.isFirefox && (d = "<hr/><p></p>"), this.editor.cmd.do("insertHTML", d);
              }, u.prototype.tryChangeActive = function() {
              }, u;
            }(l.default)
          );
          t.default = c;
        },
        /* 407 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(408));
          function s(g) {
            l.default(g);
          }
          t.default = s;
        },
        /* 408 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(3)), s = o.__importDefault(e(39));
          function g(h) {
            var c;
            function i(d) {
              var v = [{
                $elem: l.default("<span>" + h.i18next.t("menus.panelMenus.删除") + "</span>"),
                onClick: function(p, y) {
                  return p.selection.createRangeByElem(y), p.selection.restoreSelection(), p.cmd.do("delete"), !0;
                }
              }];
              c = new s.default(h, d, v), c.create();
            }
            function u() {
              c && (c.remove(), c = null);
            }
            return {
              showSplitLineTooltip: i,
              hideSplitLineTooltip: u
            };
          }
          function m(h) {
            var c = g(h), i = c.showSplitLineTooltip, u = c.hideSplitLineTooltip;
            h.txt.eventHooks.splitLineEvents.push(i), h.txt.eventHooks.clickEvents.push(u), h.txt.eventHooks.keyupEvents.push(u), h.txt.eventHooks.toolbarClickEvents.push(u), h.txt.eventHooks.menuClickEvents.push(u), h.txt.eventHooks.textScrollEvents.push(u);
          }
          t.default = m;
        },
        /* 409 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3)), g = l.__importDefault(e(23)), m = e(98), h = l.__importDefault(e(415)), c = l.__importDefault(e(140)), i = (
            /** @class */
            function(u) {
              l.__extends(d, u);
              function d(v) {
                var f = this, p = s.default(`<div class="w-e-menu" data-title="待办事项">
                    <i class="w-e-icon-checkbox-checked"></i>
                </div>`);
                return f = u.call(this, p, v) || this, h.default(v), f;
              }
              return d.prototype.clickHandler = function() {
                var v = this.editor;
                m.isAllTodo(v) ? (this.cancelTodo(), this.tryChangeActive()) : this.setTodo();
              }, d.prototype.tryChangeActive = function() {
                m.isAllTodo(this.editor) ? this.active() : this.unActive();
              }, d.prototype.setTodo = function() {
                var v = this.editor, f = v.selection.getSelectionRangeTopNodes();
                (0, o.default)(f).call(f, function(p) {
                  var y, x = p == null ? void 0 : p.getNodeName();
                  if (x === "P") {
                    var E = c.default(p), S = E.getTodo(), I = (y = S.children()) === null || y === void 0 ? void 0 : y.getNode();
                    S.insertAfter(p), v.selection.moveCursor(I), p.remove();
                  }
                }), this.tryChangeActive();
              }, d.prototype.cancelTodo = function() {
                var v = this.editor, f = v.selection.getSelectionRangeTopNodes();
                (0, o.default)(f).call(f, function(p) {
                  var y, x, E, S = (x = (y = p.childNodes()) === null || y === void 0 ? void 0 : y.childNodes()) === null || x === void 0 ? void 0 : x.clone(!0), I = s.default("<p></p>");
                  I.append(S), I.insertAfter(p), (E = I.childNodes()) === null || E === void 0 || E.get(0).remove(), v.selection.moveCursor(I.getNode()), p.remove();
                });
              }, d;
            }(g.default)
          );
          t.default = i;
        },
        /* 410 */
        /***/
        function(a, t, e) {
          a.exports = e(411);
        },
        /* 411 */
        /***/
        function(a, t, e) {
          var n = e(412);
          a.exports = n;
        },
        /* 412 */
        /***/
        function(a, t, e) {
          var n = e(413), r = Array.prototype;
          a.exports = function(o) {
            var l = o.every;
            return o === r || o instanceof Array && l === r.every ? n : l;
          };
        },
        /* 413 */
        /***/
        function(a, t, e) {
          e(414);
          var n = e(15);
          a.exports = n("Array").every;
        },
        /* 414 */
        /***/
        function(a, t, e) {
          var n = e(5), r = e(32).every, o = e(67), l = e(22), s = o("every"), g = l("every");
          n({ target: "Array", proto: !0, forced: !s || !g }, {
            every: function(h) {
              return r(this, h, arguments.length > 1 ? arguments[1] : void 0);
            }
          });
        },
        /* 415 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3)), g = e(98), m = l.__importDefault(e(140)), h = e(98), c = e(7);
          function i(u) {
            function d(y) {
              var x, E;
              if (g.isAllTodo(u)) {
                y.preventDefault();
                var S = u.selection, I = S.getSelectionRangeTopNodes()[0], P = (x = I.childNodes()) === null || x === void 0 ? void 0 : x.get(0), T = (E = window.getSelection()) === null || E === void 0 ? void 0 : E.anchorNode, A = S.getRange();
                if (!(A != null && A.collapsed)) {
                  var D = A == null ? void 0 : A.commonAncestorContainer.childNodes, R = A == null ? void 0 : A.startContainer, N = A == null ? void 0 : A.endContainer, M = A == null ? void 0 : A.startOffset, b = A == null ? void 0 : A.endOffset, B = 0, F = 0, j = [];
                  D == null || (0, o.default)(D).call(D, function(X, ee) {
                    X.contains(R) && (B = ee), X.contains(N) && (F = ee);
                  }), F - B > 1 && (D == null || (0, o.default)(D).call(D, function(X, ee) {
                    ee <= B || ee >= F || j.push(X);
                  }), (0, o.default)(j).call(j, function(X) {
                    X.remove();
                  })), h.dealTextNode(R, M), h.dealTextNode(N, b, !1), u.selection.moveCursor(N, 0);
                }
                if (I.text() === "") {
                  var O = s.default(c.EMPTY_P);
                  O.insertAfter(I), S.moveCursor(O.getNode()), I.remove();
                  return;
                }
                var L = S.getCursorPos(), H = g.getCursorNextNode(P == null ? void 0 : P.getNode(), T, L), J = m.default(s.default(H)), U = J.getInputContainer(), Z = U.parent().getNode(), W = J.getTodo(), Q = U.getNode().nextSibling;
                if ((P == null ? void 0 : P.text()) === "" && (P == null || P.append(s.default("<br>"))), W.insertAfter(I), !Q || (Q == null ? void 0 : Q.textContent) === "") {
                  if ((Q == null ? void 0 : Q.nodeName) !== "BR") {
                    var Y = s.default("<br>");
                    Y.insertAfter(U);
                  }
                  S.moveCursor(Z, 1);
                } else
                  S.moveCursor(Z);
              }
            }
            function v(y) {
              var x, E;
              if (g.isAllTodo(u)) {
                var S = u.selection, I = S.getSelectionRangeTopNodes()[0], P = (x = I.childNodes()) === null || x === void 0 ? void 0 : x.getNode(), T = s.default("<p></p>"), A = T.getNode(), D = (E = window.getSelection()) === null || E === void 0 ? void 0 : E.anchorNode, R = S.getCursorPos(), N = D.previousSibling;
                if (I.text() === "") {
                  y.preventDefault();
                  var M = s.default(c.EMPTY_P);
                  M.insertAfter(I), I.remove(), S.moveCursor(M.getNode(), 0);
                  return;
                }
                if ((N == null ? void 0 : N.nodeName) === "SPAN" && N.childNodes[0].nodeName === "INPUT" && R === 0) {
                  var b;
                  y.preventDefault(), P == null || (0, o.default)(b = P.childNodes).call(b, function(B, F) {
                    F !== 0 && A.appendChild(B.cloneNode(!0));
                  }), T.insertAfter(I), I.remove();
                }
              }
            }
            function f() {
              var y = u.selection, x = y.getSelectionRangeTopNodes()[0];
              x && h.isTodo(x) && x.text() === "" && (s.default(c.EMPTY_P).insertAfter(x), x.remove());
            }
            function p(y) {
              y && y.target instanceof HTMLInputElement && y.target.type === "checkbox" && (y.target.checked ? y.target.setAttribute("checked", "true") : y.target.removeAttribute("checked"));
            }
            u.txt.eventHooks.enterDownEvents.push(d), u.txt.eventHooks.deleteUpEvents.push(f), u.txt.eventHooks.deleteDownEvents.push(v), u.txt.eventHooks.clickEvents.push(p);
          }
          t.default = i;
        },
        /* 416 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.selectorValidator = void 0;
          var o = e(2), l = o.__importDefault(e(3)), s = e(6), g = e(7), m = o.__importDefault(e(130)), h = {
            border: "1px solid #c9d8db",
            toolbarBgColor: "#FFF",
            toolbarBottomBorder: "1px solid #EEE"
          };
          function c(u) {
            var d = u.toolbarSelector, v = l.default(d), f = u.textSelector, p = u.config, y = p.height, x = u.i18next, E = l.default("<div></div>"), S = l.default("<div></div>"), I, P, T = null;
            f == null ? (P = v.children(), v.append(E).append(S), E.css("background-color", h.toolbarBgColor).css("border", h.border).css("border-bottom", h.toolbarBottomBorder), S.css("border", h.border).css("border-top", "none").css("height", y + "px")) : (v.append(E), T = l.default(f).children(), l.default(f).append(S), P = S.children()), I = l.default("<div></div>"), I.attr("contenteditable", "true").css("width", "100%").css("height", "100%");
            var A, D = u.config.placeholder;
            D !== m.default.placeholder ? A = l.default("<div>" + D + "</div>") : A = l.default("<div>" + x.t(D) + "</div>"), A.addClass("placeholder"), P && P.length ? (I.append(P), A.hide()) : I.append(l.default(g.EMPTY_P)), T && T.length && (I.append(T), A.hide()), S.append(I), S.append(A), E.addClass("w-e-toolbar").css("z-index", u.zIndex.get("toolbar")), S.addClass("w-e-text-container"), S.css("z-index", u.zIndex.get()), I.addClass("w-e-text");
            var R = s.getRandom("toolbar-elem");
            E.attr("id", R);
            var N = s.getRandom("text-elem");
            I.attr("id", N);
            var M = S.getBoundingClientRect().height, b = I.getBoundingClientRect().height;
            M !== b && I.css("min-height", M + "px"), u.$toolbarElem = E, u.$textContainerElem = S, u.$textElem = I, u.toolbarElemId = R, u.textElemId = N;
          }
          t.default = c;
          function i(u) {
            var d = "data-we-id", v = /^wangEditor-\d+$/, f = u.textSelector, p = u.toolbarSelector, y = {
              bar: l.default("<div></div>"),
              text: l.default("<div></div>")
            };
            if (p == null)
              throw new Error("错误：初始化编辑器时候未传入任何参数，请查阅文档");
            if (y.bar = l.default(p), !y.bar.elems.length)
              throw new Error("无效的节点选择器：" + p);
            if (v.test(y.bar.attr(d)))
              throw new Error("初始化节点已存在编辑器实例，无法重复创建编辑器");
            if (f) {
              if (y.text = l.default(f), !y.text.elems.length)
                throw new Error("无效的节点选择器：" + f);
              if (v.test(y.text.attr(d)))
                throw new Error("初始化节点已存在编辑器实例，无法重复创建编辑器");
            }
            y.bar.attr(d, u.id), y.text.attr(d, u.id), u.beforeDestroy(function() {
              y.bar.removeAttr(d), y.text.removeAttr(d);
            });
          }
          t.selectorValidator = i;
        },
        /* 417 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(3)), s = e(7);
          function g(m, h) {
            var c = m.$textElem, i = c.children();
            if (!i || !i.length) {
              c.append(l.default(s.EMPTY_P)), g(m);
              return;
            }
            var u = i.last();
            if (h) {
              var d = u.html().toLowerCase(), v = u.getNodeName();
              if (d !== "<br>" && d !== "<br/>" || v !== "P") {
                c.append(l.default(s.EMPTY_P)), g(m);
                return;
              }
            }
            m.selection.createRangeByElem(u, !1, !0), m.config.focus ? m.selection.restoreSelection() : m.selection.clearWindowSelectionRange();
          }
          t.default = g;
        },
        /* 418 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3));
          function g(d) {
            m(d), h(d), c(d);
          }
          function m(d) {
            d.txt.eventHooks.changeEvents.push(function() {
              var v = d.config.onchange;
              if (v) {
                var f = d.txt.html() || "";
                d.isFocus = !0, v(f);
              }
              d.txt.togglePlaceholder();
            });
          }
          function h(d) {
            d.isFocus = !1;
            function v(f) {
              var p = f.target, y = s.default(p), x = d.$textElem, E = d.$toolbarElem, S = x.isContain(y), I = E.isContain(y), P = E.elems[0] == f.target;
              if (S)
                d.isFocus || u(d), d.isFocus = !0;
              else {
                if (I && !P || !d.isFocus)
                  return;
                i(d), d.isFocus = !1;
              }
            }
            document.activeElement === d.$textElem.elems[0] && d.config.focus && (u(d), d.isFocus = !0), s.default(document).on("click", v), d.beforeDestroy(function() {
              s.default(document).off("click", v);
            });
          }
          function c(d) {
            d.$textElem.on("compositionstart", function() {
              d.isComposing = !0, d.txt.togglePlaceholder();
            }).on("compositionend", function() {
              d.isComposing = !1, d.txt.togglePlaceholder();
            });
          }
          function i(d) {
            var v, f = d.config, p = f.onblur, y = d.txt.html() || "";
            (0, o.default)(v = d.txt.eventHooks.onBlurEvents).call(v, function(x) {
              return x();
            }), p(y);
          }
          function u(d) {
            var v = d.config, f = v.onfocus, p = d.txt.html() || "";
            f(p);
          }
          t.default = g;
        },
        /* 419 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          function o(l) {
            var s = l.config, g = s.lang, m = s.languages;
            if (l.i18next != null) {
              try {
                l.i18next.init({
                  ns: "wangEditor",
                  lng: g,
                  defaultNS: "wangEditor",
                  resources: m
                });
              } catch (h) {
                throw new Error("i18next:" + h);
              }
              return;
            }
            l.i18next = {
              t: function(c) {
                var i = c.split(".");
                return i[i.length - 1];
              }
            };
          }
          t.default = o;
        },
        /* 420 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(29));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.setUnFullScreen = t.setFullScreen = void 0;
          var l = e(2), s = l.__importDefault(e(3));
          e(421);
          var g = "w-e-icon-fullscreen", m = "w-e-icon-fullscreen_exit", h = "w-e-full-screen-editor";
          t.setFullScreen = function(i) {
            var u = s.default(i.toolbarSelector), d = i.$textContainerElem, v = i.$toolbarElem, f = (0, o.default)(v).call(v, "i." + g), p = i.config;
            f.removeClass(g), f.addClass(m), u.addClass(h), u.css("z-index", p.zIndexFullScreen);
            var y = v.getBoundingClientRect();
            d.css("height", "calc(100% - " + y.height + "px)");
          }, t.setUnFullScreen = function(i) {
            var u = s.default(i.toolbarSelector), d = i.$textContainerElem, v = i.$toolbarElem, f = (0, o.default)(v).call(v, "i." + m), p = i.config;
            f.removeClass(m), f.addClass(g), u.removeClass(h), u.css("z-index", "auto"), d.css("height", p.height + "px");
          };
          var c = function(u) {
            if (!u.textSelector && u.config.showFullScreen) {
              var d = u.$toolbarElem, v = s.default(`<div class="w-e-menu" data-title="全屏">
            <i class="` + g + `"></i>
        </div>`);
              v.on("click", function(f) {
                var p, y = (0, o.default)(p = s.default(f.currentTarget)).call(p, "i");
                y.hasClass(g) ? (v.attr("data-title", "取消全屏"), t.setFullScreen(u)) : (v.attr("data-title", "全屏"), t.setUnFullScreen(u));
              }), d.append(v);
            }
          };
          t.default = c;
        },
        /* 421 */
        /***/
        function(a, t, e) {
          var n = e(20), r = e(422);
          r = r.__esModule ? r.default : r, typeof r == "string" && (r = [[a.i, r, ""]]);
          var o = {};
          o.insert = "head", o.singleton = !1, n(r, o), a.exports = r.locals || {};
        },
        /* 422 */
        /***/
        function(a, t, e) {
          var n = e(21);
          t = n(!1), t.push([a.i, `.w-e-full-screen-editor {
  position: fixed;
  width: 100%!important;
  height: 100%!important;
  left: 0;
  top: 0;
}
`, ""]), a.exports = t;
        },
        /* 423 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(29));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = function(g, m) {
            var h, c = g.isEnable ? g.$textElem : (0, o.default)(h = g.$textContainerElem).call(h, ".w-e-content-mantle"), i = (0, o.default)(c).call(c, "[id='" + m + "']"), u = i.getOffsetData().top;
            c.scrollTop(u);
          };
          t.default = l;
        },
        /* 424 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(129)), s = {
            menu: 2,
            panel: 2,
            toolbar: 1,
            tooltip: 1,
            textContainer: 1
          }, g = (
            /** @class */
            function() {
              function m() {
                this.tier = s, this.baseZIndex = l.default.zIndex;
              }
              return m.prototype.get = function(h) {
                return h && this.tier[h] ? this.baseZIndex + this.tier[h] : this.baseZIndex;
              }, m.prototype.init = function(h) {
                this.baseZIndex == l.default.zIndex && (this.baseZIndex = h.config.zIndex);
              }, m;
            }()
          );
          t.default = g;
        },
        /* 425 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(70)), l = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var s = e(2), g = s.__importDefault(e(426)), m = e(6), h = e(7);
          function c(u, d) {
            return (0, o.default)(u).call(u, function(v) {
              var f = v.type, p = v.target, y = v.attributeName;
              return f != "attributes" || f == "attributes" && (y == "contenteditable" || p != d);
            });
          }
          var i = (
            /** @class */
            function(u) {
              s.__extends(d, u);
              function d(v) {
                var f = u.call(this, function(p, y) {
                  var x;
                  if (p = c(p, y.target), (x = f.data).push.apply(x, p), v.isCompatibleMode)
                    f.asyncSave();
                  else if (!v.isComposing)
                    return f.asyncSave();
                }) || this;
                return f.editor = v, f.data = [], f.asyncSave = h.EMPTY_FN, f;
              }
              return d.prototype.save = function() {
                this.data.length && (this.editor.history.save(this.data), this.data.length = 0, this.emit());
              }, d.prototype.emit = function() {
                var v;
                (0, l.default)(v = this.editor.txt.eventHooks.changeEvents).call(v, function(f) {
                  return f();
                });
              }, d.prototype.observe = function() {
                var v = this;
                u.prototype.observe.call(this, this.editor.$textElem.elems[0]);
                var f = this.editor.config.onchangeTimeout;
                this.asyncSave = m.debounce(function() {
                  v.save();
                }, f), this.editor.isCompatibleMode || this.editor.$textElem.on("compositionend", function() {
                  v.asyncSave();
                });
              }, d;
            }(g.default)
          );
          t.default = i;
        },
        /* 426 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = (
            /** @class */
            function() {
              function l(s, g) {
                var m = this;
                this.options = {
                  subtree: !0,
                  childList: !0,
                  attributes: !0,
                  attributeOldValue: !0,
                  characterData: !0,
                  characterDataOldValue: !0
                }, this.callback = function(h) {
                  s(h, m);
                }, this.observer = new MutationObserver(this.callback), g && (this.options = g);
              }
              return (0, r.default)(l.prototype, "target", {
                get: function() {
                  return this.node;
                },
                enumerable: !1,
                configurable: !0
              }), l.prototype.observe = function(s) {
                this.node instanceof Node || (this.node = s, this.connect());
              }, l.prototype.connect = function() {
                if (this.node)
                  return this.observer.observe(this.node, this.options), this;
                throw new Error("还未初始化绑定，请您先绑定有效的 Node 节点");
              }, l.prototype.disconnect = function() {
                var s = this.observer.takeRecords();
                s.length && this.callback(s), this.observer.disconnect();
              }, l;
            }()
          );
          t.default = o;
        },
        /* 427 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(428)), s = o.__importDefault(e(435)), g = o.__importDefault(e(436)), m = (
            /** @class */
            function() {
              function h(c) {
                this.editor = c, this.content = new l.default(c), this.scroll = new s.default(c), this.range = new g.default(c);
              }
              return (0, r.default)(h.prototype, "size", {
                /**
                 *  获取缓存中的数据长度。格式为：[正常的数据的条数，被撤销的数据的条数]
                 */
                get: function() {
                  return this.scroll.size;
                },
                enumerable: !1,
                configurable: !0
              }), h.prototype.observe = function() {
                this.content.observe(), this.scroll.observe(), !this.editor.isCompatibleMode && this.range.observe();
              }, h.prototype.save = function(c) {
                c.length && (this.content.save(c), this.scroll.save(), !this.editor.isCompatibleMode && this.range.save());
              }, h.prototype.revoke = function() {
                this.editor.change.disconnect();
                var c = this.content.revoke();
                c && (this.scroll.revoke(), this.editor.isCompatibleMode || (this.range.revoke(), this.editor.$textElem.focus())), this.editor.change.connect(), c && this.editor.change.emit();
              }, h.prototype.restore = function() {
                this.editor.change.disconnect();
                var c = this.content.restore();
                c && (this.scroll.restore(), this.editor.isCompatibleMode || (this.range.restore(), this.editor.$textElem.focus())), this.editor.change.connect(), c && this.editor.change.emit();
              }, h;
            }()
          );
          t.default = m;
        },
        /* 428 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(429)), s = o.__importDefault(e(433)), g = (
            /** @class */
            function() {
              function m(h) {
                this.editor = h;
              }
              return m.prototype.observe = function() {
                this.editor.isCompatibleMode ? this.cache = new s.default(this.editor) : this.cache = new l.default(this.editor), this.cache.observe();
              }, m.prototype.save = function(h) {
                this.editor.isCompatibleMode ? this.cache.save() : this.cache.compile(h);
              }, m.prototype.revoke = function() {
                var h;
                return (h = this.cache) === null || h === void 0 ? void 0 : h.revoke();
              }, m.prototype.restore = function() {
                var h;
                return (h = this.cache) === null || h === void 0 ? void 0 : h.restore();
              }, m;
            }()
          );
          t.default = g;
        },
        /* 429 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(99)), s = o.__importDefault(e(431)), g = e(432), m = (
            /** @class */
            function(h) {
              o.__extends(c, h);
              function c(i) {
                var u = h.call(this, i.config.historyMaxSize) || this;
                return u.editor = i, u;
              }
              return c.prototype.observe = function() {
                this.resetMaxSize(this.editor.config.historyMaxSize);
              }, c.prototype.compile = function(i) {
                return this.save(s.default(i)), this;
              }, c.prototype.revoke = function() {
                return h.prototype.revoke.call(this, function(i) {
                  g.revoke(i);
                });
              }, c.prototype.restore = function() {
                return h.prototype.restore.call(this, function(i) {
                  g.restore(i);
                });
              }, c;
            }(l.default)
          );
          t.default = m;
        },
        /* 430 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.CeilStack = void 0;
          var o = (
            /** @class */
            function() {
              function l(s) {
                s === void 0 && (s = 0), this.data = [], this.max = 0, this.reset = !1, s = Math.abs(s), s && (this.max = s);
              }
              return l.prototype.resetMax = function(s) {
                s = Math.abs(s), !this.reset && !isNaN(s) && (this.max = s, this.reset = !0);
              }, (0, r.default)(l.prototype, "size", {
                /**
                 * 当前栈中的数据条数
                 */
                get: function() {
                  return this.data.length;
                },
                enumerable: !1,
                configurable: !0
              }), l.prototype.instack = function(s) {
                return this.data.unshift(s), this.max && this.size > this.max && (this.data.length = this.max), this;
              }, l.prototype.outstack = function() {
                return this.data.shift();
              }, l.prototype.clear = function() {
                return this.data.length = 0, this;
              }, l;
            }()
          );
          t.CeilStack = o;
        },
        /* 431 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4)), l = n(e(27));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.compliePosition = t.complieNodes = t.compileValue = t.compileType = void 0;
          var s = e(6);
          function g(v) {
            switch (v) {
              case "childList":
                return "node";
              case "attributes":
                return "attr";
              default:
                return "text";
            }
          }
          t.compileType = g;
          function m(v) {
            switch (v.type) {
              case "attributes":
                return v.target.getAttribute(v.attributeName) || "";
              case "characterData":
                return v.target.textContent;
              default:
                return "";
            }
          }
          t.compileValue = m;
          function h(v) {
            var f = {};
            return v.addedNodes.length && (f.add = s.toArray(v.addedNodes)), v.removedNodes.length && (f.remove = s.toArray(v.removedNodes)), f;
          }
          t.complieNodes = h;
          function c(v) {
            var f;
            return v.previousSibling ? f = {
              type: "before",
              target: v.previousSibling
            } : v.nextSibling ? f = {
              type: "after",
              target: v.nextSibling
            } : f = {
              type: "parent",
              target: v.target
            }, f;
          }
          t.compliePosition = c;
          var i = ["UL", "OL", "H1", "H2", "H3", "H4", "H5", "H6"];
          function u(v) {
            var f = [], p = !1, y = [];
            return (0, o.default)(v).call(v, function(x, E) {
              var S = {
                type: g(x.type),
                target: x.target,
                attr: x.attributeName || "",
                value: m(x) || "",
                oldValue: x.oldValue || "",
                nodes: h(x),
                position: c(x)
              };
              if (f.push(S), !!s.UA.isFirefox) {
                if (p && x.addedNodes.length && x.addedNodes[0].nodeType == 1) {
                  var I = x.addedNodes[0], P = {
                    type: "node",
                    target: I,
                    attr: "",
                    value: "",
                    oldValue: "",
                    nodes: {
                      add: [p]
                    },
                    position: {
                      type: "parent",
                      target: I
                    }
                  };
                  (0, l.default)(i).call(i, I.nodeName) != -1 ? (P.nodes.add = s.toArray(I.childNodes), f.push(P)) : p.nodeType == 3 ? (d(I, y) && (P.nodes.add = s.toArray(I.childNodes)), f.push(P)) : (0, l.default)(i).call(i, x.target.nodeName) == -1 && d(I, y) && (P.nodes.add = s.toArray(I.childNodes), f.push(P));
                }
                S.type == "node" && x.removedNodes.length == 1 ? (p = x.removedNodes[0], y.push(p)) : (p = !1, y.length = 0);
              }
            }), f;
          }
          t.default = u;
          function d(v, f) {
            for (var p = 0, y = f.length - 1; y > 0 && v.contains(f[y]); y--)
              p++;
            return p;
          }
        },
        /* 432 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(4)), l = n(e(94));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.restore = t.revoke = void 0;
          function s(y, x) {
            var E = y.position.target;
            switch (y.position.type) {
              case "before":
                E.nextSibling ? (E = E.nextSibling, (0, o.default)(x).call(x, function(S) {
                  y.target.insertBefore(S, E);
                })) : (0, o.default)(x).call(x, function(S) {
                  y.target.appendChild(S);
                });
                break;
              case "after":
                (0, o.default)(x).call(x, function(S) {
                  y.target.insertBefore(S, E);
                });
                break;
              default:
                (0, o.default)(x).call(x, function(S) {
                  E.appendChild(S);
                });
                break;
            }
          }
          function g(y) {
            for (var x = 0, E = (0, l.default)(y.nodes); x < E.length; x++) {
              var S = E[x], I = S[0], P = S[1];
              switch (I) {
                case "add":
                  (0, o.default)(P).call(P, function(T) {
                    y.target.removeChild(T);
                  });
                  break;
                default: {
                  s(y, P);
                  break;
                }
              }
            }
          }
          function m(y) {
            var x = y.target;
            y.oldValue == null ? x.removeAttribute(y.attr) : x.setAttribute(y.attr, y.oldValue);
          }
          function h(y) {
            y.target.textContent = y.oldValue;
          }
          var c = {
            node: g,
            text: h,
            attr: m
          };
          function i(y) {
            for (var x = y.length - 1; x > -1; x--) {
              var E = y[x];
              c[E.type](E);
            }
          }
          t.revoke = i;
          function u(y) {
            for (var x = 0, E = (0, l.default)(y.nodes); x < E.length; x++) {
              var S = E[x], I = S[0], P = S[1];
              switch (I) {
                case "add": {
                  s(y, P);
                  break;
                }
                default: {
                  (0, o.default)(P).call(P, function(T) {
                    T.parentNode.removeChild(T);
                  });
                  break;
                }
              }
            }
          }
          function d(y) {
            y.target.textContent = y.value;
          }
          function v(y) {
            y.target.setAttribute(y.attr, y.value);
          }
          var f = {
            node: u,
            text: d,
            attr: v
          };
          function p(y) {
            for (var x = 0, E = y; x < E.length; x++) {
              var S = E[x];
              f[S.type](S);
            }
          }
          t.restore = p;
        },
        /* 433 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(434), l = (
            /** @class */
            function() {
              function s(g) {
                this.editor = g, this.data = new o.TailChain();
              }
              return s.prototype.observe = function() {
                this.data.resetMax(this.editor.config.historyMaxSize), this.data.insertLast(this.editor.$textElem.html());
              }, s.prototype.save = function() {
                return this.data.insertLast(this.editor.$textElem.html()), this;
              }, s.prototype.revoke = function() {
                var g = this.data.prev();
                return g ? (this.editor.$textElem.html(g), !0) : !1;
              }, s.prototype.restore = function() {
                var g = this.data.next();
                return g ? (this.editor.$textElem.html(g), !0) : !1;
              }, s;
            }()
          );
          t.default = l;
        },
        /* 434 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(91));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.TailChain = void 0;
          var l = (
            /** @class */
            function() {
              function s() {
                this.data = [], this.max = 0, this.point = 0, this.isRe = !1;
              }
              return s.prototype.resetMax = function(g) {
                g = Math.abs(g), g && (this.max = g);
              }, (0, r.default)(s.prototype, "size", {
                /**
                 * 当前链表的长度
                 */
                get: function() {
                  return this.data.length;
                },
                enumerable: !1,
                configurable: !0
              }), s.prototype.insertLast = function(g) {
                if (this.isRe) {
                  var m;
                  (0, o.default)(m = this.data).call(m, this.point + 1), this.isRe = !1;
                }
                for (this.data.push(g); this.max && this.size > this.max; )
                  this.data.shift();
                return this.point = this.size - 1, this;
              }, s.prototype.current = function() {
                return this.data[this.point];
              }, s.prototype.prev = function() {
                if (!this.isRe && (this.isRe = !0), this.point--, this.point < 0) {
                  this.point = 0;
                  return;
                }
                return this.current();
              }, s.prototype.next = function() {
                if (!this.isRe && (this.isRe = !0), this.point++, this.point >= this.size) {
                  this.point = this.size - 1;
                  return;
                }
                return this.current();
              }, s;
            }()
          );
          t.TailChain = l;
        },
        /* 435 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(99)), s = (
            /** @class */
            function(g) {
              o.__extends(m, g);
              function m(h) {
                var c = g.call(this, h.config.historyMaxSize) || this;
                return c.editor = h, c.last = 0, c.target = h.$textElem.elems[0], c;
              }
              return m.prototype.observe = function() {
                var h = this;
                this.target = this.editor.$textElem.elems[0], this.editor.$textElem.on("scroll", function() {
                  h.last = h.target.scrollTop;
                }), this.resetMaxSize(this.editor.config.historyMaxSize);
              }, m.prototype.save = function() {
                return g.prototype.save.call(this, [this.last, this.target.scrollTop]), this;
              }, m.prototype.revoke = function() {
                var h = this;
                return g.prototype.revoke.call(this, function(c) {
                  h.target.scrollTop = c[0];
                });
              }, m.prototype.restore = function() {
                var h = this;
                return g.prototype.restore.call(this, function(c) {
                  h.target.scrollTop = c[1];
                });
              }, m;
            }(l.default)
          );
          t.default = s;
        },
        /* 436 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = e(2), l = o.__importDefault(e(99)), s = o.__importDefault(e(3)), g = e(6);
          function m(c) {
            return {
              start: [c.startContainer, c.startOffset],
              end: [c.endContainer, c.endOffset],
              root: c.commonAncestorContainer,
              collapsed: c.collapsed
            };
          }
          var h = (
            /** @class */
            function(c) {
              o.__extends(i, c);
              function i(u) {
                var d = c.call(this, u.config.historyMaxSize) || this;
                return d.editor = u, d.lastRange = m(document.createRange()), d.root = u.$textElem.elems[0], d.updateLastRange = g.debounce(function() {
                  d.lastRange = m(d.rangeHandle);
                }, u.config.onchangeTimeout), d;
              }
              return (0, r.default)(i.prototype, "rangeHandle", {
                /**
                 * 获取 Range 对象
                 */
                get: function() {
                  var d = document.getSelection();
                  return d && d.rangeCount ? d.getRangeAt(0) : document.createRange();
                },
                enumerable: !1,
                configurable: !0
              }), i.prototype.observe = function() {
                var u = this;
                this.root = this.editor.$textElem.elems[0], this.resetMaxSize(this.editor.config.historyMaxSize);
                function d() {
                  var f = u.rangeHandle;
                  (u.root === f.commonAncestorContainer || u.root.contains(f.commonAncestorContainer)) && (u.editor.isComposing || u.updateLastRange());
                }
                function v(f) {
                  (f.key == "Backspace" || f.key == "Delete") && u.updateLastRange();
                }
                s.default(document).on("selectionchange", d), this.editor.beforeDestroy(function() {
                  s.default(document).off("selectionchange", d);
                }), u.editor.$textElem.on("keydown", v);
              }, i.prototype.save = function() {
                var u = m(this.rangeHandle);
                return c.prototype.save.call(this, [this.lastRange, u]), this.lastRange = u, this;
              }, i.prototype.set = function(u) {
                try {
                  if (u) {
                    var d = this.rangeHandle;
                    return d.setStart.apply(d, u.start), d.setEnd.apply(d, u.end), this.editor.menus.changeActive(), !0;
                  }
                } catch {
                  return !1;
                }
                return !1;
              }, i.prototype.revoke = function() {
                var u = this;
                return c.prototype.revoke.call(this, function(d) {
                  u.set(d[0]);
                });
              }, i.prototype.restore = function() {
                var u = this;
                return c.prototype.restore.call(this, function(d) {
                  u.set(d[1]);
                });
              }, i;
            }(l.default)
          );
          t.default = h;
        },
        /* 437 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(29));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var l = e(2), s = l.__importDefault(e(3));
          e(438);
          function g(m) {
            var h = !1, c, i;
            m.txt.eventHooks.changeEvents.push(function() {
              h && (0, o.default)(c).call(c, ".w-e-content-preview").html(m.$textElem.html());
            });
            function u() {
              if (!h) {
                m.$textElem.hide();
                var v = m.zIndex.get("textContainer"), f = m.txt.html();
                c = s.default('<div class="w-e-content-mantle" style="z-index:' + v + `">
                <div class="w-e-content-preview w-e-text">` + f + `</div>
            </div>`), m.$textContainerElem.append(c);
                var p = m.zIndex.get("menu");
                i = s.default('<div class="w-e-menue-mantle" style="z-index:' + p + '"></div>'), m.$toolbarElem.append(i), h = !0, m.isEnable = !1;
              }
            }
            function d() {
              h && (c.remove(), i.remove(), m.$textElem.show(), h = !1, m.isEnable = !0);
            }
            return {
              disable: u,
              enable: d
            };
          }
          t.default = g;
        },
        /* 438 */
        /***/
        function(a, t, e) {
          var n = e(20), r = e(439);
          r = r.__esModule ? r.default : r, typeof r == "string" && (r = [[a.i, r, ""]]);
          var o = {};
          o.insert = "head", o.singleton = !1, n(r, o), a.exports = r.locals || {};
        },
        /* 439 */
        /***/
        function(a, t, e) {
          var n = e(21);
          t = n(!1), t.push([a.i, `.w-e-content-mantle {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}
.w-e-content-mantle .w-e-content-preview {
  width: 100%;
  min-height: 100%;
  padding: 0 10px;
  line-height: 1.5;
}
.w-e-content-mantle .w-e-content-preview img {
  cursor: default;
}
.w-e-content-mantle .w-e-content-preview img:hover {
  box-shadow: none;
}
.w-e-menue-mantle {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}
`, ""]), a.exports = t;
        },
        /* 440 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
          var o = (
            /** @class */
            function() {
              function l(s) {
                var g = this;
                this.editor = s;
                var m = function() {
                  var c = document.activeElement;
                  c === s.$textElem.elems[0] && g.emit();
                };
                window.document.addEventListener("selectionchange", m), this.editor.beforeDestroy(function() {
                  window.document.removeEventListener("selectionchange", m);
                });
              }
              return l.prototype.emit = function() {
                var s, g = this.editor.config.onSelectionChange;
                if (g) {
                  var m = this.editor.selection;
                  m.saveRange(), m.isSelectionEmpty() || g({
                    // 当前文本
                    text: m.getSelectionText(),
                    // 当前的html
                    html: (s = m.getSelectionContainerElem()) === null || s === void 0 ? void 0 : s.elems[0].innerHTML,
                    // select对象
                    selection: m
                  });
                }
              }, l;
            }()
          );
          t.default = o;
        },
        /* 441 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1)), o = n(e(128)), l = n(e(94)), s = n(e(4));
          (0, r.default)(t, "__esModule", {
            value: !0
          }), t.registerPlugin = void 0;
          var g = e(2), m = g.__importDefault(e(87)), h = e(6);
          function c(u, d, v) {
            if (!u)
              throw new TypeError("name is not define");
            if (!d)
              throw new TypeError("options is not define");
            if (!d.intention)
              throw new TypeError("options.intention is not define");
            if (d.intention && typeof d.intention != "function")
              throw new TypeError("options.intention is not function");
            v[u] && console.warn("plugin " + u + " 已存在，已覆盖。"), v[u] = d;
          }
          t.registerPlugin = c;
          function i(u) {
            var d = (0, o.default)({}, h.deepClone(m.default.globalPluginsFunctionList), h.deepClone(u.pluginsFunctionList)), v = (0, l.default)(d);
            (0, s.default)(v).call(v, function(f) {
              var p = f[0], y = f[1];
              console.info("plugin " + p + " initializing");
              var x = y.intention, E = y.config;
              x(u, E), console.info("plugin " + p + " initialization complete");
            });
          }
          t.default = i;
        },
        /* 442 */
        /***/
        function(a, t, e) {
          var n = e(0), r = n(e(1));
          (0, r.default)(t, "__esModule", {
            value: !0
          });
        }
        /******/
      ]).default
    );
  });
})(Vt);
var km = Vt.exports;
const qm = /* @__PURE__ */ xt(km), _m = {
  key: 2,
  id: "editor"
}, ef = /* @__PURE__ */ xe({
  __name: "index",
  props: {
    // 表单的配置项
    options: {
      type: Array,
      required: !0
    },
    // 用户自定义上传方法
    httpRequest: {
      type: Function
    }
  },
  emits: [
    "on-preview",
    "on-remove",
    "on-success",
    "on-error",
    "on-progress",
    "on-change",
    "before-upload",
    "before-remove",
    "on-exceed"
  ],
  setup(C, { expose: $, emit: a }) {
    let t = a, e = C, n = se(null), r = se(null), o = se(), l = se(), s = () => {
      if (e.options && e.options.length) {
        let E = {}, S = {};
        e.options.map((I) => {
          E[I.prop] = I.value, S[I.prop] = I.rules, I.type === "editor" && Kt(() => {
            if (document.getElementById("editor")) {
              const P = new qm("#editor");
              P.config.placeholder = I.placeholder, P.create(), P.txt.html(I.value), P.config.onchange = (T) => {
                n.value[I.prop] = T;
              }, l.value = P;
            }
          });
        }), n.value = Bn(E), r.value = Bn(S);
      }
    };
    $({
      resetFields: () => {
        if (o.value.resetFields(), e.options && e.options.length) {
          let E = e.options.find((S) => S.type === "editor");
          l.value.txt.html(E.value);
        }
      },
      validate: () => o.value.validate,
      getFormData: () => n.value
    }), hn(() => {
      s();
    }), Pe(
      () => e.options,
      () => {
        s();
      },
      { deep: !0 }
    );
    let c = (E) => {
      t("on-preview", E);
    }, i = (E, S) => {
      t("on-remove", { file: E, fileList: S });
    }, u = (E, S, I) => {
      let P = e.options.find((T) => T.type === "upload");
      n.value[P.prop] = { response: E, file: S, fileList: I }, t("on-success", { response: E, file: S, fileList: I });
    }, d = (E, S, I) => {
      t("on-error", { err: E, file: S, fileList: I });
    }, v = (E, S, I) => {
      t("on-progress", { event: E, file: S, fileList: I });
    }, f = (E, S) => {
      t("on-change", { file: E, fileList: S });
    }, p = (E) => {
      t("before-upload", E);
    }, y = (E, S) => {
      t("before-remove", { file: E, fileList: S });
    }, x = (E, S) => {
      t("on-exceed", { files: E, fileList: S });
    };
    return (E, S) => {
      const I = ie("el-upload"), P = ie("el-form-item"), T = ie("el-form");
      return z(n) ? (w(), ce(T, Ie({
        key: 0,
        ref_key: "form",
        ref: o,
        "validate-on-rule-change": !1,
        model: z(n),
        rules: z(r)
      }, E.$attrs), {
        default: ne(() => [
          (w(!0), _(
            ue,
            null,
            Ae(C.options, (A, D) => (w(), _(
              ue,
              { key: D },
              [
                !A.children || !A.children.length ? (w(), ce(P, {
                  key: 0,
                  prop: A.prop,
                  label: A.label
                }, {
                  default: ne(() => [
                    A.type !== "upload" && A.type !== "editor" ? (w(), ce(Oe(`el-${A.type}`), Ie({
                      key: 0,
                      placeholder: A.placeholder,
                      ref_for: !0
                    }, A.attrs, {
                      modelValue: z(n)[A.prop],
                      "onUpdate:modelValue": (R) => z(n)[A.prop] = R
                    }), null, 16, ["placeholder", "modelValue", "onUpdate:modelValue"])) : pe("v-if", !0),
                    A.type === "upload" ? (w(), ce(I, Ie({
                      key: 1,
                      ref_for: !0
                    }, A.uploadAttrs, {
                      "on-preview": z(c),
                      "on-remove": z(i),
                      "on-success": z(u),
                      "on-error": z(d),
                      "on-progress": z(v),
                      "on-change": z(f),
                      "before-upload": z(p),
                      "before-remove": z(y),
                      "http-request": C.httpRequest,
                      "on-exceed": z(x)
                    }), {
                      default: ne(() => [
                        De(E.$slots, "uploadArea"),
                        De(E.$slots, "uploadTip")
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["on-preview", "on-remove", "on-success", "on-error", "on-progress", "on-change", "before-upload", "before-remove", "http-request", "on-exceed"])) : pe("v-if", !0),
                    A.type === "editor" ? (w(), _("div", _m)) : pe("v-if", !0)
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["prop", "label"])) : pe("v-if", !0),
                A.children && A.children.length ? (w(), ce(P, {
                  key: 1,
                  prop: A.prop,
                  label: A.label
                }, {
                  default: ne(() => [
                    (w(), ce(Oe(`el-${A.type}`), Ie({
                      placeholder: A.placeholder,
                      ref_for: !0
                    }, A.attrs, {
                      modelValue: z(n)[A.prop],
                      "onUpdate:modelValue": (R) => z(n)[A.prop] = R
                    }), {
                      default: ne(() => [
                        (w(!0), _(
                          ue,
                          null,
                          Ae(A.children, (R, N) => (w(), ce(Oe(`el-${R.type}`), {
                            key: N,
                            label: R.label,
                            value: R.value
                          }, null, 8, ["label", "value"]))),
                          128
                          /* KEYED_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1040, ["placeholder", "modelValue", "onUpdate:modelValue"]))
                  ]),
                  _: 2
                  /* DYNAMIC */
                }, 1032, ["prop", "label"])) : pe("v-if", !0)
              ],
              64
              /* STABLE_FRAGMENT */
            ))),
            128
            /* KEYED_FRAGMENT */
          )),
          oe(P, null, {
            default: ne(() => [
              De(E.$slots, "action", {
                form: z(o),
                model: z(n)
              })
            ]),
            _: 3
            /* FORWARDED */
          })
        ]),
        _: 3
        /* FORWARDED */
      }, 16, ["model", "rules"])) : pe("v-if", !0);
    };
  }
}), nf = {
  install(C) {
    C.component("sun-form", ef);
  }
}, tf = /* @__PURE__ */ xe({
  __name: "index",
  props: {
    // 是否只在可视区域内滚动
    isScroll: {
      type: Boolean,
      default: !1
    },
    visible: {
      type: Boolean,
      default: !1
    },
    options: {
      type: Array,
      required: !0
    },
    onChange: {
      type: Function
    },
    beforeUpload: {
      type: Function
    },
    onPreview: {
      type: Function
    },
    onRemove: {
      type: Function
    },
    beforeRemove: {
      type: Function
    },
    onSuccess: {
      type: Function
    },
    onExceed: {
      type: Function
    }
  },
  emits: ["update:visible"],
  setup(C, { emit: $ }) {
    let a = C, t = $, e = se(), n = se(a.visible);
    return Pe(
      () => a.visible,
      (r) => {
        n.value = r;
      }
    ), Pe(
      () => n.value,
      (r) => {
        t("update:visible", r);
      }
    ), (r, o) => {
      const l = ie("sun-form"), s = ie("el-dialog");
      return w(), _(
        "div",
        {
          class: $n({ "m-choose-icon-dialog-body-height": C.isScroll })
        },
        [
          oe(s, Ie({
            modelValue: z(n),
            "onUpdate:modelValue": o[0] || (o[0] = (g) => Me(n) ? n.value = g : n = g)
          }, r.$attrs), {
            default: ne(() => [
              oe(l, {
                ref_key: "form",
                ref: e,
                options: C.options,
                "label-width": "100px",
                onOnChange: C.onChange,
                onBeforeUpload: C.beforeUpload,
                onOnPreview: C.onPreview,
                onOnRemove: C.onRemove,
                onBeforeRemove: C.beforeRemove,
                onOnSuccess: C.onSuccess,
                onOnExceed: C.onExceed
              }, {
                uploadArea: ne(() => [
                  De(r.$slots, "uploadArea")
                ]),
                uploadTip: ne(() => [
                  De(r.$slots, "uploadTip")
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["options", "onOnChange", "onBeforeUpload", "onOnPreview", "onOnRemove", "onBeforeRemove", "onOnSuccess", "onOnExceed"])
            ]),
            footer: ne(() => [
              De(r.$slots, "footer", { form: z(e) })
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["modelValue"])
        ],
        2
        /* CLASS */
      );
    };
  }
}), af = {
  install(C) {
    C.component("sun-modal-form", tf);
  }
}, of = {
  key: 0,
  style: { display: "flex" }
}, rf = {
  key: 1,
  class: "action-icon"
}, lf = { key: 1 }, df = /* @__PURE__ */ xe({
  __name: "index",
  props: {
    // 表格配置选项
    options: {
      type: Array,
      required: !0
    },
    // 表格数据
    data: {
      type: Array,
      required: !0
    },
    // 加载文案
    elementLoadingText: {
      type: String
    },
    // 加载图标名
    elementLoadingSpinner: {
      type: String
    },
    // 加载背景颜色
    elementLoadingBackground: {
      type: String
    },
    // 加载图标是svg
    elementLoadingSvg: {
      type: String
    },
    // 加载团是svg的配置
    elementLoadingSvgViewBox: {
      type: String
    },
    // 编辑显示的图标
    editIcon: {
      type: String,
      default: "Edit"
    },
    // 是否可以编辑行
    isEditRow: {
      type: Boolean,
      default: !1
    },
    // 编辑行按钮的标识
    editRowIndex: {
      type: String,
      default: ""
    },
    // 是否显示分页
    pagination: {
      type: Boolean,
      default: !1
    },
    // 显示分页的对齐方式
    paginationAlign: {
      type: String,
      default: "left"
    },
    // 当前是第几页
    currentPage: {
      type: Number,
      default: 1
    },
    // 当前一页多少条数据
    pageSize: {
      type: Number,
      default: 10
    },
    // 显示分页数据多少条的选项
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    // 数据总条数
    total: {
      type: Number,
      default: 0
    }
  },
  emits: [
    "confirm",
    "cancel",
    "update:editRowIndex",
    "size-change",
    "current-change"
  ],
  setup(C, { emit: $ }) {
    let a = C, t = $, e = (p) => {
      t("size-change", p);
    }, n = (p) => {
      t("current-change", p);
    }, r = se(""), o = se(Bn(a.data)), l = se(a.editRowIndex), s = se(!1), g = Pe(
      () => a.data,
      (p) => {
        s.value = !0, o.value = p, o.value.map((y) => {
          y.rowEdit = !1;
        }), s.value && g();
      },
      { deep: !0 }
    );
    Pe(
      () => a.editRowIndex,
      (p) => {
        p && (l.value = p);
      }
    ), hn(() => {
      o.value.map((p) => {
        p.rowEdit = !1;
      });
    });
    let m = on(() => a.options.filter((p) => !p.action)), h = on(() => a.options.find((p) => p.action)), c = on(() => !a.data || !a.data.length), i = on(() => a.paginationAlign === "left" ? "flex-start" : a.paginationAlign === "right" ? "flex-end" : "center"), u = (p) => {
      r.value = p.$index + p.column.id;
    }, d = (p) => {
      t("confirm", p), r.value = "";
    }, v = (p) => {
      t("cancel", p), r.value = "";
    }, f = (p, y) => {
      y.label === h.value.label && a.isEditRow && l.value === a.editRowIndex && (p.rowEdit = !p.rowEdit, o.value.map((x) => {
        x !== p && (x.rowEdit = !1);
      }), p.rowEdit || t("update:editRowIndex", ""));
    };
    return (p, y) => {
      const x = ie("el-input"), E = ie("el-icon-check"), S = ie("el-icon-close"), I = ie("el-table-column"), P = ie("el-table"), T = ie("el-pagination"), A = Jt("loading");
      return w(), _(
        ue,
        null,
        [
          Wt((w(), ce(P, Ie({
            data: z(o),
            "element-loading-text": C.elementLoadingText,
            "element-loading-spinner": C.elementLoadingSpinner,
            "element-loading-background": C.elementLoadingBackground,
            "element-loading-svg": C.elementLoadingSvg,
            "element-loading-svg-view-box": C.elementLoadingSvgViewBox,
            onRowClick: z(f)
          }, p.$attrs), {
            default: ne(() => [
              (w(!0), _(
                ue,
                null,
                Ae(z(m), (D, R) => (w(), _(
                  ue,
                  { key: R },
                  [
                    D.prop && !D.action ? (w(), ce(I, {
                      key: 0,
                      label: D.label,
                      prop: D.prop,
                      width: D.width,
                      align: D.align
                    }, {
                      default: ne((N) => [
                        N.row.rowEdit ? (w(), ce(x, {
                          key: 0,
                          size: "small",
                          modelValue: N.row[D.prop],
                          "onUpdate:modelValue": (M) => N.row[D.prop] = M
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : (w(), _(
                          ue,
                          { key: 1 },
                          [
                            N.$index + N.column.id === z(r) ? (w(), _("div", of, [
                              oe(x, {
                                size: "small",
                                modelValue: N.row[D.prop],
                                "onUpdate:modelValue": (M) => N.row[D.prop] = M
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              ve("div", null, [
                                p.$slots.cellEdit ? De(p.$slots, "cellEdit", {
                                  key: 0,
                                  scope: N
                                }, void 0, !0) : (w(), _("div", rf, [
                                  oe(E, {
                                    class: "check",
                                    onClick: Tn((M) => z(d)(N), ["stop"])
                                  }, null, 8, ["onClick"]),
                                  oe(S, {
                                    class: "close",
                                    onClick: Tn((M) => z(v)(N), ["stop"])
                                  }, null, 8, ["onClick"])
                                ]))
                              ])
                            ])) : (w(), _(
                              ue,
                              { key: 1 },
                              [
                                D.slot ? De(p.$slots, D.slot, {
                                  key: 0,
                                  scope: N
                                }, void 0, !0) : (w(), _(
                                  "span",
                                  lf,
                                  ye(N.row[D.prop]),
                                  1
                                  /* TEXT */
                                )),
                                D.editable ? (w(), ce(Oe(`el-icon-${z(Je)(C.editIcon)}`), {
                                  key: 2,
                                  class: "edit",
                                  onClick: Tn((M) => z(u)(N), ["stop"])
                                }, null, 8, ["onClick"])) : pe("v-if", !0)
                              ],
                              64
                              /* STABLE_FRAGMENT */
                            ))
                          ],
                          64
                          /* STABLE_FRAGMENT */
                        ))
                      ]),
                      _: 2
                      /* DYNAMIC */
                    }, 1032, ["label", "prop", "width", "align"])) : pe("v-if", !0)
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))),
                128
                /* KEYED_FRAGMENT */
              )),
              oe(I, {
                label: z(h).label,
                width: z(h).width,
                align: z(h).align
              }, {
                default: ne((D) => [
                  D.row.rowEdit ? De(p.$slots, "editRow", {
                    key: 0,
                    scope: D
                  }, void 0, !0) : De(p.$slots, "action", {
                    key: 1,
                    scope: D
                  }, void 0, !0)
                ]),
                _: 3
                /* FORWARDED */
              }, 8, ["label", "width", "align"])
            ]),
            _: 3
            /* FORWARDED */
          }, 16, ["data", "element-loading-text", "element-loading-spinner", "element-loading-background", "element-loading-svg", "element-loading-svg-view-box", "onRowClick"])), [
            [A, z(c)]
          ]),
          C.pagination && !z(c) ? (w(), _(
            "div",
            {
              key: 0,
              class: "pagination",
              style: un({ justifyContent: z(i) })
            },
            [
              oe(T, {
                currentPage: C.currentPage,
                "page-sizes": C.pageSizes,
                "page-size": C.pageSize,
                layout: "total, sizes, prev, pager, next, jumper",
                total: C.total,
                onSizeChange: z(e),
                onCurrentChange: z(n)
              }, null, 8, ["currentPage", "page-sizes", "page-size", "total", "onSizeChange", "onCurrentChange"])
            ],
            4
            /* STYLE */
          )) : pe("v-if", !0)
        ],
        64
        /* STABLE_FRAGMENT */
      );
    };
  }
}), cf = /* @__PURE__ */ We(df, [["__scopeId", "data-v-1aea82c8"]]), sf = {
  install(C) {
    C.component("sun-table", cf);
  }
}, uf = [
  Zt,
  ta,
  ga,
  $a,
  La,
  za,
  Ya,
  xo,
  Ka,
  nf,
  af,
  sf
], ff = {
  install(C) {
    uf.map(($) => {
      C.use($);
    });
  }
};
export {
  ff as default
};
