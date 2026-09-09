/* Vìvela — Prototipo Informe legal / Contratos
   Portado a JS vanilla desde el prototipo original. Sin dependencias. */

/* ───────────────────────── Datos ───────────────────────── */
const ROWS = [
  ["Condominio Los Robles", "20512348971", "Inmobiliaria Andina S.A.C.", "Primera revisión", "12/08/2026", 23, "31/08/2026", "Pendiente", "jrossi", "mvargas"],
  ["Torre Miraflores 210", "20604817223", "Grupo Vertical Perú S.A.", "Primera revisión", "14/08/2026", 21, "28/08/2026", "Pendiente", "adiego", "lcastro"],
  ["Residencial San Borja", "20487731905", "Constructora Sol Naciente S.A.C.", "Subsanación", "17/08/2026", 18, "02/09/2026", "En proceso", "schirito", "pnavarro"],
  ["Parque Central Surco", "20556690142", "Desarrollos Urbanos Lima S.A.C.", "Primera revisión", "18/08/2026", 17, "30/08/2026", "Pendiente", "jrossi", "lcastro"],
  ["Altos de Chacarilla", "20601122388", "Promotora Chacarilla S.A.C.", "Segunda revisión", "19/08/2026", 16, "01/09/2026", "Observado", "adiego", "mvargas"],
  ["Mirador de Barranco", "20523004617", "Barranco Living S.A.C.", "Primera revisión", "20/08/2026", 15, "29/08/2026", "Pendiente", "schirito", "cbermudez"],
  ["Bosques de La Molina", "20478855201", "Inversiones Molina Verde S.A.", "Subsanación", "21/08/2026", 14, "03/09/2026", "En proceso", "jrossi", "pnavarro"],
  ["Nuevo Callao Etapa II", "20609933470", "Portuaria Residencial S.A.C.", "Primera revisión", "22/08/2026", 13, "27/08/2026", "Desestimado", "adiego", "cbermudez"],
  ["Vista Alameda Jesús María", "20533117864", "Alameda Desarrolladora S.A.C.", "Primera revisión", "24/08/2026", 11, "01/09/2026", "Pendiente", "schirito", "mvargas"],
  ["Terrazas de Magdalena", "20596640028", "Magdalena Proyectos S.A.C.", "Segunda revisión", "25/08/2026", 10, "02/09/2026", "Atendido", "jrossi", "lcastro"],
  ["Casa Club Pachacámac", "20488271036", "Campo Verde Inmobiliaria S.A.C.", "Primera revisión", "26/08/2026", 9, "31/08/2026", "Pendiente", "adiego", "pnavarro"],
  ["Edificio Salaverry 780", "20607744915", "Salaverry Capital S.A.C.", "Subsanación", "27/08/2026", 8, "03/09/2026", "En proceso", "schirito", "lcastro"],
  ["Lomas de Carabayllo", "20541206683", "Norte Urbano S.A.C.", "Primera revisión", "28/08/2026", 7, "02/09/2026", "Pendiente", "jrossi", "cbermudez"],
  ["Puerta del Sol Ate", "20512987340", "Sol Oriente Inmobiliaria S.A.", "Segunda revisión", "28/08/2026", 7, "03/09/2026", "Observado", "adiego", "mvargas"],
  ["Alto Piura Residencial", "20603355118", "Piura Desarrollos S.A.C.", "Primera revisión", "29/08/2026", 6, "01/09/2026", "Pendiente", "schirito", "pnavarro"],
  ["Bahía Chorrillos", "20479922557", "Bahía Sur Proyectos S.A.C.", "Primera revisión", "30/08/2026", 5, "02/09/2026", "Atendido", "jrossi", "mvargas"],
  ["Villa Trujillo Norte", "20588103476", "Trujillo Habitat S.A.C.", "Primera revisión", "31/08/2026", 4, "03/09/2026", "Pendiente", "adiego", "lcastro"],
  ["Cumbres de Arequipa", "20601447792", "Cumbres Andinas S.A.C.", "Subsanación", "31/08/2026", 4, "03/09/2026", "Pendiente", "schirito", "cbermudez"],
  ["Jardines de Cieneguilla", "20534668015", "Cieneguilla Living S.A.C.", "Primera revisión", "01/09/2026", 3, "03/09/2026", "Pendiente", "jrossi", "pnavarro"],
  ["Plaza Chiclayo Centro", "20609112204", "Chiclayo Urbana S.A.", "Primera revisión", "02/09/2026", 2, "03/09/2026", "Pendiente", "adiego", "cbermudez"],
  ["Sunset Cieneguilla", "20477310958", "Sunset Perú S.A.C.", "Segunda revisión", "02/09/2026", 2, "04/09/2026", "Desestimado", "schirito", "mvargas"],
  ["Balcones de Cusco", "20599844163", "Cusco Habitat S.A.C.", "Primera revisión", "03/09/2026", 1, "04/09/2026", "Atendido", "jrossi", "mvargas"]
];

const CHECKLIST = [
  ["Ficha RUC", "PDF · 240 KB · 12/08/2026", "Cargado"],
  ["Vigencia de poder del representante legal", "PDF · 1.2 MB · 14/08/2026", "Cargado"],
  ["DNI de representantes", "PDF · 860 KB · 14/08/2026", "Cargado"],
  ["Testimonio de constitución", "PDF · 3.4 MB · 17/08/2026", "Cargado"],
  ["Copia literal", "PDF · 2.1 MB · 20/08/2026", "Cargado"],
  ["Testimonio compra venta", "PDF · 1.8 MB · 24/08/2026", "Cargado"],
  ["Tasación", "Pendiente de carga", "Pendiente"],
  ["Constancia de no adeudo HR-PU", "PDF · 520 KB · 28/08/2026", "Cargado"]
];

