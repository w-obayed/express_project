// import nodemail

import nodemailer from "nodemailer";
import { Vonage } from "@vonage/server-sdk";

// sms api setup
const vonage = new Vonage({
  apiKey: "212dc341",
  apiSecret: "NsT6Qx57Ali7LEwb",
});

async function sendSMS(to, from, text) {
  await vonage.sms
    .send({ to, from, text })
    .then((resp) => {
      console.log("Message sent successfully");
      console.log(resp);
    })
    .catch((err) => {
      console.log("There was an error sending the messages.");
      console.error(err);
    });
}

// get all user

export const getAllUser = (req, res) => {
  res.send("helow");
};

// create user
export const createUser = (req, res) => {
  res.status(200).json(req.body);
};

export const registerUser = async (req, res) => {
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASS,
    },
  });

  await transport.sendMail({
    from: `Auto group < ${process.env.MAIL_ADDRESS}>`,
    subject: "You got 6 lakh",
    to: req.body.email,
    text: `Hellow ${req.body.name}, You got 6 lakh doller`,
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
     <head>
      <meta charset="UTF-8">
      <meta content="width=device-width, initial-scale=1" name="viewport">
      <meta name="x-apple-disable-message-reformatting">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta content="telephone=no" name="format-detection">
      <title>Trigger newsletter</title><!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
      <style type="text/css">
    .rollover:hover .rollover-first {
      max-height:0px!important;
      display:none!important;
      }
      .rollover:hover .rollover-second {
      max-height:none!important;
      display:inline-block!important;
      }
      .rollover div {
      font-size:0px;
      }
      u ~ div img + div > div {
      display:none;
      }
      #outlook a {
      padding:0;
      }
      span.MsoHyperlink,
    span.MsoHyperlinkFollowed {
      color:inherit;
      mso-style-priority:99;
      }
      a.es-button {
      mso-style-priority:100!important;
      text-decoration:none!important;
      }
      a[x-apple-data-detectors] {
      color:inherit!important;
      text-decoration:none!important;
      font-size:inherit!important;
      font-family:inherit!important;
      font-weight:inherit!important;
      line-height:inherit!important;
      }
      .es-desk-hidden {
      display:none;
      float:left;
      overflow:hidden;
      width:0;
      max-height:0;
      line-height:0;
      mso-hide:all;
      }
      .es-button-border:hover > a.es-button {
      color:#ffffff!important;
      }
    @media only screen and (max-width:600px) {*[class="gmail-fix"] { display:none!important } p, a { line-height:150%!important } h1, h1 a { line-height:120%!important } h2, h2 a { line-height:120%!important } h3, h3 a { line-height:120%!important } h4, h4 a { line-height:120%!important } h5, h5 a { line-height:120%!important } h6, h6 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h4 { font-size:24px!important; text-align:left } h5 { font-size:20px!important; text-align:left } h6 { font-size:16px!important; text-align:left } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body h4 a, .es-content-body h4 a, .es-footer-body h4 a { font-size:24px!important } .es-header-body h5 a, .es-content-body h5 a, .es-footer-body h5 a { font-size:20px!important } .es-header-body h6 a, .es-content-body h6 a, .es-footer-body h6 a { font-size:16px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body a { font-size:14px!important } .es-footer-body p, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock a { font-size:12px!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3, .es-m-txt-c h4, .es-m-txt-c h5, .es-m-txt-c h6 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3, .es-m-txt-r h4, .es-m-txt-r h5, .es-m-txt-r h6 { text-align:right!important } .es-m-txt-j, .es-m-txt-j h1, .es-m-txt-j h2, .es-m-txt-j h3, .es-m-txt-j h4, .es-m-txt-j h5, .es-m-txt-j h6 { text-align:justify!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3, .es-m-txt-l h4, .es-m-txt-l h5, .es-m-txt-l h6 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-m-txt-r .rollover:hover .rollover-second, .es-m-txt-c .rollover:hover .rollover-second, .es-m-txt-l .rollover:hover .rollover-second { display:inline!important } .es-m-txt-r .rollover div, .es-m-txt-c .rollover div, .es-m-txt-l .rollover div { line-height:0!important; font-size:0!important } .es-spacer { display:inline-table } a.es-button, button.es-button { font-size:20px!important } a.es-button, button.es-button { display:inline-block!important } .es-button-border { display:inline-block!important } .es-m-fw, .es-m-fw.es-fw, .es-m-fw .es-button { display:block!important } .es-m-il, .es-m-il .es-button, .es-social, .es-social td, .es-menu { display:inline-block!important } .es-adaptive table, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .adapt-img { width:100%!important; height:auto!important } .es-mobile-hidden, .es-hidden { display:none!important } .es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } .es-social td { padding-bottom:10px } .h-auto { height:auto!important } p, ul li, ol li, a { font-size:16px!important } }
    </style>
     </head>
     <body style="width:100%;height:100%;padding:0;Margin:0">
      <div class="es-wrapper-color" style="background-color:#F6F6F6"><!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#f6f6f6"></v:fill>
          </v:background>
        <![endif]-->
       <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F6F6F6">
         <tr>
          <td valign="top" style="padding:0;Margin:0">
           <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
             <tr>
              <td align="center" style="padding:0;Margin:0">
               <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                 <tr>
                  <td align="left" style="Margin:0;padding-top:15px;padding-right:20px;padding-bottom:15px;padding-left:20px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                   <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;width:270px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td class="es-infoblock" align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#CCCCCC;font-size:14px"><span style="text-align:center"></span>Put your preheader text here<span style="text-align:center"></span></p></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                   <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;width:270px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="right" class="es-infoblock" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#CCCCCC;font-size:14px"><a href="https://viewstripo.email" target="_blank" class="view" style="mso-line-height-rule:exactly;text-decoration:underline;font-family:Arial, sans-serif;font-size:12px;color:#CCCCCC">View in browser</a></p></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table><!--[if mso]></td></tr></table><![endif]--></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table cellpadding="0" cellspacing="0" class="es-header" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
             <tr>
              <td align="center" style="padding:0;Margin:0">
               <table class="es-header-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#464646;width:600px">
                 <tr>
                  <td align="left" style="Margin:0;padding-top:5px;padding-right:5px;padding-bottom:5px;padding-left:5px"><!--[if mso]><table style="width:590px" cellpadding="0" cellspacing="0"><tr><td style="width:188px" valign="top"><![endif]-->
                   <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                     <tr>
                      <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:188px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td class="es-m-p0l" align="left" style="padding:0;Margin:0;padding-bottom:5px;font-size:0"><a href="https://viewstripo.email" target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;font-family:Arial, sans-serif;font-size:14px;color:#CCCCCC"><img src="https://smjsrn.stripocdn.email/content/guids/CABINET_f9397c011242449f496707d41e2cb83d/images/67421501147805972.png" al="" t="" alt="Sunrise logo" title="Sunrise logo" width="108" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table><!--[if mso]></td><td style="width:20px"></td><td style="width:382px" valign="top"><![endif]-->
                   <table cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;width:382px">
                       <table c="" ellspacing="0" width="100%" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td style="padding:0;Margin:0">
                           <table class="es-menu" width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr class="links">
                              <td style="Margin:0;border:0;padding-right:5px;padding-left:5px;padding-top:25px;padding-bottom:25px" width="25.00%" bgcolor="transparent" align="center"><a style="mso-line-height-rule:exactly;text-decoration:none;font-family:Arial, sans-serif;font-size:14px;display:block;color:#a5a29b" href="https://viewstripo.email/">Hotels</a></td>
                              <td style="Margin:0;border:0;padding-right:5px;padding-left:5px;padding-top:25px;padding-bottom:25px" width="25.00%" bgcolor="transparent" align="center"><a style="mso-line-height-rule:exactly;text-decoration:none;font-family:Arial, sans-serif;font-size:14px;display:block;color:#a5a29b" href="https://viewstripo.email/">Restaurants</a></td>
                              <td style="Margin:0;border:0;padding-right:5px;padding-left:5px;padding-top:25px;padding-bottom:25px" width="25.00%" bgcolor="transparent" align="center"><a style="mso-line-height-rule:exactly;text-decoration:none;font-family:Arial, sans-serif;font-size:14px;display:block;color:#a5a29b" href="https://viewstripo.email/">News</a></td>
                              <td style="Margin:0;border:0;padding-right:5px;padding-left:5px;padding-top:25px;padding-bottom:25px" width="25.00%" bgcolor="transparent" align="center"><a style="mso-line-height-rule:exactly;text-decoration:none;font-family:Arial, sans-serif;font-size:14px;display:block;color:#a5a29b" href="https://viewstripo.email/">Vacation</a></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table><!--[if mso]></td></tr></table><![endif]--></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
             <tr>
              <td align="center" style="padding:0;Margin:0">
               <table class="es-content-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                 <tr>
                  <td align="left" style="padding:0;Margin:0">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" style="padding:0;Margin:0;font-size:0"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;font-family:Arial, sans-serif;font-size:14px;color:#47598B"><img class="adapt-img" src="https://smjsrn.stripocdn.email/content/guids/CABINET_d76dc63418b630746d937a046ab741d3/images/11281501160433999.png" alt="Welcome aboard" title="Welcome aboard" width="600" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
                 <tr>
                  <td style="padding:0;Margin:0;background-color:#FFFFFF" bgcolor="#ffffff" align="left">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" style="padding:0;Margin:0;padding-bottom:10px;padding-top:25px"><h2 style="Margin:0;font-family:Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:normal;line-height:29px;color:#333333">We are glad you were registered!</h2></td>
                         </tr>
                         <tr>
                          <td align="center" style="Margin:0;padding-bottom:15px;padding-top:5px;padding-right:15px;padding-left:15px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio.</p></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
             <tr></tr>
             <tr>
              <td align="center" style="padding:0;Margin:0">
               <table class="es-content-body" cellspacing="0" cellpadding="0" bgcolor="#31cb4b" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
                 <tr>
                  <td style="Margin:0;padding-top:15px;padding-right:15px;padding-left:15px;padding-bottom:20px;background-color:#FFFFFF" bgcolor="#ffffff" align="left"><!--[if mso]><table style="width:570px" cellpadding="0" cellspacing="0"><tr><td style="width:197px"><![endif]-->
                   <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                     <tr>
                      <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:177px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" style="padding:0;Margin:0;font-size:0"><img src="https://smjsrn.stripocdn.email/content/guids/CABINET_f07dfc80b573b59ca0301364b13c9815/images/34621501160236493.png" alt="icon" title="icon" width="71" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                         </tr>
                         <tr>
                          <td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Select tours</p></td>
                         </tr>
                         <tr>
                          <td align="center" style="padding:10px;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#47598B;border-width:0px;display:inline-block;border-radius:30px;width:auto"><a href="https://viewstripo.email/" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;font-family:Arial, sans-serif;font-size:18px;color:#FFFFFF;padding:10px 20px 10px 20px;display:inline-block;background:#47598B;border-radius:30px;font-weight:normal;font-style:normal;line-height:22px !important;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #47598B;border-color:#47598B">Learn more</a></span></td>
                         </tr>
                       </table></td>
                      <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                     </tr>
                   </table><!--[if mso]></td><td style="width:177px"><![endif]-->
                   <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                     <tr>
                      <td class="es-m-p20b" align="center" style="padding:0;Margin:0;width:177px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" style="padding:0;Margin:0;font-size:0"><img src="https://smjsrn.stripocdn.email/content/guids/CABINET_f07dfc80b573b59ca0301364b13c9815/images/5171501160247332.png" alt="icon" title="icon" width="66" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                         </tr>
                         <tr>
                          <td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Receive discounts</p></td>
                         </tr>
                         <tr>
                          <td align="center" style="padding:10px;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#47598B;border-width:0px;display:inline-block;border-radius:30px;width:auto"><a href="https://viewstripo.email/" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;font-family:Arial, sans-serif;font-size:18px;color:#FFFFFF;padding:10px 20px 10px 20px;display:inline-block;background:#47598B;border-radius:30px;font-weight:normal;font-style:normal;line-height:22px !important;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #47598B;border-color:#47598B">Learn more</a></span></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table><!--[if mso]></td><td style="width:20px"></td><td style="width:176px"><![endif]-->
                   <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                     <tr>
                      <td align="center" style="padding:0;Margin:0;width:176px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" style="padding:0;Margin:0;font-size:0"><img src="https://smjsrn.stripocdn.email/content/guids/CABINET_7984c8ef00eaafec977b6b73dcdd63cf/images/97161501241112623.png" alt="icon" title="icon" width="73" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                         </tr>
                         <tr>
                          <td align="center" style="padding:0;Margin:0;padding-top:10px"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#333333;font-size:14px">Travel with comfort</p></td>
                         </tr>
                         <tr>
                          <td align="center" style="padding:10px;Margin:0"><span class="es-button-border" style="border-style:solid;border-color:#2CB543;background:#47598B;border-width:0px;display:inline-block;border-radius:30px;width:auto"><a href="https://viewstripo.email/" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;font-family:Arial, sans-serif;font-size:18px;color:#FFFFFF;padding:10px 20px 10px 20px;display:inline-block;background:#47598B;border-radius:30px;font-weight:normal;font-style:normal;line-height:22px !important;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #47598B;border-color:#47598B">Learn more</a></span></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table><!--[if mso]></td></tr></table><![endif]--></td>
                 </tr>
                 <tr>
                  <td align="left" style="padding:0;Margin:0">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" style="padding:0;Margin:0;font-size:0">
                           <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
             <tr>
              <td align="center" style="padding:0;Margin:0">
               <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#464646;width:600px">
                 <tr>
                  <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:25px;padding-bottom:25px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:194px"><![endif]-->
                   <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                     <tr>
                      <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:174px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td class="es-m-txt-с" align="left" style="padding:0;Margin:0;padding-bottom:10px"><h4 style="Margin:0;font-family:Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:14px;font-style:normal;font-weight:normal;line-height:17px;color:#FEC903">Contact Us<br></h4></td>
                         </tr>
                         <tr>
                          <td class="es-m-txt-с" align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#A5A29B;font-size:14px"><a target="_blank" style="mso-line-height-rule:exactly;text-decoration:none;font-family:Arial, sans-serif;font-size:14px;color:#A5A29B" href="tel:123456789">123456789</a></p><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#A5A29B;font-size:14px"><a target="_blank" href="mailto:your@mail.com" style="mso-line-height-rule:exactly;text-decoration:none;font-family:Arial, sans-serif;font-size:14px;color:#A5A29B">your@mail.com</a></p></td>
                         </tr>
                       </table></td>
                      <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
                     </tr>
                   </table><!--[if mso]></td><td style="width:173px"><![endif]-->
                   <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                     <tr>
                      <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:173px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="left" style="padding:0;Margin:0;padding-bottom:10px"><h4 style="Margin:0;font-family:Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:14px;font-style:normal;font-weight:normal;line-height:17px;color:#FEC903">Site Links<br></h4></td>
                         </tr>
                         <tr>
                          <td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#A5A29B;font-size:14px"><a href="http://#" target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;font-family:Arial, sans-serif;font-size:14px;color:#A5A29B">Hotels</a><br><a href="http://#" target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;font-family:Arial, sans-serif;font-size:14px;color:#A5A29B">Restaurants</a><br><a href="http://#" target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;font-family:Arial, sans-serif;font-size:14px;color:#A5A29B">News</a><br><a href="http://#" target="_blank" style="mso-line-height-rule:exactly;text-decoration:underline;font-family:Arial, sans-serif;font-size:14px;color:#A5A29B">Vacation</a></p></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table><!--[if mso]></td><td style="width:20px"></td><td style="width:173px"><![endif]-->
                   <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                     <tr>
                      <td class="es-m-p0r es-m-p20b" align="center" style="padding:0;Margin:0;width:173px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td class="es-m-txt-с" align="left" style="padding:0;Margin:0;padding-bottom:10px"><h4 style="Margin:0;font-family:Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:14px;font-style:normal;font-weight:normal;line-height:17px;color:#FEC903">Social networks<br></h4></td>
                         </tr>
                         <tr>
                          <td align="left" style="padding:0;Margin:0;font-size:0">
                           <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="X.com" src="https://smjsrn.stripocdn.email/content/assets/img/social-icons/circle-white/x-circle-white.png" alt="X" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                              <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="Facebook" src="https://smjsrn.stripocdn.email/content/assets/img/social-icons/circle-white/facebook-circle-white.png" alt="Fb" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                              <td valign="top" align="center" style="padding:0;Margin:0;padding-right:10px"><img title="Youtube" src="https://smjsrn.stripocdn.email/content/assets/img/social-icons/circle-white/youtube-circle-white.png" alt="Yt" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                              <td valign="top" align="center" style="padding:0;Margin:0"><img title="Vkontakte" src="https://smjsrn.stripocdn.email/content/assets/img/social-icons/circle-white/vk-circle-white.png" alt="Vk" width="32" height="32" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table><!--[if mso]></td></tr></table><![endif]--></td>
                 </tr>
                 <tr>
                  <td align="left" style="padding:0;Margin:0">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="center" style="padding:0;Margin:0;font-size:0">
                           <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                             <tr>
                              <td style="padding:0;Margin:0;border-bottom:1px solid #cccccc;background:none;height:1px;width:100%;margin:0px"></td>
                             </tr>
                           </table></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
                 <tr>
                  <td align="left" style="Margin:0;padding-top:15px;padding-right:20px;padding-bottom:15px;padding-left:20px"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                   <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                     <tr>
                      <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="left" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#A5A29B;font-size:14px"><a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;font-family:Arial, sans-serif;font-size:14px;color:#A5A29B">Privacy policy</a> | <a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;font-family:Arial, sans-serif;font-size:14px;color:#A5A29B">Terms of use</a> | <a target="_blank" href="https://viewstripo.email" style="mso-line-height-rule:exactly;text-decoration:underline;font-family:Arial, sans-serif;font-size:14px;color:#A5A29B">Contact us</a></p></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                   <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                     <tr>
                      <td align="left" style="padding:0;Margin:0;width:270px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td align="right" style="padding:0;Margin:0"><p style="Margin:0;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;letter-spacing:0;color:#A5A29B;font-size:14px"><a target="_blank" class="unsubscribe" href="" style="mso-line-height-rule:exactly;text-decoration:underline;font-family:Arial, sans-serif;font-size:14px;color:#A5A29B">Unsubscribe</a></p></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table><!--[if mso]></td></tr></table><![endif]--></td>
                 </tr>
               </table></td>
             </tr>
           </table>
           <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
             <tr>
              <td align="center" style="padding:0;Margin:0">
               <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center">
                 <tr>
                  <td align="left" style="Margin:0;padding-right:20px;padding-left:20px;padding-top:30px;padding-bottom:30px">
                   <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                     <tr>
                      <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                       <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                         <tr>
                          <td class="es-infoblock made_with" align="center" style="padding:0;Margin:0;font-size:0"><a target="_blank" href="https://viewstripo.email/?utm_source=templates&utm_medium=email&utm_campaign=tourism&utm_content=trigger_newsletter" style="mso-line-height-rule:exactly;text-decoration:underline;font-family:Arial, sans-serif;font-size:12px;color:#CCCCCC"><img src="https://smjsrn.stripocdn.email/content/guids/CABINET_9df86e5b6c53dd0319931e2447ed854b/images/64951510234941531.png" alt="" width="125" style="display:block;font-size:14px;border:0;outline:none;text-decoration:none"></a></td>
                         </tr>
                       </table></td>
                     </tr>
                   </table></td>
                 </tr>
               </table></td>
             </tr>
           </table></td>
         </tr>
       </table>
      </div>
     </body>
    </html>`,
  });

  await sendSMS(
    "8801846360929",
    "Vonage APIs",
    `hellow ${req.body.name}, You are ${req.body.age}, you are ${req.body.skill} developer `
  );

  res.status(200).json(req.body);
};
