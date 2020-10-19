function CCFshow(li){
    var flag = -1;
    var article=li.getElementsByTagName("cite")[0];
    var childs = article.children;
    for(i=0;i<childs.length;i++){
        if(childs[i].tagName=='A'){
            var href = childs[i].href;
            // console.log(childs[i].href);
            var posi = href.lastIndexOf("/");
            var str = href.substring(0,posi+1);
            var strr = str.replace("https","http");
            // console.log(strr);
            if(strr=="http://dblp.uni-trier.de/db/conf/ccs/"){
                var yy = childs[i].getElementsByTagName("span")[0].getElementsByTagName("span")[0].innerHTML;
                // console.log(yy);
                if(yy.indexOf("ACM Conference on Computer ")!=-1){
                    flag=1;
                }else {
                    flag=3;
                }
            }
            else if(a_set.has(strr)){
                flag=1;
            }else if(b_set.has(strr)){
                flag=2;
            }else if(c_set.has(strr)){
                flag=3;
            }else{
                flag=-1;
            }
            var spp = li.getElementsByClassName("publ")[0].getElementsByTagName("ul")[0].children[1];
            // console.log(spp);
            if(flag==-1){
                spp.innerHTML="None";
                
            }else if(flag==2){
                spp.innerHTML="B";
                spp.style.backgroundColor="yellow";
                spp.style.color="red";
            }else if(flag==3){
                spp.innerHTML="C";
                spp.style.backgroundColor="yellow";
                spp.style.color="red";
            }else if(flag==1){
                spp.innerHTML="A";
                spp.style.backgroundColor="yellow";
                spp.style.color="red";
            }else if(flag==4){
                spp.innerHTML="A or C";
                spp.style.backgroundColor="yellow";
                spp.style.color="red";
            }
        }
    }
    // console.log("shown already, isthere dom changed?");
}
var a_set = new Set(["http://dblp.uni-trier.de/db/journals/tocs/","http://dblp.uni-trier.de/db/journals/tos/","http://dblp.uni-trier.de/db/journals/tcad/","http://dblp.uni-trier.de/db/journals/tc/index.html","http://dblp.uni-trier.de/db/journals/tpds/","http://dblp.uni-trier.de/db/conf/ppopp/","http://dblp.uni-trier.de/db/conf/fast/","http://dblp.uni-trier.de/db/conf/dac/","http://dblp.uni-trier.de/db/conf/hpca/","http://dblp.uni-trier.de/db/conf/micro/","http://dblp.uni-trier.de/db/conf/sc/","http://dblp.uni-trier.de/db/conf/asplos/","http://dblp.uni-trier.de/db/conf/isca/","http://dblp.uni-trier.de/db/conf/usenix/index.html","http://dblp.uni-trier.de/db/journals/jsac/","http://dblp.uni-trier.de/db/journals/tmc/","http://dblp.uni-trier.de/db/journals/ton/","http://dblp.uni-trier.de/db/conf/sigcomm/index.html","http://dblp.uni-trier.de/db/conf/mobicom/","http://dblp.uni-trier.de/db/conf/infocom/","http://dblp.uni-trier.de/db/conf/nsdi/","http://dblp.uni-trier.de/db/journals/tdsc/","http://dblp.uni-trier.de/db/journals/tifs/","http://dblp.uni-trier.de/db/journals/joc/","http://dblp.uni-trier.de/db/conf/ccs/","http://dblp.uni-trier.de/db/conf/eurocrypt/","http://dblp.uni-trier.de/db/conf/sp/","http://dblp.uni-trier.de/db/conf/crypto/","http://dblp.uni-trier.de/db/conf/uss/","http://dblp.uni-trier.de/db/journals/toplas/","http://dblp.uni-trier.de/db/journals/tosem/","http://dblp.uni-trier.de/db/journals/tse/","http://dblp.uni-trier.de/db/conf/pldi/","http://dblp.uni-trier.de/db/conf/popl/","http://dblp.uni-trier.de/db/conf/sigsoft/","http://dblp.uni-trier.de/db/conf/sosp/","http://dblp.uni-trier.de/db/conf/oopsla/","http://dblp.uni-trier.de/db/conf/kbse/","http://dblp.uni-trier.de/db/conf/icse/","http://dblp.uni-trier.de/db/conf/issta/","http://dblp.uni-trier.de/db/conf/osdi/","http://dblp.uni-trier.de/db/journals/tods/","http://dblp.uni-trier.de/db/journals/tois/","http://dblp.uni-trier.de/db/journals/tkde/","http://dblp.uni-trier.de/db/journals/vldb/","http://dblp.uni-trier.de/db/conf/sigmod/","http://dblp.uni-trier.de/db/conf/kdd/","http://dblp.uni-trier.de/db/conf/icde/","http://dblp.uni-trier.de/db/conf/sigir/","http://dblp.uni-trier.de/db/conf/vldb/","http://dblp.uni-trier.de/db/journals/tit/","http://dblp.uni-trier.de/db/journals/iandc/","http://dblp.uni-trier.de/db/journals/siamcomp/","http://dblp.uni-trier.de/db/conf/stoc/","http://dblp.uni-trier.de/db/conf/soda/","http://dblp.uni-trier.de/db/conf/cav/","http://dblp.uni-trier.de/db/conf/focs/","http://dblp.uni-trier.de/db/conf/lics/","http://dblp.uni-trier.de/db/journals/tog/","http://dblp.uni-trier.de/db/journals/tip/","http://dblp.uni-trier.de/db/journals/tvcg/","http://dblp.uni-trier.de/db/conf/mm/","http://dblp.uni-trier.de/db/conf/siggraph/index.html","http://dblp.uni-trier.de/db/conf/vr/","http://dblp.uni-trier.de/db/conf/visualization/index.html","http://dblp.uni-trier.de/db/journals/ai/","http://dblp.uni-trier.de/db/journals/pami/","http://dblp.uni-trier.de/db/journals/ijcv/","http://dblp.uni-trier.de/db/journals/jmlr/","http://dblp.uni-trier.de/db/conf/aaai/","http://dblp.uni-trier.de/db/conf/nips/","http://dblp.uni-trier.de/db/conf/acl/","http://dblp.uni-trier.de/db/conf/cvpr/","http://dblp.uni-trier.de/db/conf/iccv/","http://dblp.uni-trier.de/db/conf/icml/","http://dblp.uni-trier.de/db/conf/ijcai/","http://dblp.uni-trier.de/db/journals/tochi/","http://dblp.uni-trier.de/db/journals/ijmms/","http://dblp.uni-trier.de/db/conf/cscw","http://dblp.uni-trier.de/db/conf/chi","http://dblp.uni-trier.de/db/conf/huc/","http://dblp.uni-trier.de/db/journals/jacm/","http://dblp.uni-trier.de/db/journals/pieee/","http://dblp.uni-trier.de/db/conf/www/","http://dblp.uni-trier.de/db/conf/rtss/"]);
var b_set = new Set(["http://dblp.uni-trier.de/db/journals/taco/","http://dblp.uni-trier.de/db/journals/taas/","http://dblp.uni-trier.de/db/journals/todaes/","http://dblp.uni-trier.de/db/journals/tecs/","http://dblp.uni-trier.de/db/journals/trets/","http://dblp.uni-trier.de/db/journals/tvlsi/","http://dblp.uni-trier.de/db/journals/jpdc/","http://dblp.uni-trier.de/db/journals/jsa/","http://dblp.uni-trier.de/db/conf/parco/","http://www.journals.elsevier.com/performance-evaluation/","http://dblp.uni-trier.de/db/conf/cloud/","http://dblp.uni-trier.de/db/conf/spaa/","http://dblp.uni-trier.de/db/conf/podc/","http://dblp.uni-trier.de/db/conf/fpga/","http://dblp.uni-trier.de/db/conf/cgo/","http://dblp.uni-trier.de/db/conf/date/","http://dblp.uni-trier.de/db/conf/eurosys/","http://www.hotchips.org/","http://dblp.uni-trier.de/db/conf/cluster/","http://dblp.uni-trier.de/db/conf/iccd/","http://dblp.uni-trier.de/db/conf/iccad/","http://dblp.uni-trier.de/db/conf/icdcs/","http://dblp.uni-trier.de/db/conf/codes/index.html","http://dblp.uni-trier.de/db/conf/hipeac/","http://dblp.uni-trier.de/db/conf/sigmetrics/","http://dblp.uni-trier.de/db/conf/IEEEpact/","http://dblp.uni-trier.de/db/conf/icpp/","http://dblp.uni-trier.de/db/conf/ics/","http://dblp.uni-trier.de/db/conf/vee/","http://dblp.uni-trier.de/db/conf/ipps/","http://dblp.uni-trier.de/db/conf/performance/","http://dblp.uni-trier.de/db/conf/hpdc/","http://dblp.uni-trier.de/db/conf/itc/","http://dblp.uni-trier.de/db/conf/lisa/","http://dblp.uni-trier.de/db/conf/mss/","http://dblp.uni-trier.de/db/conf/rtas/","http://dblp.uni-trier.de/db/journals/toit/","http://dblp.uni-trier.de/db/journals/tomccap/","http://dblp.uni-trier.de/db/journals/tosn/","http://dblp.uni-trier.de/db/journals/cn/","http://dblp.uni-trier.de/db/journals/tcom/","http://dblp.uni-trier.de/db/journals/twc/","http://dblp.uni-trier.de/db/conf/sensys/","http://dblp.uni-trier.de/db/conf/conext/","http://dblp.uni-trier.de/db/conf/secon/","http://dblp.uni-trier.de/db/conf/ipsn/","http://dblp.uni-trier.de/db/conf/mobisys/","http://dblp.uni-trier.de/db/conf/icnp/","http://dblp.uni-trier.de/db/conf/mobihoc/","http://dblp.uni-trier.de/db/conf/nossdav/","http://dblp.uni-trier.de/db/conf/iwqos/","http://dblp.uni-trier.de/db/conf/imc/","http://tops.acm.org/","http://dblp.uni-trier.de/db/journals/compsec/","http://dblp.uni-trier.de/db/journals/dcc/","http://dblp.uni-trier.de/db/journals/jcs/","http://dblp.uni-trier.de/db/conf/acsac/","http://dblp.uni-trier.de/db/conf/asiacrypt/","http://dblp.uni-trier.de/db/conf/esorics/","http://dblp.uni-trier.de/db/conf/fse/","http://dblp.uni-trier.de/db/conf/csfw/","http://dblp.uni-trier.de/db/conf/srds/","http://dblp.uni-trier.de/db/conf/ches/","http://dblp.uni-trier.de/db/conf/dsn/","http://dblp.uni-trier.de/db/conf/raid/","http://dblp.uni-trier.de/db/conf/pkc/","http://dblp.uni-trier.de/db/conf/ndss/","http://dblp.uni-trier.de/db/conf/tcc/","http://dblp.uni-trier.de/db/journals/ase/","http://dblp.uni-trier.de/db/journals/ese/","http://dblp.uni-trier.de/db/journals/tsc/","http://dblp.uni-trier.de/db/journals/iet-sen/","http://dblp.uni-trier.de/db/journals/infsof/index.html","http://dblp.uni-trier.de/db/journals/jfp/","http://dblp.uni-trier.de/db/journals/smr/","http://dblp.uni-trier.de/db/journals/jss/","http://dblp.uni-trier.de/db/journals/re/","http://dblp.uni-trier.de/db/journals/scp/","http://dblp.uni-trier.de/db/journals/sosym/","http://dblp.uni-trier.de/db/journals/stvr/index.html","http://dblp.uni-trier.de/db/journals/spe/","http://dblp.uni-trier.de/db/conf/ecoop/","http://dblp.uni-trier.de/db/conf/etaps/","http://dblp.uni-trier.de/db/conf/iwpc/","http://dblp.uni-trier.de/db/conf/re/","http://dblp.uni-trier.de/db/conf/caise/","http://dblp.uni-trier.de/db/conf/icfp/","http://dblp.uni-trier.de/db/conf/lctrts/","http://dblp.uni-trier.de/db/conf/models/","http://dblp.uni-trier.de/db/conf/cp/","http://dblp.uni-trier.de/db/conf/icsoc/","http://dblp.uni-trier.de/db/conf/wcre/","http://dblp.uni-trier.de/db/conf/icsm/","http://dblp.uni-trier.de/db/conf/vmcai/","http://dblp.uni-trier.de/db/conf/icws/","http://dblp.uni-trier.de/db/conf/middleware/","http://dblp.uni-trier.de/db/conf/sas/","http://dblp.uni-trier.de/db/conf/esem/","http://dblp.uni-trier.de/db/conf/fm/","http://dblp.uni-trier.de/db/conf/issre/","http://dblp.uni-trier.de/db/conf/hotos/","http://dblp.uni-trier.de/db/journals/tkdd/","http://dblp.uni-trier.de/db/journals/tweb/","http://dblp.uni-trier.de/db/journals/aei/","http://dblp.uni-trier.de/db/journals/dke/","http://dblp.uni-trier.de/db/journals/datamine/","http://dblp.uni-trier.de/db/journals/ejis/","http://dblp.uni-trier.de/db/journals/geoinformatica/","http://dblp.uni-trier.de/db/journals/ipm/","http://dblp.uni-trier.de/db/journals/isci/","http://dblp.uni-trier.de/db/journals/is/","http://dblp.uni-trier.de/db/journals/jasis/","http://dblp.uni-trier.de/db/journals/ws/","http://dblp.uni-trier.de/db/journals/kais/","http://dblp.uni-trier.de/db/conf/cikm/","http://dblp.uni-trier.de/db/conf/wsdm/","http://dblp.uni-trier.de/db/conf/pods/","http://dblp.uni-trier.de/db/conf/dasfaa/","http://dblp.uni-trier.de/db/conf/ecml/","http://dblp.uni-trier.de/db/conf/pkdd/","http://dblp.uni-trier.de/db/conf/semweb/","http://dblp.uni-trier.de/db/conf/icdm/","http://dblp.uni-trier.de/db/conf/icdt/","http://dblp.uni-trier.de/db/conf/edbt/","http://dblp.uni-trier.de/db/conf/cidr/","http://dblp.uni-trier.de/db/conf/sdm/","http://dblp.uni-trier.de/db/journals/talg/","http://dblp.uni-trier.de/db/journals/tocl/","http://dblp.uni-trier.de/db/journals/toms/","http://dblp.uni-trier.de/db/journals/algorithmica/","http://dblp.uni-trier.de/db/journals/cc/","http://dblp.uni-trier.de/db/journals/fac/","http://dblp.uni-trier.de/db/journals/fmsd/","http://dblp.uni-trier.de/db/journals/informs/","http://dblp.uni-trier.de/db/journals/jcss/","http://dblp.uni-trier.de/db/journals/jgo/","http://dblp.uni-trier.de/db/journals/jsc/","http://dblp.uni-trier.de/db/journals/mscs/","http://dblp.uni-trier.de/db/journals/tcs/","http://dblp.uni-trier.de/db/conf/compgeom/","http://dblp.uni-trier.de/db/conf/esa/","http://dblp.uni-trier.de/db/conf/coco/","http://dblp.uni-trier.de/db/conf/icalp/","http://dblp.uni-trier.de/db/conf/cade/","http://dblp.uni-trier.de/db/conf/concur/","http://dblp.uni-trier.de/db/conf/hybrid/","http://dblp.uni-trier.de/db/conf/sat/","http://dblp.uni-trier.de/db/journals/tomccap/","http://dblp.uni-trier.de/db/journals/cagd/","http://dblp.uni-trier.de/db/journals/cgf/","http://dblp.uni-trier.de/db/journals/cad/","http://dblp.uni-trier.de/db/journals/cvgip/","http://dblp.uni-trier.de/db/journals/tcsv/","http://dblp.uni-trier.de/db/journals/tmm/","http://scitation.aip.org/content/asa/journal/jasa","http://dblp.uni-trier.de/db/journals/siamis/","http://dblp.uni-trier.de/db/journals/speech/","http://dblp.uni-trier.de/db/conf/mir/","http://dblp.uni-trier.de/db/conf/si3d/","http://dblp.uni-trier.de/db/conf/sca/index.html","http://dblp.uni-trier.de/db/conf/dcc/","http://dblp.uni-trier.de/db/conf/eurographics/","http://dblp.uni-trier.de/db/conf/vissym/","http://dblp.uni-trier.de/db/conf/sgp/","http://dblp.uni-trier.de/db/conf/rt/","http://dblp.uni-trier.de/db/conf/icassp/","http://dblp.uni-trier.de/db/conf/icmcs/","http://dblp.uni-trier.de/db/conf/ismar/","http://dblp.uni-trier.de/db/conf/pg/index.html","http://dblp.uni-trier.de/db/conf/sma/","http://dblp.uni-trier.de/db/journals/tap/","http://dblp.uni-trier.de/db/journals/tslp/","http://dblp.uni-trier.de/db/journals/aamas/","http://dblp.uni-trier.de/db/journals/coling/","http://dblp.uni-trier.de/db/journals/cviu/","http://dblp.uni-trier.de/db/journals/dke/index.html","http://dblp.uni-trier.de/db/journals/ec/","http://dblp.uni-trier.de/db/journals/taffco/","http://dblp.uni-trier.de/db/journals/taslp/","http://dblp.uni-trier.de/db/journals/tcyb/","http://dblp.uni-trier.de/db/journals/tec/","http://dblp.uni-trier.de/db/journals/tfs/","http://dblp.uni-trier.de/db/journals/tnn/","http://dblp.uni-trier.de/db/journals/ijar/","http://dblp.uni-trier.de/db/journals/jair/index.html","http://dblp.uni-trier.de/db/journals/jar/","http://jslhr.pubs.asha.org/","http://dblp.uni-trier.de/db/journals/ml/","http://dblp.uni-trier.de/db/journals/neco/","http://dblp.uni-trier.de/db/journals/nn/","http://dblp.uni-trier.de/db/conf/par/","http://dblp.uni-trier.de/db/conf/colt/","http://dblp.uni-trier.de/db/conf/emnlp/","http://dblp.uni-trier.de/db/conf/ecai/","http://dblp.uni-trier.de/db/conf/eccv/","http://dblp.uni-trier.de/db/conf/icra/","http://dblp.uni-trier.de/db/conf/aips/","http://dblp.uni-trier.de/db/conf/iccbr/","http://dblp.uni-trier.de/db/conf/coling/","http://dblp.uni-trier.de/db/conf/kr/","http://dblp.uni-trier.de/db/conf/uai/","http://dblp.uni-trier.de/db/conf/atal/index.html","http://dblp.uni-trier.de/db/conf/ppsn/","http://dblp.uni-trier.de/db/journals/cscw/","http://dblp.uni-trier.de/db/journals/hhci/","http://dblp.uni-trier.de/db/journals/thms/","http://dblp.uni-trier.de/db/journals/iwc/","http://dblp.uni-trier.de/db/journals/ijhci/","http://dblp.uni-trier.de/db/journals/umuai/","http://dblp.uni-trier.de/db/conf/group/","http://dblp.uni-trier.de/db/conf/iui/","http://dblp.uni-trier.de/db/conf/tabletop/","http://dblp.uni-trier.de/db/conf/uist/","http://dblp.uni-trier.de/db/conf/ecscw/","http://dblp.uni-trier.de/db/conf/percom/","http://dblp.uni-trier.de/db/conf/mhci/","http://dblp.uni-trier.de/db/journals/bioinformatics/","http://dblp.uni-trier.de/db/journals/bib/","http://www.journals.elsevier.com/cognition/","http://dblp.uni-trier.de/db/journals/tase/","http://dblp.uni-trier.de/db/journals/tgrs/","http://dblp.uni-trier.de/db/journals/tits/","http://dblp.uni-trier.de/db/journals/tmi/","http://dblp.uni-trier.de/db/journals/trob/","http://dblp.uni-trier.de/db/journals/tcbb/","http://dblp.uni-trier.de/db/journals/jcst/","http://dblp.uni-trier.de/db/journals/jamia/","http://dblp.uni-trier.de/db/journals/ploscb/","http://dblp.uni-trier.de/db/journals/chinaf/","http://dblp.uni-trier.de/db/journals/cj/","http://dblp.uni-trier.de/db/journals/wwwj/","http://dblp.uni-trier.de/db/conf/cogsci/","http://dblp.uni-trier.de/db/conf/bibm/","http://dblp.uni-trier.de/db/conf/emsoft/","http://www.iscb.org/about-ismb","http://dblp.uni-trier.de/db/conf/recomb/"]);
var c_set = new Set(["http://dblp.uni-trier.de/db/journals/jetc/","http://dblp.uni-trier.de/db/journals/concurrency/","http://dblp.uni-trier.de/db/journals/dc/","http://dblp.uni-trier.de/db/journals/fgcs/","http://dblp.uni-trier.de/db/journals/tcc/","http://dblp.uni-trier.de/db/journals/integration/","http://link.springer.com/journal/108","http://dblp.uni-trier.de/db/journals/grid/","http://dblp.uni-trier.de/db/journals/mam/","http://dblp.uni-trier.de/db/journals/rts/","http://dblp.uni-trier.de/db/journals/tjs/","http://dblp.uni-trier.de/db/conf/cf","http://dblp.uni-trier.de/db/conf/systor/index.html","http://dblp.uni-trier.de/db/conf/nocs","http://dblp.uni-trier.de/db/conf/asap","http://dblp.uni-trier.de/db/conf/aspdac","http://dblp.uni-trier.de/db/conf/europar/","http://dblp.uni-trier.de/db/conf/ets/","http://dblp.uni-trier.de/db/conf/fpl/","http://dblp.uni-trier.de/db/conf/fccm/","http://dblp.uni-trier.de/db/conf/glvlsi/","http://dblp.uni-trier.de/db/conf/ats/","http://dblp.uni-trier.de/db/conf/hpcc/","http://dblp.uni-trier.de/db/conf/hipc/index.html","http://dblp.uni-trier.de/db/conf/mascots/","http://dblp.uni-trier.de/db/conf/ispa/","http://dblp.uni-trier.de/db/conf/ccgrid/","http://dblp.uni-trier.de/db/conf/npc/","http://dblp.uni-trier.de/db/conf/ica3pp/","http://dblp.uni-trier.de/db/conf/cases/index.html","http://dblp.uni-trier.de/db/conf/fpt/","http://dblp.uni-trier.de/db/conf/icpads/","http://dblp.uni-trier.de/db/conf/iscas/","http://dblp.uni-trier.de/db/conf/islped/","http://dblp.uni-trier.de/db/conf/ispd/","http://dblp.uni-trier.de/db/conf/hoti/","http://dblp.uni-trier.de/db/conf/vts/","http://dblp.uni-trier.de/db/journals/adhoc/","http://dblp.uni-trier.de/db/journals/comcom/","http://dblp.uni-trier.de/db/journals/tnsm/","http://dblp.uni-trier.de/db/journals/iet-com/","http://dblp.uni-trier.de/db/journals/jnca/","http://dblp.uni-trier.de/db/journals/monet/","http://dblp.uni-trier.de/db/journals/networks/","http://dblp.uni-trier.de/db/journals/ppna/","http://dblp.uni-trier.de/db/journals/wicomm/","http://dblp.uni-trier.de/db/journals/winet/","http://dblp.uni-trier.de/db/conf/ancs/","http://dblp.uni-trier.de/db/conf/apnoms/","http://dblp.uni-trier.de/db/conf/forte/","http://dblp.uni-trier.de/db/conf/lcn/","http://dblp.uni-trier.de/db/conf/globecom/","http://dblp.uni-trier.de/db/conf/icc/","http://dblp.uni-trier.de/db/conf/icccn/","http://dblp.uni-trier.de/db/conf/mass/index.html","http://dblp.uni-trier.de/db/conf/p2p/","http://dblp.uni-trier.de/db/conf/ipccc/","http://dblp.uni-trier.de/db/conf/wowmom/","http://dblp.uni-trier.de/db/conf/iscc/","http://dblp.uni-trier.de/db/conf/wcnc/","http://dblp.uni-","http://dblp.uni-trier.de/db/conf/im/index.html","http://dblp.uni-trier.de/db/conf/msn/","http://dblp.uni-trier.de/db/conf/mswim/","http://dblp.uni-trier.de/db/conf/wasa/","http://dblp.uni-trier.de/db/conf/hotnets/","http://www.journals.elsevier.com/computer-law-and-","http://dblp.uni-trier.de/db/journals/ejisec/","http://dblp.uni-trier.de/db/journals/iet-ifs/","http://dblp.uni-trier.de/db/journals/imcs/","http://dblp.uni-trier.de/db/journals/ijics/","http://dblp.uni-trier.de/db/journals/ijisp/","http://dblp.uni-trier.de/db/journals/istr/","http://dblp.uni-trier.de/db/journals/scn/","http://dblp.uni-trier.de/db/conf/wisec/","http://dblp.uni-trier.de/db/conf/sacmat/","http://dblp.uni-trier.de/db/conf/drm/","http://dblp.uni-trier.de/db/conf/ih/","http://dblp.uni-trier.de/db/conf/acns/","http://dblp.uni-trier.de/db/conf/ccs/","http://dblp.uni-trier.de/db/conf/acisp/","http://dblp.uni-trier.de/db/conf/ctrsa/","http://dblp.uni-trier.de/db/conf/dimva/","http://dblp.uni-trier.de/db/conf/dfrws/","http://dblp.uni-trier.de/db/conf/fc/","http://dblp.uni-trier.de/db/conf/trustcom/","http://dblp.uni-trier.de/db/conf/sec/","*http://www.ifip119.org/Conferences/","http://dblp.uni-trier.de/db/conf/isw/","http://dblp.uni-trier.de/db/conf/icdf2c/","http://dblp.uni-trier.de/db/conf/icics/","http://dblp.uni-","http://dblp.uni-trier.de/db/conf/nspw/","http://dblp.uni-trier.de/db/conf/pam/","http://dblp.uni-trier.de/db/conf/pet/","http://dblp.uni-trier.de/db/conf/sacrypt/","http://dblp.uni-trier.de/db/conf/soups/","*http://www.usenix.org/events/","http://dblp.uni-trier.de/db/journals/cl/index.html","http://dblp.uni-trier.de/db/journals/ijseke/index.html","http://dblp.uni-trier.de/db/journals/sttt/","http://dblp.uni-trier.de/db/journals/jlp/jlap.html","http://dblp.uni-trier.de/db/journals/jwe/","http://dblp.uni-trier.de/db/journals/soca/","http://dblp.uni-trier.de/db/journals/sqj/","http://dblp.uni-trier.de/db/journals/tplp/","http://dblp.uni-trier.de/db/conf/pepm/","http://dblp.uni-trier.de/db/conf/paste/","http://dblp.uni-trier.de/db/conf/aplas/","http://dblp.uni-trier.de/db/conf/apsec/","http://dblp.uni-trier.de/db/conf/ease/","http://dblp.uni-trier.de/db/conf/iceccs/","http://dblp.uni-trier.de/db/conf/icst/","http://dblp.uni-trier.de/db/conf/ispass/","http://dblp.uni-trier.de/db/conf/scam/","http://dblp.uni-trier.de/db/conf/compsac/","http://dblp.uni-trier.de/db/conf/icfem/","http://dblp.uni-trier.de/db/conf/tools/index.html","http://dblp.uni-trier.de/db/conf/IEEEscc/","http://dblp.uni-trier.de/db/conf/ispw/","http://dblp.uni-trier.de/db/conf/seke/","http://dblp.uni-trier.de/db/conf/qrs/","http://dblp.uni-trier.de/db/conf/icsr/","http://dblp.uni-trier.de/db/conf/icwe/","http://dblp.uni-trier.de/db/conf/spin/index.html","http://dblp.uni-trier.de/db/conf/atva/","http://dblp.uni-trier.de/db/conf/lopstr/","http://dblp.uni-trier.de/db/conf/tase/","http://dblp.uni-trier.de/db/conf/msr/","http://dblp.uni-trier.de/db/conf/refsq/","http://dblp.uni-trier.de/db/conf/wicsa/","http://dblp.uni-trier.de/db/journals/dpd/","http://dblp.uni-trier.de/db/journals/iam/","http://dblp.uni-trier.de/db/journals/ipl/","http://dblp.uni-trier.de/db/journals/ir/","http://dblp.uni-trier.de/db/journals/ijcis/","http://dblp.uni-trier.de/db/journals/gis/","http://dblp.uni-trier.de/db/journals/ijis/","http://dblp.uni-trier.de/db/journals/ijkm/","http://dblp.uni-trier.de/db/journals/ijswis/","http://dblp.uni-trier.de/db/journals/jcis/","http://dblp.uni-trier.de/db/journals/jdm/","http://www.tandfonline.com/loi/ugit20#.Vnv35pN97rI","http://dblp.uni-trier.de/db/journals/jiis/","http://dblp.uni-trier.de/db/journals/jsis/","http://dblp.uni-trier.de/db/conf/apweb/","http://dblp.uni-trier.de/db/conf/dexa/","http://dblp.uni-trier.de/db/conf/ecir/","http://dblp.uni-trier.de/db/conf/esws/","http://dblp.uni-trier.de/db/conf/webdb/","http://dblp.uni-trier.de/db/conf/er/","http://dblp.uni-trier.de/db/conf/mdm/","http://dblp.uni-trier.de/db/conf/ssdbm/","http://dblp.uni-trier.de/db/conf/waim/","http://dblp.uni-trier.de/db/conf/ssd/","http://dblp.uni-trier.de/db/conf/pakdd/","http://dblp.uni-trier.de/db/conf/wise/","http://dblp.uni-trier.de/db/journals/acta/","http://dblp.uni-trier.de/db/journals/apal/","http://dblp.uni-trier.de/db/journals/dam/","http://dblp.uni-trier.de/db/journals/fuin/","http://dblp.uni-trier.de/db/journals/lisp/","http://dblp.uni-trier.de/db/journals/ipl/","http://dblp.uni-trier.de/db/journals/jc/","http://dblp.uni-trier.de/db/journals/logcom/","http://dblp.uni-trier.de/db/journals/jsyml/","http://dblp.uni-trier.de/db/journals/lmcs/","http://dblp.uni-trier.de/db/journals/siamdm/","http://dblp.uni-trier.de/db/journals/mst/","http://dblp.uni-trier.de/db/conf/csl/","http://dblp.uni-trier.de/db/conf/fmcad/","http://dblp.uni-trier.de/db/conf/fsttcs/","http://dblp.uni-trier.de/db/conf/dsaa/","http://dblp.uni-trier.de/db/conf/ictac/","http://dblp.uni-trier.de/db/conf/ipco/","http://dblp.uni-trier.de/db/conf/rta/","http://dblp.uni-trier.de/db/conf/isaac/","http://dblp.uni-trier.de/db/conf/mfcs/","http://dblp.uni-trier.de/db/conf/stacs/","http://dblp.uni-trier.de/db/journals/comgeo/","http://onlinelibrary.wiley.com/journal/10.1002/(ISSN)154","http://dblp.uni-trier.de/db/journals/cg/","http://dblp.uni-trier.de/db/journals/dcg/","http://dblp.uni-trier.de/db/journals/spl/","http://dblp.uni-trier.de/db/journals/iet-ipr/","http://dblp.uni-trier.de/db/journals/jvcir/","http://dblp.uni-trier.de/db/journals/mms/","http://dblp.uni-trier.de/db/journals/mta/","http://dblp.uni-trier.de/db/journals/sigpro/","http://dblp.uni-trier.de/db/journals/spic/","http://dblp.uni-trier.de/db/journals/vc/","http://dblp2.uni-trier.de/db/conf/vrst/","http://dblp.uni-trier.de/db/conf/ca/","http://dblp.uni-trier.de/db/conf/cgi/","http://dblp.uni-trier.de/db/conf/interspeech/index.html","http://dblp.uni-trier.de/db/conf/gmp/","http://dblp.uni-trier.de/db/conf/apvis/","http://dblp.uni-trier.de/db/conf/3dim/","http://dblp.uni-trier.de/db/conf/cadgraphics/","http://dblp.uni-trier.de/db/conf/icip/","http://dblp.uni-trier.de/db/conf/mmm/index.html","http://dblp.uni-trier.de/db/conf/pcm/","http://dblp.uni-trier.de/db/conf/smi/","http://dblp.uni-trier.de/db/journals/talip/","http://dblp.uni-trier.de/db/journals/apin/","http://dblp.uni-trier.de/db/journals/artmed/","http://dblp.uni-trier.de/db/journals/alife/","http://dblp.uni-trier.de/db/journals/ci/","http://dblp.uni-trier.de/db/journals/csl/","http://dblp.uni-trier.de/db/journals/connection/","http://dblp.uni-trier.de/db/journals/dss/","http://dblp.uni-trier.de/db/journals/eaai/","http://dblp.uni-trier.de/db/journals/es/","http://dblp.uni-trier.de/db/journals/eswa/","http://dblp.uni-trier.de/db/journals/fss/","http://dblp.uni-trier.de/db/journals/tciaig/","http://digital-library.theiet.org/content/journals/iet-cvi","http://digital-library.theiet.org/content/journals/iet-spr","http://dblp.uni-trier.de/db/journals/ivc/","http://dblp.uni-trier.de/db/journals/ida/","http://dblp.uni-trier.de/db/journals/ijcia/","http://dblp.uni-trier.de/db/journals/ijis/","http://dblp.uni-trier.de/db/journals/ijns/","http://dblp.uni-trier.de/db/journals/ijprai/","http://dblp.uni-trier.de/db/journals/ijufks/","http://dblp.uni-trier.de/db/journals/ijdar/","http://dblp.uni-trier.de/db/journals/jetai/","http://dblp.uni-trier.de/db/journals/kbs/","http://dblp.uni-trier.de/db/journals/mt/","http://dblp.uni-trier.de/db/journals/mva/","http://dblp.uni-trier.de/db/journals/nc/","http://dblp.uni-trier.de/db/journals/nle/","http://dblp.uni-trier.de/db/journals/nca/","http://dblp.uni-trier.de/db/journals/npl/","http://dblp.uni-trier.de/db/journals/ijon/","http://dblp.uni-trier.de/db/journals/paa/","http://dblp.uni-trier.de/db/journals/prl/","http://dblp.uni-trier.de/db/journals/soco/","http://dblp.uni-trier.de/db/journals/wias/","http://dblp.uni-trier.de/db/conf/aistats/","http://dblp.uni-trier.de/db/conf/accv/","http://dblp.uni-trier.de/db/conf/acml/","http://dblp.uni-trier.de/db/conf/bmvc/","http://dblp.uni-trier.de/db/conf/nlpcc/","http://dblp.uni-trier.de/db/conf/conll","http://dblp.uni-trier.de/db/conf/gecco/","http://dblp.uni-trier.de/db/conf/ictai/","http://dblp.uni-trier.de/db/conf/iros/","http://dblp.uni-trier.de/db/conf/alt/","http://dblp.uni-trier.de/db/conf/icann/","http://dblp.uni-trier.de/db/conf/fgr/","http://dblp.uni-trier.de/db/conf/icdar/","http://dblp.uni-trier.de/db/conf/ilp/","http://dblp.uni-trier.de/db/conf/ksem/","http://dblp.uni-trier.de/db/conf/iconip/","http://dblp.uni-trier.de/db/conf/icpr/","http://dblp.uni-trier.de/db/conf/icb/","http://dblp.uni-trier.de/db/conf/ijcnn/","http://dblp.uni-trier.de/db/conf/pricai/","http://dblp.uni-trier.de/db/conf/naacl/","http://dblp.uni-trier.de/db/journals/behaviourIT/","http://dblp.uni-trier.de/db/journals/puc/","http://dblp.uni-trier.de/db/journals/percom/","http://dblp.uni-trier.de/db/conf/ACMdis","http://dblp.uni-trier.de/db/conf/icmi/","http://dblp.uni-trier.de/db/conf/assets","http://dblp.uni-trier.de/db/conf/graphicsinterface/","http://dblp.uni-trier.de/db/conf/uic/","http://dblp.uni-trier.de/db/conf/haptics/","http://dblp.uni-trier.de/db/conf/interact/","http://dblp.uni-trier.de/db/conf/acmidc/","http://collaboratecom.org","http://dblp.uni-trier.de/db/conf/cscwd/","http://dblp.uni-trier.de/db/conf/coopis/","http://dblp.uni-trier.de/db/conf/mobiquitous/","http://dblp.uni-trier.de/db/conf/avi/","http://dblp.uni-trier.de/db/journals/bmcbi/","http://dblp.uni-trier.de/db/journals/cas/","http://dblp.uni-trier.de/db/journals/fcsc/","http://dblp.uni-trier.de/db/journals/lgrs/","http://dblp.uni-trier.de/db/journals/titb/","http://dblp.uni-trier.de/db/journals/tbd/","http://digital-library.theiet.org/content/journals/iet-its","http://dblp.uni-trier.de/db/journals/jbi/","http://dblp.uni-trier.de/db/journals/mia/","http://dblp.uni-trier.de/db/conf/amia/","http://dblp.uni-trier.de/db/conf/apbc/","http://dblp.uni-trier.de/db/conf/bigdataconf/","http://dblp.uni-trier.de/db/conf/IEEEcloud/","http://dblp.uni-trier.de/db/conf/smc/","http://dblp.uni-trier.de/db/conf/cosit/","http://dblp.uni-trier.de/db/conf/isbra/"]);