const CRITERIOS = ["Nombre del proyecto", "Título de dominio", "Código Techo Propio", "Certificado de Parámetros Urbanísticos y Edificatorios", "Resolución de Habilitación Urbana", "Licencia de Edificación", "Factibilidad de energía eléctrica", "Factibilidad de agua potable y alcantarillado", "HR y PU", "Constancia de Nro. de No Adeudo", "Informe de Opinión Técnica", "Gravámenes"];
const TABS = ["Pendiente", "En proceso", "Observado", "Desestimado", "Atendido"];
const NAV = [
  ["Informe legal", "solar:document-text-bold-duotone"],
  ["Contratos", "solar:file-check-bold-duotone"]
];
const CHIP = {
  "Pendiente": ["#FFF5CC", "#7A4100"],
  "En proceso": ["#CAFDF5", "#003768"],
  "Observado": ["#FFE9D5", "#7A0916"],
  "Desestimado": ["#F4F6F8", "#454F5B"],
  "Atendido": ["#D3FCD2", "#065E49"]
};
const MAX_MB = 20;
const GRID = "grid-template-columns: minmax(150px, 1.25fr) minmax(180px, 1.5fr) 92px 92px 104px 108px 94px 84px 94px 40px; gap: 12px; min-width: 1060px;";

/* ───────────────────────── Estado ───────────────────────── */
const state = {
  screen: "bandeja", tab: "Pendiente", page: 1,
  query: "", userMenu: false, docTab: "informe",
  criterios: {}, validado: false, modalOpen: false,
  drawerOpen: false, formOpen: true, drawerSelectOpen: false, drawerPicks: [], drawerText: "",
  obsList: [], toast: null, client: null, removed: [],
  file: null, fileError: null
};
let toastTimer = null;

function setState(patch) { Object.assign(state, patch); render(); }

/* ───────────────────────── Estilos derivados ───────────────────────── */
const esc = (s) => String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const chipStyle = (estado) => {
  const c = CHIP[estado] || CHIP["Desestimado"];
  return "display:inline-flex;align-items:center;justify-content:center;height:24px;padding:0 10px;border-radius:8px;font-size:12px;font-weight:700;background:" + c[0] + ";color:" + c[1] + ";width:fit-content";
};
const navStyle = (active) => "display:flex;align-items:center;gap:12px;padding:11px 12px;border-radius:8px;border:none;cursor:pointer;text-align:left;font-family:var(--font-body);font-size:14px;font-weight:" + (active ? "700" : "600") + ";background:" + (active ? "rgba(29,173,135,0.10)" : "transparent") + ";color:" + (active ? "#117F66" : "#637381") + ";transition:background 150ms cubic-bezier(.4,0,.2,1)";
const tabStyle = (active) => "display:inline-flex;align-items:center;gap:8px;padding:16px 8px;margin-right:16px;border:none;background:transparent;cursor:pointer;font-family:var(--font-body);font-size:14px;font-weight:" + (active ? "700" : "600") + ";color:" + (active ? "#1C252E" : "#637381") + ";box-shadow:" + (active ? "inset 0 -2px 0 0 #1C252E" : "none") + ";transition:color 150ms cubic-bezier(.4,0,.2,1)";
const box = (on) => "width:20px;height:20px;border-radius:4px;flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;color:#fff;background:" + (on ? "#1DAD87" : "transparent") + ";border:2px solid " + (on ? "#1DAD87" : "rgba(145,158,171,0.48)") + ";transition:all 150ms cubic-bezier(.4,0,.2,1)";
const seg = (active, tone) => {
  const on = { fav: ["#1DAD87", "#FFFFFF"], no: ["#FF5630", "#FFFFFF"], na: ["#637381", "#FFFFFF"] }[tone];
  return "padding:0 12px;height:34px;border:none;cursor:pointer;font-family:var(--font-body);font-size:13px;font-weight:" + (active ? "700" : "600") + ";background:" + (active ? on[0] : "#FFFFFF") + ";color:" + (active ? on[1] : "#637381") + ";border-left:1px solid rgba(145,158,171,0.32);transition:all 150ms cubic-bezier(.4,0,.2,1)";
};
const pageBtn = (active) => "width:32px;height:32px;border-radius:8px;border:none;cursor:pointer;font-family:var(--font-body);font-size:13px;font-weight:700;background:" + (active ? "rgba(29,173,135,0.10)" : "transparent") + ";color:" + (active ? "#117F66" : "#454F5B");
const arrowBtn = (disabled) => "width:32px;height:32px;border-radius:8px;border:none;display:inline-flex;align-items:center;justify-content:center;background:transparent;color:" + (disabled ? "#C4CDD5" : "#454F5B") + ";cursor:" + (disabled ? "not-allowed" : "pointer");
const selectBtn = () => "width:100%;height:48px;padding:0 14px;border-radius:8px;border:1px solid rgba(145,158,171,0.32);background:#fff;display:flex;align-items:center;justify-content:space-between;cursor:pointer;font-family:var(--font-body);font-size:14px;color:#1C252E";
const errChip = (h) => "display:inline-flex;align-items:center;gap:6px;height:" + h + "px;padding:0 10px;border-radius:8px;background:#FFE9D5;color:#B71D18;font-size:12px;font-weight:700;";

/* ───────────────────────── Acciones ───────────────────────── */
function flash(toast) {
  state.toast = toast;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => setState({ toast: null }), 6000);
  render();
}

function mark(k, v) {
  const c = Object.assign({}, state.criterios);
  c[k] = v;
  setState({ criterios: c, validado: false });
}

function openExpediente(row) {
  setState({ screen: "informe", client: row, docTab: "informe", userMenu: false, query: "" });
}

function handleFile(input) {
  const f = input.files && input.files[0];
  input.value = "";
  if (!f) return;
  const ext = (f.name.split(".").pop() || "").toLowerCase();
  if (["pdf", "doc", "docx"].indexOf(ext) === -1) {
    state.file = null;
    state.fileError = "Formato no válido. Sube un archivo PDF o Word.";
    flash({ kind: "warn", title: "Archivo no válido", body: "Formato no válido. Sube un archivo PDF o Word." });
    return;
  }
  if (f.size > MAX_MB * 1024 * 1024) {
    state.file = null;
    state.fileError = "El archivo pesa " + (f.size / 1048576).toFixed(1) + " MB. El límite es " + MAX_MB + " MB.";
    flash({ kind: "warn", title: "Archivo demasiado pesado", body: "El límite es " + MAX_MB + " MB." });
    return;
  }
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  setState({
    fileError: null,
    file: {
      name: f.name,
      ext: ext,
      size: f.size < 1048576 ? Math.round(f.size / 1024) + " KB" : (f.size / 1048576).toFixed(1) + " MB",
      fecha: p(d.getDate()) + "/" + p(d.getMonth() + 1) + "/" + d.getFullYear() + " · " + p(d.getHours()) + ":" + p(d.getMinutes()),
      url: URL.createObjectURL(f)
    }
  });
}

