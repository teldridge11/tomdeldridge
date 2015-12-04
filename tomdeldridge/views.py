from django.views import generic
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect

class HomeView(generic.TemplateView):
    template_name = 'homepage.html'

class AboutView(generic.TemplateView):
    template_name = 'aboutpage.html'

class ServicesView(generic.TemplateView):
    template_name = 'servicespage.html'

class PortfolioView(generic.TemplateView):
    template_name = 'portfoliopage.html'

class ContactView(generic.TemplateView):
    template_name = 'contactpage.html'

class ContactFailureView(generic.TemplateView):
    template_name = 'contactpageFailure.html'

class ContactSuccessView(generic.TemplateView):
    template_name = 'contactpageSuccess.html'

def send_email(request):
    name = request.POST.get('name')
    from_email = request.POST.get('from_email')
    subject = 'Name: %s Email: %s' % (name, from_email)
    message = request.POST.get('message')

    if subject and message and from_email:
        try:
            send_mail(subject, message, from_email, ['tom.eldridge@hotmail.com'], fail_silently=False)
        except BadHeaderError:
            return HttpResponseRedirect('/contactfailure')
        return HttpResponseRedirect('/contactsuccess')
    else:
        # In reality we'd use a form class
        # to get proper validation errors.
        return HttpResponseRedirect('/contactfailure')