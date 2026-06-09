import React, { useState, useEffect } from 'react'
import './adminterno.css'

// Types
interface Colaborador {
  id: string
  nome: string
  cargo: string
  valorBase: number
  pix: string
  dataInicio: string
  status: string
}

interface Vale {
  id: string
  colaboradorId: string
  valor: number
  data: string
  status: 'Pendente' | 'Aprovado' | 'Recusado'
}

interface Falta {
  id: string
  colaboradorId: string
  data: string
}

interface Comissao {
  id: string
  colaboradorId: string
  valor: number
  mes: string
}

interface Note {
  id: string
  titulo: string
  conteudo: string
  data: string
}

// Mock Data
const MOCK_COLABORADORES: Colaborador[] = [
  {
    id: "col-1",
    nome: "Mariana Silva",
    cargo: "Vendedora",
    valorBase: 3000,
    pix: "mariana.silva@pix.com",
    dataInicio: "2025-01-10",
    status: "Ativo"
  },
  {
    id: "col-2",
    nome: "Beatriz Ramos",
    cargo: "Social Media",
    valorBase: 2500,
    pix: "beatriz.ramos@pix.com",
    dataInicio: "2025-03-15",
    status: "Ativo"
  },
  {
    id: "col-3",
    nome: "Carlos Souza",
    cargo: "Designer de Joias",
    valorBase: 4500,
    pix: "carlos.souza@pix.com",
    dataInicio: "2024-11-01",
    status: "Ativo"
  }
];

const MOCK_VALES: Vale[] = [
  { id: "val-1", colaboradorId: "col-1", valor: 400, data: "2026-05-10", status: "Aprovado" },
  { id: "val-2", colaboradorId: "col-1", valor: 250, data: "2026-05-18", status: "Aprovado" },
  { id: "val-3", colaboradorId: "col-2", valor: 300, data: "2026-05-12", status: "Aprovado" }
];

const MOCK_FALTAS: Falta[] = [
  { id: "fal-1", colaboradorId: "col-1", data: "2026-05-08" },
  { id: "fal-2", colaboradorId: "col-1", data: "2026-05-15" },
  { id: "fal-3", colaboradorId: "col-3", data: "2026-05-20" }
];

const MOCK_COMISSOES: Comissao[] = [
  { id: "com-1", colaboradorId: "col-1", valor: 850, mes: "2026-05" },
  { id: "com-2", colaboradorId: "col-2", valor: 300, mes: "2026-05" }
];