/* ───────────────────────── Vista ───────────────────────── */
function derived() {
  const rows = ROWS.filter(r => r[7] === state.tab);
  const totalPages = Math.max(1, Math.ceil(rows.length / 10));
  const page = Math.min(state.page, totalPages);
  const q = state.query.trim().toLowerCase();
  const matches = q.length > 1 ? ROWS.filter(r => (r[0] + " " + r[1] + " " + r[2]).toLowerCase().includes(q)).slice(0, 4) : [];
  const c = state.client || ROWS[0];
  const noFav = CRITERIOS.filter(k => state.criterios[k] === "no");
  const nFav = CRITERIOS.filter(k => state.criterios[k] === "fav").length;
  const nEval = CRITERIOS.filter(k => !!state.criterios[k]).length;
  const allDone = nEval === CRITERIOS.length;
  const allFav = nFav === CRITERIOS.length;
  const mode = state.validado ? "contrato" : (noFav.length ? "observacion" : "confirmar");
  return { rows, totalPages, page, matches, c, noFav, nEval, allDone, allFav, mode };
}

function sidebar() {
  return `
  <aside style="position: fixed; top: 0; left: 0; width: 280px; height: 100vh; background: #FFFFFF; border-right: 1px solid rgba(145,158,171,0.20); z-index: 1101; display: flex; flex-direction: column; padding: 24px 16px;">
    <div style="padding: 0 8px 32px 8px;">
      <img src="assets/vivela-logo.svg" alt="Vìvela" style="height: 32px; width: auto;">
    </div>
    <nav style="display: flex; flex-direction: column; gap: 4px;">
      <div style="padding: 8px 8px 8px 12px; font-family: var(--font-body); font-weight: 700; font-size: 11px; line-height: 18px; letter-spacing: 0.08em; text-transform: uppercase; color: #919EAB;">Legal</div>
      ${NAV.map(n => `
        <button data-a="nav" style="${navStyle(n[0] === "Informe legal")}">
          <iconify-icon icon="${n[1]}" width="22"></iconify-icon>
          <span>${n[0]}</span>
        </button>`).join("")}
    </nav>
  </aside>`;
}

function header() {
  return `
  <header style="position: fixed; top: 0; left: 280px; right: 0; height: 64px; z-index: 1100; background: rgba(255,255,255,0.72); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(145,158,171,0.20); display: flex; align-items: center; justify-content: space-between; padding: 0 40px;">
    <div style="display: flex; align-items: center; gap: 12px;"></div>
    <div style="display: flex; align-items: center; gap: 24px;">
      <button style="position: relative; width: 40px; height: 40px; border-radius: 999px; border: none; background: transparent; color: #637381; display: inline-flex; align-items: center; justify-content: center; cursor: pointer;">
        <iconify-icon icon="solar:bell-bold" width="24"></iconify-icon>
        <span style="position: absolute; top: 4px; right: 4px; min-width: 18px; height: 18px; padding: 0 5px; border-radius: 999px; background: #FF5630; color: #fff; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center;">3</span>
      </button>
      <div style="width: 1px; height: 24px; background: rgba(145,158,171,0.20);"></div>
      <div style="position: relative;">
        <button data-a="toggleUser" style="display: flex; align-items: center; gap: 12px; padding: 4px 8px 4px 4px; border-radius: 999px; border: none; background: transparent; cursor: pointer;">
          <span class="vv-avatar">AQ</span>
          <span style="display: flex; flex-direction: column; align-items: flex-start;">
            <span style="font-size: 14px; font-weight: 600; line-height: 20px; color: #1C252E;">Ana Quispe</span>
            <span style="font-size: 12px; line-height: 16px; color: #637381;">Analista legal</span>
          </span>
          <iconify-icon icon="eva:chevron-down-fill" width="18" style="color: #919EAB;"></iconify-icon>
        </button>
        ${state.userMenu ? `
          <div style="position: absolute; top: 52px; right: 0; width: 220px; background: #fff; border-radius: 12px; box-shadow: var(--shadow-dropdown); padding: 8px; z-index: 1200;">
            <div style="padding: 12px; display: flex; flex-direction: column; gap: 2px;">
              <span style="font-size: 14px; font-weight: 700; color: #1C252E;">Ana Quispe</span>
              <span style="font-size: 12px; color: #637381;">a.quispe@vivela.lat</span>
            </div>
            <div style="height: 1px; background: rgba(145,158,171,0.20); margin: 4px 0;"></div>
            <button data-a="closeUser" class="vv-ck" style="width: 100%; display: flex; align-items: center; gap: 12px; padding: 10px 12px; border: none; background: transparent; border-radius: 8px; font-size: 14px; font-weight: 600; color: #1C252E; cursor: pointer;">
              <iconify-icon icon="solar:user-bold-duotone" width="20" style="color: #637381;"></iconify-icon> Ver mi perfil
            </button>
            <button data-a="closeUser" class="vv-ck" style="width: 100%; display: flex; align-items: center; gap: 12px; padding: 10px 12px; border: none; background: transparent; border-radius: 8px; font-size: 14px; font-weight: 600; color: #B71D18; cursor: pointer;">
              <iconify-icon icon="solar:logout-2-bold-duotone" width="20"></iconify-icon> Cerrar sesión
            </button>
          </div>` : ""}
      </div>
    </div>
  </header>`;
}

