FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["Accounts.API/Accounts.API.csproj", "Accounts.API/"]
RUN dotnet restore "Accounts.API/Accounts.API.csproj"
COPY . .
WORKDIR "/src/Accounts.API"
RUN dotnet build "Accounts.API.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "Accounts.API.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "Accounts.API.dll"]
