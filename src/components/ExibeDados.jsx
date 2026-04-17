import React from 'react';

const ExibeDados = ({ dados }) => {
  if (!dados) return null;

  const formatar = (val) => val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  return (
    <div className="card p-4 border-0 mb-4" style={{ backgroundColor: '#f9f7f2', borderRadius: '12px' }}>
      <p className="text-muted mb-1 small fw-bold">Valor final acumulado</p>
      <h1 className="fw-bold mb-4" style={{ color: '#0f5132' }}>{formatar(dados.valorFinal)}</h1>
      
      <div className="row border-top pt-3">
        <div className="col-6 mb-3">
          <small className="text-muted d-block fw-bold">Total investido</small>
          <span className="fs-5 fw-bold text-dark">{formatar(dados.totalInvestido)}</span>
        </div>
        <div className="col-6 mb-3">
          <small className="text-muted d-block fw-bold">Juros acumulados</small>
          <span className="fs-5 fw-bold text-dark">{formatar(dados.jurosAcumulados)}</span>
        </div>
        <div className="col-6">
          <small className="text-muted d-block fw-bold">Nº de aportes</small>
          <span className="fs-5 fw-bold text-dark">{dados.numAportes}</span>
        </div>
        <div className="col-6">
          <small className="text-muted d-block fw-bold">Rentabilidade</small>
          <span className="fs-5 fw-bold" style={{ color: '#198754' }}>+{dados.rentabilidade.toFixed(2)}%</span>
        </div>
      </div>
    </div>
  );
};

export default ExibeDados;