function bandeja(d) {
  const rangeLabel = d.rows.length
    ? "Mostrando " + ((d.page - 1) * 10 + 1) + "–" + Math.min(d.page * 10, d.rows.length) + " de " + d.rows.length + " expedientes"
    : "Sin expedientes en este estado";
  const pageRows = d.rows.slice((d.page - 1) * 10, d.page * 10);
  return `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div style="display: flex; flex-direction: column; gap: 4px;">
          <h4 class="t-h4" style="margin: 0;">Informe Legal</h4>
          <span style="font-size: 14px; color: #637381;">Expedientes asignados al área legal</span>
        </div>

        <div style="display: flex; align-items: flex-end; gap: 16px;">
          <div style="position: relative; flex: 1;">
            <div style="position: relative;">
              <iconify-icon icon="solar:magnifer-linear" width="20" style="position: absolute; left: 14px; top: 14px; color: #919EAB;"></iconify-icon>
              <input class="vv-input" data-field="query" value="${esc(state.query)}" placeholder="Busca por RUC, razón social o proyecto" style="padding-left: 44px;">
            </div>
            ${d.matches.length ? `
              <div style="position: absolute; top: 84px; left: 0; right: 0; background: #fff; border-radius: 12px; box-shadow: var(--shadow-dropdown); padding: 8px; z-index: 20;">
                <div style="padding: 8px 12px; font-size: 11px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #919EAB;">Resultados</div>
                ${d.matches.map(r => `
                  <button data-a="openResult" data-i="${ROWS.indexOf(r)}" class="vv-ck" style="width: 100%; display: flex; align-items: center; gap: 12px; padding: 12px; border: none; background: transparent; border-radius: 8px; cursor: pointer; text-align: left;">
                    <span style="width: 40px; height: 40px; border-radius: 8px; background: #CCF5E5; color: #064F46; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;">
                      <iconify-icon icon="solar:buildings-3-bold" width="22"></iconify-icon>
                    </span>
                    <span style="display: flex; flex-direction: column; gap: 2px;">
                      <span style="font-size: 14px; font-weight: 600; color: #1C252E;">${r[2]}</span>
                      <span style="font-size: 12px; color: #637381;">${r[1]} · ${r[0]}</span>
                    </span>
                  </button>`).join("")}
              </div>` : ""}
          </div>
        </div>

        <div class="vv-card" style="overflow: hidden;">
          <div style="display: flex; align-items: center; gap: 8px; padding: 0 24px; border-bottom: 1px solid rgba(145,158,171,0.20);">
            ${TABS.map(t => `
              <button data-a="tab" data-v="${t}" class="vv-tab" style="${tabStyle(t === state.tab)}">
                <span>${t}</span>
                <span style="display: inline-flex; align-items: center; justify-content: center; min-width: 20px; height: 20px; padding: 0 6px; border-radius: 999px; background: rgba(145,158,171,0.24); color: #454F5B; font-size: 12px; font-weight: 700; line-height: 1;">${ROWS.filter(r => r[7] === t).length}</span>
              </button>`).join("")}
          </div>

          <div style="overflow-x: auto;">
            <div style="display: grid; ${GRID} padding: 14px 20px; background: #F4F6F8; font-size: 12px; font-weight: 700; color: #637381;">
              <span>Nombre de proyecto</span>
              <span>RUC / Razón social</span>
              <span>Funcionario</span>
              <span>Asistente</span>
              <span>Estado</span>
              <span>Instancia</span>
              <span>Fecha de registro</span>
              <span>Días transcurridos</span>
              <span>Fecha de actualización</span>
              <span></span>
            </div>

            ${pageRows.map(r => `
              <div data-a="openRow" data-i="${ROWS.indexOf(r)}" class="vv-row" style="display: grid; ${GRID} padding: 16px 20px; align-items: center; border-bottom: 1px solid rgba(145,158,171,0.20); cursor: pointer; transition: background 150ms cubic-bezier(.4,0,.2,1);">
                <span style="font-size: 14px; font-weight: 600; color: #1C252E;">${r[0]}</span>
                <span style="display: flex; flex-direction: column; gap: 2px;">
                  <span style="font-size: 14px; font-weight: 600; color: #1C252E;">${r[2]}</span>
                  <span style="font-size: 12px; color: #637381; font-variant-numeric: tabular-nums;">${r[1]}</span>
                </span>
                <span style="font-size: 14px; color: #454F5B;">${r[8]}</span>
                <span style="font-size: 14px; color: #454F5B;">${r[9]}</span>
                <span style="${chipStyle(r[7])}">${r[7]}</span>
                <span style="font-size: 14px; color: #454F5B;">${r[3]}</span>
                <span style="font-size: 14px; color: #454F5B; font-variant-numeric: tabular-nums;">${r[4]}</span>
                <span style="font-size: 14px; font-weight: 600; color: #454F5B; font-variant-numeric: tabular-nums;">${r[5] + (r[5] === 1 ? " día" : " días")}</span>
                <span style="font-size: 14px; color: #454F5B; font-variant-numeric: tabular-nums;">${r[6]}</span>
                <button data-a="openRow" data-i="${ROWS.indexOf(r)}" title="Abrir expediente" style="width: 36px; height: 36px; border-radius: 8px; border: none; background: transparent; color: #637381; display: inline-flex; align-items: center; justify-content: center; cursor: pointer;">
                  <iconify-icon icon="solar:square-arrow-right-up-bold-duotone" width="22"></iconify-icon>
                </button>
              </div>`).join("")}
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px 24px;">
            <span style="font-size: 13px; color: #637381;">${rangeLabel}</span>
            <div style="display: flex; align-items: center; gap: 8px;">
              <button data-a="prevPage" style="${arrowBtn(d.page === 1)}"><iconify-icon icon="eva:chevron-left-fill" width="20"></iconify-icon></button>
              ${Array.from({ length: d.totalPages }, (_, i) => `<button data-a="page" data-i="${i + 1}" style="${pageBtn(i + 1 === d.page)}">${i + 1}</button>`).join("")}
              <button data-a="nextPage" style="${arrowBtn(d.page === d.totalPages)}"><iconify-icon icon="eva:chevron-right-fill" width="20"></iconify-icon></button>
            </div>
          </div>
        </div>
      </div>`;
}

