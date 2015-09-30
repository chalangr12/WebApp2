


function setPickUpDateValues(form, firstName,lastName,emailAddress, Address, suiteApt, city, state, zipCode, pickupDate, pickupTime,json)
{       
        $.get("http://localhost:8000/scheduleApickUp.html/send",
                                    {'form'         :form,         'firstName'   :firstName,     'lastName'  :lastName,
                                    'emailAddress'  :emailAddress,'address'     :Address,       'suiteApt'  :suiteApt,
                                    'city'          :suiteApt,    'city'        :city,          'state'     :state,
                                    'zipCode'       :zipCode,     'pickupDate'  :pickupDate,    'pickupTime':pickupTime 
                                    } ,function(data){
        if(data=="sent")
        {
            console.log('it was sent');
        }
        console.log('data is right here: ' + data);
 });
       
}



function formatDate(date)
{
    var today = date;
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!

    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0' + dd
    } 
    if(mm<10){
        mm='0' + mm
    } 
    var today = mm + '/' + dd + '/' + yyyy;
   return today;
    

}