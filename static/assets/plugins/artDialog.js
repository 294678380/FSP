/*!
 * artDialog 4.1.5
 * Date: 2012-02-25 22:12
 * http://code.google.com/p/artdialog/
 * (c) 2009-2012 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
eval(function(B,D,A,G,E,F){function C(A){return A<62?String.fromCharCode(A+=A<26?65:A<52?71:-4):A<63?'_':A<64?'$':C(A>>6)+C(A&63)}while(A>0)E[C(G--)]=D[--A];return B.replace(/[\w\$]+/g,function(A){return E[A]==F[A]?A:E[A]})}('(7(E,C){7 I(E,C,D){C=C||8,D=D||"*";b A=R,B=R,U=[],T=C.BK(D),F=T.3,G=j D0("(^|\\\\EC)"+E+"(\\\\EC|U)");f(;A<F;A++)G.B4(T[A].BC)&&(U[B]=T[A],B++);y U}7 F(T){b A=D.DR,U=T===E?R:T[A];y U===C&&(T[A]=U=++D.Ek),U}7 G(){V(D.CR)y;CU{8.$.En("m")}Ca(U){CZ(G,S);y}D.BI()}7 N(U){y D.Di(U)?U:U.Bf===DD?U.CM||U.parentWindow:!S}b D=E.Cb=7(T,U){y j D.Z.Bi(T,U)},A=!S,B=[],U,T="6"X 8.$.t,L=/^(?:[^<]*(<[\\EA\\Cj]+>)[^>]*U|#([\\EA\\-]+)U)/,M=/[\\FN\\FO]/D8,J=/CL\\([^)]*\\)/D$,K=/6=([^)]*)/,H=/^([+-]=)?([\\FM+-.]+)(.*)U/;y E.U===C&&(E.U=D),D.Z=D.Bj={constructor:D,BI:7(U){y D.Ei(),D.CR?U.s(8,D):B&&B.Cf(U),k},Dy:7(T){b U=" "+T+" ";y(" "+k[R].BC+" ").CY(M," ").Bt(U)>-S?!R:!S},Bl:7(U){y k.Dy(U)||(k[R].BC+=" "+U),k},Bs:7(T){b U=k[R];y T?k.Dy(T)&&(U.BC=U.BC.CY(T," ")):U.BC="",k},e:7(E,A){b B,U=k[R],T=Bg[R];V(1 E=="BJ"){V(A===C)y D.e(U,E);E==="6"?D.6.Cr(U,A):U.t[E]=A}Bb f(B X T)B==="6"?D.6.Cr(U,T[B]):U.t[B]=T[B];y k},BQ:7(){y k.e("BU","E8")},BW:7(){y k.e("BU","Bu")},Cs:7(){b E=k[R],C=E.getBoundingClientRect(),D=E.ownerDocument,A=D.r,B=D.$,U=B.Ef||A.Ef||R,T=B.Eq||A.Eq||R,F=C.d+(E9.D5||B.Bn)-U,G=C.m+(E9.DC||B.Bh)-T;y{m:G,d:F}},BD:7(T){b U=k[R];y T===C?U.CT:(D.C9(U.BK("*")),U.CT=T,k)},Bm:7(){b U=k[R];y D.C9(U.BK("*")),D.C9([U]),U.BV.removeChild(U),k},p:7(T,U){y D.BS.EY(k[R],T,U),k},BL:7(T,U){y D.BS.Bm(k[R],T,U),k}},D.Z.Bi=7(B,A){b U,T;A=A||8;V(!B)y k;V(B.Bf)y k[R]=B,k;V(B==="r"&&A.r)y k[R]=A.r,k;V(B==="head"||B==="BD")y k[R]=A.BK(B)[R],k;V(1 B=="BJ"){U=L.Ew(B);V(U&&U[BF])y T=A.getElementById(U[BF]),T&&T.BV&&(k[R]=T),k}y 1 B=="7"?D(8).BI(B):(k[R]=B,k)},D.Z.Bi.Bj=D.Z,D.BM=7(){},D.Di=7(U){y U&&1 U=="FI"&&"Ea"X U},D.DW=7(U){y Object.Bj.Cd.s(U)==="[FI Array]"},D.Z.find=7(B){b A,U=k[R],T=B.C2(".")[S];y T?8.D1?A=U.D1(T):A=I(T,U):A=U.BK(B),D(A[R])},D.Bc=7(E,D){b A,B=R,U=E.3,T=U===C;V(T){f(A X E)V(D.s(E[A],A,E[A])===!S)break}Bb f(b F=E[R];B<U&&D.s(F,B,F)!==!S;F=E[++B]);y E},D.CW=7(E,A,B){b U=D.B8,T=F(E);y A===C?U[T]:(U[T]||(U[T]={}),B!==C&&(U[T][A]=B),U[T][A])},D.DV=7(E,C){b A=!R,B=D.DR,U=D.B8,T=F(E),G=T&&U[T];V(!G)y;V(C){B6 G[C];f(b H X G)A=!S;A&&B6 D.B8[T]}Bb B6 U[T],E.Cv?E.Cv(B):E[B]=l},D.Ek=R,D.B8={},D.DR="@B8"+ +(j C6),D.BS={EY:7(E,C,A){b B,U,T=D.BS,F=D.CW(E,"@CV")||D.CW(E,"@CV",{});B=F[C]=F[C]||{},U=B.B7=B.B7||[],U.Cf(A),B.BY||(B.q=E,B.BY=T.BY(B),E.B0?E.B0(C,B.BY,!S):E.CO("ER"+C,B.BY))},Bm:7(E,C,A){b B,U,T,H=D.BS,I=!R,F=D.CW(E,"@CV");V(!F)y;V(!C){f(B X F)H.Bm(E,B);y}U=F[C];V(!U)y;T=U.B7;V(A){f(B=R;B<T.3;B++)T[B]===A&&T.DG(B--,S)}Bb U.B7=[];V(U.B7.3===R){E.Dj?E.Dj(C,U.BY,!S):E.Et("ER"+C,U.BY),B6 F[C],U=D.CW(E,"@CV");f(b G X U)I=!S;I&&D.DV(E,"@CV")}},BY:7(U){y 7(B){B=D.BS.FJ(B||E.BS);f(b C=R,T=U.B7,A;A=T[C++];)A.s(U.q,B)===!S&&(B.ES(),B.EW())}},FJ:7(A){V(A.CB)y A;b U={CB:A.srcElement||8,ES:7(){A.returnValue=!S},EW:7(){A.cancelBubble=!R}};f(b T X A)U[T]=A[T];y U}},D.C9=7(E){b C=R,A,B=E.3,U=D.BS.Bm,T=D.DV;f(;C<B;C++)A=E[C],U(A),T(A)},D.CR=!S,D.BI=7(){V(!D.CR){V(!8.r)y CZ(D.BI,Em);D.CR=!R;V(B){b T,U=R;while(T=B[U++])T.s(8,D);B=l}}},D.Ei=7(){V(A)y;A=!R;V(8.Du==="Ey")y D.BI();V(8.B0)8.B0("FE",U,!S),E.B0("Ej",D.BI,!S);Bb V(8.CO){8.CO("C$",U),E.CO("onload",D.BI);b B=!S;CU{B=E.frameElement==l}Ca(T){}8.$.En&&B&&G()}},8.B0?U=7(){8.Dj("FE",U,!S),D.BI()}:8.CO&&(U=7(){8.Du==="Ey"&&(8.Et("C$",U),D.BI())}),D.e="CM"X 8&&"DQ"X 8.CM?7(T,U){y 8.CM.DQ(T,!S)[U]}:7(A,T){b U=T==="6"?D.6.DL(A):A.C0[T];y U||""},D.6={DL:7(U){y T?8.CM.DQ(U,!S).6:K.B4((U.C0?U.C0.BR:U.t.BR)||"")?DN(D0.$1)/BZ+"":S},Cr:7(D,B){V(T)y D.t.6=B;b C=D.t;C.Dz=S;b U="CL(6="+B*BZ+")",A=C.BR||"";C.BR=J.B4(A)?A.CY(J,U):C.BR+" "+U}},D.Bc(["Left","Top"],7(A,T){b U="Dc"+T;D.Z[U]=7(){b T=k[R],B;y B=N(T),B?"DC"X B?B[A?"D5":"DC"]:B.8.$[U]||B.8.r[U]:T[U]}}),D.Bc(["Height","Width"],7(A,T){b U=T.toLowerCase();D.Z[U]=7(A){b U=k[R];y U?D.Di(U)?U.8.$["DI"+T]||U.8.r["DI"+T]:U.Bf===DD?o.i(U.$["DI"+T],U.r["Dc"+T],U.$["Dc"+T],U.r["Cs"+T],U.$["Cs"+T]):l:A==l?l:k}}),D.ajax=7(C){b A=E.Dr?j Dr:j ActiveXObject("EH.XMLHTTP"),B=C.Dm;V(C.B8===!S){b U=+(j C6),T=B.CY(/([?&])T=[^&]*/,"$1_="+U);B=T+(T===B?(/\\?/.B4(B)?"&":"?")+"T="+U:"")}A.C$=7(){A.Du===D4&&A.status===200&&(C.E2&&C.E2(A.responseText),A.C$=D.BM)},A.open("GET",B,S),A.send(l)},D.Z.Dh=7(E,C,A,B){C=C||400,1 A=="7"&&(B=A),A=A&&D.CI[A]?A:"FF";b U=k[R],T,K,L,I,J,G,F={Ct:C,CI:A,BH:7(){T!=l&&(U.t.Cq=""),B&&B()}};y F.CJ={},D.Bc(E,7(T,U){F.CJ[T]=U}),D.Bc(E,7(B,A){K=j D.BE(U,F,B),L=H.Ew(A),I=DN(B==="6"||U.t&&U.t[B]!=l?D.e(U,B):U[B]),J=DN(L[BF]),G=L[FP];V(B==="0"||B==="u")J=o.i(R,J),T=[U.t.Cq,U.t.overflowX,U.t.overflowY];K.FG(I,J,G)}),T!=l&&(U.t.Cq="Eb"),k},D.C1=[],D.BE=7(A,U,T){k.q=A,k.BP=U,k.B9=T},D.BE.Bj={FG:7(C,B,T){7 U(){y A.Ec()}b A=k;A.DT=D.BE.BN(),A.Bk=C,A.h=B,A.E1=T,A.BN=A.Bk,A.DB=A.Cz=R,U.q=A.q,U(),D.C1.Cf(U),D.Cy||(D.Cy=Ea(D.BE.FD,Em))},Ec:7(){b C=k,B=D.BE.BN(),T=!R;V(B>=C.BP.Ct+C.DT){C.BN=C.h,C.DB=C.Cz=S,C.DO(),C.BP.CJ[C.B9]=!R;f(b A X C.BP.CJ)C.BP.CJ[A]!==!R&&(T=!S);y T&&C.BP.BH.s(C.q),!S}b U=B-C.DT;y C.DB=U/C.BP.Ct,C.Cz=D.CI[C.BP.CI](C.DB,U,R,S,C.BP.Ct),C.BN=C.Bk+(C.h-C.Bk)*C.Cz,C.DO(),!R},DO:7(){b U=k;U.B9==="6"?D.6.Cr(U.q,U.BN):U.q.t&&U.q.t[U.B9]!=l?U.q.t[U.B9]=U.BN+U.E1:U.q[U.B9]=U.BN}},D.BE.BN=7(){y+(j C6)},D.CI={linear:7(B,T,A,U){y A+U*B},FF:7(B,T,A,U){y(-o.cos(B*o.PI)/BF+R.D3)*U+A}},D.BE.FD=7(){b T=D.C1;f(b U=R;U<T.3;U++)!T[U]()&&T.DG(U--,S);!T.3&&D.BE.Ce()},D.BE.Ce=7(){clearInterval(D.Cy),D.Cy=l},D.Z.Ce=7(){b T=D.C1;f(b U=T.3-S;U>=R;U--)T[U].q===k[R]&&T.DG(U,S);y k},D})(DA),7(E,C,D){E.BM=E.BM||7(){};b A,B,U,T,L=R,M=E(C),J=E(8),K=E("BD"),H=8.$,I=C.VBArray&&!C.Dr,F="createTouch"X 8&&!("onmousemove"X H)||/(iPhone|iPad|iPod)/D$.B4(navigator.userAgent),G="BB"+ +(j C6),P=7(C,B,U){C=C||{};V(1 C=="BJ"||C.Bf===S)C={BX:C,x:!F};b T,J=P.Bz,H=C.2=k.Bf===S&&k||C.2;f(b I X J)C[I]===D&&(C[I]=J[I]);y E.Bc({CN:"yesFn",B1:"noFn",BT:"closeFn",Bi:"initFn",Dx:"yesText",Bd:"noText"},7(T,U){C[T]=C[T]!==D?C[T]:C[U]}),1 H=="BJ"&&(H=E(H)[R]),C.Bw=H&&H[G+"2"]||C.Bw||G+L,T=P.By[C.Bw],H&&T?T.2(H).4().w():T?T.4().w():(F&&(C.x=!S),E.DW(C.5)||(C.5=C.5?[C.5]:[]),B!==D&&(C.CN=B),U!==D&&(C.B1=U),C.CN&&C.5.Cf({DP:C.Dx,BH:C.CN,w:!R}),C.B1&&C.5.Cf({DP:C.Bd,BH:C.B1}),P.Bz.4=C.4,L++,P.By[C.Bw]=A?A.C_(C):j P.Z.C_(C))};P.Z=P.Bj={FA:"D4.S.D3",DY:!S,C_:7(E){b D=k,B,U=E.Dq,T=U&&(I?{C4:"EP/"+U+".C4"}:{Dd:"Dm(\'"+E.De+"/Dg/EP/"+U+".C4\')"});y D.z=E,D.c=B=D.c||D.E4(),B.n.Bl(E.Dv),B.BT[E.B1===!S?"BW":"BQ"](),B.Dq[R].t.BU=U?"":"Bu",B.iconBg.e(T||{Cn:"Bu"}),B.C5.e("E3",E.B$?"C5-B$":"BG"),B.BO.e("E3",E.Dt?"CP":"BG"),B.BX.e("Dk",E.Dk),D[E.BQ?"BQ":"BW"](!R),D.5(E.5).BO(E.BO).BX(E.BX,!R).Dn(E.u,E.0).Bo(E.Bo),E.2?D.2(E.2):D.9(E.m,E.d),D.4().w(),E.Ch&&D.Ch(),D.Eu(),D.D6(),A=l,E.Bi&&E.Bi.s(D,C),D},BX:7(E){b C,A,B,U,T=k,L=T.c,M=L.n[R],J=M._,K=M.BA,H=Br(M.t.m),I=Br(M.t.d),F=M.t.u,G=L.BX,N=G[R];y T.Bx&&T.Bx(),M.t.u="BG",E===D?N:(1 E=="BJ"?G.BD(E):E&&E.Bf===S&&(U=E.t.BU,C=E.previousSibling,A=E.EE,B=E.BV,T.Bx=7(){C&&C.BV?C.BV.Cx(E,C.EE):A&&A.BV?A.BV.Cx(E,A):B&&B.CA(E),E.t.BU=U,T.Bx=l},G.BD(""),N.CA(E),E.t.BU="E8"),Bg[S]||(T.z.2?T.2(T.z.2):(J=M._-J,K=M.BA-K,H-=J/BF,I-=K/BF,M.t.m=o.i(H,R)+"Y",M.t.d=o.i(I,R)+"Y"),F&&F!=="BG"&&(M.t.u=M._+"Y"),T.Cg()),T.B2(),T.EZ(N),T)},BO:7(C){b B=k.c,T=B.n,A=B.BO,U="aui_state_noTitle";y C===D?A[R]:(C===!S?(A.BW().BD(""),T.Bl(U)):(A.BQ().BD(C||""),T.Bs(U)),k)},9:7(E,C){b A=k,B=A.z,U=A.c.n[R],T=I?!S:B.x,L=I&&A.z.x,K=J.Bh(),H=J.Bn(),F=T?R:K,G=T?R:H,Bp=M.u(),Q=M.0(),P=U._,O=U.BA,N=U.t;V(E||E===R)A.DK=E.Cd().Bt("%")!==-S?E:l,E=A.Ci(E,Bp-P),1 E=="CE"?(E=L?E+=K:E+F,N.m=o.i(E,F)+"Y"):1 E=="BJ"&&(N.m=E);V(C||C===R)A.DJ=C.Cd().Bt("%")!==-S?C:l,C=A.Ci(C,Q-O),1 C=="CE"?(C=L?C+=H:C+G,N.d=o.i(C,G)+"Y"):1 C=="BJ"&&(N.d=C);y E!==D&&C!==D&&(A.Cc=l,A.Cg()),A},Dn:7(E,C){b D,A,B,U,T=k,K=T.z,I=T.c,J=I.n,G=I.EO,H=J[R].t,F=G[R].t;y E&&(T.Ev=E.Cd().Bt("%")!==-S?E:l,D=M.u()-J[R]._+G[R]._,B=T.Ci(E,D),E=B,1 E=="CE"?(H.u="BG",F.u=o.i(T.z.Db,E)+"Y",H.u=J[R]._+"Y"):1 E=="BJ"&&(F.u=E,E==="BG"&&J.e("u","BG"))),C&&(T.FB=C.Cd().Bt("%")!==-S?C:l,A=M.0()-J[R].BA+G[R].BA,U=T.Ci(C,A),C=U,1 C=="CE"?F.0=o.i(T.z.D2,C)+"Y":1 C=="BJ"&&(F.0=C)),T.B2(),T},2:7(C){b F,A=k,B=A.z;V(1 C=="BJ"||C&&C.Bf===S)F=E(C),C=F[R];V(!C||!C._&&!C.BA)y A.9(A.DK,A.DJ);b U=G+"2",T=M.u(),O=M.0(),N=J.Bh(),L=J.Bn(),K=F.Cs(),Cj=C._,D7=C.BA,CF=I?!S:B.x,CG=CF?K.m-N:K.m,Cl=CF?K.d-L:K.d,Bp=A.c.n[R],Q=Bp.t,P=Bp._,Cm=Bp.BA,Bq=CG-(P-Cj)/BF,CH=Cl+D7,D=CF?R:N,H=CF?R:L;y Bq=Bq<D?CG:Bq+P>T&&CG-P>D?CG-P+Cj:Bq,CH=CH+Cm>O+H&&Cl-Cm>H?Cl-Cm:CH,Q.m=Bq+"Y",Q.d=CH+"Y",A.Cc&&A.Cc.Cv(U),A.Cc=C,C[U]=B.Bw,A.Cg(),A},5:7(){b C=k,A=Bg,B=C.c,U=B.D_,T=U[R],H="aui_state_highlight",I=C.Cp=C.Cp||{},F=E.DW(A[R])?A[R]:[].slice.s(A);y A[R]===D?T:(E.Bc(F,7(D,A){b B=A.DP,U=!I[B],F=U?8.B3("5"):I[B].q;I[B]||(I[B]={}),A.BH&&(I[B].BH=A.BH),A.BC&&(F.BC=A.BC),A.w&&(C.CK&&C.CK.Bs(H),C.CK=E(F).Bl(H),C.w()),F.setAttribute("EU","5"),F[G+"BH"]=B,F.DS=!!A.DS,U&&(F.CT=B,I[B].q=F,T.CA(F))}),U[R].t.BU=F.3?"":"Bu",C.B2(),C)},BQ:7(){y k.c.n.BQ(),!Bg[R]&&k.Ba&&k.Ba.BQ(),k},BW:7(){y k.c.n.BW(),!Bg[R]&&k.Ba&&k.Ba.BW(),k},BT:7(){V(k.DY)y k;b E=k,D=E.c,B=D.n,U=P.By,T=E.z.BT,F=E.z.2;E.Bo();V(1 T=="7"&&T.s(E,C)===!S)y E;E.E5(),E.Bx&&E.Bx(),B[R].BC=B[R].t.B5="",D.BO.BD(""),D.BX.BD(""),D.D_.BD(""),P.w===E&&(P.w=l),F&&F.Cv(G+"2"),B6 U[E.z.Bw],E.EB(),E.BW(!R).C3();f(b H X E)E.hasOwnProperty(H)&&H!=="c"&&B6 E[H];y A?B.Bm():A=E,E},Bo:7(B){b T=k,A=T.z.Bd,U=T.EF;y U&&Ex(U),B&&(T.EF=CZ(7(){T.B_(A)},1000*B)),T},w:7(){CU{b T=k.CK&&k.CK[R]||k.c.BT[R];T&&T.w()}Ca(U){}y k},4:7(){b C=k,A=C.c,B=A.n,U=P.w,T=P.Bz.4++;y B.e("4",T),C.CQ&&C.CQ.e("4",T-S),U&&U.c.n.Bs("EN"),P.w=C,B.Bl("EN"),C},Ch:7(){V(k.Ck)y k;b C=k,D=P.Bz.4-S,A=C.c.n,B=C.z,U=J.u(),T=J.0(),L=C.Ba||E(8.r.CA(8.B3("g"))),M=C.CQ||E(L[R].CA(8.B3("g"))),K="(8).$",H=F?"u:"+U+"Y;0:"+T+"Y":"u:BZ%;0:BZ%",G=I?"9:CX;m:Co("+K+".Bh);d:Co("+K+".Bn);u:Co("+K+".clientWidth);0:Co("+K+".clientHeight)":"";y C.4(),A.Bl("Es"),L[R].t.B5=H+";9:x;DF-Dl:"+D+";d:R;m:R;Cq:Eb;"+G,M[R].t.B5="0:BZ%;Cn:"+B.Cn+";BR:CL(6=R);6:R",I&&M.BD("<Do Be=\\"Dp:Ds\\" t=\\"u:BZ%;0:BZ%;9:CX;d:R;m:R;DF-Dl:-S;BR:CL(6=R)\\"></Do>"),M.Ce(),M.p("DX",7(){C.Dw()}).p("DM",7(){C.B_(C.z.Bd)}),B.CS===R?M.e({6:B.6}):M.Dh({6:B.6},B.CS),C.Ba=L,C.CQ=M,C.Ck=!R,C},E5:7(){b D=k,B=D.Ba,C=D.CQ;V(!D.Ck)y D;b T=B[R].t,U=7(){I&&(T.Bv("u"),T.Bv("0"),T.Bv("m"),T.Bv("d")),T.B5="BU:Bu",A&&B.Bm()};y C.Ce().BL(),D.c.n.Bs("Es"),D.z.CS?C.Dh({6:R},D.z.CS,U):U(),D.Ck=!S,D},E4:7(){b C=8.B3("g"),D=8.r;C.t.B5="9:CX;m:R;d:R",C.CT=P.FK,D.Cx(C,D.firstChild);b A,B=R,U={n:E(C)},T=C.BK("*"),F=T.3;f(;B<F;B++)A=T[B].BC.C2("aui_")[S],A&&(U[A]=E(T[B]));y U},Ci:7(A,U){V(!A&&A!==R||1 A=="CE")y A;b T=A.3-S;y A.C7("Y")===T?A=Br(A):A.C7("%")===T&&(A=Br(U*A.C2("%")[R]/BZ)),A},D6:I?7(){b E=R,C,D,A,B,U=P.Bz.De+"/Dg/",T=k.c.n[R].BK("*");f(;E<T.3;E++)C=T[E],D=C.C0.C4,D&&(A=U+D,B=C.runtimeStyle,B.Dd="Bu",B.BR="progid:DXImageTransform.EH.AlphaImageLoader(Be=\'"+A+"\',sizingMethod=\'crop\')")}:E.BM,B2:I?7(){b D=k.c.n,B=D[R],C=G+"iframeMask",T=D[C],A=B._,U=B.BA;A+="Y",U+="Y",T?(T.t.u=A,T.t.0=U):(T=B.CA(8.B3("Do")),D[C]=T,T.Be="Dp:Ds",T.t.B5="9:CX;DF-Dl:-S;m:R;d:R;BR:CL(6=R);u:"+A+";0:"+U)}:E.BM,EZ:7(E){b C,D=R,A=R,B=E.BK("EI"),U=B.3,T=[];f(;D<U;D++)B[D].EU==="text/Df"&&(T[A]=B[D].CT,A++);T.3&&(T=T.join(""),C=j Function(T),C.s(k))},Cg:7(){k[k.z.x?"EL":"C3"]()},EL:7(){y I&&E(7(){b U="EQ";K.e(U)!=="x"&&E("r").e(U)!=="x"&&K.e({Dz:S,Dd:"Dm(Dp:Ds)",EQ:"x"})}),7(){b E=k.c.n,C=E[R].t;V(I){b D=Br(E.e("m")),A=Br(E.e("d")),B=J.Bh(),U=J.Bn(),T="(8.$)";k.C3(),C.Ez("m","Eh("+T+".Bh + "+(D-B)+") + \\"Y\\""),C.Ez("d","Eh("+T+".Bn + "+(A-U)+") + \\"Y\\"")}Bb C.9="x"}}(),C3:7(){b U=k.c.n[R].t;I&&(U.Bv("m"),U.Bv("d")),U.9="CX"},B_:7(A){b T=k,U=T.Cp[A]&&T.Cp[A].BH;y 1 U!="7"||U.s(T,C)!==!S?T.BT():T},Dw:7(E){b C,D=k,A=D.EM||M.u()*M.0(),B=D.Cc,U=D.Ev,T=D.FB,G=D.DK,F=D.DJ;V(E){C=D.EM=M.u()*M.0();V(A===C)y}(U||T)&&D.Dn(U,T),B?D.2(B):(G||F)&&D.9(G,F)},Eu:7(){b D,B=k,T=B.z,A="CollectGarbage"X C,U=B.c;B.DZ=7(){D&&Ex(D),D=CZ(7(){B.Dw(A)},40)},M.p("B$",B.DZ),U.n.p("DX",7(D){b C=D.CB,A;V(C.DS)y!S;V(C===U.BT[R])y B.B_(T.Bd),!S;A=C[G+"BH"],A&&B.B_(A),B.B2()}).p("EG",7(){B.4()})},EB:7(){b T=k,U=T.c;U.n.BL(),M.BL("B$",T.DZ)}},P.Z.C_.Bj=P.Z,E.Z.Df=E.Z.BB=7(){b U=Bg;y k[k.EV?"EV":"p"]("DX",7(){y P.ET(k,U),!S}),k},P.w=l,P.DL=7(U){y U===D?P.By:P.By[U]},P.By={},J.p("keydown",7(D){b B=D.CB,C=B.nodeName,T=/^INPUT|TEXTAREA$/,A=P.w,U=D.keyCode;V(!A||!A.z.E0||T.B4(C))y;U===27&&A.B_(A.z.Bd)}),T=C._artDialog_path||7(A,U,T){f(U X A)A[U].Be&&A[U].Be.Bt("BB")!==-S&&(T=A[U]);y B=T||A[A.3-S],T=B.Be.CY(/\\\\/D8,"/"),T.C7("/")<R?".":T.substring(R,T.C7("/"))}(8.BK("EI")),U=B.Be.C2("Dv=")[S];V(U){b O=8.B3("link");O.rel="stylesheet",O.Eg=T+"/Dg/"+U+".e?"+P.Z.FA,B.BV.Cx(O,B)}M.p("Ej",7(){CZ(7(){V(L)y;P({m:"-9999em",Bo:DD,x:!S,Ch:!S,w:!S})},150)});CU{8.execCommand("BackgroundImageCache",!S,!R)}Ca(N){}P.FK="<g v=\\"aui_outer\\"><C8 v=\\"aui_border\\"><Cu><a><W v=\\"aui_nw\\"></W><W v=\\"aui_n\\"></W><W v=\\"aui_ne\\"></W></a><a><W v=\\"aui_w\\"></W><W v=\\"aui_c\\"><g v=\\"aui_inner\\"><C8 v=\\"aui_dialog\\"><Cu><a><W FH=\\"BF\\" v=\\"aui_header\\"><g v=\\"aui_titleBar\\"><g v=\\"aui_title\\"></g><D9 v=\\"aui_close\\" Eg=\\"javascript:/*BB*/;\\">\\xd7</D9></g></W></a><a><W v=\\"aui_icon\\"><g v=\\"aui_iconBg\\"></g></W><W v=\\"aui_main\\"><g v=\\"aui_content\\"></g></W></a><a><W FH=\\"BF\\" v=\\"aui_footer\\"><g v=\\"aui_buttons\\"></g></W></a></Cu></C8></g></W><W v=\\"aui_e\\"></W></a><a><W v=\\"aui_sw\\"></W><W v=\\"aui_s\\"></W><W v=\\"aui_se\\"></W></a></Cu></C8></g>",P.Bz={BX:"<g v=\\"aui_loading\\"><EJ>loading..</EJ></g>",BO:"\\FL\\u606f",5:l,CN:l,B1:l,Bi:l,BT:l,Dx:"\\u786e\\u5b9a",Bd:"\\u53d6\\FL",u:"BG",0:"BG",Db:96,D2:32,Dk:"20px 20px",Dv:"",Dq:l,Bo:l,E0:!R,w:!R,BQ:!R,2:l,De:T,Ch:!S,Cn:"#000",6:R.FQ,CS:300,x:!S,m:"50%",d:"38.BF%",4:1987,B$:!R,Dt:!R},C.BB=E.Df=E.BB=P}(k.Cb||k.Cw&&(k.Cb=Cw),k),7(E){b C,D,A=E(DA),B=E(8),U=8.$,T=!("Db"X U.t),F="onlosecapture"X U,G="El"X U;BB.Da=7(){b T=k,U=7(U){b A=T[U];T[U]=7(){y A.ET(T,Bg)}};U("Bk"),U("CP"),U("h")},BB.Da.Bj={DH:E.BM,Bk:7(U){y B.p("Eo",k.CP).p("EK",k.h),k.E6=U.CD,k.E7=U.CC,k.DH(U.CD,U.CC),!S},DU:E.BM,CP:7(U){y k._mClientX=U.CD,k._mClientY=U.CC,k.DU(U.CD-k.E6,U.CC-k.E7),!S},DE:E.BM,h:7(U){y B.BL("Eo",k.CP).BL("EK",k.h),k.DE(U.CD,U.CC),!S}},D=7(E){b D,U,L,M,J,K,H=BB.w,I=H.c,Q=I.n,P=I.BO,O=I.EO,N="Er"X DA?7(){DA.Er().removeAllRanges()}:7(){CU{8.selection.empty()}Ca(U){}};C.DH=7(E,D){K?(U=O[R]._,L=O[R].BA):(M=Q[R].offsetLeft,J=Q[R].offsetTop),B.p("DM",C.h),!T&&F?P.p("Ep",C.h):A.p("EX",C.h),G&&P[R].El(),Q.Bl("ED"),H.w()},C.DU=7(E,C){V(K){b A=Q[R].t,B=O[R].t,T=E+U,G=C+L;A.u="BG",B.u=o.i(R,T)+"Y",A.u=Q[R]._+"Y",B.0=o.i(R,G)+"Y"}Bb{b B=Q[R].t,I=o.i(D.E_,o.FC(D.Ee,E+M)),F=o.i(D.E$,o.FC(D.Ed,C+J));B.m=I+"Y",B.d=F+"Y"}N(),H.B2()},C.DE=7(D,U){B.BL("DM",C.h),!T&&F?P.BL("Ep",C.h):A.BL("EX",C.h),G&&P[R].releaseCapture(),T&&!H.DY&&H.Cg(),Q.Bs("ED")},K=E.CB===I.C5[R]?!R:!S,D=7(){b E,C,D=H.c.n[R],U=D.t.9==="x",T=D._,J=D.BA,K=A.u(),G=A.0(),I=U?R:B.Bh(),F=U?R:B.Bn(),E=K-T+I;y C=G-J+F,{E_:I,E$:F,Ee:E,Ed:C}}(),C.Bk(E)},B.p("EG",7(E){b A=BB.w;V(!A)y;b B=E.CB,U=A.z,T=A.c;V(U.Dt!==!S&&B===T.BO[R]||U.B$!==!S&&B===T.C5[R])y C=C||j BB.Da,D(E),!S})}(k.Cb||k.Cw&&(k.Cb=Cw))','0|1|_|$|if|td|in|px|fn|tr|var|DOM|top|css|for|div|end|max|new|this|null|left|wrap|Math|bind|elem|body|call|style|width|class|focus|fixed|return|config|height|typeof|follow|length|zIndex|button|opacity|function|document|position|offsetWidth|documentElement|offsetHeight|artDialog|className|html|fx|2|auto|callback|ready|string|getElementsByTagName|unbind|noop|now|title|options|show|filter|event|close|display|parentNode|hide|content|handler|100|_lockMaskWrap|else|each|cancelVal|src|nodeType|arguments|scrollLeft|init|prototype|start|addClass|remove|scrollTop|time|R|Y|parseInt|removeClass|indexOf|none|removeExpression|id|_elemBack|list|defaults|addEventListener|cancel|_ie6SelectFix|createElement|test|cssText|delete|listeners|cache|prop|_click|resize|appendChild|target|clientY|clientX|number|U|T|X|easing|curAnim|_focus|alpha|defaultView|ok|attachEvent|move|_lockMask|isReady|duration|innerHTML|try|events|data|absolute|replace|setTimeout|catch|art|_follow|toString|stop|push|_autoPositionType|lock|_toNumber|W|_lock|S|Z|background|expression|_listeners|overflow|set|offset|speed|tbody|removeAttribute|jQuery|insertBefore|timerId|pos|currentStyle|timers|split|_setAbsolute|png|se|Date|lastIndexOf|table|cleanData|_init|onreadystatechange|window|state|pageXOffset|9|onend|z|splice|onstart|client|_top|_left|get|dblclick|parseFloat|update|name|getComputedStyle|expando|disabled|startTime|onmove|removeData|isArray|click|closed|_winResize|dragEvent|minWidth|scroll|backgroundImage|path|dialog|skins|animate|isWindow|removeEventListener|padding|index|url|size|iframe|about|icon|XMLHttpRequest|blank|drag|readyState|skin|_reset|okVal|hasClass|zoom|RegExp|getElementsByClassName|minHeight|5|4|pageYOffset|_ie6PngFix|V|g|a|buttons|i|w|_removeEvent|s|aui_state_drag|nextSibling|_timer|mousedown|Microsoft|script|span|mouseup|_setFixed|_winSize|aui_state_focus|main|icons|backgroundAttachment|on|preventDefault|apply|type|live|stopPropagation|blur|add|_runScript|setInterval|hidden|step|maxY|maxX|clientTop|href|eval|bindReady|load|uuid|setCapture|13|doScroll|mousemove|losecapture|clientLeft|getSelection|aui_state_lock|detachEvent|_addEvent|_width|exec|clearTimeout|complete|setExpression|esc|unit|success|cursor|_getDOM|unlock|_sClientX|_sClientY|block|self|minX|minY|version|_height|min|tick|DOMContentLoaded|swing|custom|colspan|object|fix|_templates|u6d88|d|n|t|3|7'.split('|'),320,336,{},{}))