function uploader() {
  const f = state.file;
  const dropStyle = "display:flex;align-items:center;gap:16px;padding:20px 24px;border-radius:8px;border:1px " + (f ? "solid rgba(145,158,171,0.32)" : state.fileError ? "dashed rgba(255,86,48,0.48)" : "dashed rgba(145,158,171,0.32)") + ";background:" + (f ? "#FFFFFF" : "#F9FAFB") + ";cursor:pointer";
  const icon = f ? (f.ext === "pdf" ? "solar:file-text-bold" : "solar:document-bold") : "solar:cloud-upload-bold-duotone";
  const iconStyle = "width:48px;height:48px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;background:" + (state.fileError ? "#FFE9D5" : "#CCF5E5") + ";color:" + (state.fileError ? "#B71D18" : "#117F66");
  const help = "Formatos permitidos: PDF o Word · hasta " + MAX_MB + " MB";
  const meta = f ? "Cargado el " + f.fecha + " · " + f.size : (state.fileError || help);
  return `
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <div class="t-input-label">Documento</div>
            <input type="file" id="fileInput" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" style="display: none;">
            <div data-a="pickFile" class="vv-ck" style="${dropStyle}">
              <span style="${iconStyle}">
                <iconify-icon icon="${icon}" width="26"></iconify-icon>
              </span>
              <span style="display: flex; flex-direction: column; gap: 2px;">
                <span style="font-size: 15px; font-weight: 700; color: #454F5B;">${f ? esc(f.name) : "Subir informe legal"}</span>
                <span style="font-size:13px;color:${state.fileError ? "#B71D18" : "#919EAB"}">${esc(meta)}</span>
                ${f ? `<span style="font-size: 12px; color: #919EAB;">${help}</span>` : ""}
              </span>
              ${f ? `
                <span style="margin-left: auto; display: flex; align-items: center; gap: 8px;">
                  <span class="vv-chip success" style="height: 24px;">Cargado</span>
                  <button data-a="removeFile" title="Eliminar archivo" style="width: 32px; height: 32px; border-radius: 8px; border: none; background: transparent; color: #637381; display: inline-flex; align-items: center; justify-content: center; cursor: pointer;">
                    <iconify-icon icon="eva:close-fill" width="20"></iconify-icon>
                  </button>
                </span>`
              : `<span class="vv-btn outlined sm" style="margin-left: auto;">Seleccionar archivo</span>`}
            </div>
          </div>`;
}

function validacion(d) {
  return `
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <div style="display: flex; flex-direction: column; gap: 4px;">
                <span style="font-size: 14px; color: #637381;">Verifica el cumplimiento de los criterios del informe.</span>
              </div>

              <div style="border-radius: 12px; border: 1px solid rgba(145,158,171,0.20); overflow: hidden;">
                <button data-a="toggleAllFav" class="vv-ck" style="width: 100%; display: flex; align-items: center; justify-content: flex-end; gap: 12px; padding: 14px 20px; border: none; background: #F9FAFB; border-bottom: 1px solid rgba(145,158,171,0.20); cursor: pointer; text-align: left;">
                  <span style="${box(d.allFav)}"><iconify-icon icon="eva:checkmark-fill" width="16"></iconify-icon></span>
                  <span style="font-size: 14px; font-weight: 700; color: #1C252E;">Marcar todos los criterios como favorables</span>
                </button>
                ${CRITERIOS.map((k, i) => `
                  <div class="vv-row" style="display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 12px 20px; border-bottom: 1px solid rgba(145,158,171,0.20); transition: background 150ms cubic-bezier(.4,0,.2,1);">
                    <span style="font-size: 14px; font-weight: 500; color: #1C252E;">${k}</span>
                    <span style="display: inline-flex; align-items: stretch; border-radius: 8px; overflow: hidden; border: 1px solid rgba(145,158,171,0.32); flex-shrink: 0;">
                      <button data-a="mark" data-i="${i}" data-v="fav" style="${seg(state.criterios[k] === "fav", "fav")};border-left:none">Favorable</button>
                      <button data-a="mark" data-i="${i}" data-v="no" style="${seg(state.criterios[k] === "no", "no")}">No favorable</button>
                      <button data-a="mark" data-i="${i}" data-v="na" style="${seg(state.criterios[k] === "na", "na")}">No aplica</button>
                    </span>
                  </div>`).join("")}
              </div>

              ${state.obsList.length ? `
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <div class="t-input-label">Observaciones registradas</div>
                  ${state.obsList.map((o, i) => `
                    <div style="display: flex; flex-direction: column; gap: 8px; padding: 16px; border-radius: 12px; background: #F9FAFB; border: 1px solid rgba(145,158,171,0.20);">
                      <span style="display: flex; flex-wrap: wrap; gap: 8px;">
                        ${o.items.map(it => `<span style="${errChip(26)}">${it}</span>`).join("")}
                      </span>
                      <span style="font-size: 14px; line-height: 22px; color: #454F5B;">${esc(o.texto)}</span>
                      <button data-a="removeObs" data-i="${i}" style="align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; border: none; background: transparent; padding: 0; font-size: 13px; font-weight: 600; color: #B71D18; cursor: pointer;">
                        <iconify-icon icon="solar:trash-bin-trash-bold" width="18"></iconify-icon> Eliminar
                      </button>
                    </div>`).join("")}
                </div>` : ""}
            </div>`;
}

function checklist() {
  const visible = CHECKLIST.filter(d => !state.removed.includes(d[0]));
  const count = visible.filter(d => d[2] === "Cargado").length + " de " + visible.length + " documentos cargados";
  return `
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <span style="font-size: 15px; font-weight: 700; color: #1C252E;">Checklist de documentos</span>
                <span style="font-size: 13px; color: #637381;">${count}</span>
              </div>
              <div style="border-radius: 12px; border: 1px solid rgba(145,158,171,0.20); overflow: hidden;">
                ${visible.map((doc, i) => {
                  const cargado = doc[2] === "Cargado";
                  const iconStyle = "width:40px;height:40px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;background:" + (cargado ? "#CCF5E5" : "#F4F6F8") + ";color:" + (cargado ? "#117F66" : "#919EAB");
                  const actStyle = "width:32px;height:32px;border-radius:8px;border:none;background:transparent;color:#637381;display:inline-flex;align-items:center;justify-content:center;cursor:pointer";
                  return `
                  <div class="vv-row" style="display: grid; grid-template-columns: 40px 1fr 80px 40px; gap: 16px; align-items: center; padding: 14px 20px; border-bottom: 1px solid rgba(145,158,171,0.20); transition: background 150ms cubic-bezier(.4,0,.2,1)">
                    <span style="${iconStyle}"><iconify-icon icon="solar:document-text-bold" width="20"></iconify-icon></span>
                    <span style="display: flex; flex-direction: column; gap: 2px;">
                      <span style="font-size: 14px; font-weight: 600; color: #1C252E;">${doc[0]}</span>
                      <span style="font-size: 12px; color: #919EAB;">${doc[1]}</span>
                    </span>
                    <span style="${chipStyle(cargado ? "Atendido" : "Pendiente")}">${doc[2]}</span>
                    <span style="display: flex; align-items: center; justify-content: flex-end; gap: 4px; width: 31px; height: 29px">
                      <button data-a="download" data-i="${i}" title="Descargar" style="${actStyle}"><iconify-icon icon="solar:download-minimalistic-bold" width="20"></iconify-icon></button>
                    </span>
                  </div>`;
                }).join("")}
              </div>
            </div>`;
}

