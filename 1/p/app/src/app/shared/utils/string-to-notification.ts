export class StringToNotification {
        private static accentMap: { [key: string]: string } = {
            // Acentos en vocales minúsculas
            'á': 'aacute',
            'é': 'eacute',
            'í': 'iacute',
            'ó': 'oacute',
            'ú': 'uacute',
            'ü': 'uuml',
            
            // Acentos en vocales mayúsculas
            'Á': 'Aacute',
            'É': 'Eacute',
            'Í': 'Iacute',
            'Ó': 'Oacute',
            'Ú': 'Uacute',
            'Ü': 'Uuml',
            
            // Ñ y ñ
            'ñ': 'ntilde',
            'Ñ': 'Ntilde',
            
            // Otros caracteres especiales
            '¿': 'iquest',
            '¡': 'iexcl',
            
            // Variantes con acentos
            'à': 'agrave',
            'è': 'egrave',
            'ì': 'igrave',
            'ò': 'ograve',
            'ù': 'ugrave',
            'À': 'Agrave',
            'È': 'Egrave',
            'Ì': 'Igrave',
            'Ò': 'Ograve',
            'Ù': 'Ugrave',
            
            // Otros acentos y diéresis
            'ã': 'atilde',
            'õ': 'otilde',
            'Ã': 'Atilde',
            'Õ': 'Otilde'
        };
    
    
    public static replaceAccents(text: any): string {
        if (typeof text !== 'string') {
            text = String(text); // Convierto el texto a string si no lo es, para en nombres de docum y telefonos
        }
        return text.split('').map((char: string) => this.accentMap[char] || char).join('');
    }

    public static replaceAccentsOld(text: string): string {
        
      return text.split('').map(char => this.accentMap[char] || char).join('');
    }
  
    public static replaceAccentsInArray(dataArray: { key: string; value: string }[]): { key: string; value: string }[] {
      return dataArray.map(item => ({
        key: this.replaceAccents(item.key),
        value: this.replaceAccents(item.value)
      }));
    }
  }
  