/*!
 * artDialog iframeTools
 * Date: 2011-11-25 13:54
 * http://code.google.com/p/artdialog/
 * (c) 2009-2011 TangBin, http://www.planeArt.cn
 *
 * This is licensed under the GNU LGPL, version 2.1 or later.
 * For details, see: http://creativecommons.org/licenses/LGPL/2.1/
 */
 
;(function ($, window, artDialog, undefined) {

var _topDialog, _proxyDialog, _zIndex,
	_data = '@ARTDIALOG.DATA',
	_open = '@ARTDIALOG.OPEN',
	_opener = '@ARTDIALOG.OPENER',
	_winName = window.name = window.name
	|| '@ARTDIALOG.WINNAME' + (new Date).getTime(),
	_isIE6 = window.VBArray && !window.XMLHttpRequest;

$(function () {
	!window.jQuery && document.compatMode === 'BackCompat'
	// 不支持怪异模式，请用主流的XHTML1.0或者HTML5的DOCTYPE申明
	&& alert('artDialog Error: document.compatMode === "BackCompat"');
});
	
	
/** 获取 artDialog 可跨级调用的最高层的 window 对象 */
var _top = artDialog.top = function () {
	var top = window,
	test = function (name) {
		try {
			var doc = window[name].document;	// 跨域|无权限
			doc.getElementsByTagName; 			// chrome 本地安全限制
		} catch (e) {
			return false;
		};
		
		return window[name].artDialog
		// 框架集无法显示第三方元素
		&& doc.getElementsByTagName('frameset').length === 0;
	};
	
	if (test('top')) {
		top = window.top;
	} else if (test('parent')) {
		top = window.parent;
	};
	
	return top;
}();
artDialog.parent = _top; // 兼容v4.1之前版本，未来版本将删除此


_topDialog = _top.artDialog;


// 获取顶层页面对话框叠加值
_zIndex = function () {
	return _topDialog.defaults.zIndex;
};



/**
 * 跨框架数据共享接口
 * @see		http://www.planeart.cn/?p=1554
 * @param	{String}	存储的数据名
 * @param	{Any}		将要存储的任意数据(无此项则返回被查询的数据)
 */
artDialog.data = function (name, value) {
	var top = artDialog.top,
		cache = top[_data] || {};
	top[_data] = cache;
	
	if (value !== undefined) {
		cache[name] = value;
	} else {
		return cache[name];
	};
	return cache;
};


/**
 * 数据共享删除接口
 * @param	{String}	删除的数据名
 */
artDialog.removeData = function (name) {
	var cache = artDialog.top[_data];
	if (cache && cache[name]) delete cache[name];
};


/** 跨框架普通对话框 */
artDialog.through = _proxyDialog = function () {
	var api = _topDialog.apply(this, arguments);
		
	// 缓存从当前window（可能为iframe）调出所有跨框架对话框，window卸载后全部关闭这些对话框
	// 因为iframe注销后也会从内存中删除其创建的对象，这样可以防止回调函数报错
	if (_top !== window) artDialog.list[api.config.id] = api;
	return api;
};

// 框架页面卸载前关闭所有穿越的对话框
_top !== window && $(window).bind('unload', function () {
	var list = artDialog.list, config;
	for (var i in list) {
		if (list[i]) {
			config = list[i].config;
			if (config) config.duration = 0; // 取消动画
			list[i].close();
			delete list[i];
		};
	};
});


/**
 * 弹窗 (iframe)
 * @param	{String}	地址
 * @param	{Object}	配置参数. 这里传入的回调函数接收的第1个参数为iframe内部window对象
 * @param	{Boolean}	是否允许缓存. 默认true
 */
artDialog.open = function (url, options, cache) {
	options = options || {};
	
	var api, DOM,
		$content, $main, iframe, $iframe, $idoc, iwin, ibody,
		top = artDialog.top,
		initCss = 'position:absolute;left:-9999em;top:-9999em;border:none 0;background:transparent',
		loadCss = 'width:100%;height:100%;border:none 0';
		
	if (cache === false) {
		var ts = (new Date()).getTime(),
			ret = url.replace(/([?&])_=[^&]*/, "$1_=" + ts );
		url = ret + ((ret === url) ? (/\?/.test(url) ? "&" : "?") + "_=" + ts : "");
	};
	
	var load = function () {
		var iWidth, iHeight,
			loading = DOM.content.find('.aui_loading'),
			aConfig = api.config;
			
		$content.addClass('aui_state_full');
		
		loading && loading.hide();
		
		try {
			iwin = iframe.contentWindow;
			$idoc = $(iwin.document);
			ibody = iwin.document.body;
		} catch (e) {// 跨域
			iframe.style.cssText = loadCss;
			
			aConfig.follow
			? api.follow(aConfig.follow)
			: api.position(aConfig.left, aConfig.top);
			
			options.init && options.init.call(api, iwin, top);
			options.init = null;
			return;
		};
		
		// 获取iframe内部尺寸
		iWidth = aConfig.width === 'auto'
		? $idoc.width() + (_isIE6 ? 0 : parseInt($(ibody).css('marginLeft')))
		: aConfig.width;
		
		iHeight = aConfig.height === 'auto'
		? $idoc.height()
		: aConfig.height;
		
		// 适应iframe尺寸
		setTimeout(function () {
			iframe.style.cssText = loadCss;
		}, 0);// setTimeout: 防止IE6~7对话框样式渲染异常
		api.size(iWidth, iHeight);
		
		// 调整对话框位置
		aConfig.follow
		? api.follow(aConfig.follow)
		: api.position(aConfig.left, aConfig.top);
		options.init && options.init.call(api, iwin, top);
		options.init = null;
	};
		
	var config = {
		zIndex: _zIndex(),
		init: function () {
			
			api = this;
			DOM = api.DOM;
			$main = DOM.main;
			$content = DOM.content;
			//修复动画效果 在init加载完成之前 ztf修改于 2016-6-25 09:41:55
			var win = $(window.top);
			 wrap = api.DOM.wrap[0];
	          main = api.DOM.main[0];
	         fot = api.DOM.footer[0];
	         head = api.DOM.header[0];
	         $(wrap).show(); 
	        $(main).css("height",win.height()-$(fot).height()-$(head).height()+"px");
	        setTimeout(function(){
	        	$(wrap).css({
					'left':win.width()-parseInt(options.width)+"px",
				});
	        },400);
	        //end
			iframe = api.iframe = top.document.createElement('iframe');
			iframe.src = url;
			iframe.name = 'Open' + api.config.id;
			iframe.style.cssText = initCss;
			iframe.setAttribute('frameborder', 0, 0);
			iframe.setAttribute('allowTransparency', true);
			
			$iframe = $(iframe);
			api.content().appendChild(iframe);
			iwin = iframe.contentWindow;
			
			try {
				iwin.name = iframe.name;
				artDialog.data(iframe.name + _open, api);
				artDialog.data(iframe.name + _opener, window);
			} catch (e) {};
			
			$iframe.bind('load', load);
		},
		close: function () {
			
			$iframe.css('display', 'none').unbind('load', load);
			if (options.close && options.close.call(this, iframe.contentWindow, top) === false) {
				return false;
			};
			$content.removeClass('aui_state_full');
			
			// 重要！需要重置iframe地址，否则下次出现的对话框在IE6、7无法聚焦input
			// IE删除iframe后，iframe仍然会留在内存中出现上述问题，置换src是最容易解决的方法
			$iframe[0].src = 'about:blank';
			$iframe.remove();
			
			try {
				artDialog.removeData(iframe.name + _open);
				artDialog.removeData(iframe.name + _opener);
			} catch (e) {};
		}
	};
	
	// 回调函数第一个参数指向iframe内部window对象
	if (typeof options.ok === 'function') config.ok = function () {
		return options.ok.call(api, iframe.contentWindow, top);
	};
	if (typeof options.cancel === 'function') config.cancel = function () {
		return options.cancel.call(api, iframe.contentWindow, top);
	};
	
	delete options.content;

	for (var i in options) {
		if (config[i] === undefined) config[i] = options[i];
	};
	
	return _proxyDialog(config);
};


/** 引用open方法扩展方法(在open打开的iframe内部私有方法) */
artDialog.open.api = artDialog.data(_winName + _open);


/** 引用open方法触发来源页面window(在open打开的iframe内部私有方法) */
artDialog.opener = artDialog.data(_winName + _opener) || window;
artDialog.open.origin = artDialog.opener; // 兼容v4.1之前版本，未来版本将删除此

/** artDialog.open 打开的iframe页面里关闭对话框快捷方法 */
artDialog.close = function () {
	var api = artDialog.data(_winName + _open);
	api && api.close();
	return false;
};

// 点击iframe内容切换叠加高度
_top != window && $(document).bind('mousedown', function () {
	var api = artDialog.open.api;
	api && api.focus();
});


/**
 * Ajax填充内容
 * @param	{String}			地址
 * @param	{Object}			配置参数
 * @param	{Boolean}			是否允许缓存. 默认true
 */
artDialog.load = function(url, options, cache){
	cache = cache || false;
	var opt = options || {};
		
	var config = {
		zIndex: _zIndex(),
		init: function(here){
			var api = this,
				aConfig = api.config;
			
			$.ajax({
				url: url,
				success: function (content) {
					api.content(content);
					opt.init && opt.init.call(api, here);		
				},
				cache: cache
			});
			
		}
	};
	
	delete options.content;
	
	for (var i in opt) {
		if (config[i] === undefined) config[i] = opt[i];
	};
	
	return _proxyDialog(config);
};


/**
 * 警告
 * @param	{String}	消息内容
 */
artDialog.alert = function (content) {
	return _proxyDialog({
		id: 'Alert',
		zIndex: _zIndex(),
		icon: 'warning',
		fixed: true,
		lock: true,
		content: content,
		ok: true
	});
};


/**
 * 确认
 * @param	{String}	消息内容
 * @param	{Function}	确定按钮回调函数
 * @param	{Function}	取消按钮回调函数
 */
artDialog.confirm = function (content, yes, no) {
	return _proxyDialog({
		id: 'Confirm',
		zIndex: _zIndex(),
		icon: 'question',
		fixed: true,
		lock: true,
		opacity: 0,
		content: content,
		ok: function (here) {
			return yes.call(this, here);
		},
		cancel: function (here) {
			return no && no.call(this, here);
		}
	});
};


/**
 * 提问
 * @param	{String}	提问内容
 * @param	{Function}	回调函数. 接收参数：输入值
 * @param	{String}	默认值
 */
artDialog.prompt = function (content, yes, value) {
	value = value || '';
	var input;
	
	return _proxyDialog({
		id: 'Prompt',
		zIndex: _zIndex(),
		icon: 'question',
		fixed: true,
		lock: true,
		opacity: .1,
		content: [
			'<div style="margin-bottom:5px;font-size:12px">',
				content,
			'</div>',
			'<div>',
				'<input value="',
					value,
				'" style="width:18em;padding:6px 4px" />',
			'</div>'
			].join(''),
		init: function () {
			input = this.DOM.content.find('input')[0];
			input.select();
			input.focus();
		},
		ok: function (here) {
			return yes && yes.call(this, input.value, here);
		},
		cancel: true
	});
};


/**
 * 短暂提示
 * @param	{String}	提示内容
 * @param	{Number}	显示时间 (默认1.5秒)
 */
artDialog.tips = function (content, time) {
	return _proxyDialog({
		id: 'Tips',
		zIndex: _zIndex(),
		title: false,
		cancel: false,
		fixed: true,
		lock: false
	})
	.content('<div style="padding: 0 1em;">' + content + '</div>')
	.time(time || 1.5);
};

/**
 * QX短暂提示
 * @param	{String}	提示内容
 * @param	{Number}	显示时间 (默认1.5秒)
 */
artDialog.showtips = function (content,time){	
	return _proxyDialog({
		id: 'showtips',
		zIndex: _zIndex(),
		title: false,
		cancel: false,
		fixed: true,
		padding:'10px 20px'
	})
	.content('<div style="padding: 0px 0px">' + content + '</div>')
	.time(time || 1.5);	
};
artDialog.showtips_red = function (content,time){	
	return _proxyDialog({
		id: 'showtips',
		zIndex: _zIndex(),
		title: false,
		cancel: false,
		fixed: true,
		padding:'10px 20px'
	})
	.content('<div style="padding: 0px 0px; "><font color=red>' + content + '</font></div>')
	.time(time || 1.5);	
};

// 增强artDialog拖拽体验
// - 防止鼠标落入iframe导致不流畅
// - 对超大对话框拖动优化
$(function () {
	var event = artDialog.dragEvent;
	if (!event) return;

	var $window = $(window),
		$document = $(document),
		positionType = _isIE6 ? 'absolute' : 'fixed',
		dragEvent = event.prototype,
		mask = document.createElement('div'),
		style = mask.style;
		
	style.cssText = 'display:none;position:' + positionType + ';left:0;top:0;width:100%;height:100%;'
	+ 'cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF';
		
	document.body.appendChild(mask);
	dragEvent._start = dragEvent.start;
	dragEvent._end = dragEvent.end;
	
	dragEvent.start = function () {
		var DOM = artDialog.focus.DOM,
			main = DOM.main[0],
			iframe = DOM.content[0].getElementsByTagName('iframe')[0];
		
		dragEvent._start.apply(this, arguments);
		style.display = 'block';
		style.zIndex = artDialog.defaults.zIndex + 3;
		
		if (positionType === 'absolute') {
			style.width = $window.width() + 'px';
			style.height = $window.height() + 'px';
			style.left = $document.scrollLeft() + 'px';
			style.top = $document.scrollTop() + 'px';
		};
		
		if (iframe && main.offsetWidth * main.offsetHeight > 307200) {
			main.style.visibility = 'hidden';
		};
	};
	
	dragEvent.end = function () {
		var dialog = artDialog.focus;
		dragEvent._end.apply(this, arguments);
		style.display = 'none';
		if (dialog) dialog.DOM.main[0].style.visibility = 'visible';
	};
});

})(this.art || this.jQuery, this, this.artDialog);

