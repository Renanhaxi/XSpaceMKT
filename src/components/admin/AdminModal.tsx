import React, { useState } from 'react';
import { 
  X, 
  Plus, 
  Trash2, 
  Upload, 
  Check, 
  Download, 
  RefreshCw, 
  Layers, 
  MessageSquare, 
  Sliders
} from 'lucide-react';
import type { TemplateItem, TestimonialItem, PricingPlan } from '../../types';
import { storageService } from '../../services/storageService';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  templates: TemplateItem[];
  testimonials: TestimonialItem[];
  plans: PricingPlan[];
  onTemplatesChange: (templates: TemplateItem[]) => void;
  onTestimonialsChange: (testimonials: TestimonialItem[]) => void;
  onPlansChange: (plans: PricingPlan[]) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  templates,
  testimonials,
  plans,
  onTemplatesChange,
  onTestimonialsChange,
  onPlansChange,
}) => {
  const [activeTab, setActiveTab] = useState<'templates' | 'feedbacks' | 'backup'>('templates');

  // Form states for new Template
  const [templateForm, setTemplateForm] = useState({
    title: '',
    category: 'institucional' as TemplateItem['category'],
    categoryLabel: 'Site Institucional',
    description: '',
    image: '',
    demoUrl: '',
    tags: 'Moderno, Rápido, Responsivo',
    conversionRate: '+35% Leads',
    speedScore: 98,
  });
  const [imagePreview, setImagePreview] = useState<string>('');

  // Form states for new Testimonial
  const [testimonialForm, setTestimonialForm] = useState({
    name: '',
    role: '',
    company: '',
    content: '',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
    resultMetric: '+50% Contatos',
  });

  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  // Handle local image file upload for template preview
  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImagePreview(base64);
        setTemplateForm(prev => ({ ...prev, image: base64 }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle template submit
  const handleAddTemplate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!templateForm.title || !templateForm.image) {
      alert('Por favor, informe ao menos o título e uma imagem ou arquivo.');
      return;
    }

    const tagsArray = templateForm.tags
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    const created = storageService.addTemplate({
      title: templateForm.title,
      category: templateForm.category,
      categoryLabel: templateForm.categoryLabel,
      description: templateForm.description || 'Template de alta conversão desenvolvido pela xSpaceMKT.',
      image: templateForm.image,
      demoUrl: templateForm.demoUrl || 'https://xspacemkt.com',
      tags: tagsArray,
      featured: true,
      conversionRate: templateForm.conversionRate,
      speedScore: Number(templateForm.speedScore) || 98,
    });

    onTemplatesChange([created, ...templates]);
    showNotification('Template adicionado com sucesso!');

    // Reset form
    setTemplateForm({
      title: '',
      category: 'institucional',
      categoryLabel: 'Site Institucional',
      description: '',
      image: '',
      demoUrl: '',
      tags: 'Moderno, Rápido, Responsivo',
      conversionRate: '+35% Leads',
      speedScore: 98,
    });
    setImagePreview('');
  };

  // Handle template delete
  const handleDeleteTemplate = (id: string) => {
    if (window.confirm('Tem certeza que deseja remover este template?')) {
      storageService.deleteTemplate(id);
      onTemplatesChange(templates.filter(t => t.id !== id));
      showNotification('Template removido.');
    }
  };

  // Handle testimonial submit
  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!testimonialForm.name || !testimonialForm.content) {
      alert('Preencha o nome e o depoimento.');
      return;
    }

    const created = storageService.addTestimonial({
      name: testimonialForm.name,
      role: testimonialForm.role || 'Cliente',
      company: testimonialForm.company || 'Empresa',
      content: testimonialForm.content,
      rating: testimonialForm.rating,
      avatar: testimonialForm.avatar,
      resultMetric: testimonialForm.resultMetric,
    });

    onTestimonialsChange([created, ...testimonials]);
    showNotification('Depoimento cadastrado com sucesso!');

    setTestimonialForm({
      name: '',
      role: '',
      company: '',
      content: '',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
      resultMetric: '+50% Contatos',
    });
  };

  // Handle testimonial delete
  const handleDeleteTestimonial = (id: string) => {
    if (window.confirm('Remover este depoimento?')) {
      storageService.deleteTestimonial(id);
      onTestimonialsChange(testimonials.filter(t => t.id !== id));
      showNotification('Depoimento removido.');
    }
  };

  // Backup Export
  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(storageService.exportData());
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `xspacemkt-backup-${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showNotification('Backup JSON baixado com sucesso!');
  };

  // Backup Reset
  const handleResetDefaults = () => {
    if (window.confirm('Isso irá restaurar os templates e depoimentos originais da fábrica. Deseja continuar?')) {
      storageService.resetAll();
      onTemplatesChange(storageService.getTemplates());
      onTestimonialsChange(storageService.getTestimonials());
      onPlansChange(storageService.getPlans());
      showNotification('Dados restaurados para o padrão original.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0e0e14] border border-orange-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#14141c]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                Gerenciador de Conteúdo xSpaceMKT
              </h3>
              <p className="text-[11px] text-slate-400">
                Adicione novos templates, depoimentos e gerencie os {plans.length} planos cadastrados
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Feedback Alert if any */}
        {notification && (
          <div className="bg-orange-500 text-black px-4 py-2 text-xs font-bold text-center flex items-center justify-center gap-2 animate-in fade-in">
            <Check className="w-4 h-4" />
            <span>{notification}</span>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-white/10 bg-[#111116] px-6">
          <button
            onClick={() => setActiveTab('templates')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'templates'
                ? 'border-orange-500 text-orange-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Templates & Portfólio ({templates.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('feedbacks')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'feedbacks'
                ? 'border-orange-500 text-orange-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Feedbacks de Clientes ({testimonials.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('backup')}
            className={`flex items-center gap-2 py-3 px-4 text-xs font-bold border-b-2 transition-all ${
              activeTab === 'backup'
                ? 'border-orange-500 text-orange-400'
                : 'border-transparent text-slate-400 hover:text-white'
            }`}
          >
            <Download className="w-4 h-4" />
            <span>Backup & Configurações</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {/* TAB 1: TEMPLATES */}
          {activeTab === 'templates' && (
            <div className="space-y-8">
              {/* Form to Add New Template */}
              <form onSubmit={handleAddTemplate} className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Plus className="w-4 h-4 text-orange-400" />
                  Subir Novo Template / Projeto
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Título do Projeto *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Prime Odonto Clinic"
                      value={templateForm.title}
                      onChange={(e) => setTemplateForm({ ...templateForm, title: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#14141c] border border-white/10 text-xs text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nicho / Categoria *</label>
                    <select
                      value={templateForm.category}
                      onChange={(e) => {
                        const val = e.target.value as TemplateItem['category'];
                        const labels: Record<string, string> = {
                          fitness: 'Academia & Fitness',
                          saude: 'Clínica & Saúde',
                          advocacia: 'Advocacia & Direito',
                          ecommerce: 'Loja Virtual',
                          sistema: 'Sistema Web & SaaS',
                          'landing-page': 'Landing Page de Alta Conversão',
                          institucional: 'Site Institucional'
                        };
                        setTemplateForm({
                          ...templateForm,
                          category: val,
                          categoryLabel: labels[val] || 'Site Profissional'
                        });
                      }}
                      className="w-full px-3 py-2 rounded-lg bg-[#14141c] border border-white/10 text-xs text-white focus:outline-none focus:border-orange-500"
                    >
                      <option value="fitness">Academia & Fitness</option>
                      <option value="saude">Clínica & Saúde</option>
                      <option value="advocacia">Advocacia & Direito</option>
                      <option value="ecommerce">Loja Virtual & E-commerce</option>
                      <option value="sistema">Sistema Web & SaaS</option>
                      <option value="landing-page">Landing Page de Conversão</option>
                      <option value="institucional">Site Institucional</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      URL da Imagem / Print OU Enviar Arquivo *
                    </label>
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="https://... ou suba um arquivo abaixo"
                        value={templateForm.image}
                        onChange={(e) => {
                          setTemplateForm({ ...templateForm, image: e.target.value });
                          setImagePreview(e.target.value);
                        }}
                        className="w-full px-3 py-2 rounded-lg bg-[#14141c] border border-white/10 text-xs text-white focus:outline-none focus:border-orange-500"
                      />
                      <label className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-dashed border-white/20 hover:border-orange-500/50 cursor-pointer text-xs text-slate-300 hover:text-white transition-all">
                        <Upload className="w-4 h-4 text-orange-400" />
                        <span>Escolher imagem do seu computador</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageFileChange}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Link de Demonstração (URL)</label>
                    <input
                      type="url"
                      placeholder="https://demo.xspacemkt.com/exemplo"
                      value={templateForm.demoUrl}
                      onChange={(e) => setTemplateForm({ ...templateForm, demoUrl: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#14141c] border border-white/10 text-xs text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                {imagePreview && (
                  <div className="p-2 bg-black/50 border border-white/10 rounded-lg max-w-xs">
                    <p className="text-[10px] text-slate-400 mb-1">Prévia da Imagem Selecionada:</p>
                    <img src={imagePreview} alt="Preview" className="w-full h-24 object-cover rounded" />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Descrição Curta</label>
                  <textarea
                    rows={2}
                    placeholder="Destaque as principais características e benefícios deste modelo..."
                    value={templateForm.description}
                    onChange={(e) => setTemplateForm({ ...templateForm, description: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#14141c] border border-white/10 text-xs text-white focus:outline-none focus:border-orange-500 resize-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Tags (separadas por vírgula)</label>
                    <input
                      type="text"
                      placeholder="Dark, Rápido, Vendas"
                      value={templateForm.tags}
                      onChange={(e) => setTemplateForm({ ...templateForm, tags: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#14141c] border border-white/10 text-xs text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Métrica de Conversão</label>
                    <input
                      type="text"
                      placeholder="Ex: +45% Vendas"
                      value={templateForm.conversionRate}
                      onChange={(e) => setTemplateForm({ ...templateForm, conversionRate: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#14141c] border border-white/10 text-xs text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nota de Velocidade (0-100)</label>
                    <input
                      type="number"
                      min="80"
                      max="100"
                      value={templateForm.speedScore}
                      onChange={(e) => setTemplateForm({ ...templateForm, speedScore: Number(e.target.value) })}
                      className="w-full px-3 py-2 rounded-lg bg-[#14141c] border border-white/10 text-xs text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-xs flex items-center gap-2 shadow-md shadow-orange-500/20"
                >
                  <Plus className="w-4 h-4" />
                  <span>Cadastrar Template no Site</span>
                </button>
              </form>

              {/* List of Existing Templates */}
              <div>
                <h4 className="text-sm font-bold text-white mb-3">Templates Atualmente Cadastrados</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {templates.map((tpl) => (
                    <div
                      key={tpl.id}
                      className="p-3 rounded-xl bg-[#14141c] border border-white/10 flex items-center justify-between gap-3"
                    >
                      <img
                        src={tpl.image}
                        alt={tpl.title}
                        className="w-14 h-14 rounded-lg object-cover bg-black shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h5 className="text-xs font-bold text-white truncate">{tpl.title}</h5>
                        <p className="text-[10px] text-orange-400">{tpl.categoryLabel}</p>
                        <p className="text-[10px] text-slate-400 truncate">{tpl.description}</p>
                      </div>
                      <button
                        onClick={() => handleDeleteTemplate(tpl.id)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-colors"
                        title="Remover template"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FEEDBACKS */}
          {activeTab === 'feedbacks' && (
            <div className="space-y-8">
              {/* Form to Add Testimonial */}
              <form onSubmit={handleAddTestimonial} className="p-5 rounded-xl bg-black/40 border border-white/10 space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Plus className="w-4 h-4 text-orange-400" />
                  Cadastrar Novo Feedback / Depoimento
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nome do Cliente *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Matheus Guimarães"
                      value={testimonialForm.name}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#14141c] border border-white/10 text-xs text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Cargo / Posição</label>
                    <input
                      type="text"
                      placeholder="Ex: Diretor Comercial"
                      value={testimonialForm.role}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, role: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#14141c] border border-white/10 text-xs text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Nome da Empresa</label>
                    <input
                      type="text"
                      placeholder="Ex: Alpha Consultoria"
                      value={testimonialForm.company}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, company: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#14141c] border border-white/10 text-xs text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">URL da Foto / Avatar</label>
                    <input
                      type="text"
                      value={testimonialForm.avatar}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, avatar: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#14141c] border border-white/10 text-xs text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">Métrica de Resultado</label>
                    <input
                      type="text"
                      placeholder="Ex: +60% de Vendas"
                      value={testimonialForm.resultMetric}
                      onChange={(e) => setTestimonialForm({ ...testimonialForm, resultMetric: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#14141c] border border-white/10 text-xs text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">Depoimento do Cliente *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Escreva a avaliação do cliente sobre o site desenvolvido e os resultados..."
                    value={testimonialForm.content}
                    onChange={(e) => setTestimonialForm({ ...testimonialForm, content: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#14141c] border border-white/10 text-xs text-white focus:outline-none focus:border-orange-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-black font-extrabold text-xs flex items-center gap-2 shadow-md"
                >
                  <Plus className="w-4 h-4" />
                  <span>Cadastrar Feedback</span>
                </button>
              </form>

              {/* Existing Feedbacks */}
              <div>
                <h4 className="text-sm font-bold text-white mb-3">Feedbacks Cadastrados</h4>
                <div className="space-y-3">
                  {testimonials.map((t) => (
                    <div
                      key={t.id}
                      className="p-4 rounded-xl bg-[#14141c] border border-white/10 flex items-center justify-between gap-4"
                    >
                      <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover shrink-0"
                      />
                      <div className="flex-1">
                        <h5 className="text-xs font-bold text-white">{t.name} - <span className="text-slate-400 font-normal">{t.company}</span></h5>
                        <p className="text-xs text-slate-300 italic line-clamp-1">"{t.content}"</p>
                      </div>
                      <button
                        onClick={() => handleDeleteTestimonial(t.id)}
                        className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: BACKUP */}
          {activeTab === 'backup' && (
            <div className="space-y-6">
              <div className="p-6 rounded-2xl bg-[#14141c] border border-white/10 space-y-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Download className="w-4 h-4 text-orange-400" />
                  Exportar Backup Completo dos Dados
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Baixe um arquivo JSON contendo todos os seus templates cadastrados, planos e depoimentos. Você pode guardar este arquivo para backup ou transferir para outro ambiente.
                </p>
                <button
                  onClick={handleExportJSON}
                  className="px-5 py-2.5 rounded-xl bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/40 text-orange-400 font-bold text-xs flex items-center gap-2 transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Backup (JSON)</span>
                </button>
              </div>

              <div className="p-6 rounded-2xl bg-[#14141c] border border-red-500/20 space-y-4">
                <h4 className="text-sm font-bold text-red-400 flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-red-400" />
                  Restaurar Padrões de Fábrica
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Caso queira voltar aos templates e depoimentos demonstrativos originais que configuramos inicialmente, clique abaixo.
                </p>
                <button
                  onClick={handleResetDefaults}
                  className="px-5 py-2.5 rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 font-bold text-xs flex items-center gap-2 transition-all"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Restaurar Demonstração Inicial</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
