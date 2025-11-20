$(document).ready(function () {
    $('.tabela-classificacao').DataTable({
        order: [[0, 'desc']],
        paging: false,
        searching: false,
        info: false,
        language: {
            url: '//cdn.datatables.net/plug-ins/1.13.7/i18n/pt-BR.json'
        },
        columnDefs: [
            { orderable: false, targets: -1 },
            { type: 'string', targets: 0 } // força ordenação textual
        ]
    });
});