function informe(d) {
  const docTabs = [
    ["informe", "Validación del informe", "solar:cloud-upload-bold-duotone"],
    ["checklist", "Documentación", "solar:list-check-bold-duotone"]
  ];
  return `
      <div style="display: flex; flex-direction: column; gap: 24px; padding-bottom: 96px;">
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <button data-a="goBandeja" style="display: inline-flex; align-items: center; gap: 6px; align-self: flex-start; padding: 0; border: none; background: transparent; font-size: 13px; font-weight: 600; color: #637381; cursor: pointer;">
            <iconify-icon icon="eva:arrow-back-fill" width="20"></iconify-icon>
          </button>
          <h4 class="t-h4" style="margin: 0;">${d.c[2]}</h4>
          <div style="display: flex; align-items: center; gap: 12px;">
            <span style="font-size: 14px; color: #637381; font-variant-numeric: tabular-nums;">RUC ${d.c[1]}</span>
            <span style="width: 4px; height: 4px; border-radius: 999px; background: #C4CDD5;"></span>
            <span style="font-size: 14px; color: #637381;">${d.c[0]}</span>
          </div>
        </div>

        <div class="vv-card" style="padding: 24px; display: flex; flex-direction: column; gap: 24px;">
          ${uploader()}

          <div style="display: flex; align-items: center; gap: 8px; border-bottom: 1px solid rgba(145,158,171,0.20);">
            ${docTabs.map(t => `
              <button data-a="docTab" data-v="${t[0]}" class="vv-tab" style="${tabStyle(state.docTab === t[0])}">
                <iconify-icon icon="${t[2]}" width="20"></iconify-icon>
                <span>${t[1]}</span>
              </button>`).join("")}
          </div>

          ${state.docTab === "informe" ? validacion(d) : checklist()}
        </div>
      </div>

      ${footer(d)}
      ${state.modalOpen ? modal(d) : ""}
      ${state.drawerOpen ? drawer(d) : ""}`;
}

function footer(d) {
  const label = d.mode === "contrato" ? "Generar contrato" : "Confirmar";
  const icon = d.mode === "contrato" ? "solar:file-check-bold" : "solar:check-circle-bold";
  const hint = d.mode === "contrato" ? "Informe validado: puedes generar el contrato."
    : d.mode === "observacion" ? d.noFav.length + " ítem" + (d.noFav.length > 1 ? "s" : "") + " no favorable" + (d.noFav.length > 1 ? "s" : "") + ": registra la observación."
    : d.allDone ? (d.allFav ? "Todos los criterios son favorables." : "Criterios evaluados sin ítems no favorables.")
    : "Evalúa los " + CRITERIOS.length + " criterios para continuar (" + d.nEval + "/" + CRITERIOS.length + ").";
  return `
      <footer style="position: fixed; bottom: 0; left: 280px; right: 0; height: 80px; background: rgba(255,255,255,0.88); backdrop-filter: blur(20px); border-top: 1px solid rgba(145,158,171,0.20); display: flex; align-items: center; justify-content: flex-end; gap: 16px; padding: 0 40px; z-index: 1100;">
        <button data-a="goBandeja" class="vv-btn outlined" style="margin-right: auto;">Cancelar</button>
        <span style="font-size: 13px; color: #637381;">${hint}</span>
        ${d.mode === "observacion" ? `
          <button data-a="openObsDrawer" class="vv-btn outlined">
            <iconify-icon icon="solar:chat-square-like-bold" width="20"></iconify-icon>
            <span>Crear observación</span>
          </button>` : ""}
        <button data-a="primary" class="vv-btn filled" ${d.allDone ? "" : "disabled"}>
          <iconify-icon icon="${icon}" width="20"></iconify-icon>
          <span>${label}</span>
        </button>
      </footer>`;
}

function modal(d) {
  return `
      <div style="position: fixed; inset: 0; z-index: 1300; background: rgba(28,37,46,0.48); display: flex; align-items: center; justify-content: center;">
        <div style="width: 480px; background: #fff; border-radius: 16px; box-shadow: var(--shadow-dialog); padding: 24px; display: flex; flex-direction: column; gap: 16px;">
          <span style="font-size: 18px; font-weight: 700; color: #1C252E;">¿Confirmar la validación del informe?</span>
          <span style="font-size: 14px; line-height: 22px; color: #637381;">Los ${CRITERIOS.length} criterios fueron marcados como favorables. Al confirmar, el informe legal de ${d.c[2]} queda validado y habilitado para generar el contrato. Esta acción no se puede deshacer.</span>
          <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 8px;">
            <button data-a="closeModal" class="vv-btn outlined">Cancelar</button>
            <button data-a="confirmModal" class="vv-btn filled">Confirmar validación</button>
          </div>
        </div>
      </div>`;
}