var tmpS = new Set([]);
var plag=0;
function getDeg(){
    if(document.readyState=="complete"){
        try{
            var pub_list = document.getElementsByClassName("publ-list")[0];
            var ll_list = pub_list.children;
            var index = 0;
            var t = plag ;
            // console.log("ll_list's length="+ll_list.length);
            while(index<5){
                if(t<ll_list.length){
                    if(t==ll_list.length-1){
                        repairHTML();
                    }
                    if(ll_list[t].getAttribute("class")!="year"){
                        index = index + 1;
                        // console.log("t:"+t);
                        CCFshow(ll_list[t]);
                        // tmpS.add(i);
                    }
                }else{
                    break;
                }
                t++;
            }
            plag = t;
        }catch(e){

        }
    }
    setTimeout("getDeg()",200);
}
function repairHTML(){
    // console.log("repair HTML");
    var pub_list = document.getElementsByClassName("publ-list")[0];
    var ll_list = pub_list.children;
    for(k=0;k<ll_list.length;k++){
        if(ll_list[k].getAttribute("class")!="year"){
            var sppt = li.getElementsByClassName("publ")[0].getElementsByTagName("ul")[0].children[1];
            if(sppt.innerHTML=="None"||sppt.innerHTML=="A"||sppt.innerHTML=="B"||sppt.innerHTML=="C"){
                
            }else{
                CCFshow(ll_list[k]);
            }
        }
    }
}
document.onreadystatechange = function getTr(){
    if(document.readyState=="complete"){
        console.log("——————————————");
        console.log("Complete");
        console.log("——————————————");
        setTimeout("getDeg()",2000);
        // getDeg();
    }
} 
var form_f = document.getElementById("completesearch-form");
form_f.onsubmit = function(){
    location.reload();
    t=0;
    plag=0;
    // console.log("re submitted");
}


