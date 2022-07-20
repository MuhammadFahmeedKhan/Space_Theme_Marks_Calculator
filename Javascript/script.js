let eng = document.getElementById('eng');
let urdu = document.getElementById('urdu');
let maths = document.getElementById('maths');
let sci = document.getElementById('sci');
let comp = document.getElementById('comp');
let isl = document.getElementById('isl');

let e_alt = document.getElementById('e_alt');
let u_alt = document.getElementById('u_alt');
let m_alt = document.getElementById('m_alt');
let s_alt = document.getElementById('s_alt');
let c_alt = document.getElementById('c_alt');
let i_alt = document.getElementById('i_alt');

let eng_show = document.getElementById('eng_show');
let urdu_show = document.getElementById('urdu_show');
let maths_show = document.getElementById('maths_show');
let sci_show = document.getElementById('sci_show');
let comp_show = document.getElementById('comp_show');
let isl_show = document.getElementById('isl_show');

let obt_show = document.getElementById('obt_show');
let per_show = document.getElementById('per_show');
let grade_show = document.getElementById('grade_show');
let status_show = document.getElementById('status_show');

function sub(){
    if(eng.value==""){
        e_alt.innerHTML = "Value Must be Required";  
        setTimeout(()=>{
        e_alt.innerHTML = "";  
        },3000)
        obt=="";
    }
    else if(urdu.value==""){
        u_alt.innerHTML = "Value Must be Required";  
        setTimeout(()=>{
        u_alt.innerHTML = "";  
        },3000)
        obt=="";
    }
    else if(maths.value==""){
        m_alt.innerHTML = "Value Must be Required";  
        setTimeout(()=>{
        m_alt.innerHTML = "";  
        },3000)
        obt=="";
    }
    else if(sci.value==""){
        s_alt.innerHTML = "Value Must be Required";  
        setTimeout(()=>{
        s_alt.innerHTML = "";  
        },3000)
        obt=="";
    }
    else if(comp.value==""){
        c_alt.innerHTML = "Value Must be Required";  
        setTimeout(()=>{
        c_alt.innerHTML = "";  
        },3000)
        obt=="";
    }
    else if(isl.value==""){
        i_alt.innerHTML = "Value Must be Required";  
        setTimeout(()=>{
        i_alt.innerHTML = "";  
        },3000)
        obt=="";
    }
    else if(eng.value>100){
        e_alt.innerHTML = "Value Must be Less than or Equal to 100";  
        setTimeout(()=>{
        e_alt.innerHTML = "";  
        },3000)
        obt=="";
    }
    else if(urdu.value>100){
        u_alt.innerHTML = "Value Must be Less than or Equal to 100";  
        setTimeout(()=>{
        u_alt.innerHTML = "";  
        },3000)
        obt=="";
    }
    else if(maths.value>100){
        m_alt.innerHTML = "Value Must be Less than or Equal to 100";  
        setTimeout(()=>{
        m_alt.innerHTML = "";  
        },3000)
        obt=="";
    }
    else if(sci.value>100){
        s_alt.innerHTML = "Value Must be Less than or Equal to 100";  
        setTimeout(()=>{
        s_alt.innerHTML = "";  
        },3000)
        obt=="";
    }
    else if(comp.value>100){
        c_alt.innerHTML = "Value Must be Less than or Equal to 100";  
        setTimeout(()=>{
        c_alt.innerHTML = "";  
        },3000)
        obt=="";
    }
    else if(isl.value>100){
        i_alt.innerHTML = "Value Must be Less than or Equal to 100";  
        setTimeout(()=>{
        i_alt.innerHTML = "";  
        },3000)
        obt=="";
    }
    if(eng.value<40){
        document.getElementById('eng_show').style.color="red";
    }
    if(urdu.value<40){
        document.getElementById('urdu_show').style.color="red";
    }
    if(maths.value<40){
        document.getElementById('maths_show').style.color="red";
    }
    if(sci.value<40){
        document.getElementById('sci_show').style.color="red";
    }
    if(comp.value<40){
        document.getElementById('comp_show').style.color="red";
    }
    if(isl.value<40){
        document.getElementById('isl_show').style.color="red";
    }
    
    eng_show.textContent=eng.value;
    urdu_show.textContent=urdu.value;
    maths_show.textContent=maths.value;
    sci_show.textContent=sci.value;
    comp_show.textContent=comp.value;
    isl_show.textContent=isl.value;
    
    let obt = obt_show.textContent = parseInt(eng.value) + parseInt(urdu.value) + parseInt(maths.value) + parseInt(sci.value) + parseInt(comp.value) + parseInt(isl.value);
    
    let per = per_show.textContent = Math.round(obt/600*100);

    if(per){
        document.getElementById('per_show').textContent = per + "%";
    }

    if(per>=80 && per<=100){
        grade_show.textContent = "A-1";
    }
    else if(per>=70 && per<80){
        grade_show.textContent = "A";
    }
    else if(per>=60 && per<70){
        grade_show.textContent = "B";
    }
    else if(per>=50 && per<60){
        grade_show.textContent = "C";
    }
    else if(per<50){
        grade_show.textContent = "Poor";
    }

    if(eng.value<40 || urdu.value<40 || maths.value<40 || sci.value<40 || comp.value<40 || isl.value<40){
        status_show.textContent = "You are Failed"
        document.getElementById('status_show').style.color = "red";
        grade_show.textContent = "";
        per_show.textContent = "";
    }
    else{
        status_show.textContent = "You are Passed"
    }
}
function res(){
    if(eng.value || urdu.value || maths.value || sci.value || comp.value || isl.value){
        setTimeout(() => {
            eng.value="";
            urdu.value="";
            maths.value="";
            sci.value="";
            comp.value="";
            isl.value="";
            eng_show.textContent="";
            urdu_show.textContent="";
            maths_show.textContent="";
            sci_show.textContent="";
            comp_show.textContent="";
            isl_show.textContent="";
            obt_show.textContent="";
            per_show.textContent="";
            grade_show.textContent="";
            status_show.textContent="";
        }, 500);
    }
}