function drawer(d) {
  const addDisabled = state.drawerPicks.length === 0 || state.drawerText.trim().length === 0;
  return `
      <div style="position: fixed; inset: 0; z-index: 1300; background: rgba(28,37,46,0.48);">
        <div style="position: absolute; top: 0; right: 0; width: 480px; height: 100%; background: #fff; box-shadow: var(--shadow-dialog); display: flex; flex-direction: column;">
          <div style="display: flex; align-items: center; justify-content: space-between; padding: 24px; border-bottom: 1px solid rgba(145,158,171,0.20);">
            <span style="font-size: 18px; font-weight: 700; color: #1C252E;">Observaciones</span>
            <button data-a="closeDrawer" style="width: 32px; height: 32px; border: none; background: transparent; color: #637381; display: inline-flex; align-items: center; justify-content: center; cursor: pointer;"><iconify-icon icon="eva:close-fill" width="20"></iconify-icon></button>
          </div>
          <div style="flex: 1; overflow-y: auto; padding: 24px; display: flex; flex-direction: column; gap: 24px;">
            ${state.formOpen ? `
              <div style="position: relative;">
                <div class="t-input-label" style="margin-bottom: 8px;">Ítems no favorables</div>
                <button data-a="toggleDrawerSelect" style="${selectBtn()}">
                  <span style="color:${state.drawerPicks.length ? "#1C252E" : "#919EAB"}">${state.drawerPicks.length ? state.drawerPicks.length + " ítem" + (state.drawerPicks.length > 1 ? "s" : "") + " seleccionado" + (state.drawerPicks.length > 1 ? "s" : "") : "Selecciona los ítems observados"}</span>
                  <iconify-icon icon="eva:chevron-down-fill" width="20" style="color: #919EAB;"></iconify-icon>
                </button>
                ${state.drawerSelectOpen ? `
                  <div style="position: absolute; top: 84px; left: 0; right: 0; background: #fff; border-radius: 12px; box-shadow: var(--shadow-dropdown); padding: 8px; z-index: 20; max-height: 280px; overflow-y: auto;">
                    ${d.noFav.map(k => `
                      <button data-a="togglePick" data-v="${esc(k)}" class="vv-ck" style="width: 100%; display: flex; align-items: center; gap: 12px; padding: 10px 12px; border: none; background: transparent; border-radius: 8px; cursor: pointer; text-align: left;">
                        <span style="${box(state.drawerPicks.includes(k))}"><iconify-icon icon="eva:checkmark-fill" width="16"></iconify-icon></span>
                        <span style="font-size: 14px; font-weight: 500; color: #1C252E;">${k}</span>
                      </button>`).join("")}
                  </div>` : ""}
                ${state.drawerPicks.length ? `
                  <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-top: 12px;">
                    ${state.drawerPicks.map(k => `
                      <span style="${errChip(28)}">
                        ${k}
                        <button data-a="togglePick" data-v="${esc(k)}" style="border: none; background: transparent; padding: 0; display: inline-flex; cursor: pointer; color: inherit;"><iconify-icon icon="eva:close-fill" width="14"></iconify-icon></button>
                      </span>`).join("")}
                  </div>` : ""}
              </div>

              <div style="display: flex; flex-direction: column; gap: 8px;">
                <div class="t-input-label">Observación</div>
                <div style="border-radius: 8px; border: 1px solid rgba(145,158,171,0.32); background: #fff; overflow: hidden;">
                  <textarea data-field="drawerText" placeholder="Describe la observación para los ítems seleccionados…" style="width: 100%; min-height: 160px; padding: 16px; border: none; outline: none; resize: vertical; font-family: var(--font-body); font-size: 14px; line-height: 22px; color: #1C252E;">${esc(state.drawerText)}</textarea>
                  <div style="display: flex; align-items: center; justify-content: space-between; padding: 8px 12px; border-top: 1px solid rgba(145,158,171,0.20); background: #F9FAFB;">
                    <span style="font-size: 12px; color: #919EAB;">Una observación por comentario</span>
                    <span style="font-size: 12px; color: #919EAB;">${state.drawerText.length} / 1000</span>
                  </div>
                </div>
                <button data-a="addObs" class="vv-btn filled" ${addDisabled ? "disabled" : ""} style="align-self: flex-start;">
                  <iconify-icon icon="solar:diskette-bold" width="20"></iconify-icon>
                  <span>Guardar</span>
                </button>
              </div>` : ""}

            ${state.obsList.length ? `
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <span class="t-input-label">Observaciones agregadas</span>
                  <span style="display: inline-flex; align-items: center; justify-content: center; min-width: 20px; height: 20px; padding: 0 6px; border-radius: 999px; background: rgba(145,158,171,0.24); color: #454F5B; font-size: 12px; font-weight: 700; line-height: 1;">${state.obsList.length}</span>
                </div>
                ${state.obsList.map((o, i) => `
                  <div style="display: flex; flex-direction: column; gap: 8px; padding: 16px; border-radius: 12px; background: #F9FAFB; border: 1px solid rgba(145,158,171,0.20);">
                    <span style="display: flex; flex-wrap: wrap; gap: 8px;">
                      ${o.items.map(it => `<span style="${errChip(26)}">${it}</span>`).join("")}
                    </span>
                    <span style="font-size: 14px; line-height: 22px; color: #454F5B;">${esc(o.texto)}</span>
                    <button data-a="removeObs" data-i="${i}" style="align-self: flex-start; display: inline-flex; align-items: center; gap: 6px; border: none; background: transparent; padding: 0; font-size: 13px; font-weight: 600; color: #B71D18; cursor: pointer;">
                      <iconify-icon icon="solar:trash-bin-trash-bold" width="18"></iconify-icon> Eliminar
                    </button>
                  </div>`).join("")}
              </div>` : ""}

            ${!state.formOpen ? `
              <button data-a="openForm" class="vv-btn outlined" style="align-self: flex-start;">
                <iconify-icon icon="eva:plus-fill" width="20"></iconify-icon>
                <span>Agregar observación</span>
              </button>` : ""}
          </div>
          <div style="display: flex; justify-content: flex-end; gap: 12px; padding: 24px; border-top: 1px solid rgba(145,158,171,0.20);">
            <button data-a="closeDrawer" class="vv-btn outlined">Cancelar</button>
            <button data-a="saveObs" class="vv-btn filled" ${state.obsList.length ? "" : "disabled"}>Confirmar</button>
          </div>
        </div>
      </div>`;
}

function toastView() {
  const t = state.toast;
  if (!t) return "";
  const icon = t.kind === "ok" ? "solar:check-circle-bold" : t.kind === "warn" ? "solar:info-circle-bold" : "solar:download-minimalistic-bold";
  const iconStyle = "width:40px;height:40px;border-radius:8px;flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;background:" + (t.kind === "ok" ? "#D3FCD2" : t.kind === "warn" ? "#FFF5CC" : "#CAFDF5") + ";color:" + (t.kind === "ok" ? "#065E49" : t.kind === "warn" ? "#7A4100" : "#003768");
  return `
  <div style="position: fixed; top: 80px; right: 24px; z-index: 1400; display: flex; align-items: flex-start; gap: 12px; width: 380px; padding: 16px; border-radius: 12px; background: #fff; box-shadow: var(--shadow-dropdown); animation: vvToast 200ms cubic-bezier(0.34,1.56,0.64,1);">
    <span style="${iconStyle}"><iconify-icon icon="${icon}" width="22"></iconify-icon></span>
    <span style="display: flex; flex-direction: column; gap: 2px; flex: 1;">
      <span style="font-size: 14px; font-weight: 700; color: #1C252E;">${esc(t.title)}</span>
      <span style="font-size: 13px; line-height: 20px; color: #637381;">${esc(t.body)}</span>
    </span>
    <button data-a="closeToast" style="border: none; background: transparent; padding: 0; color: #919EAB; cursor: pointer; display: inline-flex;"><iconify-icon icon="eva:close-fill" width="18"></iconify-icon></button>
  </div>`;
}

