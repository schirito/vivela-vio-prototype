(function(){
  "use strict";

  /* ---------------- Icons ---------------- */
  function icon(name){
    var paths = {
      upload:'<path d="M12 16V4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/><path d="M7 8.5 12 4l5 4.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/><path d="M5 15.5V19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3.5" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>',
      file:'<path d="M7 3.5h7l4 4V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/><path d="M14 3.5V8h4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/>',
      close:'<path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" stroke-width="1.9"/>',
      external:'<path d="M9 6H6a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-3" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/><path d="M14 4h6v6" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/><path d="M20 4 11 13" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/>',
      download:'<path d="M12 4v11" stroke-linecap="round" stroke-width="1.7"/><path d="m7.5 11 4.5 4 4.5-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/><path d="M5 19.5h14" stroke-linecap="round" stroke-width="1.7"/>',
      refresh:'<path d="M4.5 12a7.5 7.5 0 0 1 12.6-5.5L19.5 8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/><path d="M19.5 4v4h-4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/><path d="M19.5 12a7.5 7.5 0 0 1-12.6 5.5L4.5 16" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/><path d="M4.5 20v-4h4" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/>',
      trash:'<path d="M5 7h14" stroke-linecap="round" stroke-width="1.7"/><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/><path d="M7 7l1 12.5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1L17 7" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.7"/>',
      check:'<path d="M5 13l4.5 4.5L19 8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
      info:'<circle cx="12" cy="12" r="9" stroke-width="1.8"/><path d="M12 8h.01M11.5 11.5h1v5h-1" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8"/>'
    };
    return '<svg viewBox="0 0 24 24" fill="none">' + (paths[name] || '') + '</svg>';
  }

  /* ---------------- Data ---------------- */
  var EXCEPTIONS = [
    'Vigencia de poder',
    'Evaluación empresa',
    'Evaluación representación legal',
    'Evaluación predio',
    'Evaluación proyecto (licencias y factibilidad)'
  ];

  var CHECKLIST_DOCS = [
    'Ficha RUC',
    'Vigencia de poder del representante legal',
    'DNI de representantes',
    'Testimonio de constitución',
    'Copia literal',
    'Testimonio compra venta',
    'Tasación',
    'Constancia de no adeudo HR-PU'
  ];

  var STATUS_META = {
    pendiente:{label:'Pendiente', cls:'pendiente'},
    enProceso:{label:'En proceso', cls:'enProceso'},
    observado:{label:'Observado', cls:'observado'},
    desestimado:{label:'Desestimado', cls:'desestimado'},
    atendido:{label:'Atendido', cls:'atendido'}
  };
  var STATUS_ORDER = ['pendiente','enProceso','observado','desestimado','atendido'];

  var INSTANCIAS = ['Vigencia de poder','Evaluación de empresa','Evaluación de representación legal','Evaluación de predio','Evaluación de proyecto'];

  var CLIENTS = [
    {id:1, tipoDocumento:'RUC', documento:'20601234567', razonSocial:'Inmobiliaria Los Pinos S.A.C.', proyecto:'Residencial Los Pinos', estado:'pendiente', instancia:INSTANCIAS[0], fechaRegistro:'2026-08-25', fechaActualizacion:'2026-08-25'},
    {id:2, tipoDocumento:'RUC', documento:'20554987321', razonSocial:'Constructora Andina del Sur S.A.', proyecto:'Condominio Vista Verde', estado:'pendiente', instancia:INSTANCIAS[3], fechaRegistro:'2026-08-24', fechaActualizacion:'2026-08-24'},
    {id:3, tipoDocumento:'RUC', documento:'20489321765', razonSocial:'Grupo Inmobiliario Rímac S.A.C.', proyecto:'Edificio Rímac Plaza', estado:'enProceso', instancia:INSTANCIAS[1], fechaRegistro:'2026-08-10', fechaActualizacion:'2026-08-29'},
    {id:4, tipoDocumento:'RUC', documento:'20512908456', razonSocial:'Desarrollos Urbanos Miraflores S.A.C.', proyecto:'Torres del Malecón', estado:'pendiente', instancia:INSTANCIAS[4], fechaRegistro:'2026-08-22', fechaActualizacion:'2026-08-22'},
    {id:5, tipoDocumento:'RUC', documento:'20478123890', razonSocial:'Promotora San Isidro Empresarial S.A.', proyecto:'San Isidro Business Park', estado:'observado', instancia:INSTANCIAS[2], fechaRegistro:'2026-07-30', fechaActualizacion:'2026-08-27'},
    {id:6, tipoDocumento:'RUC', documento:'20599872341', razonSocial:'Inversiones Costa Verde S.A.C.', proyecto:'Costa Verde Residencial', estado:'enProceso', instancia:INSTANCIAS[0], fechaRegistro:'2026-08-05', fechaActualizacion:'2026-08-28'},
    {id:7, tipoDocumento:'RUC', documento:'20601987654', razonSocial:'Constructora Pacífico Norte S.A.C.', proyecto:'Condominio Pacífico Norte', estado:'atendido', instancia:INSTANCIAS[3], fechaRegistro:'2026-07-12', fechaActualizacion:'2026-08-02'},
    {id:8, tipoDocumento:'RUC', documento:'20523456789', razonSocial:'Grupo Vivienda Perú S.A.', proyecto:'Residencial Las Terrazas', estado:'pendiente', instancia:INSTANCIAS[1], fechaRegistro:'2026-08-20', fechaActualizacion:'2026-08-20'},
    {id:9, tipoDocumento:'RUC', documento:'20487654321', razonSocial:'Inmobiliaria Nueva Lima S.A.C.', proyecto:'Edificio Nueva Lima', estado:'desestimado', instancia:INSTANCIAS[2], fechaRegistro:'2026-07-18', fechaActualizacion:'2026-08-06'},
    {id:10, tipoDocumento:'RUC', documento:'20612345678', razonSocial:'Desarrolladora Andes S.A.C.', proyecto:'Condominio Los Andes', estado:'enProceso', instancia:INSTANCIAS[4], fechaRegistro:'2026-08-08', fechaActualizacion:'2026-08-30'},
    {id:11, tipoDocumento:'RUC', documento:'20599123456', razonSocial:'Promotora Real Sur S.A.C.', proyecto:'Residencial Real Sur', estado:'atendido', instancia:INSTANCIAS[0], fechaRegistro:'2026-07-05', fechaActualizacion:'2026-07-28'},
    {id:12, tipoDocumento:'DNI', documento:'45678912', razonSocial:'Juan Carlos Mendoza Salazar', proyecto:'Vivienda Unifamiliar - Surco', estado:'pendiente', instancia:INSTANCIAS[3], fechaRegistro:'2026-08-27', fechaActualizacion:'2026-08-27'},
    {id:13, tipoDocumento:'RUC', documento:'20476598123', razonSocial:'Constructora Puerto Azul S.A.', proyecto:'Torres Puerto Azul', estado:'pendiente', instancia:INSTANCIAS[1], fechaRegistro:'2026-08-26', fechaActualizacion:'2026-08-26'},
    {id:14, tipoDocumento:'RUC', documento:'20534789012', razonSocial:'Inversiones del Valle S.A.C.', proyecto:'Condominio del Valle', estado:'pendiente', instancia:INSTANCIAS[2], fechaRegistro:'2026-08-19', fechaActualizacion:'2026-08-19'},
    {id:15, tipoDocumento:'RUC', documento:'20567890123', razonSocial:'Grupo Habitat Perú S.A.C.', proyecto:'Residencial Habitat', estado:'pendiente', instancia:INSTANCIAS[4], fechaRegistro:'2026-08-15', fechaActualizacion:'2026-08-15'},
    {id:16, tipoDocumento:'RUC', documento:'20498712345', razonSocial:'Inmobiliaria Sol Naciente S.A.', proyecto:'Edificio Sol Naciente', estado:'pendiente', instancia:INSTANCIAS[0], fechaRegistro:'2026-08-12', fechaActualizacion:'2026-08-12'},
    {id:17, tipoDocumento:'RUC', documento:'20521098765', razonSocial:'Constructora Horizonte S.A.C.', proyecto:'Condominio Horizonte', estado:'pendiente', instancia:INSTANCIAS[1], fechaRegistro:'2026-08-11', fechaActualizacion:'2026-08-11'},
    {id:18, tipoDocumento:'RUC', documento:'20609876543', razonSocial:'Promotora Costa Sol S.A.C.', proyecto:'Residencial Costa Sol', estado:'pendiente', instancia:INSTANCIAS[2], fechaRegistro:'2026-08-06', fechaActualizacion:'2026-08-06'},
    {id:19, tipoDocumento:'RUC', documento:'20487321098', razonSocial:'Inversiones Altamira S.A.', proyecto:'Torres Altamira', estado:'pendiente', instancia:INSTANCIAS[3], fechaRegistro:'2026-07-29', fechaActualizacion:'2026-07-29'},
    {id:20, tipoDocumento:'RUC', documento:'20554321987', razonSocial:'Grupo Urbano Lima S.A.C.', proyecto:'Edificio Urbano Lima', estado:'pendiente', instancia:INSTANCIAS[4], fechaRegistro:'2026-07-22', fechaActualizacion:'2026-07-22'},
    {id:21, tipoDocumento:'RUC', documento:'20612098765', razonSocial:'Desarrollos San Borja S.A.C.', proyecto:'Residencial San Borja', estado:'desestimado', instancia:INSTANCIAS[0], fechaRegistro:'2026-07-14', fechaActualizacion:'2026-08-01'},
    {id:22, tipoDocumento:'RUC', documento:'20476123098', razonSocial:'Constructora Miraflores Norte S.A.', proyecto:'Condominio Miraflores Norte', estado:'atendido', instancia:INSTANCIAS[1], fechaRegistro:'2026-06-30', fechaActualizacion:'2026-07-20'},
    {id:23, tipoDocumento:'RUC', documento:'20598712456', razonSocial:'Inmobiliaria Vista Pacífico S.A.C.', proyecto:'Torres Vista Pacífico', estado:'enProceso', instancia:INSTANCIAS[2], fechaRegistro:'2026-08-02', fechaActualizacion:'2026-08-31'}
  ];

  var PAGE_SIZE = 10;

  /* ---------------- State ---------------- */
  var state = {
    docType:'RUC',
    activeStatus:'pendiente',
    page:1,
    currentClient:null,
    mode:'new', // 'new' | 'view'
    activeInformeTab:'subir',
    uploadedFile:null,
    selectedExceptions:new Set(),
    observaciones:false,
    checklist:{}
  };

  function fmtDate(iso){
    var d = new Date(iso + 'T00:00:00');
    var months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    return d.getDate() + ' ' + months[d.getMonth()] + ' ' + d.getFullYear();
  }
  function daysBetween(iso){
    var d = new Date(iso + 'T00:00:00');
    var now = new Date();
    now.setHours(0,0,0,0);
    return Math.max(0, Math.round((now - d) / 86400000));
  }
  function initials(name){
    var parts = name.trim().split(/\s+/);
    return ((parts[0]||'')[0] + (parts[1]||'')[0]).toUpperCase();
  }
  function slug(s){
    return s.normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-zA-Z0-9]+/g,'_');
  }

  /* ---------------- Toast ---------------- */
  function toast(kind, message){
    var region = document.getElementById('toast-region');
    var el = document.createElement('div');
    el.className = 'toast ' + kind;
    el.innerHTML = icon(kind === 'success' ? 'check' : 'info') + '<span>' + message + '</span>';
    region.appendChild(el);
    setTimeout(function(){
      el.style.transition = 'opacity .2s ease, transform .2s ease';
      el.style.opacity = '0';
      el.style.transform = 'translateY(8px)';
      setTimeout(function(){ el.remove(); }, 200);
    }, 3400);
  }

  /* ---------------- Status tabs ---------------- */
  function renderStatusTabs(){
    var el = document.getElementById('statusTabs');
    el.innerHTML = STATUS_ORDER.map(function(key){
      var count = CLIENTS.filter(function(c){ return c.estado === key; }).length;
      var active = state.activeStatus === key ? ' active' : '';
      return '<button class="status-tab' + active + '" data-status="' + key + '">' +
        STATUS_META[key].label + '<span class="count">' + count + '</span></button>';
    }).join('');
    Array.prototype.forEach.call(el.querySelectorAll('.status-tab'), function(btn){
      btn.addEventListener('click', function(){
        state.activeStatus = btn.getAttribute('data-status');
        state.page = 1;
        renderStatusTabs();
        renderTable();
      });
    });
  }

  /* ---------------- Table ---------------- */
  function filteredClients(){
    return CLIENTS.filter(function(c){ return c.estado === state.activeStatus; });
  }

  function renderTable(){
    var rows = filteredClients();
    var totalPages = Math.max(1, Math.ceil(rows.length / PAGE_SIZE));
    state.page = Math.min(state.page, totalPages);
    var start = (state.page - 1) * PAGE_SIZE;
    var pageRows = rows.slice(start, start + PAGE_SIZE);

    var tbody = document.getElementById('tableBody');
    if(pageRows.length === 0){
      tbody.innerHTML = '<tr><td colspan="8" style="text-align:center;color:var(--text-tertiary);padding:40px 16px;">No hay solicitudes en este estado.</td></tr>';
    } else {
      tbody.innerHTML = pageRows.map(function(c){
        var meta = STATUS_META[c.estado];
        return '<tr data-id="' + c.id + '">' +
          '<td><div class="cell-primary">' + c.proyecto + '</div></td>' +
          '<td><div class="cell-primary">' + c.razonSocial + '</div><div class="cell-secondary">' + c.tipoDocumento + ': ' + c.documento + '</div></td>' +
          '<td><span class="status-chip ' + meta.cls + '">' + meta.label + '</span></td>' +
          '<td>' + c.instancia + '</td>' +
          '<td class="cell-num">' + fmtDate(c.fechaRegistro) + '</td>' +
          '<td class="cell-num">' + daysBetween(c.fechaRegistro) + ' días</td>' +
          '<td class="cell-num">' + fmtDate(c.fechaActualizacion) + '</td>' +
          '<td><button class="link-btn" data-id="' + c.id + '" title="Ver detalle completo">' + icon('external') + '</button></td>' +
        '</tr>';
      }).join('');
    }

    Array.prototype.forEach.call(tbody.querySelectorAll('tr[data-id]'), function(tr){
      tr.addEventListener('click', function(e){
        if(e.target.closest('.link-btn')) return;
        openClient(Number(tr.getAttribute('data-id')));
      });
    });
    Array.prototype.forEach.call(tbody.querySelectorAll('.link-btn'), function(btn){
      btn.addEventListener('click', function(e){
        e.stopPropagation();
        openClient(Number(btn.getAttribute('data-id')));
      });
    });

    var infoEl = document.getElementById('paginationInfo');
    if(rows.length === 0){
      infoEl.textContent = 'Mostrando 0 de 0';
    } else {
      infoEl.textContent = 'Mostrando ' + (start + 1) + '–' + Math.min(start + PAGE_SIZE, rows.length) + ' de ' + rows.length;
    }

    var pagEl = document.getElementById('pagination');
    var html = '<button class="page-btn" id="pagePrev" ' + (state.page === 1 ? 'disabled' : '') + '>' +
      '<svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg></button>';
    for(var p = 1; p <= totalPages; p++){
      html += '<button class="page-btn' + (p === state.page ? ' active' : '') + '" data-page="' + p + '">' + p + '</button>';
    }
    html += '<button class="page-btn" id="pageNext" ' + (state.page === totalPages ? 'disabled' : '') + '>' +
      '<svg viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg></button>';
    pagEl.innerHTML = html;

    var prevBtn = document.getElementById('pagePrev');
    var nextBtn = document.getElementById('pageNext');
    if(prevBtn) prevBtn.addEventListener('click', function(){ state.page = Math.max(1, state.page - 1); renderTable(); });
    if(nextBtn) nextBtn.addEventListener('click', function(){ state.page = Math.min(totalPages, state.page + 1); renderTable(); });
    Array.prototype.forEach.call(pagEl.querySelectorAll('[data-page]'), function(btn){
      btn.addEventListener('click', function(){ state.page = Number(btn.getAttribute('data-page')); renderTable(); });
    });
  }

  /* ---------------- Doc type select ---------------- */
  function setupDocTypeSelect(){
    var trigger = document.getElementById('docTypeTrigger');
    var menu = document.getElementById('docTypeMenu');
    var value = document.getElementById('docTypeValue');
    trigger.addEventListener('click', function(e){
      e.stopPropagation();
      closeAllMenus(menu);
      menu.hidden = !menu.hidden;
    });
    Array.prototype.forEach.call(menu.querySelectorAll('li'), function(li){
      li.addEventListener('click', function(){
        state.docType = li.getAttribute('data-value');
        value.textContent = state.docType;
        Array.prototype.forEach.call(menu.querySelectorAll('li'), function(o){ o.classList.remove('selected'); });
        li.classList.add('selected');
        menu.hidden = true;
        renderSearchResults('');
      });
    });
  }

  /* ---------------- Search ---------------- */
  function renderSearchResults(query){
    var resultsEl = document.getElementById('searchResults');
    if(!query){ resultsEl.hidden = true; resultsEl.innerHTML = ''; return; }
    var q = query.toLowerCase();
    var matches = CLIENTS.filter(function(c){
      return c.tipoDocumento === state.docType && c.razonSocial.toLowerCase().indexOf(q) !== -1;
    }).slice(0, 6);
    if(matches.length === 0){
      resultsEl.innerHTML = '<li class="search-empty">Sin coincidencias para "' + query + '"</li>';
    } else {
      resultsEl.innerHTML = matches.map(function(c){
        return '<li class="search-result" data-id="' + c.id + '">' +
          '<span class="search-result__name">' + c.razonSocial + '</span>' +
          '<span class="search-result__meta">' + c.tipoDocumento + ' ' + c.documento + ' · ' + c.proyecto + '</span>' +
        '</li>';
      }).join('');
      Array.prototype.forEach.call(resultsEl.querySelectorAll('.search-result'), function(li){
        li.addEventListener('click', function(){
          var client = CLIENTS.find(function(c){ return c.id === Number(li.getAttribute('data-id')); });
          document.getElementById('searchInput').value = '';
          resultsEl.hidden = true;
          openInforme(client, 'new');
        });
      });
    }
    resultsEl.hidden = false;
  }

  function setupSearch(){
    var input = document.getElementById('searchInput');
    input.addEventListener('input', function(){ renderSearchResults(input.value.trim()); });
    input.addEventListener('focus', function(){ if(input.value.trim()) renderSearchResults(input.value.trim()); });
  }

  /* ---------------- Navigation ---------------- */
  function openClient(id){
    var client = CLIENTS.find(function(c){ return c.id === id; });
    openInforme(client, 'view');
  }

  function openInforme(client, mode){
    state.currentClient = client;
    state.mode = mode;
    state.activeInformeTab = 'subir';
    state.selectedExceptions = new Set();
    state.observaciones = false;
    state.checklist = {};

    var isView = mode === 'view';
    if(isView){
      state.uploadedFile = { name: 'Informe_Legal_' + slug(client.proyecto) + '.pdf', date: client.fechaActualizacion };
      if(client.estado === 'observado'){
        state.selectedExceptions.add(EXCEPTIONS[2]);
        state.observaciones = true;
      }
      CHECKLIST_DOCS.forEach(function(doc, i){
        var pending = client.estado === 'observado' && i === 2;
        state.checklist[doc] = pending ? {status:'pendiente'} : {status:'subido', date: client.fechaRegistro};
      });
    } else {
      state.uploadedFile = null;
      CHECKLIST_DOCS.forEach(function(doc){ state.checklist[doc] = {status:'pendiente'}; });
    }

    document.getElementById('informeSubtitle').textContent =
      client.razonSocial + ' · ' + client.tipoDocumento + ' ' + client.documento + ' · ' + client.proyecto;
    document.getElementById('topbarTitle').textContent = 'Informe Legal';

    renderUploadZone();
    renderExceptions();
    document.getElementById('observacionesCheckbox').checked = state.observaciones;
    document.getElementById('commentBox').value = '';
    switchInformeTab('subir');
    renderChecklist();
    updateSaveButton();

    document.getElementById('view-bandeja').hidden = true;
    document.getElementById('view-informe').hidden = false;
    document.getElementById('navBandeja').classList.remove('active');
  }

  function goBackToBandeja(){
    document.getElementById('view-informe').hidden = true;
    document.getElementById('view-bandeja').hidden = false;
    document.getElementById('navBandeja').classList.add('active');
    document.getElementById('topbarTitle').textContent = 'Mi bandeja';
    renderStatusTabs();
    renderTable();
  }

  document.getElementById('backBtn').addEventListener('click', goBackToBandeja);
  document.getElementById('navBandeja').addEventListener('click', function(){
    if(!document.getElementById('view-bandeja').hidden) return;
    goBackToBandeja();
  });

  /* ---------------- Upload zone ---------------- */
  function renderUploadZone(){
    var wrap = document.getElementById('uploadZoneWrap');
    if(state.uploadedFile){
      wrap.innerHTML =
        '<div class="file-chip">' +
          '<div class="file-chip__icon">' + icon('file') + '</div>' +
          '<div>' +
            '<div class="file-chip__name">' + state.uploadedFile.name + '</div>' +
            '<div class="file-chip__meta">Subido el ' + fmtDate(state.uploadedFile.date) + '</div>' +
          '</div>' +
          '<button class="file-chip__remove" id="removeFileBtn" title="Quitar archivo">' + icon('close') + '</button>' +
        '</div>';
      document.getElementById('removeFileBtn').addEventListener('click', function(){
        state.uploadedFile = null;
        renderUploadZone();
      });
    } else {
      wrap.innerHTML =
        '<label class="upload-zone" id="uploadZone">' +
          icon('upload') +
          '<span class="upload-zone__label">Subir Informe Legal</span>' +
          '<span class="upload-zone__hint">PDF, DOCX · máx. 20 MB</span>' +
          '<input type="file" id="fileInput" hidden accept=".pdf,.doc,.docx" />' +
        '</label>';
      document.getElementById('fileInput').addEventListener('change', function(e){
        var file = e.target.files[0];
        if(file){
          state.uploadedFile = { name:file.name, date: new Date().toISOString().slice(0,10) };
          renderUploadZone();
        }
      });
    }
  }

  /* ---------------- Exceptions multiselect ---------------- */
  function renderExceptions(){
    var menu = document.getElementById('exceptionsMenu');
    menu.innerHTML = EXCEPTIONS.map(function(opt){
      var checked = state.selectedExceptions.has(opt) ? 'checked' : '';
      return '<label class="option-row"><input type="checkbox" value="' + opt + '" ' + checked + '/>' + opt + '</label>';
    }).join('');
    Array.prototype.forEach.call(menu.querySelectorAll('input'), function(cb){
      cb.addEventListener('change', function(){
        if(cb.checked) state.selectedExceptions.add(cb.value); else state.selectedExceptions.delete(cb.value);
        renderExceptionsTrigger();
        updateSaveButton();
      });
    });
    renderExceptionsTrigger();
  }

  function renderExceptionsTrigger(){
    var trigger = document.getElementById('exceptionsTrigger');
    var chevron = '<svg class="multiselect-trigger__chevron" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></svg>';
    if(state.selectedExceptions.size === 0){
      trigger.innerHTML = '<span class="multiselect-trigger__placeholder">Seleccionar excepciones</span>' + chevron;
    } else {
      trigger.innerHTML = Array.from(state.selectedExceptions).map(function(e){ return '<span class="chip">' + e + '</span>'; }).join('') + chevron;
    }
  }

  document.getElementById('exceptionsTrigger').addEventListener('click', function(e){
    e.stopPropagation();
    var menu = document.getElementById('exceptionsMenu');
    closeAllMenus(menu);
    menu.hidden = !menu.hidden;
  });

  document.getElementById('observacionesCheckbox').addEventListener('change', function(e){
    state.observaciones = e.target.checked;
    updateSaveButton();
  });

  /* ---------------- Checklist ---------------- */
  function renderChecklist(){
    var list = document.getElementById('checklistList');
    list.innerHTML = CHECKLIST_DOCS.map(function(doc){
      var item = state.checklist[doc] || {status:'pendiente'};
      var uploaded = item.status === 'subido';
      return '<li class="checklist-item' + (uploaded ? ' is-uploaded' : '') + '" data-doc="' + doc + '">' +
        '<div class="checklist-item__icon">' + icon('file') + '</div>' +
        '<div class="checklist-item__body">' +
          '<div class="checklist-item__name">' + doc + '</div>' +
          '<div class="checklist-item__status">' + (uploaded ? 'Subido el ' + fmtDate(item.date) : 'Pendiente de carga') + '</div>' +
        '</div>' +
        '<div class="checklist-item__actions">' +
          '<button class="chk-btn" data-action="download" ' + (uploaded ? '' : 'disabled') + ' title="Descargar">' + icon('download') + '</button>' +
          '<button class="chk-btn" data-action="update" title="Actualizar">' + icon('refresh') + '</button>' +
          '<button class="chk-btn danger" data-action="delete" ' + (uploaded ? '' : 'disabled') + ' title="Eliminar">' + icon('trash') + '</button>' +
        '</div>' +
      '</li>';
    }).join('');
    Array.prototype.forEach.call(list.querySelectorAll('.chk-btn'), function(btn){
      btn.addEventListener('click', function(){
        var li = btn.closest('.checklist-item');
        var doc = li.getAttribute('data-doc');
        var action = btn.getAttribute('data-action');
        if(action === 'update'){
          state.checklist[doc] = { status:'subido', date: new Date().toISOString().slice(0,10) };
          toast('success', '"' + doc + '" se actualizó correctamente.');
        } else if(action === 'delete'){
          state.checklist[doc] = { status:'pendiente' };
          toast('info', '"' + doc + '" se eliminó del expediente.');
        } else if(action === 'download'){
          toast('info', 'Descargando "' + doc + '"…');
        }
        renderChecklist();
      });
    });
  }

  /* ---------------- Tabs (informe) ---------------- */
  function switchInformeTab(tabName){
    state.activeInformeTab = tabName;
    Array.prototype.forEach.call(document.querySelectorAll('#informeTabs .tab'), function(btn){
      btn.classList.toggle('active', btn.getAttribute('data-tab') === tabName);
    });
    document.getElementById('panel-subir').hidden = tabName !== 'subir';
    document.getElementById('panel-checklist').hidden = tabName !== 'checklist';
  }
  Array.prototype.forEach.call(document.querySelectorAll('#informeTabs .tab'), function(btn){
    btn.addEventListener('click', function(){ switchInformeTab(btn.getAttribute('data-tab')); });
  });

  /* ---------------- Save / Generar contrato ---------------- */
  function updateSaveButton(){
    var hasExceptions = state.selectedExceptions.size > 0;
    var hasObservations = state.observaciones;
    var btn = document.getElementById('saveBtn');
    btn.textContent = (!hasExceptions && !hasObservations) ? 'Generar contrato' : 'Guardar';
  }

  document.getElementById('saveBtn').addEventListener('click', function(){
    var btn = document.getElementById('saveBtn');
    var client = state.currentClient;
    if(btn.textContent === 'Generar contrato'){
      client.estado = 'atendido';
      client.fechaActualizacion = new Date().toISOString().slice(0,10);
      toast('success', 'Contrato generado correctamente para ' + client.razonSocial + '.');
    } else {
      client.estado = 'observado';
      client.fechaActualizacion = new Date().toISOString().slice(0,10);
      toast('info', 'El informe fue enviado a Comercial para su subsanación.');
    }
    setTimeout(goBackToBandeja, 900);
  });

  /* ---------------- Header dropdowns ---------------- */
  function closeAllMenus(except){
    [document.getElementById('docTypeMenu'), document.getElementById('exceptionsMenu'),
     document.getElementById('notifPanel'), document.getElementById('userPanel')].forEach(function(m){
      if(m && m !== except) m.hidden = true;
    });
    var sr = document.getElementById('searchResults');
    if(sr && sr !== except) sr.hidden = true;
  }

  document.getElementById('notifBtn').addEventListener('click', function(e){
    e.stopPropagation();
    var panel = document.getElementById('notifPanel');
    closeAllMenus(panel);
    panel.hidden = !panel.hidden;
  });
  document.getElementById('avatarBtn').addEventListener('click', function(e){
    e.stopPropagation();
    var panel = document.getElementById('userPanel');
    closeAllMenus(panel);
    panel.hidden = !panel.hidden;
  });
  document.getElementById('viewProfileBtn').addEventListener('click', function(){
    document.getElementById('userPanel').hidden = true;
    toast('info', 'Perfil de María Fernanda Ríos · Analista Legal');
  });
  document.getElementById('logoutBtn').addEventListener('click', function(){
    document.getElementById('userPanel').hidden = true;
    toast('info', 'Sesión cerrada (demostración).');
  });

  document.addEventListener('click', function(){ closeAllMenus(null); });

  /* ---------------- Init ---------------- */
  setupDocTypeSelect();
  setupSearch();
  renderStatusTabs();
  renderTable();
})();
