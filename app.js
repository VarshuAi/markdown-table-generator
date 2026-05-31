
            window.genTbl = function() {
                const r = parseInt(document.getElementById('tbl-r').value || 3);
                const c = parseInt(document.getElementById('tbl-c').value || 3);
                const code = document.getElementById('tbl-code');
                
                let headers = '|' + Array(c).fill(' Col ').join('|') + '|\n';
                let div = '|' + Array(c).fill('---').join('|') + '|\n';
                let rows = '';
                for(let i=0; i<r; i++) {
                    rows += '|' + Array(c).fill(' Cell ').join('|') + '|\n';
                }
                code.value = headers + div + rows;
            }
            genTbl();
        