function render() {
  const d = derived();
  const active = document.activeElement;
  const focusField = active && active.dataset ? active.dataset.field : null;
  const caret = focusField && active.selectionStart != null ? active.selectionStart : null;

  document.getElementById("app").innerHTML = `
<div style="width: 100%; min-width: 1024px; min-height: 100vh; background: #F4F6F8; position: relative; font-family: var(--font-body);">
  ${sidebar()}
  ${header()}
  <main style="margin-left:280px;padding:${state.screen === "bandeja" ? "104px 40px 64px" : "104px 40px 40px"}">
    ${state.screen === "bandeja" ? bandeja(d) : informe(d)}
  </main>
  ${toastView()}
</div>`;

  if (focusField) {
    const el = document.querySelector('[data-field="' + focusField + '"]');
    if (el) {
      el.focus();
      if (caret != null && el.setSelectionRange) el.setSelectionRange(caret, caret);
    }
  }
}

/* ───────────────────────── Eventos ───────────────────────── */
document.addEventListener("click", (e) => {
  const el = e.target.closest("[data-a]");
  if (!el) return;
  const a = el.dataset.a;
  const i = el.dataset.i != null ? Number(el.dataset.i) : null;
  const v = el.dataset.v;
  const d = derived();

  switch (a) {
    case "nav": return setState({ screen: "bandeja", userMenu: false });
    case "toggleUser": return setState({ userMenu: !state.userMenu });
    case "closeUser": return setState({ userMenu: false });
    case "tab": return setState({ tab: v, page: 1 });
    case "openRow":
    case "openResult": return openExpediente(ROWS[i]);
    case "page": return setState({ page: i });
    case "prevPage": return d.page > 1 && setState({ page: d.page - 1 });
    case "nextPage": return d.page < d.totalPages && setState({ page: d.page + 1 });
    case "goBandeja": return setState({ screen: "bandeja", toast: null });
    case "docTab": return setState({ docTab: v });

    case "pickFile": {
      e.stopPropagation();
      const input = document.getElementById("fileInput");
      if (input) input.click();
      return;
    }
    case "removeFile": {
      e.stopPropagation();
      if (state.file) URL.revokeObjectURL(state.file.url);
      return setState({ file: null, fileError: null });
    }

    case "mark": return mark(CRITERIOS[i], v);
    case "toggleAllFav": {
      if (d.allFav) return setState({ criterios: {}, validado: false });
      const c = {};
      CRITERIOS.forEach(k => { c[k] = "fav"; });
      return setState({ criterios: c, validado: false });
    }

    case "primary": {
      if (d.mode === "contrato") return flash({ kind: "ok", title: "Contrato generado", body: "Se generó el contrato de " + d.c[2] + "." });
      if (!d.allDone) return flash({ kind: "warn", title: "Validación incompleta", body: "Evalúa los " + CRITERIOS.length + " criterios antes de confirmar." });
      if (d.mode === "observacion") {
        if (!state.obsList.length) return flash({ kind: "warn", title: "Faltan observaciones", body: "Registra la observación de los ítems no favorables antes de confirmar." });
        return flash({ kind: "warn", title: "Enviado a comercial", body: "El informe legal de " + d.c[2] + " fue enviado con " + state.obsList.length + " observación" + (state.obsList.length > 1 ? "es" : "") + "." });
      }
      return setState({ modalOpen: true });
    }
    case "closeModal": return setState({ modalOpen: false });
    case "confirmModal": {
      state.modalOpen = false;
      state.validado = true;
      return flash({ kind: "ok", title: "Informe validado", body: "Todos los criterios son favorables. Ya puedes generar el contrato." });
    }

    case "openObsDrawer": return setState({ drawerOpen: true, formOpen: state.obsList.length === 0 });
    case "closeDrawer": return setState({ drawerOpen: false, drawerSelectOpen: false, drawerPicks: [], drawerText: "", formOpen: true });
    case "toggleDrawerSelect": return setState({ drawerSelectOpen: !state.drawerSelectOpen });
    case "togglePick": {
      e.stopPropagation();
      const picks = state.drawerPicks.includes(v) ? state.drawerPicks.filter(x => x !== v) : state.drawerPicks.concat([v]);
      return setState({ drawerPicks: picks });
    }
    case "addObs": return setState({
      obsList: state.obsList.concat([{ items: state.drawerPicks, texto: state.drawerText.trim() }]),
      drawerPicks: [], drawerText: "", drawerSelectOpen: false, formOpen: false
    });
    case "openForm": return setState({ formOpen: true });
    case "removeObs": return setState({ obsList: state.obsList.filter((_, j) => j !== i) });
    case "saveObs": {
      const n = state.obsList.length;
      state.drawerOpen = false; state.drawerSelectOpen = false; state.drawerPicks = []; state.drawerText = ""; state.formOpen = true;
      return flash({ kind: "ok", title: "Observaciones guardadas", body: n + " observación" + (n > 1 ? "es" : "") + " registrada" + (n > 1 ? "s" : "") + "." });
    }

    case "download": {
      const visible = CHECKLIST.filter(x => !state.removed.includes(x[0]));
      return flash({ kind: "info", title: "Descargando documento", body: visible[i][0] + " se está descargando." });
    }
    case "closeToast": return setState({ toast: null });
  }
});

document.addEventListener("input", (e) => {
  const field = e.target.dataset && e.target.dataset.field;
  if (field === "query") return setState({ query: e.target.value, page: 1 });
  if (field === "drawerText") return setState({ drawerText: e.target.value });
});

document.addEventListener("change", (e) => {
  if (e.target.id === "fileInput") handleFile(e.target);
});

render();
