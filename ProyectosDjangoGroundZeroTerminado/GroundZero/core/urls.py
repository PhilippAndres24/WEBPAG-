from django.urls import path
from .views import form_mod_obra,form_del_obra
from .views import home, index,qnsomos,tienda,login,registro,pintura1,pintura2,pintura3,pintura4,pintura5,pintura6,form_agregar,contacto,detalle_obras,create,edit,get,homeapi

urlpatterns = [
    path('',index,name="index"),
    path('home',home,name="home"),

    path('qnsomos',qnsomos,name="qnsomos"),
    path('tienda', tienda, name='tienda'),
    
    path('login',login,name="login"),
    path('registro',registro,name="registro"),
    path('contacto',contacto,name="contacto"),
    path('detalle_obras',detalle_obras,name="detalle_obras"),
    path('create',create,name="create"),
    path('edit',edit,name="edit"),
    path('get',get,name="get"),
    path('homeapi',homeapi,name="homeapi"),

    path('pintura1',pintura1,name="pintura1"),
    path('pintura2',pintura2,name="pintura2"),
    path('pintura3',pintura3,name="pintura3"),
    path('pintura4',pintura4,name="pintura4"),
    path('pintura5',pintura5,name="pintura5"),
    path('pintura6',pintura6,name="pintura6"),
    path('form_agregar',form_agregar,name="form_agregar"),

    path('form-mod-obra/<id>', form_mod_obra, name="form_mod_obra"),
    path('form-del-obra/<id>', form_del_obra, name="form_del_obra"),
    

    
    
]