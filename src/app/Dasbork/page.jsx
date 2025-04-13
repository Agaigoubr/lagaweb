import React from 'react';

export default function Page({ name, message, time, phone }) {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif, Arial', fontSize: 14, direction: 'rtl' }}>
      <div>
        تم استلام رسالة من <strong>{name}</strong>. المرجو الرد في أقرب وقت ممكن.
      </div>

      <div
        style={{
          marginTop: 20,
          padding: '15px 0',
          borderWidth: '1px 0',
          borderStyle: 'dashed',
          borderColor: 'lightgrey',
        }}
      >
        <table role="presentation" style={{ width: '100%' }}>
          <tbody>
            <tr>
              <td style={{ verticalAlign: 'top', width: 50 }}>
                <div
                  style={{
                    padding: '6px 10px',
                    margin: '0 10px',
                    backgroundColor: 'aliceblue',
                    borderRadius: 8,
                    fontSize: 26,
                    textAlign: 'center',
                  }}
                  role="img"
                >
                  👤
                </div>
              </td>
              <td style={{ verticalAlign: 'top' }}>
                <div style={{ color: '#2c3e50', fontSize: 16 }}>
                  <strong>{name}</strong>
                </div>
                <div style={{ color: '#999', fontSize: 13 }}>{time}</div>
                <p style={{ fontSize: 15, color: '#333' }}>{message}</p>

                {phone && (
                  <div style={{ fontSize: 16, fontWeight: 'bold', color: '#0077cc' }}>
                    📞 {phone}
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

