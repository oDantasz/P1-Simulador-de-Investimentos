import React, { useState } from 'react';

const CapturaDados = ({ aoCalcular, aoLimpar }) => {
  const [form, setForm] = useState({ inicial: '', aporte: '', juros: '', periodo: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleCalcular = () => {
    // Converte os valores para números antes de enviar para o App
    aoCalcular({
      inicial: parseFloat(form.inicial) || 0,
      aporte: parseFloat(form.aporte) || 0,
      juros: parseFloat(form.juros) / 100 || 0,
      periodo: parseInt(form.periodo) || 0
    });
  };

  const handleLimpar = () => {
    setForm({ inicial: '', aporte: '', juros: '', periodo: '' });
    aoLimpar();
  };

  return (
    <div className="card p-4 border-0 shadow-sm mb-4" style={{ borderRadius: '12px' }}>
      <div className="row g-3">
        <div className="col-md-6">
          <label className="form-label text-muted small fw-bold">Valor inicial (R$)</label>
          <input type="number" name="inicial" className="form-control form-control-lg bg-light" onChange={handleChange} value={form.inicial} placeholder="Insira o Valor" />
        </div>
        <div className="col-md-6">
          <label className="form-label text-muted small fw-bold">Aporte mensal (R$)</label>
          <input type="number" name="aporte" className="form-control form-control-lg bg-light" onChange={handleChange} value={form.aporte} placeholder="Insira o Aporte" />
        </div>
        <div className="col-md-6">
          <label className="form-label text-muted small fw-bold">Taxa de juros (% ao mês)</label>
          <input type="number" name="juros" className="form-control form-control-lg bg-light" onChange={handleChange} value={form.juros} placeholder="Insira a Taxa" />
        </div>
        <div className="col-md-6">
          <label className="form-label text-muted small fw-bold">Período (meses)</label>
          <input type="number" name="periodo" className="form-control form-control-lg bg-light" onChange={handleChange} value={form.periodo} placeholder="Insira o Período" />
        </div>
        <div className="col-9">
          <button className="btn btn-primary btn-lg w-100 fw-bold" onClick={handleCalcular} style={{ backgroundColor: '#d1e1f8', borderColor: '#acc7ed', color: '#3b6fb6' }}>
            Calcular
          </button>
        </div>
        <div className="col-3">
          <button className="btn btn-outline-secondary btn-lg w-100" onClick={handleLimpar}>
            Limpar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CapturaDados;