export default function Adminterno() {
  // Authentication State
  const [loginUser, setLoginUser] = useState('')
  const [loginPass, setLoginPass] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Navigation State
  const [currentView, setCurrentView] = useState<'dashboard' | 'colaboradores' | 'perfil' | 'faltas' | 'vales' | 'comissoes' | 'fechamento' | 'anotacoes'>('dashboard')
  const [activeColaboradorId, setActiveColaboradorId] = useState<string | null>(null)
  const [faltasActiveColaboradorId, setFaltasActiveColaboradorId] = useState<string>('')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isColModalOpen, setIsColModalOpen] = useState(false)

  // Database State
  const [colaboradores, setColaboradores] = useState<Colaborador[]>([])
  const [vales, setVales] = useState<Vale[]>([])
  const [faltas, setFaltas] = useState<Falta[]>([])
  const [comissoes, setComissoes] = useState<Comissao[]>([])
  const [notes, setNotes] = useState<Note[]>([])

  // Form: Notes
  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false)
  const [noteFormTitle, setNoteFormTitle] = useState('')
  const [noteFormContent, setNoteFormContent] = useState('')
  const [noteFormId, setNoteFormId] = useState<string | null>(null)
  const [notesSearchQuery, setNotesSearchQuery] = useState('')

  // Search & Forms State
  const [searchQuery, setSearchQuery] = useState('')
  const [currentMonth] = useState('2026-05')

  // Form: Add Colaborador
  const [formColNome, setFormColNome] = useState('')
  const [formColCargo, setFormColCargo] = useState('')
  const [formColValor, setFormColValor] = useState('')
  const [formColPix, setFormColPix] = useState('')
  const [formColData, setFormColData] = useState(new Date().toISOString().split('T')[0])

  // Form: Edit Colaborador
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [editColNome, setEditColNome] = useState('')
  const [editColCargo, setEditColCargo] = useState('')
  const [editColValor, setEditColValor] = useState('')
  const [editColPix, setEditColPix] = useState('')
  const [editColData, setEditColData] = useState('')
  const [editColStatus, setEditColStatus] = useState('Ativo')

  // Form: Add Vale
  const [formValeCol, setFormValeCol] = useState('')
  const [formValeValor, setFormValeValor] = useState('')
  const [formValeData, setFormValeData] = useState(new Date().toISOString().split('T')[0])

  // Form: Add Comissao
  const [formComissaoCol, setFormComissaoCol] = useState('')
  const [formComissaoValor, setFormComissaoValor] = useState('')

  // Fechamento Select State
  const [calcColId, setCalcColId] = useState('')

  // Toast State
  const [toastActive, setToastActive] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const [toastIcon, setToastIcon] = useState('check_circle')
  const [toastIsError, setToastIsError] = useState(false)

  // Initial Load & Auth Check
  useEffect(() => {
    // Check Session
    const session = sessionStorage.getItem('admin_session')
    if (session === 'true') {
      setIsAuthenticated(true)
    }

    // Load Local Data or Mock
    const localCols = localStorage.getItem('colaboradores')
    const localVales = localStorage.getItem('vales')
    const localFaltas = localStorage.getItem('faltas')
    const localComissoes = localStorage.getItem('comissoes')

    if (localCols) setColaboradores(JSON.parse(localCols))
    else {
      setColaboradores(MOCK_COLABORADORES)
      localStorage.setItem('colaboradores', JSON.stringify(MOCK_COLABORADORES))
    }

    if (localVales) setVales(JSON.parse(localVales))
    else {
      setVales(MOCK_VALES)
      localStorage.setItem('vales', JSON.stringify(MOCK_VALES))
    }

    if (localFaltas) setFaltas(JSON.parse(localFaltas))
    else {
      setFaltas(MOCK_FALTAS)
      localStorage.setItem('faltas', JSON.stringify(MOCK_FALTAS))
    }

    if (localComissoes) setComissoes(JSON.parse(localComissoes))
    else {
      setComissoes(MOCK_COMISSOES)
      localStorage.setItem('comissoes', JSON.stringify(MOCK_COMISSOES))
    }

    const localNotes = localStorage.getItem('anotacoes')
    if (localNotes) setNotes(JSON.parse(localNotes))
    else {
      const defaultNotes = [
        {
          id: 'note-1',
          titulo: 'Lembrete de Fechamento',
          conteudo: 'Lembrar de fechar as contas de repasse até o dia 5 de cada mês e enviar os comprovantes PIX.',
          data: new Date().toISOString().split('T')[0]
        }
      ]
      setNotes(defaultNotes)
      localStorage.setItem('anotacoes', JSON.stringify(defaultNotes))
    }
  }, [])

  // Set default selectors when lists load
  useEffect(() => {
    if (colaboradores.length > 0) {
      if (!faltasActiveColaboradorId) setFaltasActiveColaboradorId(colaboradores[0].id)
      if (!formValeCol) setFormValeCol(colaboradores[0].id)
      if (!formComissaoCol) setFormComissaoCol(colaboradores[0].id)
      if (!calcColId) setCalcColId(colaboradores[0].id)
    }
  }, [colaboradores])

  // Helper: Toast
  const showToast = (message: string, icon = 'check_circle', isError = false) => {
    setToastMsg(message)
    setToastIcon(icon)
    setToastIsError(isError)
    setToastActive(true)
    setTimeout(() => {
      setToastActive(false)
    }, 2500)
  }

  // Helper: Format Currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  // Handle Login Submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (loginUser === 'PerolaPratasAdm' && loginPass === '1234') {
      setIsAuthenticated(true)
      sessionStorage.setItem('admin_session', 'true')
      showToast('Login efetuado!', 'check_circle')
    } else {
      showToast('Login ou senha inválidos.', 'warning', true)
    }
  }

  // Navigation Trigger
  const navigateTo = (viewId: typeof currentView, collaboratorId: string | null = null) => {
    setIsDrawerOpen(false)
    
    // Reset Scroll Position
    const mainEl = document.querySelector('.admin-wrapper main')
    if (mainEl) mainEl.scrollTop = 0

    if (viewId === 'perfil' && collaboratorId) {
      setActiveColaboradorId(collaboratorId)
    }
    setCurrentView(viewId)
  }

  // DB Mutators
  const saveColaboradores = (newCols: Colaborador[]) => {
    setColaboradores(newCols)
    localStorage.setItem('colaboradores', JSON.stringify(newCols))
  }

  const saveVales = (newVales: Vale[]) => {
    setVales(newVales)
    localStorage.setItem('vales', JSON.stringify(newVales))
  }

  const saveFaltas = (newFaltas: Falta[]) => {
    setFaltas(newFaltas)
    localStorage.setItem('faltas', JSON.stringify(newFaltas))
  }

  const saveComissoes = (newComs: Comissao[]) => {
    setComissoes(newComs)
    localStorage.setItem('comissoes', JSON.stringify(newComs))
  }

  // Add Colaborador
  const handleAddColaborador = () => {
    const valor = parseFloat(formColValor)
    if (!formColNome || !formColCargo || isNaN(valor) || valor <= 0 || !formColPix || !formColData) {
      showToast('Preencha todos os campos.', 'warning', true)
      return
    }

    const newCol: Colaborador = {
      id: 'col-' + Date.now(),
      nome: formColNome,
      cargo: formColCargo,
      valorBase: valor,
      pix: formColPix,
      dataInicio: formColData,
      status: 'Ativo'
    }

    saveColaboradores([...colaboradores, newCol])
    setIsColModalOpen(false)
    // Clear Form
    setFormColNome('')
    setFormColCargo('')
    setFormColValor('')
    setFormColPix('')
    showToast('Colaborador cadastrado!', 'check_circle')
  }

  // Edit Colaborador
  const openEditModal = (col: Colaborador) => {
    setEditColNome(col.nome)
    setEditColCargo(col.cargo)
    setEditColValor(col.valorBase.toString())
    setEditColPix(col.pix)
    setEditColData(col.dataInicio)
    setEditColStatus(col.status)
    setIsEditModalOpen(true)
  }

  const handleEditColaborador = () => {
    const valor = parseFloat(editColValor)
    if (!editColNome || !editColCargo || isNaN(valor) || valor <= 0 || !editColPix || !editColData) {
      showToast('Preencha todos os campos.', 'warning', true)
      return
    }

    if (!activeColaboradorId) return

    const updatedCols = colaboradores.map(c => {
      if (c.id === activeColaboradorId) {
        return {
          ...c,
          nome: editColNome,
          cargo: editColCargo,
          valorBase: valor,
          pix: editColPix,
          dataInicio: editColData,
          status: editColStatus
        }
      }
      return c
    })

    saveColaboradores(updatedCols)
    setIsEditModalOpen(false)
    showToast('Colaborador atualizado!', 'check_circle')
  }

  // Delete Colaborador
  const handleDeleteColaborador = (colId: string) => {
    if (confirm('Tem certeza que deseja excluir este colaborador e todos os seus lançamentos?')) {
      const updatedCols = colaboradores.filter(c => c.id !== colId)
      saveColaboradores(updatedCols)

      // Clean up associated data
      const updatedVales = vales.filter(v => v.colaboradorId !== colId)
      saveVales(updatedVales)

      const updatedFaltas = faltas.filter(f => f.colaboradorId !== colId)
      saveFaltas(updatedFaltas)

      const updatedComissoes = comissoes.filter(c => c.colaboradorId !== colId)
      saveComissoes(updatedComissoes)

      // Reset selection state if necessary
      if (faltasActiveColaboradorId === colId) setFaltasActiveColaboradorId('')
      if (formValeCol === colId) setFormValeCol('')
      if (formComissaoCol === colId) setFormComissaoCol('')
      if (calcColId === colId) setCalcColId('')

      navigateTo('colaboradores')
      showToast('Colaborador excluído!', 'delete')
    }
  }

  // Add Vale
  const handleAddVale = () => {
    const val = parseFloat(formValeValor)
    if (!formValeCol || isNaN(val) || val <= 0 || !formValeData) {
      showToast('Preencha os campos corretamente.', 'warning', true)
      return
    }

    const newVale: Vale = {
      id: 'val-' + Date.now(),
      colaboradorId: formValeCol,
      valor: val,
      data: formValeData,
      status: 'Aprovado'
    }

    saveVales([...vales, newVale])
    setFormValeValor('')
    showToast('Vale registrado!', 'check_circle')
  }

  // Delete Vale
  const handleDeleteVale = (valeId: string) => {
    const updated = vales.filter(v => v.id !== valeId)
    saveVales(updated)
    showToast('Vale excluído!', 'delete')
  }

  // Notes Actions
  const saveNotes = (newNotes: Note[]) => {
    setNotes(newNotes)
    localStorage.setItem('anotacoes', JSON.stringify(newNotes))
  }

  const handleOpenNoteModal = (note: Note | null = null) => {
    if (note) {
      setNoteFormId(note.id)
      setNoteFormTitle(note.titulo)
      setNoteFormContent(note.conteudo)
    } else {
      setNoteFormId(null)
      setNoteFormTitle('')
      setNoteFormContent('')
    }
    setIsNoteModalOpen(true)
  }

  const handleSaveNote = () => {
    if (!noteFormTitle || !noteFormContent) {
      showToast('Preencha o título e o conteúdo.', 'warning', true)
      return
    }

    if (noteFormId) {
      const updated = notes.map(n => {
        if (n.id === noteFormId) {
          return {
            ...n,
            titulo: noteFormTitle,
            conteudo: noteFormContent,
            data: new Date().toISOString().split('T')[0]
          }
        }
        return n
      })
      saveNotes(updated)
      showToast('Anotação atualizada!', 'check_circle')
    } else {
      const newNote: Note = {
        id: 'note-' + Date.now(),
        titulo: noteFormTitle,
        conteudo: noteFormContent,
        data: new Date().toISOString().split('T')[0]
      }
      saveNotes([...notes, newNote])
      showToast('Anotação criada!', 'check_circle')
    }
    setIsNoteModalOpen(false)
  }

  const handleDeleteNote = (noteId: string) => {
    if (confirm('Deseja realmente excluir esta anotação?')) {
      const updated = notes.filter(n => n.id !== noteId)
      saveNotes(updated)
      showToast('Anotação excluída!', 'delete')
    }
  }

  // Add Commission
  const handleAddComissao = () => {
    const val = parseFloat(formComissaoValor)
    if (!formComissaoCol || isNaN(val) || val <= 0) {
      showToast('Selecione o colaborador e informe o valor.', 'warning', true)
      return
    }

    // Check if there is already commission for this user in May
    const matchIdx = comissoes.findIndex(c => c.colaboradorId === formComissaoCol && c.mes === currentMonth)
    if (matchIdx !== -1) {
      const updated = [...comissoes]
      updated[matchIdx].valor = val
      saveComissoes(updated)
    } else {
      const newCom: Comissao = {
        id: 'com-' + Date.now(),
        colaboradorId: formComissaoCol,
        valor: val,
        mes: currentMonth
      }
      saveComissoes([...comissoes, newCom])
    }

    setFormComissaoValor('')
    showToast('Comissão lançada!', 'check_circle')
  }

  // Toggle Absence on Calendar
  const handleCalendarDayClick = (collaboratorId: string, dataStr: string) => {
    const existingIdx = faltas.findIndex(f => f.colaboradorId === collaboratorId && f.data === dataStr)
    if (existingIdx !== -1) {
      // Remove Absence
      const updated = faltas.filter((_, idx) => idx !== existingIdx)
      saveFaltas(updated)
      showToast('Falta removida!', 'info')
    } else {
      // Add Absence
      const newFalta: Falta = {
        id: 'fal-' + Date.now(),
        colaboradorId: collaboratorId,
        data: dataStr
      }
      saveFaltas([...faltas, newFalta])
      showToast('Falta marcada!', 'check_circle')
    }
  }

  // Calculations
  const getAbsencesCount = (colId: string) => {
    return faltas.filter(f => f.colaboradorId === colId && f.data.startsWith(currentMonth)).length
  }

  const getComissaoValue = (colId: string) => {
    const c = comissoes.find(com => com.colaboradorId === colId && com.mes === currentMonth)
    return c ? c.valor : 0
  }

  const getValesTotal = (colId: string) => {
    return vales
      .filter(v => v.colaboradorId === colId && v.status === 'Aprovado' && v.data.startsWith(currentMonth))
      .reduce((sum, v) => sum + v.valor, 0)
  }

  const getCalculation = (colId: string) => {
    const col = colaboradores.find(c => c.id === colId)
    if (!col) return { base: 0, comissao: 0, faltas: 0, faltasCount: 0, vales: 0, liquido: 0 }

    const base = col.valorBase
    const comissao = getComissaoValue(colId)
    const faltasCount = getAbsencesCount(colId)
    const discountFaltas = Math.round((faltasCount * (base / 30)) * 100) / 100
    const valesSum = getValesTotal(colId)
    const liquido = Math.max(0, base + comissao - discountFaltas - valesSum)

    return {
      base,
      comissao,
      faltas: discountFaltas,
      faltasCount,
      vales: valesSum,
      liquido
    }
  }

  // Combined Dashboard Liquid Total
  const getDashboardTotalLiquido = () => {
    return colaboradores.reduce((sum, col) => sum + getCalculation(col.id).liquido, 0)
  }

  // Copy PIX Clipboard
  const handleCopyPix = (pixText: string) => {
    navigator.clipboard.writeText(pixText)
      .then(() => showToast('Chave PIX copiada!', 'content_copy'))
      .catch(() => showToast('Erro ao copiar PIX.', 'warning', true))
  }

  // Premium Alert Trigger
  const handlePremiumAlert = () => {
    showToast('Recurso Premium (Fase 2)', 'lock')
  }

  // Render Calendar Helper for May 2026 (Starts on Friday, 31 days)
  const renderCalendarDays = (colId: string) => {
    const days: React.ReactNode[] = []
    const startingOffset = 5 // Friday offset
    const totalDays = 31

    // Empty lead cells
    for (let i = 0; i < startingOffset; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>)
    }

    // Days grid
    for (let d = 1; d <= totalDays; d++) {
      const dayStr = d < 10 ? `0${d}` : `${d}`
      const dateStr = `${currentMonth}-${dayStr}`
      const isAbsent = faltas.some(f => f.colaboradorId === colId && f.data === dateStr)
      const isToday = d === 27 // Mock today: 27th May

      days.push(
        <div
          key={`day-${d}`}
          className={`calendar-day ${isAbsent ? 'absent' : ''} ${isToday ? 'today' : ''}`}
          onClick={() => handleCalendarDayClick(colId, dateStr)}
        >
          {d}
        </div>
      )
    }

    return days
  }

  // If Not Authenticated, render Login page
  if (!isAuthenticated) {
    return (
      <div className="admin-wrapper" style={{ justifyContent: 'center' }}>
        <div className="login-screen">
          <div className="login-card">
            <div className="login-title-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div className="profile-avatar-placeholder" style={{ backgroundColor: 'var(--primary)', color: '#fff', border: 'none' }}>PP</div>
              <h2>Pérola Pratas</h2>
              <span className="subtitle" style={{ fontSize: '13px' }}>Painel Administrativo Interno</span>
            </div>
            
            <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="form-group">
                <label htmlFor="user">Login</label>
                <input
                  type="text"
                  id="user"
                  value={loginUser}
                  onChange={(e) => setLoginUser(e.target.value)}
                  placeholder="Seu usuário"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="pass">Senha</label>
                <input
                  type="password"
                  id="pass"
                  value={loginPass}
                  onChange={(e) => setLoginPass(e.target.value)}
                  placeholder="Sua senha"
                  required
                />
              </div>
              
              <button type="submit" className="btn" style={{ marginTop: '8px' }}>
                <span className="material-symbols-outlined">login</span> Entrar no Painel
              </button>
            </form>
          </div>
        </div>
        
        {/* Toast Alert */}
        <div className={`toast ${toastActive ? 'active' : ''}`} style={toastIsError ? { backgroundColor: 'var(--error)' } : {}}>
          <span className="material-symbols-outlined">{toastIcon}</span>
          <span>{toastMsg}</span>
        </div>
      </div>
    )
  }

  // Active profile object
  const activeColaborador = colaboradores.find(c => c.id === activeColaboradorId)

  // Calculations for closing selector
  const calcRes = getCalculation(calcColId)

  return (
    <div className="admin-wrapper">
      
      {/* Header */}
      <header>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <button className="header-action" onClick={() => setIsDrawerOpen(true)} title="Menu de Opções">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <span className="brand-name">Pérola Pratas</span>
        </div>
        <button className="header-action" title="Funcionando Localmente">
          <span className="material-symbols-outlined">cloud_done</span>
        </button>
      </header>

      {/* Drawer Overlay Menu */}
      <div className={`drawer-overlay ${isDrawerOpen ? 'active' : ''}`} onClick={(e) => e.target === e.currentTarget && setIsDrawerOpen(false)}>
        <div className="drawer-content">
          <div className="drawer-header">
            <div className="profile-avatar-placeholder" style={{ width: '40px', height: '40px', fontSize: '15px' }}>PP</div>
            <div>
              <span className="brand-name" style={{ color: 'var(--primary)' }}>Pérola Pratas</span>
              <p style={{ fontSize: '11px', color: 'var(--secondary)' }}>Gestão de Colaboradores</p>
            </div>
            <button className="btn-close-modal" onClick={() => setIsDrawerOpen(false)} style={{ fontSize: '28px', marginLeft: 'auto' }}>&times;</button>
          </div>
          
          <ul className="drawer-menu">
            <li className={`menu-item ${currentView === 'dashboard' ? 'active' : ''}`} onClick={() => navigateTo('dashboard')}>
              <span className="material-symbols-outlined">dashboard</span> Início (Métricas)
            </li>
            <li className={`menu-item ${currentView === 'colaboradores' ? 'active' : ''}`} onClick={() => navigateTo('colaboradores')}>
              <span className="material-symbols-outlined">group</span> Equipe (Colaboradores)
            </li>
            <li className={`menu-item ${currentView === 'faltas' ? 'active' : ''}`} onClick={() => navigateTo('faltas')}>
              <span className="material-symbols-outlined">calendar_today</span> Lançar Faltas
            </li>
            <li className={`menu-item ${currentView === 'vales' ? 'active' : ''}`} onClick={() => navigateTo('vales')}>
              <span className="material-symbols-outlined">payments</span> Adiantamentos (Vales)
            </li>
            <li className={`menu-item ${currentView === 'comissoes' ? 'active' : ''}`} onClick={() => navigateTo('comissoes')}>
              <span className="material-symbols-outlined">add_chart</span> Lançar Comissões
            </li>
            <li className={`menu-item ${currentView === 'fechamento' ? 'active' : ''}`} onClick={() => navigateTo('fechamento')}>
              <span className="material-symbols-outlined">account_balance_wallet</span> Fechamento de Caixa
            </li>
            <li className={`menu-item ${currentView === 'anotacoes' ? 'active' : ''}`} onClick={() => navigateTo('anotacoes')}>
              <span className="material-symbols-outlined">edit_note</span> Anotações Gerais
            </li>
            
            <li className="drawer-separator"></li>
            <li className="drawer-section-title">Fase 2 / Premium</li>
            
            <li className="menu-item disabled" onClick={handlePremiumAlert}>
              <span className="material-symbols-outlined">description</span> Notas Fiscais (Bloqueado)
              <span className="material-symbols-outlined" style={{ fontSize: '14px', marginLeft: 'auto' }}>lock</span>
            </li>
            <li className="menu-item disabled" onClick={handlePremiumAlert}>
              <span className="material-symbols-outlined">history</span> Contratos (Bloqueado)
              <span className="material-symbols-outlined" style={{ fontSize: '14px', marginLeft: 'auto' }}>lock</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content Areas */}
      <main>
        
        {/* 1. DASHBOARD */}
        {currentView === 'dashboard' && (
          <div className="view active">
            <div>
              <h1>Painel de Métricas</h1>
              <p className="subtitle">Bem-vindo ao controle operacional da Pérola Pratas.</p>
            </div>

            <div className="metrics-grid">
              <div className="metric-card clickable" onClick={() => navigateTo('colaboradores')}>
                <span className="metric-title">Colaboradores</span>
                <span className="metric-value">{colaboradores.length}</span>
                <span className="metric-footer">Ver equipe cadastrada →</span>
              </div>
              <div className="metric-card clickable" onClick={() => navigateTo('faltas')}>
                <span className="metric-title">Ausências (Maio)</span>
                <span className="metric-value" style={{ color: 'var(--error)' }}>
                  {faltas.filter(f => f.data.startsWith(currentMonth)).length}
                </span>
                <span className="metric-footer">Marcar faltas no calendário →</span>
              </div>
              <div className="metric-card clickable" onClick={() => navigateTo('vales')}>
                <span className="metric-title">Total em Vales</span>
                <span className="metric-value" style={{ color: 'var(--warning)' }}>
                  {formatCurrency(vales.filter(v => v.data.startsWith(currentMonth)).reduce((sum, v) => sum + v.valor, 0))}
                </span>
                <span className="metric-footer">Histórico e adiantamentos →</span>
              </div>
              <div className="metric-card clickable" onClick={() => navigateTo('fechamento')}>
                <span className="metric-title">Repasse Líquido</span>
                <span className="metric-value" style={{ color: 'var(--success)' }}>
                  {formatCurrency(getDashboardTotalLiquido())}
                </span>
                <span className="metric-footer">Visualizar fechamento de caixa →</span>
              </div>
            </div>

            <div>
              <h2>Acesso Rápido</h2>
              <div className="quick-actions">
                <button className="btn-action-pill primary" onClick={() => navigateTo('faltas')}>
                  <span className="material-symbols-outlined">calendar_today</span> Registrar Faltas
                </button>
                <button className="btn-action-pill" onClick={() => navigateTo('vales')}>
                  <span className="material-symbols-outlined">payments</span> Adiantamentos
                </button>
                <button className="btn-action-pill" onClick={() => navigateTo('fechamento')}>
                  <span className="material-symbols-outlined">account_balance_wallet</span> Fechar Caixa
                </button>
              </div>
            </div>

            <div className="premium-section">
              <div className="premium-header">
                <h2>Recursos Premium</h2>
                <span className="premium-badge">
                  <span className="material-symbols-outlined" style={{ fontSize: '11px' }}>lock</span> Fase 2
                </span>
              </div>
              
              <div className="locked-card" onClick={handlePremiumAlert}>
                <div className="item-info">
                  <span className="item-name">Controle de Notas Fiscais (NFs)</span>
                  <span className="item-subtitle">Upload, conferência automática e status de envio.</span>
                </div>
                <span className="material-symbols-outlined lock-icon">lock</span>
              </div>
              
              <div className="locked-card" onClick={handlePremiumAlert}>
                <div className="item-info">
                  <span className="item-name">Alerta de Vencimento de Contratos</span>
                  <span className="item-subtitle">1 contrato com renovação pendente.</span>
                </div>
                <span className="material-symbols-outlined lock-icon">lock</span>
              </div>
            </div>
          </div>
        )}

        {/* 2. EQUIPE / LISTA */}
        {currentView === 'colaboradores' && (
          <div className="view active">
            <div>
              <h1>Equipe (Colaboradores)</h1>
              <p className="subtitle">Cadastre e veja as informações gerais dos colaboradores.</p>
            </div>

            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Buscar por nome ou cargo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="list-container">
              {colaboradores
                .filter(c => c.nome.toLowerCase().includes(searchQuery.toLowerCase()) || c.cargo.toLowerCase().includes(searchQuery.toLowerCase()))
                .map(col => (
                  <div key={col.id} className="list-item" onClick={() => navigateTo('perfil', col.id)}>
                    <div className="item-info">
                      <span className="item-name">{col.nome}</span>
                      <span className="item-subtitle">{col.cargo} • {formatCurrency(col.valorBase)}/mês</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="status-pill active">{col.status}</span>
                      <span className="material-symbols-outlined chevron">chevron_right</span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* 3. PERFIL DETALHADO */}
        {currentView === 'perfil' && activeColaborador && (
          <div className="view active">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button className="btn-copy-pix" onClick={() => navigateTo('colaboradores')} style={{ padding: '6px' }}>
                <span className="material-symbols-outlined">arrow_back</span> Voltar
              </button>
              <h1>Perfil do Colaborador</h1>
            </div>

            <div className="card profile-card">
              <div className="profile-avatar-placeholder">
                {activeColaborador.nome.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
              </div>
              <h2 className="profile-name">{activeColaborador.nome}</h2>
              <span className="profile-role">{activeColaborador.cargo}</span>
              <span className="status-pill active">{activeColaborador.status}</span>
              
              <div className="pix-box">
                <span className="pix-key">{activeColaborador.pix}</span>
                <button className="btn-copy-pix" onClick={() => handleCopyPix(activeColaborador.pix)}>
                  <span className="material-symbols-outlined">content_copy</span> Copiar PIX
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
              <button className="btn" style={{ flex: 1, backgroundColor: 'var(--surface)', color: 'var(--primary)', border: '1px solid var(--outline)' }} onClick={() => openEditModal(activeColaborador)}>
                <span className="material-symbols-outlined">edit</span> Editar Perfil
              </button>
              <button className="btn btn-danger" style={{ flex: 1 }} onClick={() => handleDeleteColaborador(activeColaborador.id)}>
                <span className="material-symbols-outlined">delete</span> Excluir
              </button>
            </div>

            <div className="metrics-grid">
              <div className="metric-card">
                <span className="metric-title">Faltas no Mês</span>
                <span className="metric-value" style={{ color: 'var(--error)' }}>
                  {getAbsencesCount(activeColaborador.id)}
                </span>
                <span className="metric-footer">Para alterar, use Lançar Faltas</span>
              </div>
              
              <div className="metric-card" style={{ opacity: 0.65, border: '1px dashed var(--outline)', position: 'relative' }} onClick={handlePremiumAlert}>
                <span className="metric-title">Status NF do Mês</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px', color: 'var(--secondary)' }}>lock</span>
                  <span className="status-pill" style={{ backgroundColor: 'var(--surface-container-high)', color: 'var(--secondary)', fontSize: '9px', padding: '2px 6px' }}>Bloqueado</span>
                </div>
                <span className="metric-footer">Upload de Notas Fiscais</span>
              </div>
            </div>

            <button className="btn btn-secondary" style={{ border: '1px solid var(--outline)' }} onClick={() => {
              setFaltasActiveColaboradorId(activeColaborador.id)
              navigateTo('faltas')
            }}>
              <span className="material-symbols-outlined">calendar_today</span> Registrar Faltas no Calendário
            </button>

            <div>
              <h2>Adiantamentos e Vales (Maio)</h2>
              <div className="list-container">
                {vales.filter(v => v.colaboradorId === activeColaborador.id).map(v => (
                  <div key={v.id} className={`list-item finance-item ${v.status === 'Aprovado' ? 'expense' : 'pending'}`}>
                    <div className="item-info">
                      <span className="item-name">Vale/Adiantamento ({v.status})</span>
                      <span className="item-subtitle">{v.data.split('-').reverse().join('/')}</span>
                    </div>
                    <span className={`item-name ${v.status === 'Aprovado' ? 'expense' : 'pending'}`} style={{ fontWeight: 700 }}>
                      - {formatCurrency(v.valor)}
                    </span>
                  </div>
                ))}
                {comissoes.filter(c => c.colaboradorId === activeColaborador.id && c.mes === currentMonth).map(c => (
                  <div key={c.id} className="list-item finance-item income">
                    <div className="item-info">
                      <span className="item-name">Comissão Comercial</span>
                      <span className="item-subtitle">Lançamento mensal</span>
                    </div>
                    <span className="item-name income" style={{ fontWeight: 700 }}>
                      + {formatCurrency(c.valor)}
                    </span>
                  </div>
                ))}
                {vales.filter(v => v.colaboradorId === activeColaborador.id).length === 0 && 
                 comissoes.filter(c => c.colaboradorId === activeColaborador.id && c.mes === currentMonth).length === 0 && (
                  <div style={{ textAlign: 'center', color: 'var(--secondary)', padding: '16px', fontSize: '13px' }}>
                    Nenhum registro financeiro neste mês.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 4. LANÇAR FALTAS */}
        {currentView === 'faltas' && (
          <div className="view active">
            <div>
              <h1>Lançar Faltas</h1>
              <p className="subtitle">Selecione o colaborador e marque as faltas no calendário.</p>
            </div>

            <div className="card">
              <div className="form-group">
                <label htmlFor="faltas-select-colaborador">Colaborador</label>
                <select
                  id="faltas-select-colaborador"
                  value={faltasActiveColaboradorId}
                  onChange={(e) => setFaltasActiveColaboradorId(e.target.value)}
                >
                  {colaboradores.map(c => (
                    <option key={c.id} value={c.id}>{c.nome} ({c.cargo})</option>
                  ))}
                </select>
              </div>
            </div>

            {faltasActiveColaboradorId && (
              <div className="card calendar-container">
                <div className="calendar-header">
                  <span className="calendar-month-title">Maio 2026</span>
                  <span className="subtitle" style={{ fontSize: '11px' }}>Toque nos dias para marcar/desmarcar faltas</span>
                </div>
                
                <div className="calendar-grid">
                  <span className="calendar-day-header">D</span>
                  <span className="calendar-day-header">S</span>
                  <span className="calendar-day-header">T</span>
                  <span className="calendar-day-header">Q</span>
                  <span className="calendar-day-header">Q</span>
                  <span className="calendar-day-header">S</span>
                  <span className="calendar-day-header">S</span>
                </div>
                
                <div className="calendar-grid">
                  {renderCalendarDays(faltasActiveColaboradorId)}
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', borderTop: '1px solid var(--outline-variant)', paddingTop: '10px' }}>
                  <span className="subtitle" style={{ fontWeight: 500 }}>Faltas no mês selecionado:</span>
                  <span className="status-pill" style={{ backgroundColor: 'var(--error-bg)', color: 'var(--error-text)', fontWeight: 700, fontSize: '13px' }}>
                    {getAbsencesCount(faltasActiveColaboradorId)}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 5. ADIANTAMENTOS */}
        {currentView === 'vales' && (
          <div className="view active">
            <div>
              <h1>Adiantamentos (Vales)</h1>
              <p className="subtitle">Registre novos vales e visualize o histórico de adiantamentos.</p>
            </div>

            <div className="card">
              <h2>Novo Vale</h2>
              <div className="form-group">
                <label htmlFor="form-vale-col">Colaborador</label>
                <select id="form-vale-col" value={formValeCol} onChange={(e) => setFormValeCol(e.target.value)}>
                  {colaboradores.map(c => (
                    <option key={c.id} value={c.id}>{c.nome} ({c.cargo})</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="form-vale-valor">Valor do Vale (R$)</label>
                <input
                  type="number"
                  id="form-vale-valor"
                  placeholder="Ex: 300"
                  value={formValeValor}
                  onChange={(e) => setFormValeValor(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="form-vale-data">Data do Lançamento</label>
                <input
                  type="date"
                  id="form-vale-data"
                  value={formValeData}
                  onChange={(e) => setFormValeData(e.target.value)}
                />
              </div>
              <button className="btn" onClick={handleAddVale}>
                <span className="material-symbols-outlined">check</span> Registrar Adiantamento
              </button>
            </div>

            <div>
              <h2>Histórico de Vales</h2>
              <div className="list-container">
                {vales.map(vale => {
                  const col = colaboradores.find(c => c.id === vale.colaboradorId)
                  if (!col) return null
                  const formattedDate = vale.data.split('-').reverse().join('/')
                  return (
                    <div key={vale.id} className="list-item finance-item expense" style={{ cursor: 'default' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <div className="item-info">
                          <span className="item-name">{col.nome}</span>
                          <span className="item-subtitle">Vale em {formattedDate}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <span className="item-name expense" style={{ fontWeight: 700 }}>
                            - {formatCurrency(vale.valor)}
                          </span>
                          <button 
                            className="btn-copy-pix" 
                            style={{ padding: '6px', color: 'var(--error)' }} 
                            onClick={() => handleDeleteVale(vale.id)} 
                            title="Excluir Vale"
                          >
                            <span className="material-symbols-outlined">delete</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {vales.length === 0 && (
                  <div style={{ textAlign: 'center', color: 'var(--secondary)', padding: '20px' }}>
                    Nenhum adiantamento lançado.
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* 6. COMISSÕES */}
        {currentView === 'comissoes' && (
          <div className="view active">
            <div>
              <h1>Lançar Comissões</h1>
              <p className="subtitle">Lançamento de remuneração comercial variável para o mês.</p>
            </div>

            <div className="card">
              <h2>Nova Comissão</h2>
              <div className="form-group">
                <label htmlFor="form-comissao-col">Colaborador</label>
                <select id="form-comissao-col" value={formComissaoCol} onChange={(e) => setFormComissaoCol(e.target.value)}>
                  {colaboradores.map(c => (
                    <option key={c.id} value={c.id}>{c.nome} ({c.cargo})</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="form-comissao-valor">Valor da Comissão (R$)</label>
                <input
                  type="number"
                  id="form-comissao-valor"
                  placeholder="Ex: 850"
                  value={formComissaoValor}
                  onChange={(e) => setFormComissaoValor(e.target.value)}
                />
              </div>
              <button className="btn" onClick={handleAddComissao}>
                <span className="material-symbols-outlined">add_chart</span> Lançar Comissão
              </button>
            </div>
          </div>
        )}

        {/* 7. FECHAMENTO */}
        {currentView === 'fechamento' && (
          <div className="view active">
            <div>
              <h1>Fechamento de Conta</h1>
              <p className="subtitle">Veja o resumo consolidado de repasses para pagamento.</p>
            </div>

            <div className="card">
              <h2>Cálculo de Fechamento</h2>
              <div className="form-group">
                <label htmlFor="calc-select-col">Selecionar Colaborador</label>
                <select id="calc-select-col" value={calcColId} onChange={(e) => setCalcColId(e.target.value)}>
                  {colaboradores.map(c => (
                    <option key={c.id} value={c.id}>{c.nome} ({c.cargo})</option>
                  ))}
                </select>
              </div>

              <div className="calc-card">
                <span className="calc-title">Resumo de Fechamento (Maio 2026)</span>
                <div className="calc-row">
                  <span>Valor Base Contrato:</span>
                  <span>{formatCurrency(calcRes.base)}</span>
                </div>
                <div className="calc-row addition">
                  <span>(+) Comissões Lançadas:</span>
                  <span>{formatCurrency(calcRes.comissao)}</span>
                </div>
                <div className="calc-row deduction">
                  <span>(-) Desconto Faltas (diária base/30):</span>
                  <span>- {formatCurrency(calcRes.faltas)} ({calcRes.faltasCount} d)</span>
                </div>
                <div className="calc-row deduction">
                  <span>(-) Vales Aprovados Adiantados:</span>
                  <span>- {formatCurrency(calcRes.vales)}</span>
                </div>
                <div className="calc-row total">
                  <span>(=) Valor Líquido a Pagar:</span>
                  <span>{formatCurrency(calcRes.liquido)}</span>
                </div>
              </div>

              <button className="btn btn-success" style={{ marginTop: '15px' }} onClick={() => {
                const name = colaboradores.find(c => c.id === calcColId)?.nome || ''
                showToast(`Fechamento concluído para ${name}!`, 'done_all')
              }}>
                <span className="material-symbols-outlined">done_all</span> Fechar e Marcar como Pago
              </button>
            </div>
          </div>
        )}

        {/* 8. ANOTAÇÕES GERAIS */}
        {currentView === 'anotacoes' && (
          <div className="view active">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h1>Anotações Gerais</h1>
                <p className="subtitle">Bloco de notas interno para registro de lembretes e informações operacionais.</p>
              </div>
              <button className="btn" style={{ width: 'auto', padding: '10px 16px' }} onClick={() => handleOpenNoteModal(null)}>
                <span className="material-symbols-outlined">add</span> Nova Nota
              </button>
            </div>

            <div className="search-container">
              <input
                type="text"
                className="search-input"
                placeholder="Buscar anotações pelo título ou conteúdo..."
                value={notesSearchQuery}
                onChange={(e) => setNotesSearchQuery(e.target.value)}
              />
            </div>

            <div className="list-container">
              {notes
                .filter(n => n.titulo.toLowerCase().includes(notesSearchQuery.toLowerCase()) || n.conteudo.toLowerCase().includes(notesSearchQuery.toLowerCase()))
                .map(note => (
                  <div key={note.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '8px', position: 'relative' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--primary)' }}>{note.titulo}</h3>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button className="btn-copy-pix" style={{ padding: '4px', color: 'var(--secondary)' }} onClick={() => handleOpenNoteModal(note)} title="Editar Nota">
                          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span>
                        </button>
                        <button className="btn-copy-pix" style={{ padding: '4px', color: 'var(--error)' }} onClick={() => handleDeleteNote(note.id)} title="Excluir Nota">
                          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>delete</span>
                        </button>
                      </div>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--secondary)', whiteSpace: 'pre-wrap' }}>{note.conteudo}</p>
                    <span style={{ fontSize: '10px', color: 'var(--secondary)', alignSelf: 'flex-end', marginTop: '4px' }}>
                      Criado/Alterado em {note.data.split('-').reverse().join('/')}
                    </span>
                  </div>
                ))}

              {notes.length === 0 && (
                <div style={{ textAlign: 'center', color: 'var(--secondary)', padding: '30px 20px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '48px', opacity: 0.3, marginBottom: '8px' }}>edit_note</span>
                  <p>Nenhuma anotação criada ainda.</p>
                  <p style={{ fontSize: '12px', marginTop: '4px' }}>Clique em "Nova Nota" para começar.</p>
                </div>
              )}
            </div>
          </div>
        )}

      </main>

      {/* Modal Add Colaborador */}
      <div className={`modal-overlay ${isColModalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Novo Colaborador</h2>
            <button className="btn-close-modal" onClick={() => setIsColModalOpen(false)}>&times;</button>
          </div>
          <div className="form-group">
            <label htmlFor="form-col-nome">Nome Completo</label>
            <input
              type="text"
              id="form-col-nome"
              placeholder="Ex: Ana Maria da Silva"
              value={formColNome}
              onChange={(e) => setFormColNome(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="form-col-cargo">Cargo/Função</label>
            <input
              type="text"
              id="form-col-cargo"
              placeholder="Ex: Vendedora, Artesã..."
              value={formColCargo}
              onChange={(e) => setFormColCargo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="form-col-valor">Valor Base Mensal (R$)</label>
            <input
              type="number"
              id="form-col-valor"
              placeholder="Ex: 3500"
              value={formColValor}
              onChange={(e) => setFormColValor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="form-col-pix">Chave PIX</label>
            <input
              type="text"
              id="form-col-pix"
              placeholder="E-mail, CPF, celular ou PIX"
              value={formColPix}
              onChange={(e) => setFormColPix(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="form-col-data">Data de Início do Contrato</label>
            <input
              type="date"
              id="form-col-data"
              value={formColData}
              onChange={(e) => setFormColData(e.target.value)}
            />
          </div>
          <button className="btn btn-success" onClick={handleAddColaborador}>
            <span className="material-symbols-outlined">save</span> Cadastrar Colaborador
          </button>
        </div>
      </div>

      {/* Modal Edit Colaborador */}
      <div className={`modal-overlay ${isEditModalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>Editar Colaborador</h2>
            <button className="btn-close-modal" onClick={() => setIsEditModalOpen(false)}>&times;</button>
          </div>
          <div className="form-group">
            <label htmlFor="edit-col-nome">Nome Completo</label>
            <input
              type="text"
              id="edit-col-nome"
              placeholder="Ex: Ana Maria da Silva"
              value={editColNome}
              onChange={(e) => setEditColNome(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-col-cargo">Cargo/Função</label>
            <input
              type="text"
              id="edit-col-cargo"
              placeholder="Ex: Vendedora, Social Media..."
              value={editColCargo}
              onChange={(e) => setEditColCargo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-col-valor">Valor Base Mensal (R$)</label>
            <input
              type="number"
              id="edit-col-valor"
              placeholder="Ex: 3500"
              value={editColValor}
              onChange={(e) => setEditColValor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-col-pix">Chave PIX</label>
            <input
              type="text"
              id="edit-col-pix"
              placeholder="E-mail, CPF, celular ou PIX"
              value={editColPix}
              onChange={(e) => setEditColPix(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-col-data">Data de Início do Contrato</label>
            <input
              type="date"
              id="edit-col-data"
              value={editColData}
              onChange={(e) => setEditColData(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-col-status">Status</label>
            <select
              id="edit-col-status"
              value={editColStatus}
              onChange={(e) => setEditColStatus(e.target.value)}
            >
              <option value="Ativo">Ativo</option>
              <option value="Inativo">Inativo</option>
            </select>
          </div>
          <button className="btn btn-success" onClick={handleEditColaborador}>
            <span className="material-symbols-outlined">save</span> Salvar Alterações
          </button>
        </div>
      </div>

      {/* Modal Notes */}
      <div className={`modal-overlay ${isNoteModalOpen ? 'active' : ''}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h2>{noteFormId ? 'Editar Anotação' : 'Nova Anotação'}</h2>
            <button className="btn-close-modal" onClick={() => setIsNoteModalOpen(false)}>&times;</button>
          </div>
          <div className="form-group">
            <label htmlFor="note-title">Título</label>
            <input
              type="text"
              id="note-title"
              placeholder="Digite o título do lembrete..."
              value={noteFormTitle}
              onChange={(e) => setNoteFormTitle(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="note-content">Conteúdo</label>
            <textarea
              id="note-content"
              placeholder="Escreva a anotação ou instrução aqui..."
              rows={6}
              value={noteFormContent}
              onChange={(e) => setNoteFormContent(e.target.value)}
            />
          </div>
          <button className="btn btn-success" onClick={handleSaveNote}>
            <span className="material-symbols-outlined">save</span> Salvar Anotação
          </button>
        </div>
      </div>

      {/* Floating Action Button */}
      {currentView === 'colaboradores' && (
        <button className="fab" onClick={() => setIsColModalOpen(true)} title="Adicionar Novo Colaborador">
          <span className="material-symbols-outlined">add</span>
        </button>
      )}

      {/* Toast Alert */}
      <div className={`toast ${toastActive ? 'active' : ''}`} style={toastIsError ? { backgroundColor: 'var(--error)' } : {}}>
        <span className="material-symbols-outlined">{toastIcon}</span>
        <span>{toastMsg}</span>
      </div>

    </div>
  )
}
